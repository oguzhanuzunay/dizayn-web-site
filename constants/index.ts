import { countUpParams, dealerListParams, languageParams, sliderParams } from '@/types';

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
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      link: '/elitepipe',
    },
    {
      title: 'SterilePipe',
      alt: 'SterilePipe',
      image: '/productImages/product-2.png',
      description:
        'SterilePipe is a pipe system that is resistant to high temperatures and is used in many areas.',
      link: '/sterilepipe',
      customCSS: 'scale-175;',
    },
  ],
  tr: [
    {
      title: 'ElitePipe',
      alt: 'ElitePipe ',
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
      link: '/elitepipe',
    },
    {
      title: 'SterilePipe',
      alt: 'SterilePipe',
      image: '/productImages/product-2.png',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      link: '/sterilepipe',
      customCSS: 'scale-175',
    },
  ],
};

const countUpText: countUpParams = {
  en: [
    {
      counterName: 'Certificates',
      counterNumber: 36,
      imageLink: '/icons/certificate.png',
      alt: 'certificate',
      link: '/certificates',
    },
    {
      counterName: 'Rewards',
      counterNumber: 12,
      imageLink: '/icons/trophy.png',
      alt: 'trophy',
      link: '/rewards',
    },
    {
      counterName: 'Dealers',
      counterNumber: 24,
      imageLink: '/icons/dealing.png',
      alt: 'dealing',
      link: '/dealers',
    },
    {
      counterName: 'Projects',
      counterNumber: 48,
      imageLink: '/icons/research.png',
      alt: 'research',
      link: '/projects',
    },
  ],
  tr: [
    {
      counterName: 'Sertifikalar',
      counterNumber: 36,
      imageLink: '/icons/certificate.png',
      alt: 'certificate',
      link: '/sertifikalar',
    },
    {
      counterName: 'Ödüller',
      counterNumber: 12,
      imageLink: '/icons/trophy.png',
      alt: 'trophy',
      link: '/oduller',
    },
    {
      counterName: 'Bayiler',
      counterNumber: 24,
      imageLink: '/icons/dealing.png',
      alt: 'dealing',
      link: '/bayiler',
    },
    {
      counterName: 'Projeler',
      counterNumber: 48,
      imageLink: '/icons/research.png',
      alt: 'research',
      link: '/projeler',
    },
  ],
};

const dealerList: dealerListParams = [
  {
    id: 1,
    cityId: 34,
    name: 'Kardeşler Boru',
    phone: '0212 123 45 67',
    address: 'İstanbul, Türkiye',
    email: 'info@kardeşlerboru.com',
    mapsLink: 'https://goo.gl/maps/1',
  },
  {
    id: 2,
    cityId: 34,
    name: 'Boru Dünyası',
    phone: '0212 123 45 67',
    address: 'İstanbul, Türkiye',
    email: 'info@borudunyası.com',
    mapsLink: 'https://goo.gl/maps/2',
  },
  {
    id: 3,
    cityId: 35,
    name: 'Boru Dünyası',
    phone: '0212 123 45 67',
    address: 'İstanbul, Türkiye',
    email: 'info@borudunyası.com',
    mapsLink: 'https://goo.gl/maps/3',
  },
  {
    id: 4,
    cityId: 10,
    name: 'Kardeşler Boru',
    phone: '0212 123 45 67',
    address: 'İstanbul, Türkiye',
    email: 'info@kardeşlerboru.com',
    mapsLink: 'https://goo.gl/maps/4',
  },
];

export { countUpText, dealerList, languageTexts, sliderItems };
