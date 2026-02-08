'use client';

import { LanguageProvider } from '@/context/LanguageContext';

// Only Language provider needed - Cart and Socket removed (not used)
// External ordering system (foodbooking.com) is used instead
export function Providers({ children }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
