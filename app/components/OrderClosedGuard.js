'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// ───────────────────────────────────────────────────────────
// Sett til false når restauranten åpner igjen – da fungerer
// alle bestillingslenker som normalt og meldingen forsvinner.
// ───────────────────────────────────────────────────────────
export const ORDERS_CLOSED = true;
export const CLOSED_MESSAGE = 'Vi holder stengt på grunn av ferie.';

// Alle lenker til bestillingssystemet
const ORDER_LINK_SELECTOR = 'a[href*="foodbooking.com"]';

export default function OrderClosedGuard() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const lastFocusRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  // Fang opp klikk på alle bestillingslenker (header, hero, footer osv.)
  useEffect(() => {
    if (!ORDERS_CLOSED) return;
    const onClick = (e) => {
      const link = e.target.closest?.(ORDER_LINK_SELECTOR);
      if (!link) return;
      e.preventDefault();
      e.stopPropagation();
      lastFocusRef.current = document.activeElement;
      setOpen(true);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Esc lukker, lås scrolling, fokus på knappen
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      lastFocusRef.current?.focus?.();
    };
  }, [open, close]);

  if (!ORDERS_CLOSED || !open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="presentation">
      {/* Bakgrunn */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm closed-backdrop"
        onClick={close}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="closed-title"
        aria-describedby="closed-desc"
        className="closed-pop relative w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        {/* Toppfelt */}
        <div className="relative bg-gradient-to-br from-red-700 via-red-800 to-red-900 px-6 pt-8 pb-7 text-center">
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-yellow-400/20 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full bg-orange-400/20 blur-2xl" aria-hidden="true" />

          <button
            type="button"
            onClick={close}
            aria-label="Lukk"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/15 ring-1 ring-white/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" aria-hidden="true" />
            Midlertidig stengt
          </span>
        </div>

        {/* Innhold */}
        <div className="px-6 pt-6 pb-6 text-center">
          <h2 id="closed-title" className="font-['Playfair_Display'] text-2xl font-bold text-gray-900">
            Vi har ferie!
          </h2>
          <p id="closed-desc" className="mt-2 text-base text-gray-700 font-medium leading-relaxed">
            {CLOSED_MESSAGE}
          </p>
          <p className="mt-1 text-sm text-gray-500">Takk for forståelsen ❤️</p>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            className="mt-6 w-full rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 text-base font-bold shadow-lg transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300"
          >
            OK, skjønner
          </button>
        </div>
      </div>
    </div>
  );
}
