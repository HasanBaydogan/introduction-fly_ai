"use client";

import { useEffect } from 'react';
import { useLanguage } from './LanguageProvider';

const TitleSync = () => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    document.title = t.hero.title;
    document.documentElement.lang = lang;
  }, [lang, t.hero.title]);

  return null;
};

export default TitleSync;


