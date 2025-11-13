import NavigationBar from '@/components/shared/NavigationBar';
import { languageTexts } from '@/constants';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Footer from '@/components/shared/Footer';
import CondolencePopup from '@/components/PopUp/CondolencePopup';
import { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// eslint-disable-next-line camelcase
import { Quicksand, Red_Hat_Display, Roboto, Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
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

        {/* Google Ads Conversion Tracking (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17493610190"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17493610190');
            `,
          }}
        />
        {/* End Google Ads Conversion Tracking */}

        {/* Facebook Pixel Kodunuz */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive" // Sayfa interaktif olduktan sonra yüklenir.
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1009168214401004');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1009168214401004&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
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
          <CondolencePopup />
          <NavigationBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
