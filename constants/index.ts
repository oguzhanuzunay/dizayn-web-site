import {
  calculationsCardDataParams,
  certificateListParams,
  contactInfosParams,
  countUpParams,
  countryListParams,
  dealerListParams,
  infrastructureProductsParams,
  sliderParams,
  superStructureProductsParams,
} from '@/types';
import { languageParams } from '@/types/languageParams';

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
    footer: {
      imageContent: [
        {
          title: 'Industry Leader',
          image: '/icons/yerli-üretim.svg',
          alt: 'Domestic Production',
        },
        {
          title: '1st Class Raw Material',
          image: '/icons/raw.png',
          alt: 'ElitePipe',
        },
        {
          title: 'High Technology',
          image: '/icons/high-tech.png',
          alt: 'SterilePipe',
        },
      ],

      footerContent: {
        companyInformation: [
          {
            title: 'Address',
            text: 'Design Group: Atatürk Mahallesi Adnan Menderes Caddesi No:6 - 34522 / Kıraç Esenyurt  /  ISTANBUL  /  TURKEY',
            image: '/icons/address.png',
            alt: 'address',
          },

          {
            title: 'Phone',
            text: '0212 886 57 41',
            image: '/icons/phone-call.png',
            alt: 'phone',
          },
          {
            title: 'Fax',
            text: '0212 886 57 42',
            image: '/icons/fax-machine.png',
            alt: 'fax',
          },
          {
            title: 'E-mail',
            text: 'info@dizayngrup.com',
            image: '/icons/email.png',
            alt: 'email',
          },
        ],
        socialMedia: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/dizayngroup',
            image: '/icons/facebook.png',
            alt: 'facebook',
          },
          {
            name: 'Instagram',
            link: 'https://www.instagram.com/dizayngrup',
            image: '/icons/instagram.png',
            alt: 'instagram',
          },
          {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/company/dizayngrup',
            image: '/icons/linkedin.png',
            alt: 'linkedin',
          },
          {
            name: 'Youtube',
            link: 'https://www.youtube.com/@dizayngrup',
            image: '/icons/youtube.png',
            alt: 'youtube',
          },
        ],
        links: [
          {
            title: 'Design Group',
            content: [
              {
                title: 'Institutional',
                link: '/kurumsal',
              },
              {
                title: 'Mission and Vision',
                link: '/misyon-vizyon',
              },
              {
                title: 'Awards and Achievements',
                link: '/oduller',
                highlight: true,
              },
              {
                title: 'Commitment',
                link: '/taahhutname',
              },
            ],
          },
          {
            title: 'Products',
            content: [
              {
                title: 'ElitePipe',
                link: '/elitepipe',
              },
              {
                title: 'SterilePipe',
                link: '/sterilepipe',
              },
              {
                title: 'Superstructure Products',
                link: '/products/superstructure-products',
              },
              {
                title: 'Infrastructure Products',
                link: '/products/infrastructure-products',
              },
            ],
          },
          {
            title: 'Services',
            content: [
              {
                title: 'Calculations',
                link: '/hesaplamalar',
              },
              {
                title: 'Dealers',
                link: '/bayiler',
              },
              {
                title: 'Our Projects',
                link: '/projeler',
              },
              {
                title: 'Certificates',
                link: '/sertifikalar',
              },
            ],
          },
          {
            title: 'Communication',
            content: [
              {
                title: 'Communication',
                link: '/iletisim',
              },
              {
                title: 'Become a Dealer',
                link: '/bayimiz-ol',
              },
              {
                title: 'Career',
                link: '/kariyer',
              },
              {
                title: 'Human Resources',
                link: '/insan-kaynaklari',
              },
            ],
          },
        ],
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
      { name: 'iletisim' },
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
    footer: {
      imageContent: [
        {
          title: 'Sektör Lideri',
          image: '/icons/yerli-üretim.svg',
          alt: 'Yerli Üretim',
        },
        {
          title: '1. Sınıf Hammadde',
          image: '/icons/raw.png',
          alt: 'ElitePipe',
        },
        {
          title: 'Yüksek Teknoloji',
          image: '/icons/high-tech.png',
          alt: 'SterilePipe',
        },
      ],

      footerContent: {
        companyInformation: [
          {
            title: 'Adres',
            text: 'Dizayn Grup : Atatürk Mahallesi Adnan Menderes Caddesi No:6 - 34522 / Kıraç Esenyurt  /  İSTANBUL  /  TÜRKİYE',
            image: '/icons/address.png',
            alt: 'address',
          },

          {
            title: 'Telefon',
            text: '0212 886 57 41',
            image: '/icons/phone-call.png',
            alt: 'phone',
          },
          {
            title: 'Fax',
            text: '0212 886 57 42',
            image: '/icons/fax-machine.png',
            alt: 'fax',
          },
          {
            title: 'E-mail',
            text: 'info@dizayngrup.com',
            image: '/icons/email.png',
            alt: 'email',
          },
        ],
        socialMedia: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/dizayngroup',
            image: '/icons/facebook.png',
            alt: 'facebook',
          },
          {
            name: 'Instagram',
            link: 'https://www.instagram.com/dizayngrup',
            image: '/icons/instagram.png',
            alt: 'instagram',
          },
          {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/company/dizayngrup',
            image: '/icons/linkedin.png',
            alt: 'linkedin',
          },
          {
            name: 'Youtube',
            link: 'https://www.youtube.com/@dizayngrup',
            image: '/icons/youtube.png',
            alt: 'youtube',
          },
        ],
        links: [
          {
            title: 'Dizayn Grup',
            image: '/icons/company.png',
            alt: 'company icon',
            content: [
              {
                title: 'Kurumsal',
                link: '/kurumsal',
              },
              {
                title: 'Misyon ve Vizyon',
                link: '/misyon-vizyon',
              },
              {
                title: 'Ödüller ve Başarılar',
                link: '/oduller',
                highlight: true,
              },
              {
                title: 'Taahhütname',
                link: '/taahhutname',
              },
            ],
          },
          {
            title: 'Ürünler',
            image: '/icons/product.png',
            alt: 'product icon',
            content: [
              {
                title: 'ElitePipe',
                link: '/elitepipe',
              },
              {
                title: 'SterilePipe',
                link: '/sterilepipe',
              },
              {
                title: 'Üst Yapı Ürünleri',
                link: '/urunler/ust-yapi',
              },
              {
                title: 'Alt Yapı Ürünleri',
                link: '/urunler/alt-yapi',
              },
            ],
          },
          {
            title: 'Hizmetler',
            image: '/icons/service.png',
            alt: 'service icon',
            content: [
              {
                title: 'Hesaplamalar',
                link: '/hesaplamalar',
              },
              {
                title: 'Bayilerimiz',
                link: '/bayiler',
              },
              {
                title: 'Projelerimiz',
                link: '/projeler',
              },
              {
                title: 'Sertifikalar',
                link: '/sertifikalar',
              },
            ],
          },
          {
            title: 'İletişim',
            image: '/icons/communication.png',
            alt: 'communication icon',
            content: [
              {
                title: 'İletişim',
                link: '/iletisim',
              },
              {
                title: 'Bayimiz Ol',
                link: '/bayimiz-ol',
              },
              {
                title: 'Kariyer',
                link: '/kariyer',
              },
              {
                title: 'İnsan Kaynakları',
                link: '/insan-kaynaklari',
              },
            ],
          },
        ],
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
    {
      title: 'ElitePipe',
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      link: '/elitepipe',
    },
    {
      title: 'ElitePipe',
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      link: '/elitepipe',
    },
    {
      title: 'ElitePipe',
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      link: '/elitepipe',
    },
    {
      title: 'ElitePipe',
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      link: '/elitepipe',
    },
    {
      title: 'ElitePipe',
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      link: '/elitepipe',
    },
    {
      title: 'ElitePipe',
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      link: '/elitepipe',
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
    {
      title: 'ElitePipe',
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      link: '/elitepipe',
    },
    {
      title: 'ElitePipe',
      image: '/productImages/product-1.png',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      link: '/elitepipe',
    },
  ],
};

const superStructureProducts: superStructureProductsParams = {
  en: [
    {
      title: 'ElitePipe',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      image: '/productImages/product-1.png',
      link: '/elitepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe is a pipe system that is resistant to high temperatures and is used in many areas.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
  ],
  tr: [
    {
      title: 'ElitePipe',
      description:
        'ELITEPIPE, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
      image: '/productImages/product-1.png',
      link: '/elitepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
  ],
};

const infrastructureProducts: infrastructureProductsParams = {
  en: [
    {
      title: 'ElitePipe',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      image: '/productImages/product-1.png',
      link: '/elitepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe is a pipe system that is resistant to high temperatures and is used in many areas.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
  ],
  tr: [
    {
      title: 'ElitePipe',
      description:
        'ELITEPIPE, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
      image: '/productImages/product-1.png',
      link: '/elitepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
    },
    {
      title: 'SterilePipe',
      description:
        'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
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
          image: '',
          link: '/certificates/elite-boru-tse-deney-raporu-ts-en-iso-1167.pdf',
        },
      ],
    },
    {
      name: 'Russia',
      code: 'ru',
      title: 'Russia Certificates',
      allPDFs: [],
    },
    {
      name: 'Romania',
      code: 'ro',
      title: 'Romania Certificates',
      allPDFs: [],
    },
    {
      name: 'Turkey',
      code: 'tr',
      title: 'Turkey TSE Certificates and Test Reports',
      allPDFs: [],
    },
    {
      name: 'Belarus',
      code: 'by',
      title: 'Belarus Certificates',
      allPDFs: [],
    },
    {
      name: 'Ukraine',
      code: 'ua',
      title: 'Ukraine Certificates',
      allPDFs: [],
    },
    {
      name: 'Poland',
      code: 'pl',
      title: 'Poland Certificates',
      allPDFs: [],
    },
  ],
  tr: [
    {
      name: 'Almanya',
      code: 'de',
      title: 'Almanya Sertifikaları',
      allPDFs: [],
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
      allPDFs: [],
    },

    {
      name: 'Rusya',
      code: 'ru',
      title: 'Rusya Sertifikaları',
      allPDFs: [],
    },
    {
      name: 'Beyaz Rusya',
      code: 'by',
      title: 'Beyaz Rusya Sertifikaları',
      allPDFs: [],
    },
    {
      name: 'Ukrayna',
      code: 'ua',
      title: 'Ukrayna Sertifikaları',
      allPDFs: [],
    },
    {
      name: 'Polonya',
      code: 'pl',
      title: 'Polonya Sertifikaları',
      allPDFs: [],
    },
  ],
};

const contactInfo: contactInfosParams = {
  en: [
    {
      id: 1,
      position: { lat: 41.015137, lng: 28.671112 },
      contact: {
        title: 'Çorlu Factory',
        address: `Velimeşe Mahallesi Hacı Şeremet Caddesi
              No : 6/1 Ergene/Tekirdağ
              Adress Code : 2623043037`,
        phone: '+90 (282) 676 46 40',
        fax: '+90 (282) 676 46 45',
        email: 'info@dizayngrup.com',
      },
    },
    {
      id: 2,
      position: { lat: 41.015137, lng: 28.671112 },
      contact: {
        title: 'Istanbul Office',
        address: `Atatürk Mahallesi Adnan Menderes Caddesi
              No : 6 Kıraç/Esenyurt/İstanbul
              Adress Code : 34522`,
        phone: '+90 (212) 886 57 41',
        fax: '+90 (212) 886 57 42',
        email: 'info@dizayngrup.com',
      },
    },
    {
      id: 3,
      position: { lat: 55.8293362, lng: 52.0819124 },
      contact: {
        title: 'Russia Factory',
        address: `Russian Federation, 423600, Republic of Tatarstan, Elabuga region, Elabuga city, “Alabuga” SEZ (Special Economic Zone) area, Sk. Sh-2, block 5/12 Block 3E`,
        phone: '+7 (855) 575 29 08/09',
        email: 'info@dizaynrussia.com',
      },
    },
  ],
  tr: [
    {
      id: 1,
      position: { lat: 41.015137, lng: 28.671112 },
      contact: {
        title: 'İstanbul Ofis',
        address: `Atatürk Mahallesi Adnan Menderes Caddesi
        No : 6 Kıraç/Esenyurt/İstanbul
        Adres Kodu : 34522`,
        phone: '+90 (212) 886 57 41',
        fax: '+90 (0212) 886 51 93',
        email: 'info@dizayngrup.com',
      },
    },
    {
      id: 2,
      position: { lat: 41.193067, lng: 27.858991 },
      contact: {
        title: 'Çorlu Fabrika',
        address: `Velimeşe Mahallesi Hacı Şeremet Caddesi
                  No : 6/1 Ergene/Tekirdağ
                  Adres Kodu : 2623043037`,
        phone: '+90 (282) 676 46 40',
        fax: '+90 (282) 676 46 45',
        email: 'info@dizayngrup.com',
      },
    },
    {
      id: 3,
      position: { lat: 55.8293362, lng: 52.0819124 },
      contact: {
        title: 'Rusya Fabrika',
        address: `Rusya Federasyonu, 423600, Tataristan Cumhuriyeti, Elabuga bölgesi, Elabuga şehri, “Alabuga” SEZ (Özel Ekonomik Bölgesi) alanı, Sk. Ş-2, korpus 5/12 Blok 3E`,
        phone: '+7 (855) 575 29 08/09',
        email: 'info@dizaynrussia.com',
      },
    },
  ],
};

export {
  calculationsCardData,
  certificateList,
  contactInfo,
  countUpText,
  countryList,
  dealerList,
  infrastructureProducts,
  languageTexts,
  sliderItems,
  superStructureProducts,
};
