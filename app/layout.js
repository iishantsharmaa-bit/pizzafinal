import './globals.css'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import Script from 'next/script'

// Enable ISR with 1-hour revalidation for meta crawlers
export const revalidate = 3600; // Revalidate every hour (3600 seconds)

export const metadata = {
  metadataBase: new URL('https://pizzamammamia.no'),
  title: {
    default: 'Beste Pizza Hosle | Takeaway & Italiensk Pizza',
    template: '%s | Pizzamammamia'
  },
  description: 'Bestill fersk og italiensk pizza i Hosle. Pizza takeaway, rask levering og beste pizza i Hosle. Enkel pizza bestilling hos Pizza Mamma Mia.',
  keywords: ['pizza', 'italian restaurant', 'hosle', 'norway', 'authentic pizza', 'pizza delivery'],
  authors: [{ name: 'Pizzamammamia' }],
  openGraph: {
    title: 'Beste Pizza Hosle | Takeaway & Italiensk Pizza',
    description: 'Bestill fersk og italiensk pizza i Hosle. Pizza takeaway, rask levering og beste pizza i Hosle. Enkel pizza bestilling hos Pizza Mamma Mia.',
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
    title: 'Beste Pizza Hosle | Takeaway & Italiensk Pizza',
    description: 'Bestill fersk og italiensk pizza i Hosle. Pizza takeaway, rask levering og beste pizza i Hosle. Enkel pizza bestilling hos Pizza Mamma Mia.',
    images: ['/images/hero-pizza.jpeg'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
  verification: {
    google: 'd25WpQjnx7_y61XIX8DCS94hKcB3hL8H2tjMVd6O_c4',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-37Y3JDY6X1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-37Y3JDY6X1');
          `}
        </Script>
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
