// components/GitHubCalendar.tsx

import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

type Day = {
  date: string;
  contributionCount: number;
  color: string;
};

type Week = {
  contributionDays: Day[];
};

const blockSize = 10;
const blockMargin = 5;

const GitHubCalendarComponent = () => {
  const username = 'bagussyahrijal';
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    fetch(`/api/github-contributions?username=${encodeURIComponent(username)}`, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((data) => {
        if (data?.weeks) {
          setWeeks(data.weeks);
          setTotal(typeof data.total === 'number' ? data.total : null);
        } else {
          setError(data?.error || 'Unexpected response');
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, [username]);

  if (loading) {
    return (
      <div className="p-6 rounded-lg w-full max-w-4xl mx-auto text-center text-white">
        Memuat kontribusi...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-lg w-full max-w-4xl mx-auto text-center text-red-400">
        Error: {error}
      </div>
    );
  }

  // compute month labels positions (week index)
  const monthPositions: { label: string; weekIndex: number }[] = [];
  const seen = new Set<string>();
  weeks.forEach((week, wi) => {
    for (const day of week.contributionDays) {
      const d = new Date(day.date);
      const key = `${d.getFullYear()}-${d.getMonth()}`; // unique month key
      if (!seen.has(key)) {
        seen.add(key);
        monthPositions.push({
          label: d.toLocaleString(undefined, { month: 'short' }),
          weekIndex: wi,
        });
      }
    }
  });

  return (
    <div className="border-[0.5px] hover:scale-105 transition-transform duration-500 rounded-lg p-6 my-10 w-full max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="text-xl font-semibold font-satoshi mb-2 text-white text-center">
        GitHub Contribution
      </h2>

      <div className="text-sm self-end text-white font-semibold mb-3 mr-7">
        {total !== null ? `Total Contribution: ${total}` : 'Total Contribution: —'}
      </div>

      <div className="w-full overflow-x-auto flex flex-col items-center">
        <div style={{ height: 20, position: 'relative' }} className="mb-1 self-start ml-12">
          {monthPositions.map((m, i) => {
            const left = m.weekIndex * (blockSize + blockMargin);
            return (
              <div
                key={`${m.label}-${i}`}
                style={{
                  position: 'absolute',
                  left,
                  transform: 'translateX(-2px)',
                  fontSize: 12,
                  color: '#cbd5e1',
                }}
              >
                {m.label}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: `${blockMargin}px`, alignItems: 'flex-start' }}>
          {weeks.map((week, wi) => (
            <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: `${blockMargin}px` }}>
              {week.contributionDays.map((day) => (
                <div
                  key={day.date}
                  style={{
                    width: blockSize,
                    height: blockSize,
                    backgroundColor: day.color || '#ebedf0',
                    borderRadius: 3,
                  }}
                  className="cursor-pointer"
                  data-tooltip-id="react-tooltip"
                  data-tooltip-html={`${day.contributionCount} kontribusi pada ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <Tooltip id="react-tooltip" place="top" />
    </div>
  );
};

export default GitHubCalendarComponent;