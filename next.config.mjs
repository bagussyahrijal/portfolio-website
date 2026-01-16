/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Tambahan untuk shared hosting
  trailingSlash: true,
  basePath: '', // Kosongkan jika di root domain
}

export default nextConfig