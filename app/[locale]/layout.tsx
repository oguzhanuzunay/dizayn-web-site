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
import Script from 'next/script';
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
  title: languageTexts.tr?.meta.title ?? 'Design Group - Pipe Systems and PP-R Pipe Prices',
  description:
    languageTexts.tr?.meta.description ??
    'Pipe, Plastic Pipe, ElitePipe, PPR pipe, PPRC pipe, PPRC Pipe, PPRC Pipe Prices, PPRC Pipe Prices',
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TZC3LD3');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${roboto.className} ${spaceGrotesk.className} ${redHatDisplay.className} ${quicksand.className}`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZC3LD3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
