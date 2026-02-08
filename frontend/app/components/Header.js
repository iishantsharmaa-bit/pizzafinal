'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { language, changeLanguage, t } = useLanguage();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  
  return (
    <header className="bg-gradient-to-r from-orange-50 via-red-50 to-amber-50 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Pizzamammamia" 
              className="h-14 sm:h-18 2xl:h-24 w-auto object-contain"
            />
            {/* Show text ONLY on 2xl (>1536px) */}
            <div className="hidden 2xl:flex flex-col">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">PIZZA MAMMA MIA</span>
              <span className="text-base text-gray-600 font-semibold">HOSLE</span>
            </div>
          </Link>

          {/* Navigation - Show from lg (1024px) onwards */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red-800 font-medium transition-colors text-sm xl:text-base">
              {t('common.home')}
            </Link>
            <a href="https://www.foodbooking.com/api/fb/de_m1v" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-800 font-medium transition-colors text-sm xl:text-base">
              {t('common.menu')}
            </a>
            <Link href="/contact" className="text-gray-700 hover:text-red-800 font-medium transition-colors text-sm xl:text-base">
              {t('common.contact')}
            </Link>
          </nav>

          {/* Contact Details + Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone - Icon only on mobile, Icon+Text on sm-2xl, Full on 2xl */}
            <a 
              href="tel:+4792929610" 
              className="flex items-center text-gray-700 hover:text-red-800 transition-all group"
              aria-label="Call us at 92 92 96 10"
            >
              <div className="group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-gray-700 group-hover:text-red-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              {/* Show number from sm (640px) onwards */}
              <span className="font-semibold text-sm sm:text-base ml-2 hidden sm:inline">92 92 96 10</span>
            </a>

            {/* Email - Icon only on mobile, Icon+Text on sm-2xl */}
            <a 
              href="mailto:info@pizzamammamia.no" 
              className="flex items-center text-gray-700 hover:text-red-800 transition-all group"
              aria-label="Email us at info@pizzamammamia.no"
            >
              <div className="bg-red-500 group-hover:bg-red-600 rounded-full p-2 transition-all group-hover:scale-110 shadow-sm">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              {/* Show email from sm (640px) onwards, truncate on md-lg */}
              <span className="font-medium text-xs sm:text-sm ml-2 hidden sm:inline">info@pizzamammamia.no</span>
            </a>

            {/* Social Media Icons - Show from lg (1024px) onwards */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/16KbzLThpp/ "
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 lg:p-2 text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
        
                href="https://www.instagram.com/pizzamammamiahosle/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 lg:p-2 text-gray-600 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Language Switcher - ONLY on 2xl */}
            <div className="hidden 2xl:flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => changeLanguage('no')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'no'
                    ? 'bg-red-800 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🇳🇴 NO
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-red-800 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Mobile Menu Button - Hide only on 2xl+ (1536px+) */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="2xl:hidden p-2 text-gray-700 hover:text-red-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showMobileMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {showMobileMenu && (
        <div className="2xl:hidden bg-gradient-to-r from-orange-50 via-red-50 to-amber-50 border-t border-orange-200 pt-4 pb-2">
          <nav className="flex flex-col space-y-2">
            {/* Navigation Links - Only show below lg (1024px) */}
            <div className="lg:hidden">
              <Link 
                href="/" 
                onClick={() => setShowMobileMenu(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-800 font-medium transition-colors rounded"
              >
                {t('common.home')}
              </Link>
              <a 
                href="https://www.foodbooking.com/api/fb/de_m1v"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-800 font-medium transition-colors rounded"
              >
                {t('common.menu')}
              </a>
              <Link 
                href="/contact" 
                onClick={() => setShowMobileMenu(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-800 font-medium transition-colors rounded"
              >
                {t('common.contact')}
              </Link>
            </div>

            {/* Language Switcher - Show until 2xl (not in header until 1536px) */}
            <div className="px-4 pt-3 pb-2 border-t border-orange-200">
              <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Language</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => changeLanguage('no')}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                    language === 'no'
                      ? 'bg-red-800 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-red-100'
                  }`}
                >
                  <span className="text-xl">🇳🇴</span>
                  <span>Norsk</span>
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                    language === 'en'
                      ? 'bg-red-800 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-red-100'
                  }`}
                >
                  <span className="text-xl">🇬🇧</span>
                  <span>English</span>
                </button>
              </div>
            </div>
              
              {/* Mobile Contact Info */}
              <div className="px-4 pt-4 mt-2 border-t border-gray-200 space-y-2">
                <a 
                  href="tel:+4792929610" 
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-800 py-2 transition-all group hover:bg-red-50 rounded-lg px-2 -mx-2"
                  aria-label="Call us at 92 92 96 10"
                >
                  <div className="bg-green-500 group-hover:bg-green-600 rounded-full p-1.5 transition-all group-hover:scale-110 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="font-semibold">92 92 96 10</span>
                </a>
                
                <a 
                  href="mailto:info@pizzamammamia.no" 
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-800 py-2 transition-all group hover:bg-red-50 rounded-lg px-2 -mx-2"
                  aria-label="Email us at info@pizzamammamia.no"
                >
                  <div className="bg-red-500 group-hover:bg-red-600 rounded-full p-1.5 transition-all group-hover:scale-110 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm">info@pizzamammamia.no</span>
                </a>

                {/* Mobile Social Media */}
                <div className="flex items-center space-x-4 pt-2 border-t border-gray-200">
                  <a
                    href="https://www.facebook.com/share/16KbzLThpp/ "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/pizzamammamia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
    </header>
  );
}
