import { languageTexts } from '@/constants';
import { LanguageProvider } from '@/context/language';
import { Metadata } from 'next';
import NavigationBar from '@/components/shared/NavigationBar';
// eslint-disable-next-line camelcase
import { Roboto, Space_Grotesk } from 'next/font/google';
import React from 'react';
import { Providers } from './Providers';
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
    <html lang="tr">
      <LanguageProvider>
        <body className={(roboto.className, spaceGrotesk.className)}>
          <Providers>
            <NavigationBar customStyle="fixed top-0" />
            {children}
          </Providers>
        </body>
      </LanguageProvider>
    </html>
  );
}
