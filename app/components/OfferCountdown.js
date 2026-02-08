'use client';

import { useState, useEffect } from 'react';

export default function OfferCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [status, setStatus] = useState('upcoming'); // upcoming, active, expired

  useEffect(() => {
    // Current year from system
    const currentYear = new Date().getFullYear();
    // February is month 1 (0-indexed)
    const startDate = new Date(currentYear, 1, 9, 0, 0, 0); // Feb 9
    const endDate = new Date(currentYear, 1, 14, 23, 59, 59); // Feb 14

    const timer = setInterval(() => {
      const now = new Date();
      let target;
      let newStatus = 'upcoming';

      if (now < startDate) {
        target = startDate;
        newStatus = 'upcoming';
      } else if (now < endDate) {
        target = endDate;
        newStatus = 'active';
      } else {
        target = null;
        newStatus = 'expired';
      }

      setStatus(newStatus);

      if (target) {
        const difference = target - now;
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((difference / 1000 / 60) % 60);
        const s = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (status === 'expired') return null;

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

          {/* Countdown Section */}
          <div className="text-center pb-1">
            <p className="text-blue-100/90 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-shadow-sm">
              {status === 'upcoming' ? 'Deals start in:' : 'Offer expires in:'}
            </p>
            
            <div className="flex justify-center items-center gap-1.5 px-2">
              <CountdownBox value={timeLeft.days} label="DAYS" />
              <Separator />
              <CountdownBox value={timeLeft.hours} label="HRS" />
              <Separator />
              <CountdownBox value={timeLeft.minutes} label="MIN" />
              <Separator />
              <CountdownBox value={timeLeft.seconds} label="SEC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CountdownBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-md w-10 h-10 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.5)] transform transition hover:scale-105 mb-1">
        <span className="text-lg font-black text-blue-800 leading-none">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[9px] text-white/90 font-bold uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="text-white/60 text-sm font-bold pb-4">:</div>
  );
}
