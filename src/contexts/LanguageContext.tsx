'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    'home': 'Início',
    'about': 'Sobre',
    'skills': 'Habilidades',
    'experience': 'Experiência',
    'education': 'Formação',
    'contact': 'Contato',
    'toggleTheme': 'Alternar tema',
    'toggleLanguage': 'Trocar idioma',
    'openMenu': 'Abrir menu',
    'closeMenu': 'Fechar menu'
  },
  en: {
    'home': 'Home',
    'about': 'About',
    'skills': 'Skills',
    'experience': 'Experience',
    'education': 'Education',
    'contact': 'Contact',
    'toggleTheme': 'Toggle theme',
    'toggleLanguage': 'Change language',
    'openMenu': 'Open menu',
    'closeMenu': 'Close menu'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}