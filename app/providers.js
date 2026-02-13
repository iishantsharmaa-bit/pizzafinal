'use client';

import { LanguageProvider } from '@/context/LanguageContext';

// Simple language provider for multi-language support
// External ordering system (GloriaFood) handles all ordering
export function Providers({ children }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
