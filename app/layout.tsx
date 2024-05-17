import Navbar from '@/components/Navbar';
import data from '@/constants/texts';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const lang = 'tr';

export const metadata: Metadata = {
  title: data[lang].title,
  description: data[lang].description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar lang={lang}/>
        {children}
      </body>
    </html>
  );
}
