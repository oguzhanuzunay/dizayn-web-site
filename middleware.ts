import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, pathnames } from './navigation';

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if pathname has a valid locale
  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`));

  // Detect browser language
  const acceptLanguage = req.headers.get('accept-language') || '';
  const preferredLocale = (acceptLanguage.split(',')[0]?.split('-')[0] || 'tr') as 'tr' | 'en';

  // If no valid locale, redirect to preferred locale
  if (!hasLocale) {
    const locale = locales.includes(preferredLocale) ? preferredLocale : 'tr'; // Default to 'tr'
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }

  return createMiddleware({
    defaultLocale: 'tr',
    locales,
    pathnames,
  })(req);
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(de|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
