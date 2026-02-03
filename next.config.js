/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost'],
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
