/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Prevent trailing slash redirects (avoid 307 loops)
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  images: {
    // Disable edge optimization to reduce edge requests
    // Images will be served as-is instead of being optimized on-demand
    unoptimized: true,
    domains: ['localhost', 'maps.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig
