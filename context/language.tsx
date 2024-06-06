'use client';
import React, { createContext, useContext, useState } from 'react';

const Context = createContext<any[]>([]); // Update the default value for createContext()

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('tr');
  return <Context.Provider value={[language, setLanguage]}>{children}</Context.Provider>;
}

export function useLanguageContext() {
  return useContext(Context);
}

