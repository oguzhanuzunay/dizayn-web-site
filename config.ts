export const locales = ['tr', 'en'] as const;
 
// The `pathnames` object holds pairs of internal and
// external paths. Based on the locale, the external
// paths are rewritten to the shared, internal ones.
export const pathnames = {
  // If all locales use the same pathname, a single
  // external path can be used for all locales
  '/': '/',
 
  // If locales use different paths, you can
  // specify each external path per locale
  '/about': {
    tr: '/hakkımızda',
    en: '/about',
  },
 
  // Dynamic params are supported via square brackets
  '/news/[articleSlug]-[articleId]': {
    en: '/news/[articleSlug]-[articleId]',
    de: '/neuigkeiten/[articleSlug]-[articleId]'
  },
 
  // Static pathnames that overlap with dynamic segments
  // will be prioritized over the dynamic segment
  '/news/just-in': {
    en: '/news/just-in',
    de: '/neuigkeiten/aktuell'
  },
 
  // Also (optional) catch-all segments are supported
  '/categories/[...slug]': {
    en: '/categories/[...slug]',
    de: '/kategorien/[...slug]'
  }
} satisfies Pathnames<typeof locales>;