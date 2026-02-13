import './globals.css'
import Footer from '@/components/Footer'
import { Providers } from './providers'

// Enable ISR with 1-hour revalidation for meta crawlers
export const revalidate = 3600; // Revalidate every hour (3600 seconds)

export const metadata = {
  metadataBase: new URL('https://pizzamammamia.no'),
  title: {
    default: 'Pizzamammamia - Authentic Italian Restaurant',
    template: '%s | Pizzamammamia'
  },
  description: 'Order delicious authentic Italian dishes for pickup. Best pizza in Hosle, Norway.',
  keywords: ['pizza', 'italian restaurant', 'hosle', 'norway', 'authentic pizza', 'pizza delivery'],
  authors: [{ name: 'Pizzamammamia' }],
  openGraph: {
    title: 'Pizzamammamia - Authentic Italian Restaurant',
    description: 'Order delicious authentic Italian dishes for pickup. Best pizza in Hosle, Norway.',
    url: 'https://pizzamammamia.no',
    siteName: 'Pizzamammamia',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-pizza.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pizzamammamia - Authentic Italian Pizza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizzamammamia - Authentic Italian Restaurant',
    description: 'Order delicious authentic Italian dishes for pickup. Best pizza in Hosle, Norway.',
    images: ['/images/hero-pizza.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#c94848',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
