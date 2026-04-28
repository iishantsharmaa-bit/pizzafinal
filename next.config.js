/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent trailing slash redirects (avoid 307 loops)
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  // Enable static optimization and caching
  experimental: {
    optimizePackageImports: ['@/components', '@/context'],
  },
  images: {
    // Image optimization enabled — converts to WebP/AVIF, resizes for viewport
    // This alone can save ~834 KiB per Lighthouse audit
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // Cache optimized images for 24h
    domains: ['localhost', 'maps.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Long-term cache for static assets (JS, CSS, fonts, images)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Optimized images — cache for 24h
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        // HTML pages — short cache, always revalidate
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
