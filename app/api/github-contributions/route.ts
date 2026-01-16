import { NextResponse, type NextRequest } from 'next/server';
export const dynamic = 'force-dynamic';

function startOfWeek(d: Date) {
  const copy = new Date(d);
  const day = copy.getDay();
  copy.setDate(copy.getDate() - day);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const username = searchParams.get('username');
  if (!username) return NextResponse.json({ error: 'Missing username' }, { status: 400 });

  const token = process.env.GITHUB_TOKEN;
  if (!token) return NextResponse.json({ error: 'Missing server token' }, { status: 500 });

  // optional from/to query params (ISO date strings). If absent, default to last ~52 weeks aligned to week start (Sunday).
  const fromParam = searchParams.get('from');
  const toParam = searchParams.get('to');

  const toDate = toParam ? new Date(toParam) : new Date();
  toDate.setHours(23, 59, 59, 999);

  const fromDate = fromParam ? new Date(fromParam) : startOfWeek(new Date(Date.now() - 365 * 24 * 60 * 60 * 1000));
  // Ensure fromDate is start of its week
  const alignedFrom = startOfWeek(fromDate);

  const query = `
    query($login: String!, $from: DateTime, $to: DateTime) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    login: username,
    from: alignedFrom.toISOString(),
    to: toDate.toISOString(),
  };

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: 'GitHub API error', details: text }, { status: 502 });
  }

  const json = await res.json();
  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) return NextResponse.json({ error: 'No calendar data' }, { status: 404 });

  return NextResponse.json({
    total: calendar.totalContributions,
    weeks: calendar.weeks,
  });
}