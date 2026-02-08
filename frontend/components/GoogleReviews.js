'use client';

import { useState } from 'react';

// Updated Google Reviews with proper dates (based on Nov 29, 2025)
const googleReviews = [
  { id: 0, name: 'Swapna Sivaraman', date: 'Nov 29, 2025', rating: 5, text: '' },
  { id: 1, name: 'Christian Rikheim Fangel', date: 'Nov 23, 2025', rating: 5, text: 'Best pizza in Bærum' },
  { id: 2, name: 'Oscar Evensen', date: 'Nov 22, 2025', rating: 5, text: 'Lovely kebab pizza, top notch in taste and the staff are absolutely amazing. I come here as often as I can because the pizza they deliver is top class. I recommend everyone to stop by!' },
  { id: 3, name: 'Emil Løkken', date: 'Nov 20, 2025', rating: 5, text: '' },
  { id: 4, name: 'Mohammed Al-Medhati', date: 'Nov 18, 2025', rating: 5, text: 'Very good' },
  { id: 5, name: 'Erik Svingen braaten', date: 'Nov 15, 2025', rating: 5, text: 'Best food I\'ve ever tasted' },
  { id: 6, name: 'Shpresa', date: 'Nov 12, 2025', rating: 5, text: 'Pizza was good and at a reasonable price. I would visit again.' },
  { id: 7, name: 'Frederik Schmidt', date: 'Nov 8, 2025', rating: 5, text: 'Really good pizza!' },
  { id: 8, name: 'Amrik Singh', date: 'Nov 5, 2025', rating: 5, text: 'Super pizza best' },
  { id: 9, name: 'Amrik Singh', date: 'Nov 3, 2025', rating: 5, text: 'Very good pizza 🍕' },
  { id: 10, name: 'Science Maths', date: 'Oct 30, 2025', rating: 5, text: '' },
  { id: 11, name: 'MH', date: 'Oct 28, 2025', rating: 5, text: '' },
  { id: 12, name: 'Joshua O', date: 'Oct 25, 2025', rating: 5, text: 'Good pizza' },
  { id: 13, name: 'Sahib7', date: 'Oct 22, 2025', rating: 5, text: 'very good pizza I recommend trying it' },
  { id: 14, name: 'GURUGOBINDSINGH', date: 'Oct 19, 2025', rating: 5, text: 'The pizza is so good I love it' },
  { id: 15, name: 'Sonic the Hedgehog', date: 'Oct 16, 2025', rating: 5, text: 'It is the best pizza in the whole world' },
  { id: 16, name: 'Joanna', date: 'Oct 14, 2025', rating: 5, text: '' },
  { id: 17, name: 'Marcus Bale', date: 'Oct 11, 2025', rating: 5, text: '' },
  { id: 18, name: 'Ole Hersløv', date: 'Oct 9, 2025', rating: 5, text: 'Fantastic food best I have tasted in the Bærum area' },
  { id: 19, name: 'Syver FH', date: 'Oct 6, 2025', rating: 5, text: 'Digg pizza' },
  { id: 20, name: 'Peter Rodahl', date: 'Oct 3, 2025', rating: 5, text: 'Best hang out in Bærum, sloppy lying' },
  { id: 21, name: 'Elham Shokoohi', date: 'Sep 30, 2025', rating: 5, text: '' },
  { id: 22, name: 'Peyman Bashar Doost', date: 'Sep 27, 2025', rating: 5, text: '' },
  { id: 23, name: 'Imran Khan', date: 'Sep 24, 2025', rating: 5, text: 'Best Italian 🍕🍕pizza in NORWAY, 🍕🍕I encourage everyone to try❤️❤️' },
  { id: 24, name: 'Reda Alhuseein', date: 'Sep 20, 2025', rating: 5, text: 'I am Italian and this is the best pizza ive had. This is a real pizzeria. I was here with my friend and we had a great meal and a fantastic time.' },
  { id: 25, name: 'Vikram Arnet', date: 'Sep 17, 2025', rating: 5, text: 'Great owner made us a fantastic pizza for a good price. I will come here again. I really recommend this fantastic pizzeria❤️' },
  { id: 26, name: 'Le Grouch', date: 'Sep 14, 2025', rating: 5, text: 'Great local takeaway pizza shop also serving pasta and salad. Nice that it\'s not kebab based and actually Italian pizza and pasta.' },
  { id: 27, name: 'Jaspaul Kaur', date: 'Sep 10, 2025', rating: 5, text: 'It\'s tastes amazing and smells great👍👍😅' },
  { id: 28, name: 'Teodor Pricop', date: 'Sep 6, 2025', rating: 5, text: 'Great take away pizza and friendly service' },
  { id: 29, name: 'Elliot Formal', date: 'Sep 2, 2025', rating: 5, text: 'Pizza was great and quick. Accidentally paid twice and they contacted me the day after to let me know (I didn\'t realize myself) and to offer me a refund or a voucher for the amount. Great' },
  { id: 30, name: 'Theodor Eine', date: 'Aug 28, 2025', rating: 5, text: 'Delicious pizza, could eat forever' },
  { id: 31, name: 'Nicolas aarland', date: 'Aug 24, 2025', rating: 5, text: '' },
  { id: 32, name: 'Martin Eide', date: 'Aug 20, 2025', rating: 5, text: 'Very nice people and delicious pizza! Recommended!' },
  { id: 33, name: 'Hussain Ali Feizi', date: 'Aug 16, 2025', rating: 5, text: 'Very good food (PIZZA) and good service, would recommend' },
  { id: 34, name: 'M.hossain Mohibi', date: 'Aug 12, 2025', rating: 5, text: 'It\'s the best pizza I\'ve ever eaten and the nice man and good service 👌' },
  { id: 35, name: 'Gunther Van Hoof', date: 'Aug 8, 2025', rating: 5, text: 'Very tasty pizza. Definitely try the house pizza. The owner is very friendly and speaks English and German.' },
  { id: 36, name: 'RARE REITANRANDEN', date: 'Jul 30, 2025', rating: 5, text: '' },
  { id: 37, name: 'Jon Jessen', date: 'Jul 26, 2025', rating: 5, text: 'Absolutely fantastic there, you have to tell them you\'re German. He speaks good German. 👍🏼 The pizza is made with a lot of effort and is delicious. 👍🏼' },
  { id: 38, name: 'Luis Kraus', date: 'Jul 22, 2025', rating: 5, text: 'Absolutely delicious pizza! Super tasty, great quality, and very priceworthy. The guy running the place is really nice too—friendly and welcoming. Highly recommend Pizza Mamma Mia! 🍕😊' },
  { id: 39, name: 'Sukhjit Kaur', date: 'Jul 18, 2025', rating: 5, text: 'Very good food, good service, used it for a party, it was really good.. recommended...❤️' },
  { id: 40, name: 'Oscar Heyerdahl-Larsen', date: 'Jul 14, 2025', rating: 5, text: 'Absolutely king🔥🔥🔥' },
  { id: 41, name: 'Adrian Bjerke', date: 'Jul 10, 2025', rating: 5, text: '' },
  { id: 42, name: 'Ricardo Jarquin-Segovia', date: 'Jun 28, 2025', rating: 5, text: 'Very good pizza at an affordable price and excellent service. One of the best in the area, without a doubt.' },
  { id: 43, name: 'Christine Stamnæss Rohde', date: 'Jun 24, 2025', rating: 5, text: '' },
  { id: 44, name: 'Kunal Sharma', date: 'Jun 20, 2025', rating: 5, text: '' },
  { id: 45, name: 'Jan Wigaard', date: 'Jun 16, 2025', rating: 5, text: 'Very good food and extremely nice people working there' },
  { id: 46, name: 'Christopher Ekeberg Aanerud', date: 'Jun 12, 2025', rating: 5, text: 'Best pizza north of Naples!' },
  { id: 47, name: 'Sebastian Bache', date: 'Jun 8, 2025', rating: 5, text: '' },
  { id: 48, name: 'Agnes Maria Fjellheim', date: 'May 30, 2025', rating: 5, text: 'Very nice place! The pizza was amazing and the staff was nice' },
  { id: 49, name: 'Astri Gaarder Harsem', date: 'May 25, 2025', rating: 5, text: 'Fantastic pizza at Hosle!' },
  { id: 50, name: 'Simon Bengtsson', date: 'May 20, 2025', rating: 5, text: 'Incredibly good pizza! Highly recommended to try Mamma Mia. The staff is also always as nice!' },
];

export default function GoogleReviews() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-red-800 to-red-900 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <span>Google Reviews</span>
            <svg className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl md:text-3xl font-bold text-gray-900">4.9</span>
          </div>
          <p className="text-gray-600 text-base md:text-lg">
            Based on <span className="font-bold">94 reviews</span>
          </p>
        </div>

        {/* Mobile: Vertical Scrolling Marquee - Show 4 at a time */}
        <div className="md:hidden relative overflow-hidden h-[600px] mb-8">
          <div className="animate-scroll-vertical space-y-4">
            {/* Duplicate reviews for seamless loop */}
            {[...googleReviews, ...googleReviews].map((review, index) => (
              <div key={`${review.id}-${index}`} className="bg-white rounded-xl shadow-lg p-4 mx-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-base truncate">{review.name}</h4>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
                {review.text && (
                  <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: Grid View with Marquee Columns */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Column 1 */}
          <div className="relative overflow-hidden h-[800px]">
            <div className="animate-scroll-desktop-1 space-y-6">
              {[...googleReviews.filter((_, i) => i % 3 === 0), ...googleReviews.filter((_, i) => i % 3 === 0)].map((review, index) => (
                <div key={`col1-${review.id}-${index}`} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-lg truncate">{review.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  {review.text && (
                    <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative overflow-hidden h-[800px]">
            <div className="animate-scroll-desktop-2 space-y-6">
              {[...googleReviews.filter((_, i) => i % 3 === 1), ...googleReviews.filter((_, i) => i % 3 === 1)].map((review, index) => (
                <div key={`col2-${review.id}-${index}`} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-lg truncate">{review.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  {review.text && (
                    <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div className="relative overflow-hidden h-[800px]">
            <div className="animate-scroll-desktop-3 space-y-6">
              {[...googleReviews.filter((_, i) => i % 3 === 2), ...googleReviews.filter((_, i) => i % 3 === 2)].map((review, index) => (
                <div key={`col3-${review.id}-${index}`} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-lg truncate">{review.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  {review.text && (
                    <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Reviews Button */}
        <div className="text-center">
          <a
            href="https://share.google/1qk1hOwPWM0x36VWn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            View All Reviews on Google
          </a>
        </div>
      </div>

      {/* CSS for mobile and desktop vertical marquees */}
      <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-vertical {
          animation: scroll-vertical 60s linear infinite;
        }

        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }

        /* Desktop column animations - staggered timing for variety */
        .animate-scroll-desktop-1 {
          animation: scroll-vertical 70s linear infinite;
        }

        .animate-scroll-desktop-1:hover {
          animation-play-state: paused;
        }

        .animate-scroll-desktop-2 {
          animation: scroll-vertical 80s linear infinite;
        }

        .animate-scroll-desktop-2:hover {
          animation-play-state: paused;
        }

        .animate-scroll-desktop-3 {
          animation: scroll-vertical 75s linear infinite;
        }

        .animate-scroll-desktop-3:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
