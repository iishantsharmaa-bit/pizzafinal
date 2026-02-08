'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('no')}
        className={`px-3 py-1 rounded ${
          language === 'no'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        🇳🇴 NO
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded ${
          language === 'en'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}