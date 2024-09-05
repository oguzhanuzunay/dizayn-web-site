import createMiddleware from 'next-intl/middleware';
import {locales, pathnames} from './navigation';
 
export default createMiddleware({
  defaultLocale: 'tr',
  locales,
  pathnames
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(tr|en|ru|ar)/:path*'],
};
