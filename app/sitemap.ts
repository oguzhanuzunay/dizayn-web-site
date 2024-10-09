import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dizayngrup.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr',
          en: 'https://dizayngrup.com/en',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/bayilerimiz',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/bayilerimiz',
          en: 'https://dizayngrup.com/en/our-dealers',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/bayimiz-ol',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/bayimiz-ol',
          en: 'https://dizayngrup.com/en/become-a-dealer',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/hesaplamalar',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/hesaplamalar',
          en: 'https://dizayngrup.com/en/calculations',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/iletisim',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/iletisim',
          en: 'https://dizayngrup.com/en/contact',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/urunler',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/urunler',
          en: 'https://dizayngrup.com/en/products',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/sertifikalar',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/sertifikalar',
          en: 'https://dizayngrup.com/en/certificates',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/kurumsal',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/kurumsal',
          en: 'https://dizayngrup.com/en/corporate',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/kurumsal/vizyon-ve-misyon',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/kurumsal/vizyon-ve-misyon',
          en: 'https://dizayngrup.com/en/corporate/vision-and-mission',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/kurumsal/oduller-ve-basarilar',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/kurumsal/oduller-ve-basarilar',
          en: 'https://dizayngrup.com/en/corporate/awards-and-achievements',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/kurumsal/tarihce',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/kurumsal/tarihce',
          en: 'https://dizayngrup.com/en/corporate/history',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/kurumsal/taahhutname',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/kurumsal/taahhutname',
          en: 'https://dizayngrup.com/en/corporate/commitment',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/referanslar',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/referanslar',
          en: 'https://dizayngrup.com/en/our-references',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/urunler/altyapi-boru-sistemleri',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/urunler/altyapi-boru-sistemleri',
          en: 'https://dizayngrup.com/en/products/infrastructure-pipe-systems',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/urunler/altyapi-boru-sistemleri/[product]',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/urunler/altyapi-boru-sistemleri/[product]',
          en: 'https://dizayngrup.com/en/products/infrastructure-pipe-systems/[product]',
        },
      },
    },
    {
      url: 'https://dizayngrup.com/urunler/bina-ici-boru-sistemleri',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/urunler/bina-ici-boru-sistemleri',
          en: 'https://dizayngrup.com/en/products/indoor-pipe-systems',
        },
      },
    },
     {
      url: 'https://dizayngrup.com/urunler/bina-ici-boru-sistemleri/[product]',
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: 'https://dizayngrup.com/tr/urunler/bina-ici-boru-sistemleri/[product]',
          en: 'https://dizayngrup.com/en/products/indoor-pipe-systems/[product]',
        },
      },
    },
  ]
}