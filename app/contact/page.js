'use client';

import Link from 'next/link';
import Header from '../components/Header';

// Enable ISR with 1-hour revalidation for meta crawlers
export const revalidate = 3600; // Revalidate every hour (3600 seconds)

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <Header />

      {/* Map Section - Moved to Top */}
      <section className="pt-4">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.7423456789!2d10.5234567!3d59.9012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDU0JzA0LjQiTiAxMMKwMzEnMjQuNCJF!5e0!3m2!1sen!2sno!4v1234567890123!5m2!1sen!2sno&q=Wilhelm+Wilhelmsens+vei+47,+Hosle,+1362,+Norway"
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Pizzamammamia Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Address</h3>
              <p className="text-gray-700 font-medium">Wilhelm Wilhelmsens vei 47</p>
              <p className="text-gray-600">Hosle, 1362</p>
              <p className="text-gray-600">Norway</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Opening Hours</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>Mandag - Fredag</strong></p>
                <p>14:00 – 22:00</p>
                <p className="mt-3"><strong>Lørdag - Søndag</strong></p>
                <p>12:00 – 22:00</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Contact</h3>
              <a href="tel:+4792929610" className="block text-primary-600 hover:text-primary-700 font-semibold mb-2">
                +47 92 92 96 10
              </a>
              <a href="mailto:info@pizzamammamia.no" className="block text-primary-600 hover:text-primary-700 font-semibold">
                info@pizzamammamia.no
              </a>
            </div>
          </div>

          {/* Pickup Hours */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-serif text-center mb-6 text-gray-800">Pickup Hours</h2>
            <p className="text-center text-gray-600 text-lg">Same as opening hours</p>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-serif text-center mb-6 text-gray-800">Payment Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center p-6 border-2 border-gray-200 rounded-lg">
                <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-lg font-semibold text-gray-700">Cash at Pickup</span>
              </div>
              <div className="flex items-center justify-center p-6 border-2 border-gray-200 rounded-lg">
                <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-lg font-semibold text-gray-700">Card at Pickup Counter</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
