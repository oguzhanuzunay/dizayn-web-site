import NavigationBar from '@/components/shared/NavigationBar';
import { languageTexts } from '@/constants';
import { LanguageProvider } from '@/context/language';

import { Metadata } from 'next';
import WhatsApp from '@/components/WhatsApp';
import Footer from '@/components/shared/Footer';
// eslint-disable-next-line camelcase
import { Red_Hat_Display, Roboto, Space_Grotesk, Quicksand } from 'next/font/google';
import React from 'react';
import { Providers } from './Providers';
import './globals.css';

const roboto = Roboto({ weight: ['300', '500', '700', '900'], subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '700', '600'],
  subsets: ['latin'],
});
const redHatDisplay = Red_Hat_Display({
  weight: ['300', '400', '500', '700', '600'],
  subsets: ['latin'],
});
const quicksand = Quicksand({
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
        <body className={(roboto.className, spaceGrotesk.className, redHatDisplay.className, quicksand.className )}>
          <Providers>
            <NavigationBar />
            {children}
            <WhatsApp />
            <Footer />
          </Providers>
        </body>
      </LanguageProvider>
    </html>
  );
}
