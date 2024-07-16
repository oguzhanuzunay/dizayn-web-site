import {
  calculationsCardDataParams,
  certificateListParams,
  contactInfosParams,
  countryCertificateParams,
  dealerListParams,
  matrixCardParams,
  sliderParams,
} from '@/types';
import { languageParams } from '@/types/languageParams';

import { productList } from './productList';

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
    certificates: {
      title: 'Our Certificates',
      buttonText: 'View All Certificates',
    },
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
            image: '/icons/socialMedia/facebook.png',
            alt: 'facebook',
          },
          {
            name: 'Instagram',
            link: 'https://www.instagram.com/dizayngrup',
            image: '/icons/socialMedia/instagram.png',
            alt: 'instagram',
          },
          {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/company/dizayngrup',
            image: '/icons/socialMedia/linkedin.png',
            alt: 'linkedin',
          },
          {
            name: 'Youtube',
            link: 'https://www.youtube.com/@dizayngrup',
            image: '/icons/socialMedia/youtube.png',
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
            name: 'Bina İçi  Boru Sistemleri',
            description: 'Üstyapı',
            icons: '/icons/water-pipe.png',
            link: '/urunler/bina-ici-boru-sistemleri',
          },
          {
            name: 'Altyapı Boru Sistemleri',
            description: 'Altyapı',
            icons: '/icons/pipe.png',
            link: '/urunler/altyapi-boru-sistemleri',
          },
        ],
      },
      { name: 'Bayilerimiz' },
      { name: 'Hesaplamalar' },
      { name: 'Kurumsal' },
      { name: 'Projelerimiz' },
      { name: 'Sertifikalar' },
      { name: 'iletisim' },
      { name: 'AR-GE' },
    ],
    certificates: {
      title: 'Sertifikalarımız',
      buttonText: 'Tüm Sertifikaları Görüntüle',
    },
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
                link: '/kurumsal/vizyon-ve-misyon',
              },
              {
                title: 'Ödüller ve Başarılar',
                link: '/kurumsal/oduller-ve-basarilar',
                highlight: true,
              },
              {
                title: 'Taahhütname',
                link: '/kurumsal/taahhutname',
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
                link: 'urunler/bina-ici-boru-sistemleri/elitepipe',
              },
              {
                title: 'SterilePipe',
                link: '/urunler/bina-ici-boru-sistemleri/sterilepipe',
              },
              {
                title: 'Bina İçi  Boru Sistemleri',
                link: '/urunler/bina-ici-boru-sistemleri',
              },
              {
                title: 'Altyapı Boru Sistemleri',
                link: '/urunler/altyapi-boru-sistemleri',
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
                link: '/bayilerimiz',
              },
              {
                title: 'Projelerimiz',
                link: '/projelerimiz',
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
      image:
        '/productImages/üst yapı borular/ATIK SU SESSİZ- TRİBPLEX BORU VE EK PARÇALAR/0.jpg',
      description:
        'ELITEPIPE, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
      link: 'urunler/bina-ici-boru-sistemleri/elitepipe',
    },
    {
      title: 'Sterile Pipe',
      image:
        '/productImages/üst yapı borular/ATIK SU SESSİZ- TRİBPLEX BORU VE EK PARÇALAR/0.jpg',
      description:
        'Sterile Pipe, hijyenik ve güvenli su taşıma çözümleri sunan yenilikçi bir boru sistemidir.',
      link: 'urunler/bina-ici-boru-sistemleri/sterile-pipe',
    },
    {
      title: 'Elastica',
      image:
        '/productImages/üst yapı borular/ATIK SU SESSİZ- TRİBPLEX BORU VE EK PARÇALAR/0.jpg',
      description:
        'Elastica boruları, yüksek sıcaklık dayanımı ve uygulama kolaylığı ile öne çıkar. ',
      link: '/elitepipe',
    },
    {
      title: 'Soft Power',
      image:
        '/productImages/üst yapı borular/ATIK SU SESSİZ- TRİBPLEX BORU VE EK PARÇALAR/0.jpg',
      description:
        'Soft Power, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
      link: 'urunler/bina-ici-boru-sistemleri/soft-power',
    },
    {
      title: 'Nano Tech',
      image:
        '/productImages/üst yapı borular/ATIK SU SESSİZ- TRİBPLEX BORU VE EK PARÇALAR/0.jpg',
      description:
        'Nano Tech, gelişmiş teknolojisi ile yüksek performans ve dayanıklılık sunan yenilikçi bir boru sistemidir.',
      link: 'urunler/bina-ici-boru-sistemleri/nano-tech',
    },

    {
      title: 'Triplex Atık Su Boruları',
      image:
        '/productImages/üst yapı borular/ATIK SU SESSİZ- TRİBPLEX BORU VE EK PARÇALAR/0.jpg',
      description:
        'Triplex Atık Su Boruları, dayanıklı ve uzun ömürlü yapısı ile atık su taşımada güvenilir bir çözümdür.',
      link: 'urunler/bina-ici-boru-sistemleri/triplex-atik-su-borulari',
    },
  ],
};

const dealerList: dealerListParams = [
  {
    id: 101786,
    cityId: 6,
    name: 'AKNAZ YAPI ISITMA SOĞUTMA İNŞAAT',
    phone: '0312 385 49 53',
    address: 'Y.MAHALLE / ANKARA',
    email: '',
    mapsLink: '',
  },
  {
    id: 102132,
    cityId: 38,
    name: 'ORKİDE İZOLASYON İNŞ.GIDA SN.TİC.LT',
    phone: '0541 254 40 45',
    address: 'TALAS/KAYSERİ',
    email: '',
    mapsLink: '',
  },
  {
    id: 101833,
    cityId: 6,
    name: 'FM GRUP TOPTAN İNŞAAT MALZEMELERİ',
    phone: '0532 671 95 40',
    address: 'MAMAK / ANKARA',
    email: '',
    mapsLink: '',
  },
  {
    id: 100959,
    cityId: 38,
    name: 'YELKEN YAPI MALZEMELERİ İNŞ. TUR. S',
    phone: '0 352 336 16 00',
    address: 'MELİKGAZİ/KAYSERİ',
    email: '',
    mapsLink: '',
  },
  {
    id: 101806,
    cityId: 42,
    name: 'BEYMAK ENERJİ GIDA İNŞ GIDA TEM HIR',
    phone: '0332 249 41 41',
    address: 'KARATAY / KONYA',
    email: '',
    mapsLink: '',
  },
  {
    id: 102204,
    cityId: 38,
    name: 'TEKNO MALZEMECİLİK SIHHİ TESİSAT YA',
    phone: '0542 728 52 79',
    address: 'MELİKGAZİ/KAYSERİ',
    email: '',
    mapsLink: '',
  },
  {
    id: 102054,
    cityId: 50,
    name: 'NECMİ SEHA CANTEKİN',
    phone: '0533 576 46 32',
    address: 'MERKEZ/NEVŞEHİR',
    email: '',
    mapsLink: '',
  },
  {
    id: 102231,
    cityId: 42,
    name: 'YAKARER NAKLİYAT VE PAZARLAMA LTD.Ş',
    phone: '0 533 686 95 65',
    address: 'KARATAY/KONYA',
    email: '',
    mapsLink: '',
  },
  {
    id: 102114,
    cityId: 58,
    name: 'HASAN YILDIZELİ',
    phone: '0 346 218 17 07',
    address: 'MERKEZ/SİVAS',
    email: '',
    mapsLink: '',
  },
  {
    id: 101773,
    cityId: 50,
    name: 'KIRMIZITOPRAK YAPI SANAYİ VE TİCARE',
    phone: '0 384 212 78 50',
    address: 'MERKEZ / NEVŞEHİR',
    email: '',
    mapsLink: '',
  },
  {
    id: 102067,
    cityId: 51,
    name: 'FATİH AÇIKGÖZ-SARE YAPI',
    phone: '0532 172 82 51',
    address: 'MERKEZ/NİĞDE',
    email: '',
    mapsLink: '',
  },
  {
    id: 102160,
    cityId: 6,
    name: 'ÖZKARDEŞLER MEKANİK MÜH.SAN.TİC.LTD',
    phone: '0542 729 79 21',
    address: 'ALTINDAĞ/ANKARA',
    email: '',
    mapsLink: '',
  },
  {
    id: 100041,
    cityId: 40,
    name: 'ALEV TİCARET-HASAN TAT',
    phone: '0 386 212 09 29',
    address: 'KIRŞEHİR/MERKEZ',
    email: '',
    mapsLink: '',
  },
  {
    id: 100488,
    cityId: 6,
    name: 'PRAMİD İNŞ.MLZ.ISI SİST.SAN. VE',
    phone: '0 312 310 55 55',
    address: 'ULUS/ANKARA',
    email: '',
    mapsLink: '',
  },
  {
    id: 101781,
    cityId: 6,
    name: 'DOĞATEK DOĞALGAZ İNŞ.TİC.VE SAN.LTD.ŞTİ.',
    phone: '0 312 350 42 50',
    address: 'SİTELER-ALTINDAĞ/ANKARA',
    email: '',
    mapsLink: '',
  },
  {
    id: 101669,
    cityId: 35,
    name: 'HVK MÜHENDİSLİK İNŞAAT VE DIŞ TİC A',
    phone: '0232 469 30 30',
    address: 'KONAK / İZMİR',
    email: '',
    mapsLink: '',
  },
  {
    id: 101798,
    cityId: 16,
    name: 'MAKRO ISI CIHAZLARI PAZARLAMA',
    phone: '444 33 91',
    address: 'OSMANGAZİ / BURSA',
    email: '',
    mapsLink: '',
  },
  {
    id: 100926,
    cityId: 48,
    name: 'YAĞMUR İNŞAAT YAPI MALZ.TUR.SAN',
    phone: '0 252 363 76 86',
    address: 'KONACIK / BODRUM / MUĞLA',
    email: '',
    mapsLink: '',
  },
  {
    id: 102068,
    cityId: 3,
    name: 'GÜNDAY HIRDAVAT BOYA YAPI MLZ.SAN.V',
    phone: '0544 734 87 78',
    address: 'BOLVADİN/AFYONKARAHİSAR',
    email: '',
    mapsLink: '',
  },
  {
    id: 101644,
    cityId: 7,
    name: 'ANTALYA AKDENİZ PASLANMAZ METAL',
    phone: '0242 221 53 51',
    address: 'KEPEZ / ANTALYA',
    email: '',
    mapsLink: '',
  },
  {
    id: 101824,
    cityId: 7,
    name: 'MEHMET KURT   2H İNŞAAT MALZEMELERİ',
    phone: '0533 544 91 02',
    address: 'ANTALYA',
    email: '',
    mapsLink: '',
  },
  {
    id: 102095,
    cityId: 17,
    name: '4-B ISI SİS.TRZ.İNŞ.SAN.VE TİC.LTD.',
    phone: '0286 217 04 64',
    address: 'ÇANAKKALE',
    email: '',
    mapsLink: '',
  },
  {
    id: 102113,
    cityId: 35,
    name: 'EGE HOME YAPI MARKET LTD.ŞTİ',
    phone: '0533 391 16 14',
    address: 'KARŞIYAKA/İZMİR',
    email: '',
    mapsLink: '',
  },
  {
    id: 102280,
    cityId: 16,
    name: 'AYRINTI MEKANİK YAPI TES.HİD.İZO.DEK.İNŞ.TEK.MLZ.SAN. VE TİC.LTD.ŞTİ.',
    phone: '0224 443 54 07',
    address: 'NİLÜFER/BURSA',
    email: '',
    mapsLink: '',
  },
  {
    id: 101517,
    cityId: 34,
    name: 'KOLLUN YAPI MALZ.SAN VE TİC.LTD.ŞTİ',
    phone: '0 212 445 89 67',
    address: 'ESENLER / İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 101805,
    cityId: 34,
    name: 'ARON MİMARLIK MÜH VE İNŞ HİZMETLERİ',
    phone: '0216 709 71 42',
    address: 'ÜSKÜDAR / İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 102105,
    cityId: 34,
    name: 'BETA ISITMA VE SOĞUTMA MLZ.ELKT.İNŞ',
    phone: '0212 596 51 61',
    address: 'ESENYURT/İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 100502,
    cityId: 34,
    name: 'SEMA İNŞ.MALZ.ÜRT. PAZ. A.Ş.',
    phone: '0 212 548 32 40',
    address: 'KÜÇÜKÇEKMECE / İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 101746,
    cityId: 34,
    name: 'ORTEK ENERJİ MALZEME SATIŞ VE SERVİ',
    phone: '0 212 812 88 40',
    address: 'ESENYURT/ İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 100379,
    cityId: 34,
    name: 'MARMARA DETAY İNŞ.MLZ.TA.PAZ.İÇ VE',
    phone: '0 212 475 70 05',
    address: 'SULTANGAZİ/İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 102010,
    cityId: 34,
    name: 'ARABOĞLU YAPI MLZ.SAN.VE TİC.LTD.ŞT',
    phone: '0212 882 04 70',
    address: 'BÜYÜKÇEKMECE/İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 101586,
    cityId: 59,
    name: 'İNTEGRAL ENDÜSTRİ TEKNİK MÜH. İNŞ.',
    phone: '0 282 686 77 30',
    address: 'ERGENE / TEKİRDAĞ',
    email: '',
    mapsLink: '',
  },
  {
    id: 101915,
    cityId: 22,
    name: 'PEKER MOBİLYA VE MÜHENDİSLİK HİZMET',
    phone: '0 284 235 26 27',
    address: 'MERKEZ/EDİRNE',
    email: '',
    mapsLink: '',
  },
  {
    id: 102134,
    cityId: 34,
    name: 'GAYE MÜH.MİMARLIK VE İNŞ.ANONİM ŞİR',
    phone: '0532 498 16 13',
    address: 'KÜÇÜKÇEKMECE/İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 102110,
    cityId: 34,
    name: 'SEA TESİSAT HIRDAVAT ELEK.İNŞ.TAAH.',
    phone: '0212 252 44 45',
    address: 'BAKIRKÖY/İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 101712,
    cityId: 34,
    name: 'YMD GRUP İNŞAAT MALZEMELERİ PAZARLA',
    phone: '0212 803 41 54',
    address: 'ŞİŞLİ / İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 102098,
    cityId: 34,
    name: 'DEMİRYÜREK İNŞAAT MLZ.SAN.İ',
    phone: '0539 230 29 92',
    address: 'TUZLA/İSTANBUL',
    email: '',
    mapsLink: '',
  },
  {
    id: 100439,
    cityId: 21,
    name: 'NURAL İNŞ.TAAH.MAD.SAN.LTD.ŞTİ.',
    phone: '0 412 233 42 83',
    address: 'KAYAPINAR / DİYARBAKIR',
    email: '',
    mapsLink: '',
  },
  {
    id: 102094,
    cityId: 72,
    name: 'GÜZEL SU ALTYAPI VE İÇ TES.SİS.İNŞ.',
    phone: '0 488 212 28 63',
    address: 'MERKEZ/BATMAN',
    email: '',
    mapsLink: '',
  },
  {
    id: 101953,
    cityId: 23,
    name: 'DOĞUSAN GROUP INSAAT MAKINA MÜH.',
    phone: '0530 328 44 03',
    address: 'MERKEZ / ELAZIĞ',
    email: '',
    mapsLink: '',
  },
  {
    id: 102093,
    cityId: 65,
    name: 'NASİP TİCARET-CANGİR ASLAN',
    phone: '0 432 216 47 93',
    address: 'VAN',
    email: '',
    mapsLink: '',
  },
  {
    id: 102101,
    cityId: 65,
    name: 'ERHAN GÜNEŞ-AYHAN İNŞAAT',
    phone: '0541 856 05 65',
    address: 'İPEKYOLU-VAN',
    email: '',
    mapsLink: '',
  },
  {
    id: 102222,
    cityId: 21,
    name: 'İNTEBO YAPI İNŞ.TAAH.İŞLERİ.SAN.TİC',
    phone: '0412 237 01 29',
    address: 'KAYAPINAR/DİYARBAKIR',
    email: '',
    mapsLink: '',
  },
  {
    id: 101952,
    cityId: 21,
    name: 'CENTROPOL ENERJİ SANAYİ VE TİC.ANON',
    phone: '0412 236 12 94',
    address: 'KAYAPINAR/ DIYARBAKIR',
    email: '',
    mapsLink: '',
  },
  {
    id: 100705,
    cityId: 65,
    name: 'AKTAŞSAN TES VE YAPI MALZ.İNŞ.TAH.İ',
    phone: '0 432 214 88 48',
    address: 'TUŞBA/VAN',
    email: '',
    mapsLink: '',
  },
  {
    id: 101929,
    cityId: 27,
    name: 'MALA İNŞAAT PLASTİK TAŞ.',
    phone: '0541 918 71 72',
    address: 'ŞEHİTKAMİL / GAZİANTEP',
    email: '',
    mapsLink: '',
  },
  {
    id: 102239,
    cityId: 21,
    name: 'SERDAR BADEM İNŞ.DIŞ.TİC.LTD.ŞTİ.',
    phone: '0536 649 7674',
    address: 'BAĞLAR/DİYARBAKIR',
    email: '',
    mapsLink: '',
  },
  {
    id: 101820,
    cityId: 21,
    name: 'CENTİLMEN İNŞ MAKINA ELEK GIDA MAD',
    phone: '0412 238 17 08',
    address: 'YENİŞEHİR / DİYARBAKIR',
    email: '',
    mapsLink: '',
  },
  {
    id: 100745,
    cityId: 63,
    name: 'AKTİF YAPI SAN. VE TİC.LTD.ŞTİ.',
    phone: '0414 312 08 36',
    address: 'KARAKÖPRÜ/ŞANLIURFA',
    email: '',
    mapsLink: '',
  },
  {
    id: 102224,
    cityId: 72,
    name: 'SELAHATTİN BULŞU',
    phone: '0535 509 80 05',
    address: 'MERKEZ / BATMAN',
    email: '',
    mapsLink: '',
  },
  {
    id: 102229,
    cityId: 47,
    name: 'ARJ YAPI İNŞ.TES.ELEK.NAK.İTH.İHR.S',
    phone: '0 536 341 20 81',
    address: 'ARTUKLU/MARDİN',
    email: '',
    mapsLink: '',
  },
  {
    id: 102233,
    cityId: 56,
    name: 'ÖZ DAYANLAR YAPI İNŞ.SAN.TİC.LTD.ŞT',
    phone: '0536 435 47 40',
    address: 'MERKEZ/SİİRT',
    email: '',
    mapsLink: '',
  },
  {
    id: 102217,
    cityId: 44,
    name: 'ARMADA SAĞLIK SİS.SAN.VE TİC.A.Ş',
    phone: '0 530 170 85 08',
    address: 'BATTALGAZİ/MALATYA',
    email: '',
    mapsLink: '',
  },
  {
    id: 102242,
    cityId: 44,
    name: 'UMUTER ISI SİSTEMLERİ İNŞ.TAAH.',
    phone: '0 422 502 54 24',
    address: 'YEŞİLYURT/MALATYA',
    email: '',
    mapsLink: '',
  },
  {
    id: 102265,
    cityId: 46,
    name: 'ELBİSTAN FATİH YAPI ISI SİS.',
    phone: '0 530 110 55 28',
    address: 'KAHRAMANMARAŞ/ELBİSTAN',
    email: '',
    mapsLink: '',
  },
  {
    id: 102272,
    cityId: 65,
    name: 'İLYAS RUA - ADNAN İNŞAAT',
    phone: '0 432 223 66 66',
    address: 'TUŞBA/VAN',
    email: '',
    mapsLink: '',
  },
  {
    id: 100555,
    cityId: 61,
    name: 'TRABZON DİZAYN TEK.PLS.BORU',
    phone: '0 462 230 61 90',
    address: 'ORTAHİSAR/TRABZON',
    email: '',
    mapsLink: '',
  },
  {
    id: 101780,
    cityId: 55,
    name: 'BAUTHERM ISITMA SAN TİC A.Ş.',
    phone: '0362 266 43 47',
    address: 'TEKKEKÖY / SAMSUN',
    email: '',
    mapsLink: '',
  },
  {
    id: 101747,
    cityId: 41,
    name: 'ELSUM ISI SİSTEMLERİ VE TESİSAT İNŞ',
    phone: '0 533 657 54 57',
    address: 'BAŞİSKELE / KOCAELİ',
    email: '',
    mapsLink: '',
  },
  {
    id: 102018,
    cityId: 37,
    name: 'KASTAMONU SÜLEYMANOĞLU İNŞ.YAPI',
    phone: '0553 067 24 38',
    address: 'MERKEZ/KASTAMONU',
    email: '',
    mapsLink: '',
  },
  {
    id: 101927,
    cityId: 52,
    name: 'M.B. MEKANİK İNŞAAT-MUSTAFA BAŞ',
    phone: '0 452 212 12 19',
    address: 'ALTINORDU/ORDU',
    email: '',
    mapsLink: '',
  },
  {
    id: 101654,
    cityId: 28,
    name: 'GİRESUN YILDIZ YAPI MLZ.İNŞ.TAAH.',
    phone: '0 454 212 02 02',
    address: 'GİRESUN',
    email: '',
    mapsLink: '',
  },
  {
    id: 102108,
    cityId: 78,
    name: 'ZAFER DENİZ-DEZ METAL ENERJİ PLSTK.',
    phone: '0370 412 78 70',
    address: 'MERKEZ/KARABÜK',
    email: '',
    mapsLink: '',
  },
  {
    id: 101898,
    cityId: 52,
    name: 'GÜNKA SERAMİK İÇ VE DIŞ TİCARET',
    phone: '0542 245 65 75',
    address: 'FATSA / ORDU',
    email: '',
    mapsLink: '',
  },
  {
    id: 102264,
    cityId: 55,
    name: 'TUNÇ ISI SAN.TİC.LTD.ŞTİ.',
    phone: '0532 236 62 72',
    address: 'TEKKEKÖY/SAMSUN',
    email: '',
    mapsLink: '',
  },
  {
    id: 102258,
    cityId: 4,
    name: 'MEHMET SALİH CİVAŞ',
    phone: '0 546 854 43 71',
    address: 'DOĞUBEYAZIT/AĞRI',
    email: '',
    mapsLink: '',
  },
  {
    id: 102053,
    cityId: 69,
    name: 'YAVUZ ÇELİK',
    phone: '0532 672 64 09',
    address: 'MERKEZ/BAYBURT',
    email: '',
    mapsLink: '',
  },
  {
    id: 102149,
    cityId: 49,
    name: 'AKSİYON MAKİNE ELK.İNŞ.DOĞALGAZ',
    phone: '0542 521 30 49',
    address: 'MERKEZ/MUŞ',
    email: '',
    mapsLink: '',
  },
  {
    id: 102271,
    cityId: 25,
    name: 'ED NET YAPI MLZ.ORM.ÜRN.İNŞ.TAAH.',
    phone: '0 532 562 98 81',
    address: 'YAKITİYE/ERZURUM',
    email: '',
    mapsLink: '',
  },
  {
    id: 102052,
    cityId: 25,
    name: 'TAYHAN ÖMÜR YAPI MALZ.İNŞ.TAAH.',
    phone: '0530 512 77 22',
    address: 'OLTU/ERZURUM',
    email: '',
    mapsLink: '',
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

const countryCertificate: countryCertificateParams = {
  en: [
    {
      name: 'Germany',
      code: 'de',
      title: 'Germany Certificates',
      certificates: [],
    },
    {
      name: 'Russia',
      code: 'ru',
      title: 'Russia Certificates',
      certificates: [],
    },
    {
      name: 'Romania',
      code: 'ro',
      title: 'Romania Certificates',
      certificates: [],
    },
    {
      name: 'Turkey',
      code: 'tr',
      title: 'Turkey TSE Certificates and Test Reports',
      certificates: [],
    },
    {
      name: 'Belarus',
      code: 'by',
      title: 'Belarus Certificates',
      certificates: [],
    },
    {
      name: 'Ukraine',
      code: 'ua',
      title: 'Ukraine Certificates',
      certificates: [],
    },
    {
      name: 'Poland',
      code: 'pl',
      title: 'Poland Certificates',
      certificates: [],
    },
  ],
  tr: [
    {
      name: 'Almanya',
      code: 'de',
      title: 'Almanya Sertifikaları',
      certificates: [],
    },
    {
      name: 'Türkiye',
      code: 'tr',
      title: 'Türkiye TSE Sertifikaları ve Test Raporları',
      certificates: [
        {
          product: 'ElitePipe',
          allPDFs: [
            {
              name: 'PEX BORU TSE  HIJYEN TEST RAPORU',
              image:
                '/certificates/files/tr/imgs/RE_elite-sertifikaları/PEX BORU TSE  HIJYEN TEST RAPORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/RE_elite-sertifikaları/PEX BORU TSE  HIJYEN TEST RAPORU.pdf',
            },
            {
              name: 'TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI',
              image:
                '/certificates/files/tr/imgs/RE_elite-sertifikaları/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/RE_elite-sertifikaları/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI.pdf',
            },
            {
              name: 'TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI(ENG)',
              image:
                '/certificates/files/tr/imgs/RE_elite-sertifikaları/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI(ingilizce)_00001.jpg',
              link: '/certificates/files/tr/pdfs/RE_elite-sertifikaları/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI(ingilizce).pdf',
            },
          ],
        },
        {
          product: 'Yerli Malı',
          allPDFs: [
            {
              name: 'Yerli Malı Bel.PPRC Metalli Fittings',
              image:
                '/certificates/files/tr/imgs/Yerli-Malı/Yerli Malı Bel.PPRC Metalli Fittings.jpg',
              link: '/certificates/files/tr/pdfs/Yerli-Malı/Yerli Malı Bel.PPRC Metalli Fittings.pdf',
            },
          ],
        },
        {
          product: 'Atıksu Boru ve Ekleme Parça Sertifikaları',
          allPDFs: [
            {
              name: 'ATIKSU NANOTEK SESSİZLİK TEST RAPOR FRAUNHOFER',
              image:
                '/certificates/files/tr/imgs/atıksu-boru-ve-ekleme-parca-sertifikaları/ATIKSU NANOTEK SESSİZLİK TEST RAPORU FRAUNHOFER_00001.jpg',
              link: '/certificates/files/tr/pdfs/atıksu-boru-ve-ekleme-parca-sertifikaları/ATIKSU NANOTEK SESSİZLİK TEST RAPORU FRAUNHOFER.pdf',
            },
            {
              name: 'ATIKSU TRIPLEX SESSİZLİK TEST RAPORU FRAUNHOFER',
              image:
                '/certificates/files/tr/imgs/atıksu-boru-ve-ekleme-parca-sertifikaları/ATIKSU TRIPLEX SESSİZLİK TEST RAPORU FRAUNHOFER_00001.jpg',
              link: '/certificates/files/tr/pdfs/atıksu-boru-ve-ekleme-parca-sertifikaları/ATIKSU TRIPLEX SESSİZLİK TEST RAPORU FRAUNHOFER.pdf',
            },
            {
              name: 'triplextra yanmazlık belgesi',
              image:
                '/certificates/files/tr/imgs/atıksu-boru-ve-ekleme-parca-sertifikaları/triplextra_yanmazlık_belgesi_00001.jpg',
              link: '/certificates/files/tr/pdfs/atıksu-boru-ve-ekleme-parca-sertifikaları/triplextra_yanmazlık_belgesi.pdf',
            },
            {
              name: 'TS EN 1451-1 ATIKSU BORU VE EK PARÇALARI TSE  SERTİFİKASI',
              image:
                '/certificates/files/tr/imgs/atıksu-boru-ve-ekleme-parca-sertifikaları/TS EN 1451-1 ATIKSU BORU VE EK PARÇALARI TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/atıksu-boru-ve-ekleme-parca-sertifikaları/TS EN 1451-1 ATIKSU BORU VE EK PARÇALARI TSE  SERTİFİKASI.pdf',
            },
            {
              name: 'yanmaz boru sessizlik belgesi ingilizce',
              image:
                '/certificates/files/tr/imgs/atıksu-boru-ve-ekleme-parca-sertifikaları/yanmaz_boru_sessizlik_belgesi_ingilizce_00001.jpg',
              link: '/certificates/files/tr/pdfs/atıksu-boru-ve-ekleme-parca-sertifikaları/yanmaz_boru_sessizlik_belgesi_ingilizce.pdf',
            },
          ],
        },
        {
          product: 'IMA Serterifikaları',
          allPDFs: [
            {
              name: 'IMA Test Report V241-20-1  HDPE100 BORU',
              image:
                '/certificates/files/tr/imgs/ima-sertifikaları/IMA Test Report V241-20-1  HDPE100 BORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/ima-sertifikaları/IMA Test Report V241-20-1  HDPE100 BORU.pdf',
            },
            {
              name: 'IMA Test Report V241-20-2 PE80 D.GAZ BORU',
              image:
                '/certificates/files/tr/imgs/ima-sertifikaları/IMA Test Report V241-20-2 PE80 D.GAZ BORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/ima-sertifikaları/IMA Test Report V241-20-2 PE80 D.GAZ BORU.pdf',
            },
            {
              name: 'IMA Test Report V241-20-3  PPR BORU',
              image:
                '/certificates/files/tr/imgs/ima-sertifikaları/IMA Test Report V241-20-3  PPR BORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/ima-sertifikaları/IMA Test Report V241-20-3  PPR BORU.pdf',
            },
            {
              name: 'IMA Test Report V241-20-4 PPR FITTINGS',
              image:
                '/certificates/files/tr/imgs/ima-sertifikaları/IMA Test Report V241-20-4 PPR FITTINGS_00001.jpg',
              link: '/certificates/files/tr/pdfs/ima-sertifikaları/IMA Test Report V241-20-4 PPR FITTINGS.pdf',
            },
          ],
        },
        {
          product: 'PPR Sert',
          allPDFs: [
            {
              name: 'PPR BORU VE FITTINGS TSE HIJYEN TEST RAPORU',
              image:
                '/certificates/files/tr/imgs/PPR-Sert/PPR BORU VE FITTINGS TSE HIJYEN TEST RAPORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/PPR BORU VE FITTINGS TSE HIJYEN TEST RAPORU.pdf',
            },
            {
              name: 'TS 13715 CAM ELYAF TAKVİYELİ KOMPOZİT BORU',
              image:
                '/certificates/files/tr/imgs/PPR-Sert/TS 13715 CAM ELYAF TAKVİYELİ KOMPOZİT BORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/TS 13715 CAM ELYAF TAKVİYELİ KOMPOZİT BORU.pdf',
            },
            {
              name: 'TS EN ISO 15874-2 PPR BORU TSE  SERTİFİKASI(ingilizce)',
              image:
                '/certificates/files/tr/imgs/PPR-Sert/TS EN ISO 15874-2 PPR BORU TSE  SERTİFİKASI(ingilizce)_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/TS EN ISO 15874-2 PPR BORU TSE  SERTİFİKASI(ingilizce).pdf',
            },
            {
              name: 'TS EN ISO 15874-2 PPR BORU TSE  SERTİFİKASI(türkçe)',
              image:
                '/certificates/files/tr/imgs/PPR-Sert/TS EN ISO 15874-2 PPR BORU TSE  SERTİFİKASI(türkçe)_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/TS EN ISO 15874-2 PPR BORU TSE  SERTİFİKASI(türkçe).pdf',
            },
            {
              name: 'TS EN ISO 15874-3 PPR FIT. TSE  SERTİFİKASI(ingilizce)',
              image:
                '/certificates/files/tr/imgs/PPR-Sert/TS EN ISO 15874-3 PPR FIT. TSE  SERTİFİKASI(ingilizce)_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/TS EN ISO 15874-3 PPR FIT. TSE  SERTİFİKASI(ingilizce).pdf',
            },
            {
              name: 'TS EN ISO 15874-3 PPR FIT. TSE  SERTİFİKASI(turkçe)',
              image:
                '/certificates/files/tr/imgs/PPR-Sert/TS EN ISO 15874-3 PPR FIT. TSE  SERTİFİKASI(turkçe)_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/TS EN ISO 15874-3 PPR FIT. TSE  SERTİFİKASI(turkçe).pdf',
            },
          ],
        },
        {
          product: 'RTP VE SOFT',
          allPDFs: [
            {
              name: 'RTP BORU DENEY SERTİFİKASI',
              image:
                '/certificates/files/tr/imgs/RE_RTP-VE-SOFT/RTP BORU DENEY SERTİFİKASI.jpg',
              link: '/certificates/files/tr/pdfs/RE_RTP-VE-SOFT/RTP BORU DENEY SERTİFİKASI.pdf',
            },
            {
              name: 'SOFT POWER PIPE DENEY SERTİFİKASI',
              image:
                '/certificates/files/tr/imgs/RE_RTP-VE-SOFT/SOFT POWER PIPE DENEY SERTİFİKASI.jpg',
              link: '/certificates/files/tr/pdfs/RE_RTP-VE-SOFT/SOFT POWER PIPE DENEY SERTİFİKASI.pdf',
            },
          ],
        },
        {
          product: 'Sarmal ve Korige',
          allPDFs: [
            {
              name: 'DIN 16961 SARMAL BELGELENDİRME',
              image:
                '/certificates/files/tr/imgs/sarmal-ve-korige/DIN 16961 SARMAL BELGELENDİRME.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-korige/DIN 16961 SARMAL BELGELENDİRME.pdf',
            },
            {
              name: 'ISRAEL INSTITUTE OF QUALITY CORRUGATED PIPE CERTIFICATE 112093',
              image:
                '/certificates/files/tr/imgs/sarmal-ve-korige/ISRAEL INSTITUTE OF QUALITY CORRUGATED PIPE CERTIFICATE 112093_00001.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-korige/ISRAEL INSTITUTE OF QUALITY CORRUGATED PIPE CERTIFICATE 112093.pdf',
            },
            {
              name: 'İSRAİL KALİTE ENSTİTÜSÜ SPİRAL SARIMLI BORU SERTİFİKASI -112093-ENG_',
              image:
                '/certificates/files/tr/imgs/sarmal-ve-korige/İSRAİL KALİTE ENSTİTÜSÜ SPİRAL SARIMLI BORU SERTİFİKASI -112093-ENG__00001.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-korige/İSRAİL KALİTE ENSTİTÜSÜ SPİRAL SARIMLI BORU SERTİFİKASI -112093-ENG_.pdf',
            },
            {
              name: 'TS 12132 SARMAL BORU TSE  SERTİFİKASI',
              image:
                '/certificates/files/tr/imgs/sarmal-ve-korige/TS 12132 SARMAL BORU TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-korige/TS 12132 SARMAL BORU TSE  SERTİFİKASI.pdf',
            },
            {
              name: 'TS EN 13476-3 KORİGE BORU TSE  SERTİFİKASI',
              image:
                '/certificates/files/tr/imgs/sarmal-ve-korige/TS EN 13476-3 KORİGE BORU TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-korige/TS EN 13476-3 KORİGE BORU TSE  SERTİFİKASI.pdf',
            },
          ],
        },
      ],
    },
    {
      name: 'Romanya',
      code: 'ro',
      title: 'Romanya Sertifikaları',
      certificates: [],
    },
    {
      name: 'Rusya',
      code: 'ru',
      title: 'Rusya Sertifikaları',
      certificates: [],
    },
    {
      name: 'Beyaz Rusya',
      code: 'by',
      title: 'Beyaz Rusya Sertifikaları',
      certificates: [],
    },
    {
      name: 'Ukrayna',
      code: 'ua',
      title: 'Ukrayna Sertifikaları',
      certificates: [],
    },
    {
      name: 'Polonya',
      code: 'pl',
      title: 'Polonya Sertifikaları',
      certificates: [],
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
  ],
};

const showroomProduct: matrixCardParams = {
  en: [
    {
      id: 1,
      title: 'ElitePipe',
      color: 'blue',
      description:
        'ELITEPIPE is an innovative pipe system that is durable, flexible, easy to carry, and cost-saving.',
      image: '/productImages/product-1.png',
      link: '/elitepipe',
      highlights: [
        { title: 'Durable', icon: '/icons/durable.png' },
        { title: 'Flexible', icon: '/icons/flexible.png' },
        { title: 'Cost Saving', icon: '/icons/cost-saving.png' },
      ],
    },
    {
      id: 2,
      title: 'SterilePipe',
      color: 'red',
      description:
        'Sterile Pipe is a pipe system that is resistant microorganisms and high temperatures.',
      image: '/productImages/product-2.png',
      link: '/sterilepipe',
      highlights: [
        {
          title: 'High Temperature Resistance',
          icon: '/icons/high-temperature.png',
        },
        {
          title: 'Microorganism Resistance',
          icon: '/icons/sterilepipe - mikrop.png',
        },
      ],
    },
  ],
  tr: [
    {
      id: 1,
      title: 'ElitePipe',
      color: 'blue',
      description:
        'ELITEPIPE, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
      image: '/productImages/product-1.png',
      link: '/elitepipe',
      highlights: [
        { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
        { title: 'Esnek', icon: '/icons/flexible.png' },
        { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
      ],
    },
    {
      id: 2,
      title: 'SterilePipe',
      color: 'red',
      description:
        'SterilePipe, mikroorganizmalara karşı dirençli, yüksek sıcaklıklara dayanıklı ve birçok alanda kullanılmaktadır',
      image: '/productImages/sterilepipe-1.png',
      link: '/sterilepipe',
      highlights: [
        { title: 'Yüksek Sıcaklık Direnci', icon: '/icons/heat-proof.png' },
        { title: 'Mikroorganizma Direnci', icon: '/icons/antibacterial.png' },
      ],
    },
  ],
};

const kurumsalLinks: {
  [keyof: string]: {
    title: string;
    link: string;
  }[];
} = {
  en: [
    {
      title: 'About Us',
      link: '/about-us',
    },
    {
      title: 'History',
      link: '/history',
    },
    {
      title: 'Vision and Mission',
      link: '/vision-and-mission',
    },
    {
      title: 'Commitment',
      link: '/commitment',
    },
    {
      title: 'Awards and Achievements',
      link: '/awards-and-achievements',
    },
  ],
  tr: [
    {
      title: 'Kurumsal',
      link: '/kurumsal',
    },
    {
      title: 'Tarihçe',
      link: '/kurumsal/tarihce',
    },
    {
      title: 'Vizyon ve Misyon',
      link: '/kurumsal/vizyon-ve-misyon',
    },
    {
      title: 'Taahhütname',
      link: '/kurumsal/taahhutname',
    },
    {
      title: 'Ödüller ve Başarılar',
      link: '/kurumsal/oduller-ve-basarilar',
    },
  ],
};

export {
  calculationsCardData,
  certificateList,
  contactInfo,
  countryCertificate,
  dealerList,
  kurumsalLinks,
  languageTexts,
  productList,
  showroomProduct,
  sliderItems,
};
