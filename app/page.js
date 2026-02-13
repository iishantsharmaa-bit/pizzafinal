'use client';

import Header from './components/Header'
import Snowfall from './components/Snowfall'
import OfferCountdown from './components/OfferCountdown'
import GoogleReviews from '@/components/GoogleReviews'
import { useLanguage } from '@/context/LanguageContext'

// Enable ISR with 1-hour revalidation for meta crawlers
export const revalidate = 3600; // Revalidate every hour (3600 seconds)

export default function Home() {
  const { t } = useLanguage();






  return (
    <div className="min-h-screen pt-20">
      <Snowfall />
      {/* Header */}
      <Header />

      {/* Download App Modal - Hidden for now */}
      {/* <DownloadAppModal /> */}


      {/* Hero Section */}
      <section className="relative min-h-[650px] md:min-h-[750px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-pizza.jpeg"
            alt="Fresh Italian Pizza"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-red-900/40"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-2 sm:px-4 pt-12 md:pt-16 pb-12">
          <div className="max-w-5xl w-full">
            <h1 className="font-['Playfair_Display'] text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 md:mb-6 drop-shadow-2xl animate-fadeIn font-bold leading-tight tracking-tight">
              VINTER OFFER PI𝙕𝙕𝘼 𝙈𝘼𝙈𝙈𝘼 𝙈𝙄𝘼 𝙃𝙊𝙎𝙇𝙀
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-4 md:mb-6">
              <a href="https://www.foodbooking.com/api/fb/de_m1v" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/50 active:scale-95">
                  {t('home.viewMenu')} 📋
                </button>
              </a>
            </div>
            {/* Phone Number - Fully Clickable */}
            <a
              href="tel:+4792929610"
              className="flex items-center justify-center space-x-2 md:space-x-3 mt-4 md:mt-8 bg-white/10 backdrop-blur-md rounded-full px-4 md:px-6 py-2 md:py-3 mx-auto max-w-xs md:max-w-none border border-white/30 hover:bg-white/20 active:bg-white/30 transition-all cursor-pointer"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-yellow-300 transition-colors">
                92 92 96 10
              </span>
            </a>

            {/* Winter Offer Countdown */}
            <OfferCountdown />

            

          </div>
        </div>
      </section>

      {/* Welcome Section - Phone Order and Welcome */}
      <section className="py-10 md:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Side - Online Ordering */}
            <div className="text-center md:text-left bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="inline-block mb-4 md:mb-6 bg-gradient-to-br from-red-100 to-orange-100 p-4 md:p-6 rounded-2xl md:rounded-3xl">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-red-700 mx-auto md:mx-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-red-800 bg-clip-text text-transparent mb-3 md:mb-4 uppercase leading-tight">
                DON'T LIKE TALKING ON THE PHONE?
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 font-medium">
                You can order your favourite Pizza for takeaway
              </p>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-6 md:mb-8">
                ONLINE
              </p>
              <a href="https://www.foodbooking.com/api/fb/de_m1v" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/50">
                  BESTILL ONLINE 🍕
                </button>
              </a>
            </div>

            {/* Right Side - Welcome Text */}
            <div className="bg-gradient-to-br from-gray-50 via-red-50 to-orange-50 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent mb-4 md:mb-6 uppercase leading-tight">
                VELKOMMEN TIL PIZZAMAMMAMIA
              </h3>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4 md:mb-6 font-medium">
                Hver rett er en brikke, som kommer sammen for å danne en fristende helhet.
                Målet er å bli favorittrestaurant, og for å nå dette må vi være fristende.
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4 md:mb-6 font-medium">
                Vi spiser derfor stadig våre retter for å kunne begeistre våre kunder.
              </p>
              <a
                href="tel:+4792929610"
                className="flex items-center justify-center md:justify-start space-x-3 md:space-x-4 pt-4 md:pt-6 border-t-2 border-red-200 hover:opacity-80 active:opacity-60 transition-opacity cursor-pointer"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-xs md:text-sm text-gray-600 font-semibold">RING:</p>
                  <span className="text-xl md:text-2xl font-bold text-gray-800">
                    92 92 96 10
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-red-800 text-sm md:text-base font-semibold mb-4 md:mb-6">
              ✨ Our Promise
            </div>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gray-900 via-red-800 to-red-900 bg-clip-text text-transparent mb-4 md:mb-6 font-bold leading-tight">
              {t('home.tagline')}
            </h2>
            <div className="w-32 sm:w-40 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 mx-auto rounded-full shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="py-10 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {/* Card 1: Freshly Baked */}
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 transform hover:scale-105 flex flex-col">
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src="/images/freshly-baked.jpg"
                  alt="Freshly Baked"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6 text-center bg-gradient-to-b from-white to-red-50 flex-grow flex flex-col justify-center">
                <h3 className="font-['Playfair_Display'] text-lg md:text-xl font-bold text-red-800 mb-2 md:mb-3">
                  {t('home.freshlyBakedTitle')}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {t('home.freshlyBakedDesc')}
                </p>
              </div>
            </div>

            {/* Card 2: Authentic Dough */}
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 transform hover:scale-105 flex flex-col">
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src="/images/authentic-dough.jpg"
                  alt="Authentic Dough"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6 text-center bg-gradient-to-b from-white to-yellow-50 flex-grow flex flex-col justify-center">
                <h3 className="font-['Playfair_Display'] text-lg md:text-xl font-bold text-yellow-800 mb-2 md:mb-3">
                  {t('home.authenticDoughTitle')}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {t('home.authenticDoughDesc')}
                </p>
              </div>
            </div>

            {/* Card 3: Melting Cheese */}
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 transform hover:scale-105 flex flex-col">
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src="/images/melting-cheese.jpg"
                  alt="Melting Cheese"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6 text-center bg-gradient-to-b from-white to-orange-50 flex-grow flex flex-col justify-center">
                <h3 className="font-['Playfair_Display'] text-lg md:text-xl font-bold text-orange-800 mb-2 md:mb-3">
                  {t('home.meltingCheeseTitle')}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {t('home.meltingCheeseDesc')}
                </p>
              </div>
            </div>

            {/* Card 4: Fresh Ingredients */}
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 transform hover:scale-105 flex flex-col">
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src="/images/fresh-indgredients.jpg"
                  alt="Fresh Ingredients"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6 text-center bg-gradient-to-b from-white to-green-50 flex-grow flex flex-col justify-center">
                <h3 className="font-['Playfair_Display'] text-lg md:text-xl font-bold text-green-800 mb-2 md:mb-3">
                  {t('home.freshIngredientsTitle')}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {t('home.freshIngredientsDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section - NEW */}


      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Call to Action - Ready to Order */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 md:w-80 h-48 md:h-80 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/30 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
            🍕 HUNGRY YET?
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 font-bold drop-shadow-2xl leading-tight">
            {t('home.readyToOrder')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-yellow-100 font-medium">
            {t('home.readyToOrderDesc')}
          </p>
          <a href="https://www.foodbooking.com/api/fb/de_m1v" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-red-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 active:scale-95 px-8 md:px-12 py-3 md:py-5 rounded-full text-base md:text-xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-yellow-400/50">
              {t('home.browseMenu')} 🍕✨
            </button>
          </a>
        </div>
      </section>

    </div>
  )
}
