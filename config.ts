import { Pathnames } from 'next-intl/navigation';

export const locales = ['tr', 'en'] as const;

// The `pathnames` object holds pairs of internal and
// external paths. Based on the locale, the external
// paths are rewritten to the shared, internal ones.
export const pathnames = {
  '/': '/',

  '/bayilerimiz': {
    en: '/our-dealers',
    tr: '/bayilerimiz',
  },
  '/bayimiz-ol': {
    en: '/become-a-dealer',
    tr: '/bayimiz-ol',
  },
  '/hesaplamalar': {
    en: '/calculations',
    tr: '/hesaplamalar',
  },
  '/iletisim': {
    en: '/contact',
    tr: '/iletisim',
  },
  '/urunler': {
    en: '/products',
    tr: '/urunler',
  },
  '/sertifikalar': {
    en: '/certificates',
    tr: '/sertifikalar',
  },
  '/kurumsal': {
    en: '/institutional',
    tr: '/kurumsal',
  },
  '/kurumsal/vizyon-ve-misyon': {
    en: '/institutional/vision-and-mission',
    tr: '/kurumsal/vizyon-ve-misyon',
  },
  '/kurumsal/oduller-ve-basarilar': {
    en: '/institutional/awards-and-achievements',
    tr: '/kurumsal/oduller-ve-basarilar',
  },
  '/kurumsal/tarihce': {
    en: '/institutional/history',
    tr: '/kurumsal/tarihce',
  },
  '/kurumsal/taahhutname': {
    en: '/institutional/commitment',
    tr: '/kurumsal/taahhutname',
  },
  '/projelerimiz': {
    en: '/our-projects',
    tr: '/projelerimiz',
  },
  '/urunler/altyapi-boru-sistemleri': {
    en: '/products/infrastructure-pipe-systems',
    tr: '/urunler/altyapi-boru-sistemleri',
  },
  '/urunler/altyapi-boru-sistemleri/[product]': {
    en: '/products/infrastructure-pipe-systems/[product]',
    tr: '/urunler/altyapi-boru-sistemleri/[product]',
  },
  '/urunler/bina-ici-boru-sistemleri': {
    en: '/products/indoor-pipe-systems',
    tr: '/urunler/bina-ici-boru-sistemleri',
  },
  '/urunler/bina-ici-boru-sistemleri/[product]': {
    en: '/products/indoor-pipe-systems/[product]',
    tr: '/urunler/bina-ici-boru-sistemleri/[product]',
  },
} satisfies Pathnames<typeof locales>;
