'use client';

import { ORDERS_CLOSED, CLOSED_MESSAGE } from './OrderClosedGuard';

// Ferieboks i hero-seksjonen
export default function ClosedNotice() {
  if (!ORDERS_CLOSED) return null;

  return (
    <div className="w-full max-w-md mx-auto mb-5 md:mb-6 animate-fade-in" role="status">
      <div className="rounded-2xl bg-black/50 backdrop-blur-md ring-1 ring-white/25 shadow-xl px-5 py-4 text-white">
        <div className="flex items-center justify-center text-center">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
              Midlertidig stengt
            </span>
            <p className="mt-1.5 text-base sm:text-lg font-bold leading-snug">
              {CLOSED_MESSAGE}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
