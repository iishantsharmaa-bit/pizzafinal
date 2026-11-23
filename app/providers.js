'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import OrderClosedGuard from './components/OrderClosedGuard';

// Simple language provider for multi-language support
// External ordering system (GloriaFood) handles all ordering
export function Providers({ children }) {
  return (
    <LanguageProvider>
      {children}
      <OrderClosedGuard />
    </LanguageProvider>
  );
}
