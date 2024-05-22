import { languageParams, sliderParams } from '@/types';

const languageTexts: languageParams = {
  en: {
    meta: {
      title: 'Design Group - Pipe Systems and PP-R Pipe Prices',
      description:
        'Pipe, Plastic Pipe, ElitePipe, PPR pipe, PPRC pipe, PPRC Pipe, PPRC Pipe Prices, PPRC Pipe Prices',
    },
    menuList: [
      'Dealers',
      'Calculations',
      'Communication',
      'Institutional',
      'Our projects',
      'Certificates',
      'Products',
      'R&D',
    ],
  },
  tr: {
    meta: {
      title: 'Dizayn Grup - Boru Sistemleri ve PP-R Boru Fiyatları',
      description:
        'Boru, Plastik Boru, ElitePipe, PPR boru, PPRC boru, PPRC Boru, PPRC Boru Fiyatları, PPRC Boru Fiyatları',
    },
    menuList: [
      'Bayilerimiz',
      'Hesaplamalar',
      'Iletişim',
      'Kurumsal',
      'Projelerimiz',
      'Sertifikalar',
      'Ürünler',
      'AR-GE',
    ],
  },
};

const sliderItems: sliderParams = {
  en: [
    {
      title: 'ElitePipe',
      alt: 'ElitePipe ',
      image: '/productImages/product-1.png',
    },
    {
      title: 'SterilePipe',
      alt: 'description2',
      image: '/productImages/product-2.png',
    },
  ],
  tr: [
    {
      title: 'ElitePipe',
      alt: 'ElitePipe ',
      image: '/productImages/product-1.png',
    },
    {
      title: 'SterilePipe',
      alt: 'description2',
      image: '/productImages/product-2.png',
    },
  ],
};


export { languageTexts, sliderItems };
