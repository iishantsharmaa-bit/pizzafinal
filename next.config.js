/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent trailing slash redirects (avoid 307 loops)
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  // Enable static optimization and caching
  experimental: {
    // Optimize for static generation
    optimizePackageImports: ['@/components', '@/context'],
  },
  images: {
    // Enable Next.js Image Optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Cache headers for static assets
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
