'use client';

import { useEffect, useState } from 'react';

// Norsk tid (CET, UTC+1) – tilbudet gjelder 16.–19. november
const START = new Date('2026-11-16T00:00:00+01:00').getTime();
const END = new Date('2026-11-19T23:59:59+01:00').getTime();

function splitTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(total / 86400),
    t: Math.floor((total % 86400) / 3600),
    m: Math.floor((total % 3600) / 60),
    s: total % 60,
  };
}

const pad = (n) => String(n).padStart(2, '0');

// Vimpler i italienske farger + gull
const FLAG_COLORS = ['#16a34a', '#ffffff', '#dc2626', '#facc15'];
const FLAGS = Array.from({ length: 18 }, (_, i) => FLAG_COLORS[i % FLAG_COLORS.length]);

// Konfetti (faste verdier for å unngå hydration-feil)
const CONFETTI = [
  { left: 6, delay: 0, dur: 6.5, color: '#facc15', w: 5, h: 9 },
  { left: 15, delay: 2.4, dur: 7.5, color: '#f472b6', w: 6, h: 6, round: true },
  { left: 24, delay: 4.1, dur: 6, color: '#ffffff', w: 4, h: 8 },
  { left: 33, delay: 1.2, dur: 8, color: '#4ade80', w: 5, h: 9 },
  { left: 44, delay: 3.3, dur: 6.8, color: '#f87171', w: 5, h: 5, round: true },
  { left: 55, delay: 0.6, dur: 7.2, color: '#fde047', w: 4, h: 8 },
  { left: 64, delay: 5, dur: 6.3, color: '#60a5fa', w: 5, h: 9 },
  { left: 73, delay: 1.8, dur: 7.8, color: '#ffffff', w: 6, h: 6, round: true },
  { left: 82, delay: 3.8, dur: 6.6, color: '#f472b6', w: 4, h: 8 },
  { left: 92, delay: 2.9, dur: 7.4, color: '#facc15', w: 5, h: 9 },
];

export default function AnniversaryOffer() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const status = now === null ? 'loading' : now < START ? 'upcoming' : now <= END ? 'live' : 'ended';

  // Skjul kampanjen automatisk når den er over
  if (status === 'ended') return null;

  const time = splitTime(status === 'live' ? END - now : START - (now ?? START));
  const units = [
    { label: 'Dager', value: time.d },
    { label: 'Timer', value: time.t },
    { label: 'Min', value: time.m },
    { label: 'Sek', value: time.s },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto mb-5 md:mb-6 animate-fade-in">
      {/* Animert festramme */}
      <div className="bday-border rounded-2xl p-[2px] shadow-[0_10px_40px_-10px_rgba(250,204,21,0.45)]">
        <div className="relative overflow-hidden rounded-[14px] bg-gradient-to-br from-[#3a0b0b]/95 via-[#160606]/90 to-[#3a0b0b]/95 backdrop-blur-md px-4 pt-5 pb-3 text-white">
          {/* Vimpelrekke */}
          <div className="absolute top-0 inset-x-0 h-3" aria-hidden="true">
            <div className="absolute top-0 inset-x-0 h-px bg-white/30" />
            <div className="flex justify-between px-1">
              {FLAGS.map((c, i) => (
                <span
                  key={i}
                  className="block w-2.5 h-3 sm:w-3 sm:h-3.5 bday-flag"
                  style={{ backgroundColor: c, animationDelay: `${(i % 6) * 0.15}s` }}
                />
              ))}
            </div>
          </div>

          {/* Konfetti */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {CONFETTI.map((c, i) => (
              <span
                key={i}
                className="bday-confetti absolute -top-3"
                style={{
                  left: `${c.left}%`,
                  width: c.w,
                  height: c.h,
                  backgroundColor: c.color,
                  borderRadius: c.round ? '9999px' : '1px',
                  animationDelay: `${c.delay}s`,
                  animationDuration: `${c.dur}s`,
                }}
              />
            ))}
          </div>

          {/* Glød */}
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-56 h-24 bg-yellow-400/20 blur-3xl" aria-hidden="true" />

          <div className="relative z-10">
            {/* Medalje + tittel */}
            <div className="flex items-center gap-3 text-left">
              <div className="bday-wiggle relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-amber-600 p-[2px] shadow-lg shadow-yellow-500/30">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 ring-2 ring-red-900/30 flex flex-col items-center justify-center text-red-900">
                  <span className="text-2xl sm:text-3xl font-black leading-none font-['Playfair_Display']">2</span>
                  <span className="text-[8px] sm:text-[9px] font-extrabold tracking-[0.2em] -mt-0.5">ÅR</span>
                </div>
                <span className="absolute -top-1 -right-1 text-sm" aria-hidden="true">✨</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-pink-300">
                  🎂 Bursdagsfeiring
                </p>
                <p className="font-['Playfair_Display'] text-lg sm:text-xl font-bold leading-tight">
                  Pizza Mamma Mia fyller 2 år!
                </p>
              </div>
            </div>

            {/* Tilbud */}
            <p className="mt-2.5 text-xs sm:text-sm text-white/90 leading-snug">
              <span className="bday-shimmer font-black text-lg sm:text-xl">50% rabatt</span>{' '}
              på alle medium pizzaer 🍕 og hjemmelaget tiramisu 🍰
            </p>

            {/* Nedtelling / LIVE */}
            <div className="mt-3 pt-3 border-t border-dashed border-white/20" aria-live="polite">
              {status === 'live' ? (
                <div className="flex flex-col items-center gap-1.5">
                  <span className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-1.5 text-base sm:text-lg font-black uppercase tracking-widest ring-1 ring-white/40 shadow-[0_0_20px_rgba(22,163,74,0.6)]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                    </span>
                    Live nå 🎉
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/80">
                    Tilbudet slutter om{' '}
                    <span className="font-bold tabular-nums text-yellow-300">
                      {time.d > 0 && `${time.d}d `}
                      {pad(time.t)}:{pad(time.m)}:{pad(time.s)}
                    </span>
                  </span>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white/75">
                      🎊 Festen starter om
                    </span>
                    <span className="rounded-full bg-yellow-400/15 ring-1 ring-yellow-300/40 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-yellow-200">
                      📅 16.–19. nov
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    {units.map((u, i) => (
                      <div
                        key={u.label}
                        className="relative rounded-lg bg-gradient-to-b from-yellow-200 via-yellow-300 to-amber-500 text-red-900 py-1.5 shadow-md ring-1 ring-yellow-100/70"
                      >
                        <div className="absolute inset-x-0 top-1/2 h-px bg-red-900/10" aria-hidden="true" />
                        <div className="relative text-xl sm:text-2xl font-black tabular-nums leading-none">
                          {status === 'loading' ? '--' : pad(u.value)}
                        </div>
                        <div className="relative mt-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-red-900/75">
                          {u.label}
                        </div>
                        {i < units.length - 1 && (
                          <span className="absolute -right-[5px] sm:-right-[6px] top-1/2 -translate-y-1/2 text-yellow-300 font-black text-xs" aria-hidden="true">:</span>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
