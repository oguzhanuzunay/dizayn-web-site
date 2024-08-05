'use client';
import Header from '@/components/Header';
import MatrixCard from '@/components/cards/MatrixCard';
import ProductCard from '@/components/cards/ProductCard';
import { SectionWrapper } from '@/hoc';
import { useTranslations } from 'next-intl';

interface productParams {
  [key: string]: {
    title: string;
    featuredProduct?: boolean;
    image?: string;
    description: string;
    logo: string;
    isNewTech?: boolean;
    banner: {
      vertical: string;
      horizontal: string;
      bgImage?: string;
      PLP: string;
    };
    link: string;
    background: string;
    highlights: {
      title: string;
      icon: string;
    }[];
  };
}

const AltYapı = () => {
  const t = useTranslations('ProductList');

  const productList: productParams = {
    superStructureProducts: [
      {
        title: t('elitePipe.title'),
        description:
          'ElitePipe, yüksek sıcaklık ve basınç dayanımı ile güvenli ve uzun ömürlü bir boru sistemidir. PPR, PEX ve PERT boruların avantajlarını bir araya getirerek, üstün performans ve dayanıklılık sağlar.',
        featuredProduct: true,
        logo: '/productImages/üst yapı borular/elite-pipe-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/horizontal.png',
          bgImage: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/bg-image.png',
          PLP: 'productImages/üst yapı borular/elite-pipe-ve-ek/banner/PLP.png',
        },
        image: '/productImages/üst yapı borular/elite-pipe-ve-ek/elitePipeBanner.png',
        background: 'bg-background-1',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          {
            title: 'Yüksek Sıcaklıkta Yüksek Basınç Dayanımı',
            icon: '/icons/high-pressure.png',
          },
          {
            title: 'Kangal Halinde Sevkiyat Kolaylığı',
            icon: '/icons/worker-pushing-a-cart.png',
          },
          {
            title: 'Eksi 40 Derecede Dahi Kırılma Direnci',
            icon: '/icons/durable.png',
          },
        ],
      },

      {
        title: 'Sterile Pipe',
        description:
          "Sterile Pipe, bakteri, küf, mantar ve diğer mikrobiyal canlıları yok ederek içerisinden geçen suyu %99,9'a kadar sterilize eden yenilikçi bir boru sistemidir.",
        featuredProduct: true,
        logo: '/productImages/üst yapı borular/sterile-pipe/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/sterile-pipe/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/sterile-pipe/banner/horizontal.png',
          bgImage: '/productImages/üst yapı borular/sterile-pipe/banner/bg-image.png',
          PLP: '/productImages/üst yapı borular/sterile-pipe/banner/PLP.png',
        },
        image: '/productImages/üst yapı borular/sterile-pipe/sterilePipeBanner.png',
        background: 'bg-background-2',
        link: '/urunler/bina-ici-boru-sistemleri/sterilepipe',
        highlights: [
          { title: 'Antimikrobiyal Özellik', icon: '/icons/antimicrobial.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
          { title: 'Sağlıklı Su', icon: '/icons/drink-water.png' },
        ],
       
      },

      {
        title: 'SoftPower Boru',
        description:
          'SoftPower Boru, yüksek oksidasyon dayanımı, esneklik ve kolay montaj imkanı sunan, PE63 hammaddesinden üretilmiş dayanıklı ve uzun ömürlü bir boru sistemidir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/soft-power-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/soft-power-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/soft-power-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/soft-power-ek/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
        link: '/urunler/bina-ici-boru-sistemleri/softpower-boru',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],
        background: '',
      },

      {
        title: 'Elastica Boru',
        description:
          'Elastica Boru, yüksek sıcaklık ve basınca dayanıklılığı, esnek yapısı ve montaj kolaylığı ile öne çıkan yenilikçi bir boru sistemidir. Hem yerden ısıtma sistemlerinde hem de radyatörlü tesisatlarda güvenle kullanılabilir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/mobil-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages//üst yapı borular/mobil-boru-ve-ek/KILIFLI ELASTICA BORU.png',
        link: '/urunler/bina-ici-boru-sistemleri/elastica-boru',
        highlights: [
          {
            title: 'Yüksek Sıcaklık ve Basınç Dayanımı',
            icon: '/icons/high-temperature.png',
          },
          {
            title: 'Esneklik ve Dayanıklılık',
            icon: '/icons/flexible-durable.png',
          },
          { title: 'Kolay Montaj', icon: '/icons/easy-installation.png' },
        ],
        background: '',
      },

      {
        title: 'NanoTech Atık Su Borusu',
        description:
          'NanoTech Atık Su Borusu, ses yalıtımı sağlayan, yüksek dayanıklılığa sahip ve uzun ömürlü bir boru sistemidir. Bina içi ve dışı atık su tahliyesi için ideal bir çözümdür.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical:
            '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/vertical.jpg',
          horizontal:
            '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/PLP.png',
          bgImage: '',
        },
        image:
          '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/üst yapı borular/atık-su-nanotek-boru-ve-ek.png',
        link: '/urunler/bina-ici-boru-sistemleri/nanotek-ve-nanotek-premium',
        highlights: [
          { title: 'Ses Yalıtımı', icon: '/icons/soundproof.png' },
          { title: 'Yüksek Dayanıklılık', icon: '/icons/durability.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
        ],
        background: '',
      },

      {
        title: 'Triplex Atık Su Boruları',
        description:
          'Triplex Atık Su Boruları, bina içi ve dışı kullanılmış suyun tahliyesi için döşenen, yüksek dayanıklılığa sahip ve uzun ömürlü bir boru sistemidir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical:
            '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/vertical.jpg',
          horizontal:
            '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/PLP.png',
          bgImage: '',
        },
        image:
          '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/TRİPLEX ATIK SU BORUSU.png',
        link: '/urunler/bina-ici-boru-sistemleri/triplex-pipe',
        highlights: [
          { title: 'Kırılmaz Yapı', icon: '/icons/durable.png' },
          { title: 'Yüksek Sızdırmazlık', icon: '/icons/seal.png' },
          { title: 'Kolay Montaj', icon: '/icons/easy-installation.png' },
        ],
        background: '',
      },

      {
        title: 'PPR Boru',
        description:
          'PPR Boru ve ek parçaları, düşük eriyik akış indisli, yüksek moleküler ağırlıklı ve yüksek esnekliğe sahip Polipropilen Random Kopolimer hammaddesinden üretilmektedir.',
        featuredProduct: false,
        logo: '',
        isNewTech: false,
        banner: {
          vertical: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek.png',
        link: '/urunler/bina-ici-boru-sistemleri/ppr-boru',
        highlights: [
          { title: 'Yüksek Dayanım', icon: '/icons/high-durability.png' },
          { title: 'Kolay Kaynak', icon: '/icons/easy-welding.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
        ],
        background: '',
      },
    ],

    infrastructureProducts: [
      {
        title: 'SoftPower Boru',
        description:
          'SoftPower Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/soft-power-ek/logo.png',
        banner: {
          vertical: '/productImages/üst yapı borular/soft-power-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/soft-power-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/soft-power-ek/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
        link: '/urunler/bina-ici-boru-sistemleri/softpower-boru',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],
        background: '',
      },

      {
        title: 'RTP Boru',
        description:
          'RTP (Reinforced Thermoplastic Pipe) Borular yüksek basınç dayanımı ile her türlü su, gaz, petrol vb. taşınmasında kullanılmaktadır. Sahip olduğu güçlü kompozit yapısı ile çelik borular gibi yüksek basınçlara mukavemet gösterirken termoplastik hammaddesi ile de plastik boruların tüm avantajlarını kullanıcısına sunmaktadır.',
        featuredProduct: false,
        logo: '',
        isNewTech: true,
        banner: {
          vertical: '/productImages/alt yapı boruları/RTP BORU/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/RTP BORU/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/RTP BORU/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
        link: '/urunler/altyapi-boru-sistemleri/rtp-boru',
        highlights: [
          { title: 'Yüksek Basınç Dayanımı', icon: '/icons/high-pressure.png' },
          { title: 'Esneklik', icon: '/icons/flexible.png' },
          { title: 'Uzun Ömür', icon: '/icons/durable.png' },
        ],
        background: '',
      },

      {
        title: 'Telekom Boruları',
        description:
          'Kablo Muhafaza Boruları, hızla gelişen haberleşme ve data iletimi borulama sistemlerinde kullanılır. Talebe ve şartnameye uygun olarak, tekli ile üçlü arasında farklı seçeneklerle sunulur. Göz çoklayıcı ve tamamlayıcı elemanları olan ek parçalar ile bir sistem bütünü sunmaktadır.',
        featuredProduct: false,
        logo: '',
        isNewTech: true,
        banner: {
          vertical: '/productImages/alt yapı boruları/TELEKOM/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/TELEKOM/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/TELEKOM/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/TELEKOM/TELEKOM BORU 1.png',
        link: '/urunler/altyapi-boru-sistemleri/telekom-boru',
        highlights: [
          { title: 'Yüksek Dayanıklılık', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Kolay Kurulum', icon: '/icons/easy-installation.png' },
        ],
        background: '',
      },

      {
        title: 'Koruge Boru',
        description:
          'Koruge Boruları, kanalizasyon sistemlerinde yüksek dayanıklılık ve uzun ömür sunar.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/Koruge/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/Koruge/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/Koruge/banner/horizontal.jpg',
          PLP: '/productImages/alt yapı boruları/Koruge/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Koruge/Koruge BORU.png',
        link: '/urunler/altyapi-boru-sistemleri/koruge-boru',
        highlights: [
          { title: 'Yüksek Dayanıklılık', icon: '/icons/durable.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
          { title: 'Kolay Kurulum', icon: '/icons/easy-installation.png' },
        ],
        background: '',
      },

      {
        title: 'Dizayn Koruge Sarmal Boru',
        description:
          'Korige sarmal borular, iç ve dış katmanlardan oluşan çift katmanlı bir yapıya sahiptir. İç katman akışkanı taşıyan düz satıhlı borudur. Dış katman ise kaburgalı yapıdadır. Polietilen ve Polipropilen hammaddelerinden üretilmektedir.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/KorugeSarmal/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/KorugeSarmal/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/KorugeSarmal/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/KorugeSarmal/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/KorugeSarmal/koruge-sarmal-2.png',
        link: '/urunler/altyapi-boru-sistemleri/koruge-sarmal-boru',
        highlights: [
          { title: 'Yüksek Dayanıklılık', icon: '/icons/durable.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
          { title: 'Kolay Kurulum', icon: '/icons/easy-installation.png' },
        ],
        background: '',
      },

      {
        title: 'Dizayn PE 80 Doğalgaz Boru',
        description:
          'Dizayn PE 80 Doğalgaz Boru ve Ek Parçaları, doğalgaz hatlarında güvenilir ve dayanıklı çözümler sunar. Polietilen malzeme kullanımı sayesinde hafif, esnek ve darbelere dayanıklı olan bu borular, doğalgaz hatlarında güvenle kullanılabilir.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/PE 80/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/PE 80/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/PE 80/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/PE 80/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU.png',
        link: '/urunler/altyapi-boru-sistemleri/pe-80-dogalgaz-boru',
        highlights: [
          { title: 'Yüksek Basınç Dayanımı', icon: '/icons/high-pressure.png' },
          { title: 'Esnek ve Hafif', icon: '/icons/flexible.png' },
          { title: 'Kimyasal Dayanım', icon: '/icons/chemical-resistant.png' },
        ],
        productDetails: {
          title: 'Dizayn PE 80 Doğalgaz Boru',
          description:
            'Dizayn PE 80 doğalgaz boruları, yüksek kaliteli PE80 malzemesi kullanılarak üretilmiştir. Bu borular, yüksek basınç dayanımı ve esnek yapısı ile doğalgaz hatlarında güvenle kullanılabilir. PE80 doğalgaz boruları, hafif ve dayanıklı yapısı ile döşeme ve montaj kolaylığı sağlar.',
          features: [
            {
              title: 'Elastik Yapı',
              icon: '/icons/flexible.png',
              alt: 'Flexible',
              description:
                'Dizayn PE 80 Doğalgaz Boruları, elastik yapısıyla deprem gibi doğal afetlerde zarar görmez ve güvenilir bir şekilde kullanılır.',
            },
            {
              title: 'Yüksek Kimyasal Dayanım',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistant',
              description:
                'Bu borular, kimyasallara karşı yüksek direnç gösterir ve korozyon olmaz.',
            },
            {
              title: 'Hafif ve Kolay Kurulum',
              icon: '/icons/lightweight.png',
              alt: 'Lightweight',
              description:
                'Hafif yapısı sayesinde taşıma ve kurulum kolaylığı sağlar, işçilik maliyetlerini düşürür.',
            },
            {
              title: 'Uzun Ömür',
              icon: '/icons/long-lasting.png',
              alt: 'Long-lasting',
              description: 'Dizayn PE 80 Doğalgaz Boruları, en az 50 yıl servis ömrü sunar.',
            },
            {
              title: 'Elektrofüzyon Kaynak',
              icon: '/icons/welding.png',
              alt: 'Electrofusion',
              description:
                'En emniyetli kaynak yöntemi olan elektrofüzyon kaynağı ile birleştirilir, doğalgaz kaçağı riski minimuma indirilir.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'Dizayn PE 80 Doğalgaz Boru',
              description: 'Dizayn PE 80 Doğalgaz Boru',
            },
            {
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'Dizayn PE 80 Doğalgaz Boru',
              description: 'Dizayn PE 80 Doğalgaz Boru',
            },
            {
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 4.png',
              alt: 'Dizayn PE 80 Doğalgaz Boru',
              description: 'Dizayn PE 80 Doğalgaz Boru',
            },
          ],
          headers: [
            {
              title: '<b>Dizayn PE 80 Doğalgaz Boru</b> ve Ek Parçaları',
              description:
                'Dizayn PE 80 doğalgaz boruları, doğalgaz hatlarında güvenilir ve dayanıklı çözümler sunar. PE80 malzeme kullanımı sayesinde yüksek basınç dayanımı, esneklik ve uzun ömürlü kullanım sağlar. Detaylı bilgi ve fiyat listesi için internet sitemizi ziyaret edebilirsiniz.',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 1.jpg',
              alt: 'Dizayn PE 80 Doğalgaz Boru',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Avantajları</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları, yüksek basınç dayanımı, esneklik ve kimyasal direnç gibi özellikleri ile doğalgaz hatlarında güvenli ve uzun ömürlü çözümler sunar. PE80 malzeme kullanımı sayesinde bu borular, çeşitli uygulamalarda kullanılabilir.',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları, doğalgaz hatlarında, bina içi doğalgaz sistemlerinde ve diğer doğalgaz iletim hatlarında güvenle kullanılabilir. Bu borular, yüksek performansı ve dayanıklılığı ile geniş bir uygulama yelpazesi sunar.',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları, farklı çap ve basınç sınıflarında çeşitli ağırlıklarla üretilmektedir. Ağırlık tablosu, boruların içi boş silindir hacmi ve borunun yoğunluğu çarpılarak hesaplanmaktadır. Boruların üretim aşamasında ısıl işlem gördüğü için genleşme özelliği dikkate alınarak tablo hazırlanmıştır. Detaylı bilgi ve diğer çaplar için firmamızla iletişime geçebilirsiniz.',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru Teknik <b>Özellikleri</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları, yüksek basınç dayanımı, esneklik ve kimyasal direnç gibi özellikleri ile doğalgaz hatlarında güvenli ve uzun ömürlü çözümler sunar. Teknik özellikler şunlardır:\n<ul><li><b>Çalışma Sıcaklığı</b>: Sürekli 60°C, anlık 80°C sıcaklık dayanımı.</li><li><b>Çalışma Basıncı</b>: 4 bar basınç dayanımı.</li><li><b>Malzeme</b>: Özel formüllü PE80 malzeme.</li><li><b>Montaj Kolaylığı</b>: Esnek yapısı sayesinde kolay montaj imkanı.</li><li><b>Dayanıklılık</b>: Yüksek sıcaklık ve basınç dayanımı, çevresel etkilere karşı üstün direnç.</li><li><b>Düşük Sürtünme Direnci</b>: Verimli tesisat performansı için düşük sürtünme direnci.</li></ul>',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Ek Parçaları</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları için çeşitli ek parçalar mevcuttur. Bu ek parçalar, boruların montajını kolaylaştırır ve sistemlerin verimliliğini artırır. Ek parçalar, projelerinizin ihtiyaçlarına göre seçilebilir ve borularla uyumlu olarak kullanılabilir.',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Birleştirme Yöntemleri</b>',
              description:
                'Dizayn PE 80 doğalgaz borularının birleştirilmesinde farklı tipte birleştirme yöntemleri tercih edilmektedir. Bu yöntemler şunlardır:\n<ul><li><b>Elektrofüzyon Birleştirme</b>: Bu yöntem, doğalgaz borularının güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Elektrofüzyon fitingleri, boruların uçlarına yerleştirilir ve kaynak makinesi ile kolayca birleştirilir. Sağlam ve sızdırmaz bağlantı oluşturur.</li></ul>',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Kaynak Yöntemi: Elektrofüzyon</b>',
              description:
                'Elektrofüzyon kaynak yöntemi, Dizayn PE 80 doğalgaz borularının birleştirilmesinde kullanılan güvenilir ve sağlam bir yöntemdir. Elektrofüzyon kaynak, boru ve ek parçaların iç kısmında bulunan rezistans tellerinin elektrik enerjisi ile ısıtılmasıyla gerçekleştirilir. Bu işlem, boru yüzeylerinin erimesini ve birleşmesini sağlar. Kolay montaj imkanı sunan elektrofüzyon ek parçaları, boru uçlarına yerleştirilir ve kaynak makinesi ile kolayca birleştirilir. Sağlam ve sızdırmaz bağlantı oluşturur.',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Fiyat Listesi</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Dizayn PE 80 doğalgaz boruları, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Dizayn PE 80 doğalgaz boru avantajlarından yararlanmak ve 2024 Dizayn PE 80 Doğalgaz Boru Fiyat Listesine ulaşmak için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz.',
            },
          ],
          faqs: [
            {
              question: 'Dizayn PE 80 doğalgaz boruları hangi basınçtaki hatlarda kullanılabilir?',
              answer:
                'Dizayn PE 80 doğalgaz boruları, doğalgaz hatlarının 4 bar basınçlı kısımlarında güvenle kullanılabilir. Bu borular, yüksek basınç dayanımı ve esnek yapısı ile doğalgaz hatlarında güvenli ve uzun ömürlü çözümler sunar.',
            },
            {
              question: 'Neden sarı renklidir?',
              answer:
                'Doğalgaz borularının sarı renkli olması, standartlar gereği zorunludur. Sarı renk, doğalgaz hatlarının içme suyu hatlarından kolayca ayırt edilmesini sağlar.',
            },
            {
              question: 'PE 80 doğalgaz boruları su hatlarında kullanılabilir mi?',
              answer:
                'Evet, PE 80 doğalgaz boruları su hatlarında da kullanılabilir. Bu borular, su hatlarında 10 bar basınca kadar dayanıklıdır ve içme suyu hatlarında güvenle kullanılabilir.',
            },
            {
              question: 'PE 80 doğalgaz boruları nasıl birleştirilir?',
              answer:
                'PE 80 doğalgaz boruları, elektrofüzyon fitingleri ile birleştirilir. Elektrofüzyon kaynak yöntemi, boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar.',
            },
            {
              question: 'PE 80 doğalgaz borularının avantajları nelerdir?',
              answer:
                'PE 80 doğalgaz boruları, yüksek basınç dayanımı, esneklik, kimyasal direnç, hafiflik ve kolay montaj gibi avantajlara sahiptir. Bu özellikleri ile doğalgaz hatlarında güvenli ve uzun ömürlü çözümler sunar.',
            },
            {
              question: 'PE 80 doğalgaz borularının servis ömrü ne kadardır?',
              answer:
                'PE 80 doğalgaz borularının servis ömrü 50 yıldır. Yüksek kaliteli malzemeler ve üretim teknikleri sayesinde bu borular, uzun ömürlü ve güvenli çözümler sunar.',
            },
            {
              question: 'PE 80 doğalgaz borularının fiyat listesine nasıl ulaşabilirim?',
              answer:
                'PE 80 doğalgaz borularının 2024 Fiyat Listesi için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz.',
            },
            {
              question: 'PE 80 doğalgaz boruları kimyasallara karşı dayanıklı mıdır?',
              answer:
                'Evet, PE 80 doğalgaz boruları kimyasal maddelere karşı yüksek direnç sağlar ve korozyona karşı koruma sunar.',
            },
            {
              question: 'PE 80 doğalgaz borularının teknik özellikleri nelerdir?',
              answer:
                'PE 80 doğalgaz boruları, yüksek basınç dayanımı, esneklik, kimyasal direnç ve uzun ömür gibi teknik özelliklere sahiptir. Detaylı teknik özellikler için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz.',
            },
            {
              question: 'PE 80 doğalgaz boruları nasıl temin edebilirim?',
              answer:
                "PE 80 doğalgaz borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
            },
          ],
          fittings: [
            {
              title: 'PE 80 Eşit Te',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'PE 80 Eşit Te',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Redüksiyon',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'PE 80 Redüksiyon',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Semer',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 4.png',
              alt: 'PE 80 Semer',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Dirsekler',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'PE 80 Dirsekler',
              category: 'Fittings',
            },
            {
              title: 'PE 80 İnegal Te',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'PE 80 İnegal Te',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Manşon',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 4.png',
              alt: 'PE 80 Manşon',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Körtapa',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'PE 80 Körtapa',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Flanş Adaptörü',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'PE 80 Flanş Adaptörü',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Dizayn Jeotermal Boru',
        description:
          'Dizayn Jeotermal Boruları, sıcak ve soğuk akışkanların ısı transferini engelleyen kompozit borulardır.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/Jeotermal/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/Jeotermal/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/Jeotermal/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/Jeotermal/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU.png',
        link: '/urunler/altyapi-boru-sistemleri/jeotermal-boru',
        highlights: [
          { title: 'Yüksek Isı Dayanımı', icon: '/icons/high-temperature.png' },
          {
            title: 'Korozyona Dayanıklı',
            icon: '/icons/corrosion.png',
          },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
        ],
        background: '',
      },

      {
        title: 'Dizayn Deniz Deşarj Boruları',
        description:
          'Dizayn Deniz Deşarj Boruları, deniz, göl ve nehirlerde atık suyun güvenli ve verimli bir şekilde tahliyesi için tasarlanmıştır.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/Deniz Desarj/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/Deniz Desarj/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/Deniz Desarj/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/Deniz Desarj/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU.png',
        link: '/urunler/altyapi-boru-sistemleri/deniz-desarj-boru',
        highlights: [
          { title: 'Yüksek Dayanıklılık', icon: '/icons/durable.png' },
          { title: 'Korozyon Direnci', icon: '/icons/corrosion.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
        ],
        background: '',
      },

      {
        title: 'Dizayn Kimyasal Tanklar',
        description:
          'Dizayn Kimyasal Tanklar, korozif kimyasalların güvenli ve verimli bir şekilde depolanması için tasarlanmıştır.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/kimyasal-tanklar/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/kimyasal-tanklar/kimyasal-tanklar.png',
        link: '/urunler/altyapi-boru-sistemleri/kimyasal-tanklar',
        highlights: [
          {
            title: 'Yüksek Kimyasal Dayanım',
            icon: '/icons/chemical-resistant.png',
          },
          { title: 'Hafif ve Dayanıklı', icon: '/icons/lightweight.png' },
          { title: 'Geri Dönüşümlü', icon: '/icons/recyclable.png' },
        ],
        productDetails: {
          title: 'Dizayn Kimyasal Tanklar',
          description:
            "Dizayn Kimyasal Tanklar, korozif yapıdaki asit, baz ve tuz gibi maddelerin depolanmasında kullanılabilir. Polietilen hammaddesi sayesinde yüksek kimyasal dayanım sunar ve su ile sıvı gıdaların depolanmasında da hijyenik çözümler sağlar. 1-50 m³ arası hacimlerde, Ø900 mm'den Ø3600 mm çapa kadar üretilebilir.",
          features: [
            {
              title: 'Yüksek Kimyasal Dayanım',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistant',
              description:
                'Polietilenin yüksek kimyasal dayanımı sayesinde korozif maddelere karşı dirençlidir.',
            },
            {
              title: 'Hafif ve Dayanıklı',
              icon: '/icons/lightweight.png',
              alt: 'Lightweight',
              description:
                "Metal ürünlere göre yoğunluğu 8'de 1 oranında olduğundan hafiftir ve taşıma maliyetlerini düşürür.",
            },
            {
              title: 'Hijyenik ve Güvenli',
              icon: '/icons/bacteria.png',
              alt: 'Hygienic',
              description:
                'Hijyenik özellikleri sayesinde su ve sıvı gıdaların güvenli depolanmasını sağlar.',
            },
            {
              title: 'Çevreci ve Geri Dönüşümlü',
              icon: '/icons/recyclable.png',
              alt: 'Recyclable',
              description:
                'Çevre dostu ve geri dönüştürülebilir özelliktedir, toprağı ve suyu kirletmez.',
            },
            {
              title: 'Esnek ve Dayanıklı',
              icon: '/icons/flexible.png',
              alt: 'Flexible',
              description:
                'Deprem gibi yer sarsıntılarından etkilenmez, esnek yapısı ile sarsıntıları absorbe eder.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/kimyasal-tanklar/tank.png',
              alt: 'Dizayn Kimyasal Tank',
              description: 'Dizayn Kimyasal Tank',
            },
            {
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Dizayn Kimyasal Tank',
              description: 'Dizayn Kimyasal Tank',
            },
            {
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Dizayn Kimyasal Tank',
              description: 'Dizayn Kimyasal Tank',
            },
          ],
          headers: [
            {
              title: '<b>Dizayn Kimyasal Tanklar</b> ve Ek Parçaları',
              description:
                'Dizayn Kimyasal Tanklar, korozif yapıdaki asit, baz ve tuz gibi maddelerin depolanmasında kullanılır. Polietilenin yüksek kimyasal dayanımı sayesinde uzun ömürlü ve güvenilir çözümler sunar. Dizayn Kimyasal Tanklar <b>Fiyat Listesi</b> için <b>0212 886 57 41</b> numaralı hattımızı arayarak bilgi sahibi olabilirsiniz.',
              alt: 'Dizayn Kimyasal Tanklar',
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Avantajları</b>',
              description:
                'Dizayn Kimyasal Tanklar, yüksek kimyasal dayanım, hafiflik ve dayanıklılık özellikleri ile öne çıkar. Bu özellikleri sayesinde asit, baz ve tuz gibi korozif maddelerin güvenli depolanmasını sağlar.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn Kimyasal Tanklar, korozif maddelerin yanı sıra su ve sıvı gıdaların depolanmasında da kullanılır. Kimyasal dayanımı sayesinde endüstriyel tesisler ve çeşitli depolama alanlarında güvenle kullanılabilir.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn Kimyasal Tanklarının ağırlık hesaplaması, içi boş silindir hacmi ve tankın yoğunluğu çarpılarak yapılır. Bu tankların ağırlık tablosu hazırlanırken tolerans değerleri dikkate alınmalıdır.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar Teknik <b>Özellikleri</b>',
              description:
                'Dizayn Kimyasal Tanklar, polietilen malzemeden üretilir ve yüksek kimyasal dayanım sunar. Bu tanklar, çeşitli hacim ve çaplarda üretilebilir ve korozif maddelerin depolanmasında idealdir. Yüksek esneklikleri sayesinde zorlu çevre koşullarında güvenle kullanılabilir.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Ek Parçaları</b>',
              description:
                'Dizayn Kimyasal Tank ek parçaları üstün kalitede üretilip tek tek kontrol edilerek sevk edilmektedir. Uygulama kolaylığı ve ergonomik tasarıma sahip ek parçalarımız, yüksek kalite ve uygun fiyat ekseninde siz değerli müşterilerimizin hizmetindedir. Kimyasal Tank ek parçaları, endüstriyel projelerde güvenle kullanılabilir.\n\n- Kimyasal Tank Ek Parçaları\n- Kimyasal Tank Eşit Te\n- Kimyasal Tank Redüksiyon\n- Kimyasal Tank Semer\n- Kimyasal Tank Dirsekler\n- Kimyasal Tank İnegal Te\n- Kimyasal Tank Manşon\n- Kimyasal Tank Körtapa\n- Kimyasal Tank Flanş Adaptörü\nBu ek parçaları, kimyasal tank sistemlerinizin güvenli ve dayanıklı bir şekilde birleştirilmesini sağlar.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Birleştirme Yöntemleri</b>',
              description:
                'Dizayn Kimyasal Tanklar ve ek parçaları, eritme veya mekanik ek parçalar ile bağlanır. Polietilen dışında diğer malzemelerden yapılan tanklara dıştan sıkmalı ek parçalar, flanşlar veya amaca uygun yapılmış diğer geçiş adaptörleri ile bağlanabilir. Bağlantı ek parçaları kullanılacak yerlere göre kolaylık sağlamaktadır.\n\n<b>Birleştirme Yöntemleri</b>\n- Elektrofüzyon (EF) Kaynağı: Elektrik enerjisi ile tank ve ek parça uçları eritilerek birleştirilir.\n- Alın Kaynağı: Tank uçlarının yüksek sıcaklıkta eritilerek birleştirilmesi.\n- Kaplin ile Birleştirme: Mekanik kaplin kullanılarak tank uçlarının birleştirilmesi.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description:
                'Elektrofüzyon Kaynak yönteminde, kaynak işlemi füzyon ek parçanın iç kısmındaki ısıtma rezistansları ile gerçekleştirilir. Kimyasal Tanklar, elektrofüzyon ek parçalarının içine yerleştirilir ve kaynak makinesinin uçları ek parçanın üzerindeki soketlere bağlanarak elektrik akımı ile ısıtılır. Bu yöntemle, Kimyasal Tanklar güvenli ve sağlam bir şekilde birleştirilmiş olur. Elektrofüzyon Kaynak metodu ile 20 mm çaptan 3600 mm çapa kadar olan Kimyasal Tanklar kaynatılabilir.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                "Alın Kaynak, Kimyasal Tanklar ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. Alın Kaynak makinesi kullanılarak, kaynatılacak olan tankların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, Kimyasal Tanklar'ın güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 3600 mm çapa kadar olan Kimyasal Tanklar kaynatılabilir.",
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Fiyat Listesi</b>',
              description:
                'Dizayn Kimyasal Tanklar, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Kimyasal Tanklar, geniş hacim seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Kimyasal Tank avantajlarından yararlanmak ve 2024 Kimyasal Tank Fiyat Listesine ulaşmak için bizimle iletişime geçiniz. Kimyasal Tanklarımız hakkında detaylı bilgi almak için 0212 886 57 41 numaralı hattımızı arayabilirsiniz.',
            },
          ],
          faqs: [
            {
              question:
                'Dizayn Kimyasal Tanklar hangi sıcaklıktaki akışkanlara kadar kullanılabilir?',
              answer:
                'Dizayn Kimyasal Tanklar, kimyasalın türüne ve kullanım koşullarına bağlı olarak yüksek sıcaklıklarda kullanılabilir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar korozyona dayanıklı mıdır?',
              answer:
                'Evet, Dizayn Kimyasal Tanklar, polietilen malzemesi sayesinde korozyona karşı yüksek direnç gösterir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar hangi kimyasalları depolamak için uygundur?',
              answer:
                'Dizayn Kimyasal Tanklar, asit, baz ve tuz gibi korozif maddeleri güvenle depolamak için uygundur. Kimyasal dayanım tablosu, kullanılabilirlik derecelerini göstermektedir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar hijyenik midir?',
              answer:
                'Evet, Dizayn Kimyasal Tanklar hijyenik özelliklere sahiptir ve su ile sıvı gıdaların depolanmasında kullanılabilir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar nasıl birleştirilir?',
              answer:
                'Dizayn Kimyasal Tanklar elektrofüzyon, alın kaynağı ve mekanik kaplinler ile birleştirilir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar ne kadar dayanıklıdır?',
              answer:
                'Dizayn Kimyasal Tanklar, en az 50 yıl hizmet ömrü sunar ve uzun süreli projelerde güvenle kullanılabilir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar hafif midir?',
              answer:
                'Evet, Dizayn Kimyasal Tanklar hafif yapısı sayesinde kolay taşıma ve kurulum imkanı sunar.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar geri dönüştürülebilir mi?',
              answer:
                'Evet, Dizayn Kimyasal Tanklar çevreci özelliklere sahiptir ve geri dönüştürülebilir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar için kompansatör kullanılır mı?',
              answer:
                'Dizayn Kimyasal Tanklar esnek yapısı sayesinde genellikle kompansatör kullanımı gerektirmez.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar uluslararası standartlara uygun mudur?',
              answer:
                'Evet, Dizayn Kimyasal Tanklar uluslararası standartlara uygun olarak üretilmektedir ve sertifikalara sahiptir.',
            },
          ],
          fittings: [
            {
              title: 'Kimyasal Tank Eşit Te',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Kimyasal Tank Eşit Te',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Redüksiyon',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Kimyasal Tank Redüksiyon',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Semer',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-1.png',
              alt: 'Kimyasal Tank Semer',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Dirsekler',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Kimyasal Tank Dirsekler',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank İnegal Te',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Kimyasal Tank İnegal Te',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Manşon',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-1.png',
              alt: 'Kimyasal Tank Manşon',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Körtapa',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Kimyasal Tank Körtapa',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Flanş Adaptörü',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Kimyasal Tank Flanş Adaptörü',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },
    ],
  };

  return (
    <div>
      <Header text="Altyapı Boru Sistemleri" />

      <div className="relative my-3 flex w-full flex-row px-2 max-md:flex-col ">
        <div className="absolute left-0 top-0 z-0 size-full gap-3 bg-contain opacity-45" />
        {productList.infrastructureProducts
          .filter((item) => item.featuredProduct === true)
          .map((item, index) => (
            <MatrixCard
              link={item.link}
              key={item.title}
              id={index}
              title={item.title}
              image={item.image}
              highlights={item.highlights}
              logo={item.logo}
            />
          ))}
        <div />

        <div className={`absolute left-0 top-0 z-0 h-full  gap-3 bg-contain opacity-45`} />
      </div>

      <div
        className="grid grid-cols-5
       items-center justify-items-center gap-0 
       max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
      >
        {productList[language].infrastructureProducts.map(
          (item) =>
            item &&
            !item.featuredProduct === true && (
              <div
                className="flex size-full flex-col items-center justify-center gap-0  p-4"
                key={item.title}
              >
                <ProductCard
                  item={{
                    ...item,
                    customCSS: '',
                  }}
                  isPLP={true}
                />
              </div>
            ),
        )}
      </div>
    </div>
  );
};
export default SectionWrapper(AltYapı, 'AltYapı');