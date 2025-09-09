"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { en } from '@/locales/en';
import { tr } from '@/locales/tr';

export type SupportedLanguage = 'en' | 'tr';

type LanguageContextValue = {
  lang: SupportedLanguage;
  setLang: (next: SupportedLanguage) => void;
  t: typeof en;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'flyai_lang';

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<SupportedLanguage>('en');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? (localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null) : null;
    if (saved === 'en' || saved === 'tr') {
      setLangState(saved);
    }
  }, []);

  const setLang = (next: SupportedLanguage) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const t = useMemo(() => (lang === 'tr' ? tr : en), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};



