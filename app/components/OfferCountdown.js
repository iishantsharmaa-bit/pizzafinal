'use client';

import { useState, useEffect } from 'react';

export default function OfferCountdown() {
  const [status, setStatus] = useState('upcoming'); // upcoming, active, expired

  useEffect(() => {
    // Current year from system
    const currentYear = new Date().getFullYear();
    // February is month 1 (0-indexed)
    const startDate = new Date(currentYear, 1, 9, 0, 0, 0); // Feb 9
    const endDate = new Date(currentYear, 1, 14, 23, 59, 59); // Feb 14

    const checkStatus = () => {
      const now = new Date();
      let newStatus = 'upcoming';

      if (now < startDate) {
        newStatus = 'upcoming';
      } else if (now < endDate) {
        newStatus = 'active';
      } else {
        newStatus = 'expired';
      }

      setStatus(newStatus);
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000); // Check every minute

    return () => clearInterval(timer);
  }, []);

  // if (status === 'expired') return null; // Commented out - will manually close

  return (
    <div className="mt-8 relative z-10 w-full max-w-[340px] mx-auto">
      {/* Glassmorphism Container with animated border/glow - White/Blue Glow */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 via-white to-blue-300 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative backdrop-blur-xl bg-slate-900/30 rounded-2xl p-3 shadow-2xl overflow-hidden ring-1 ring-white/20">
          
          {/* Offer Card - Blue theme */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl p-3 text-white text-center shadow-lg mb-3 relative overflow-hidden border border-blue-400/30">
            {/* Glossy effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 skew-y-12 transform -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-lg animate-bounce">❄️</span>
                <h3 className="text-white font-bold tracking-widest text-xs uppercase drop-shadow-md">
                  VINTER OFFER
                </h3>
                <span className="text-lg animate-bounce">❄️</span>
              </div>
              
              <div className="text-3xl font-black mb-1 drop-shadow-xl text-white tracking-tight">
                50% OFF
              </div>
              
              <div className="text-xs font-medium text-blue-50 mb-2 tracking-wide uppercase">
                All Medium Pizzas
              </div>
              
              <div className="text-xs font-bold text-white tracking-wider border border-white/30 rounded-full px-3 py-0.5 inline-block bg-white/10">
                9 FEB - 14 FEB
              </div>
            </div>
          </div>

          {/* Offer Live Section */}
          <div className="text-center pb-2 pt-1">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg py-3 px-6 shadow-lg">
              <p className="text-white text-2xl font-black uppercase tracking-wider drop-shadow-lg">
                🎉 OFFER IS LIVE 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
