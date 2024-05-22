import Navbar from '@/components/shared/Navbar';
import { languageTexts } from '@/constants/texts';
import { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { LanguageProvider } from '@/context/language';
import { Roboto, Space_Grotesk } from 'next/font/google';

import React from 'react';
import './globals.css';

const roboto = Roboto({ weight: ['300', '500', '700', '900'], subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '700', '600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: languageTexts.tr.meta.title,
  description: languageTexts.tr.meta.description,
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="tr">
        <body className={(roboto.className, spaceGrotesk.className)}>
          <Navbar />
          {children}
        </body>
      </html>
    </LanguageProvider>
  );
}
