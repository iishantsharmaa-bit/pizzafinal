'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();


  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Pizzamammamia" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-yellow-400">
              Pizzamammamia
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('home.brandDesc') || 'Authentic Italian pizza made with love and the finest ingredients. Experience the true taste of Italy in every bite!'}
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-3 pt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <p className="text-xs font-semibold text-yellow-400">⭐ 5.0</p>
                <p className="text-xs text-gray-300">Google</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <p className="text-xs font-semibold text-green-400">✓ Fresh</p>
                <p className="text-xs text-gray-300">Ingredients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <p className="text-xs font-semibold text-blue-400">🚀 Fast</p>
                <p className="text-xs text-gray-300">Service</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400 flex items-center">
              <span className="mr-2">🔗</span>
              {t('home.quickLinks') || 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-all flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  {t('common.home') || 'Home'}
                </Link>
              </li>
              <li>
                <a href="https://www.foodbooking.com/fb/de_m1v" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-all flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  {t('common.menu') || 'Menu'}
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-all flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  {t('common.contact') || 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400 flex items-center">
              <span className="mr-2">📞</span>
              {t('home.contactUs') || 'Contact Us'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-red-600 rounded-full p-2 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Address:</p>
                  <p className="text-gray-400 text-sm">Hosle, 1362</p>
                  <p className="text-gray-400 text-sm">Wilhelm Wilhelmsens vei 47</p>
                </div>
              </li>
              
              <li className="flex items-start space-x-3">
                <a 
                  href="tel:+4792929610"
                  className="bg-green-600 hover:bg-green-500 rounded-full p-2 mt-0.5 transition-all transform hover:scale-110 cursor-pointer"
                  aria-label="Call us"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </a>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Phone:</p>
                  <a href="tel:+4792929610" className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors">
                    +47 92 92 96 10
                  </a>
                </div>
              </li>
              
              <li className="flex items-start space-x-3">
                <a 
                  href="mailto:info@pizzamammamia.no"
                  className="bg-blue-600 hover:bg-blue-500 rounded-full p-2 mt-0.5 transition-all transform hover:scale-110 cursor-pointer"
                  aria-label="Email us"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Email:</p>
                  <a href="mailto:info@pizzamammamia.no" className="text-yellow-400 hover:text-yellow-300 text-sm break-all transition-colors">
                    info@pizzamammamia.no
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400 flex items-center">
              <span className="mr-2">🕐</span>
              {t('home.openingHours') || 'Opening Hours'}
            </h4>
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <p className="text-gray-300 font-semibold mb-2 flex items-center">
                  <span className="mr-2">📅</span>
                  Mandag - Torsdag
                </p>
                <p className="text-yellow-400 text-lg font-bold">14:00 - 22:00</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <p className="text-gray-300 font-semibold mb-2 flex items-center">
                  <span className="mr-2">🎉</span>
                  Fredag - Søndag
                </p>
                <p className="text-yellow-400 text-lg font-bold">12:00 - 22:00</p>
              </div>


            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Social Media Section */}
        <div className="mb-8">
          <h4 className="text-center text-lg font-bold mb-6 text-yellow-400">
            🌟 Follow Us on Social Media 🌟
          </h4>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/share/16KbzLThpp/ "
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg"
              title="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/pizzamammamiahosle/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg"
              title="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
            
              href="https://www.tiktok.com/@pizza.mamma.mia3?_r=1&_t=ZN-91JhNHhreYI "
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg"
              title="TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="font-bold text-yellow-400">Pizzamammamia</span>. {t('home.allRightsReserved') || 'All rights reserved.'}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with ❤️ in Norway | Authentic Italian Taste
            </p>
          </div>

          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="bg-black/30 py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* <p className="text-yellow-400 text-xs font-semibold">
            🍕 Order Now & Get 10th Pizza FREE! | 📱 Download App for 20% OFF First Order 🎉
          </p> */}
        </div>
      </div>
    </footer>
  );
}
