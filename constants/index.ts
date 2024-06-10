import {
  calculationsCardDataParams,
  certificateListParams,
  countUpParams,
  countryListParams,
  dealerListParams,
  languageParams,
  sliderParams,
} from '@/types';

const languageTexts: languageParams = {
  en: {
    meta: {
      title: 'Design Group - Pipe Systems and PP-R Pipe Prices',
      description:
        'Pipe, Plastic Pipe, ElitePipe, PPR pipe, PPRC pipe, PPRC Pipe, PPRC Pipe Prices, PPRC Pipe Prices',
    },
    menuList: [
      {
        name: 'Products',
        submenu: [
          {
            name: 'Infrastructure Products',
            description: 'Big pipe, small pipe',
            icons: '/icons/pipe.png',
            link: 'products/infrastructure-products',
          },
          {
            name: 'Superstructure Products',
            description: 'Big pipe, small pipe',
            icons: '/icons/water-pipe.png',
            link: 'products/infrastructure-products',
          },
        ],
      },
      { name: 'Dealers' },
      { name: 'Calculations' },
      { name: 'Communication' },
      { name: 'Institutional' },
      { name: 'Our projects' },
      { name: 'Certificates' },
      { name: 'R&D' },
    ],
    certificates: { title: 'Our Certificates', buttonText: 'View All Certificates' },
    pages: {
      dealers: {
        h1: 'franchisee',
        text: 'Please click here to become our franchisee...',
        imgLink: '/images/bayim_olurmusunK.jpg',
        alt: '',
        subPageLink: '/bayimiz-ol',
      },
      becomeDealer: {
        companyName: 'Company Name*',
        fullName: 'Full Name*',
        phone: 'Phone',
        eMail: 'E-mail*',
        city: 'City*',
        annualRevenue: 'Annual Revenue Estimate',
        numberOfSubDealers: 'Number of Sub-Dealers:',
        numberOfProjectsWorkedOn: 'Number of Projects Worked On*',
        subject: 'Subject*',
        explanation: 'Explanation*',
        buttonText: 'Send',
      },
    },
  },

  tr: {
    meta: {
      title: 'Dizayn Grup - Boru Sistemleri ve PP-R Boru Fiyatları',
      description:
        'Boru, Plastik Boru, ElitePipe, PPR boru, PPRC boru, PPRC Boru, PPRC Boru Fiyatları, PPRC Boru Fiyatları',
    },
    menuList: [
      {
        name: 'Ürünler',
        submenu: [
          {
            name: 'Üst Yapı Ürünleri',
            description: 'Büyük boru, küçük boru',
            icons: '/icons/water-pipe.png',
            link: '/urunler/ust-yapi',
          },
          {
            name: 'Alt Yapı Ürünleri',
            description: 'Büyük boru, küçük boru',
            icons: '/icons/pipe.png',
            link: '/urunler/alt-yapi',
          },
        ],
      },
      { name: 'Bayilerimiz' },
      { name: 'Hesaplamalar' },
      { name: 'Iletişim' },
      { name: 'Kurumsal' },
      { name: 'Projelerimiz' },
      { name: 'Sertifikalar' },
      { name: 'AR-GE' },
    ],
    certificates: { title: 'Sertifikalarımız', buttonText: 'Tüm Sertifikaları Görüntüle' },
    pages: {
      dealers: {
        h1: 'Bayilerimiz',
        text: 'Bayimiz olmak için lütfen tıklayınız...',
        imgLink: '/images/bayim_olurmusunK.jpg',
        alt: 'bayimiz ol',
        subPageLink: '/bayimiz-ol',
      },
      becomeDealer: {
        companyName: 'Firma Adı*',
        fullName: 'Ad Soyad*',
        phone: 'Tel',
        eMail: 'E-mail*',
        city: 'Şehir*',
        annualRevenue: 'Yıllık Tahmini Cironuz',
        numberOfSubDealers: 'Alt Bayi Sayınız:',
        numberOfProjectsWorkedOn: 'Çalışılan Proje Sayısı',
        subject: 'Konu',
        explanation: 'Açıkla',
        buttonText: 'Gönder',
      },
    },
  },
};

const sliderItems: sliderParams = {
  en: [
    {
      title: 'ElitePipe',
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      link: '/elitepipe',
    },
    {
      title: 'SterilePipe',
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
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
      link: '/elitepipe',
    },
    {
      title: 'SterilePipe',
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

const certificateList: certificateListParams = [
  {
    id: 1,
    title: 'ISO 9001:2015',
    image: '/certificates/iso-9001.png',
  },
  {
    id: 2,
    title: 'ISO 14001:2004',
    image: '/certificates/iso-14001-2004.png',
  },
  {
    id: 3,
    title: 'TSE',
    image: '/certificates/TSE.png',
  },
  {
    id: 4,
    title: 'ISO 50001',
    image: '/certificates/iso-50001.png',
  },
  {
    id: 5,
    title: 'OHSAS 18001',
    image: '/certificates/ohsas-18001.png',
  },
  {
    id: 6,
    title: 'ISO 10002',
    image: '/certificates/iso-10002.png',
  },
];

const calculationsCardData: calculationsCardDataParams = {
  en: [
    {
      title: 'Water Hammer Calculation',
      description: 'Click to calculate water hammer',
      img: '/images/su-darbesi-hesabi.jpeg',
    },
    {
      title: 'Compensator Calculation',
      description: 'Click to calculate compensator',
      img: '/images/kompansator-hesabi.jpeg',
    },
    {
      title: 'Gravity Line Calculation',
      description: 'Click to calculate gravity line',
      img: '/images/cazibeli-hat-hesabi.jpeg',
    },
    {
      title: 'Pressure Loss Calculation',
      description: 'Click to calculate pressure loss',
      img: '/images/basinc-kaybı-hesabi.jpeg',
    },
    {
      title: 'Korige Pipe Calculation',
      description: 'Click to calculate korige pipe',
      img: '/images/korige-boru-hesabi.jpeg',
    },
  ],

  tr: [
    {
      title: 'Su Darbesi Hesabı',
      description: 'Su darbesi hesabı yapmak için tıklayınız',
      img: '/images/su-darbesi-hesabi.jpeg',
    },
    {
      title: 'Kompansatör Hesabı ',
      description: 'Kompansatör hesabı yapmak için tıklayınız',
      img: '/images/kompansator-hesabi.jpeg',
    },
    {
      title: 'Cazibeli Hat Hesabı',
      description: 'Cazibeli hat hesabı yapmak için tıklayınız',
      img: '/images/cazibeli-hat-hesabi.jpeg',
    },
    {
      title: 'Basınç Kaybı Hesabı',
      description: 'Basınç kaybı hesabı yapmak için tıklayınız',
      img: '/images/basinc-kaybı-hesabi.jpeg',
    },
    {
      title: 'Korige Boru Hesabı',
      description: 'Korige Boru Hesabı yapmak için tıklayınız',
      img: '/images/korige-boru-hesabi.jpeg',
    },
  ],
};

const countryList: countryListParams = {
  en: [
    {
      name: 'Germany',
      code: 'de',
      title: 'Germany Certificates',
      allPDFs: [
        {
          name: 'ELITE BORU TSE DENEY RAPORU (TS EN ISO 1167)',
          img: '',
          link: '/certificates/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
      ],
    },
    {
      name: 'Russia',
      code: 'ru',
      title: 'Russia Certificates',
    },
    {
      name: 'Romania',
      code: 'ro',
      title: 'Romania Certificates',
    },
    {
      name: 'Turkey',
      code: 'tr',
      title: 'Turkey TSE Certificates and Test Reports',
    },
    {
      name: 'Belarus',
      code: 'by',
      title: 'Belarus Certificates',
    },
    {
      name: 'Ukraine',
      code: 'ua',
      title: 'Ukraine Certificates',
    },
    {
      name: 'Poland',
      code: 'pl',
      title: 'Poland Certificates',
    },
  ],
  tr: [
    {
      name: 'Almanya',
      code: 'de',
      title: 'Almanya Sertifikaları',
    },
    {
      name: 'Türkiye',
      code: 'tr',
      title: 'Türkiye TSE Sertifikaları ve Test Raporları',
      allPDFs: [
        {
          name: 'ELITE BORU TSE DENEY RAPORU (TS EN ISO 1167)',
          image: '/certificates/files/tr/imgs/elite-boru-tse-deney-raporu-ts-en-iso-1167.jpg',
          link: '/certificates/files/tr/pdfs/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
        {
          name: 'ELITE BORU TSE DENEY RAPORU (TS EN ISO 1167)',
          image: '/certificates/files/tr/imgs/elite-boru-tse-deney-raporu-ts-en-iso-1167.jpg',
          link: '/certificates/files/tr/pdfs/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
        {
          name: 'ELITE BORU TSE DENEY RAPORU (TS EN ISO 1167)',
          image: '/certificates/files/tr/imgs/elite-boru-tse-deney-raporu-ts-en-iso-1167.jpg',
          link: '/certificates/files/tr/pdfs/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
        {
          name: 'ELITE BORU TSE DENEY RAPORU (TS EN ISO 1167)',
          image: '/certificates/files/tr/imgs/elite-boru-tse-deney-raporu-ts-en-iso-1167.jpg',
          link: '/certificates/files/tr/pdfs/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
        {
          name: 'ELITE BORU TSE DENEY RAPORU (TS EN ISO 1167)',
          image: '/certificates/files/tr/imgs/elite-boru-tse-deney-raporu-ts-en-iso-1167.jpg',
          link: '/certificates/files/tr/pdfs/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
        {
          name: 'ELITE BORU TSE DENEY RAPORU (TS EN ISO 1167)',
          image: '/certificates/files/tr/imgs/elite-boru-tse-deney-raporu-ts-en-iso-1167.jpg',
          link: '/certificates/files/tr/pdfs/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
        {
          name: 'ELITE BORU TSE DENEY RAPORU (TS EN ISO 1167)',
          image: '/certificates/files/tr/imgs/elite-boru-tse-deney-raporu-ts-en-iso-1167.jpg',
          link: '/certificates/files/tr/pdfs/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
        {
          name: 'ELITE BORU TSE DENEY RAPORU (TS EN ISO 1167)',
          image: '/certificates/files/tr/imgs/elite-boru-tse-deney-raporu-ts-en-iso-1167.jpg',
          link: '/certificates/files/tr/pdfs/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
        {
          name: 'ELITE BORU TSE DENEY RAPORU (TS EN ISO 1167)',
          image: '/certificates/files/tr/imgs/elite-boru-tse-deney-raporu-ts-en-iso-1167.jpg',
          link: '/certificates/files/tr/pdfs/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
      ],
    },
    {
      name: 'Romanya',
      code: 'ro',
      title: 'Romanya Sertifikaları',
    },

    {
      name: 'Rusya',
      code: 'ru',
      title: 'Rusya Sertifikaları',
    },
    {
      name: 'Beyaz Rusya',
      code: 'by',
      title: 'Beyaz Rusya Sertifikaları',
    },
    {
      name: 'Ukrayna',
      code: 'ua',
      title: 'Ukrayna Sertifikaları',
    },
    {
      name: 'Polonya',
      code: 'pl',
      title: 'Polonya Sertifikaları',
    },
  ],
};

export {
  calculationsCardData,
  certificateList,
  countUpText,
  countryList,
  dealerList,
  languageTexts,
  sliderItems,
};
