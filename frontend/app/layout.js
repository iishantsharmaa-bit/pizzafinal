import './globals.css'
import Footer from '@/components/Footer'
import { Providers } from './providers'

export const metadata = {
  title: 'Pizzamammamia - Authentic Italian Restaurant',
  description: 'Order delicious authentic Italian dishes for pickup. Best pizza in Hosle, Norway.',
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
