/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Tambahan untuk shared hosting
  trailingSlash: true,
  basePath: '', // Kosongkan jika di root domain
}

export default nextConfig