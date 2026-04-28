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
}

module.exports = nextConfig
