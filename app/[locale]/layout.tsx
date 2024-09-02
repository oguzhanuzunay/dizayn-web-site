import NavigationBar from '@/components/shared/NavigationBar';
import { languageTexts } from '@/constants';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


import Footer from '@/components/shared/Footer';
import { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// eslint-disable-next-line camelcase
import { Quicksand, Red_Hat_Display, Roboto, Space_Grotesk } from 'next/font/google';
import React from 'react';
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
  title: languageTexts.tr?.meta.title ?? '',
  description: languageTexts.tr?.meta.description ?? '',
  icons: '/favicon.ico',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${roboto.className} ${spaceGrotesk.className} ${redHatDisplay.className} ${quicksand.className}`}
      >
        <Analytics />
        <SpeedInsights />
        <NextIntlClientProvider messages={messages}>
          <NavigationBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
