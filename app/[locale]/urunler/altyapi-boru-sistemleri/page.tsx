'use client';
import Header from '@/components/Header';
import MatrixCard from '@/components/cards/MatrixCard';
import ProductCard from '@/components/cards/ProductCard';
import { useLocale, useTranslations } from 'next-intl';

interface productParams {
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
  highlights: {
    title: string;
    icon: string;
  }[];
  background: string;
}

const AltYapı = () => {
  const t = useTranslations('Products.InfrastructureProducts');
  const locale = useLocale();

  const infrastructureProducts: productParams[] = [
    {
      title: t('softPowerPipe.title'),
      description: t('softPowerPipe.description'),
      featuredProduct: false,
      logo: '/productImages/üst yapı borular/soft-power-ek/logo.png',
      banner: {
        vertical: t('softPowerPipe.banner.vertical'),
        horizontal: `/productImages/üst yapı borular/soft-power-ek/banner/${locale}/horizontal.png`,
        PLP: `/productImages/üst yapı borular/soft-power-ek/banner/${locale}/PLP.png`,
        bgImage: '',
      },
      image: '/productImages/alt yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
      link: t('softPowerPipe.link'),
      highlights: [
        { title: t('softPowerPipe.highlights.durable'), icon: '/icons/durable.png' },
        { title: t('softPowerPipe.highlights.flexible'), icon: '/icons/flexible.png' },
        { title: t('softPowerPipe.highlights.saveTime'), icon: '/icons/save-time.png' },
      ],
      background: '',
    },

    {
      title: t('rtpPipe.title'),
      description: t('rtpPipe.description'),
      featuredProduct: false,
      logo: '',
      isNewTech: true,
      banner: {
        vertical: '/productImages/alt yapı boruları/RTP BORU/banner/vertical.jpg',
        horizontal: `/productImages/alt yapı boruları/RTP BORU/banner/${locale}/horizontal.png`,
        PLP: `/productImages/alt yapı boruları/RTP BORU/banner/${locale}/PLP.png`,
        bgImage: '',
      },
      image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
      link: t('rtpPipe.link'),
      highlights: [
        { title: t('rtpPipe.highlights.highPressure'), icon: '/icons/high-pressure.png' },
        { title: t('rtpPipe.highlights.flexible'), icon: '/icons/flexible.png' },
        { title: t('rtpPipe.highlights.longLasting'), icon: '/icons/long-lasting.png' },
      ],
      background: '',
    },

    {
      title: t('telecomPipe.title'),
      description: t('telecomPipe.description'),
      featuredProduct: false,
      logo: '',
      isNewTech: true,
      banner: {
        vertical: '/productImages/alt yapı boruları/TELEKOM/banner/vertical.jpg',
        horizontal: `/productImages/alt yapı boruları/TELEKOM/banner/${locale}/horizontal.png`,
        PLP: `/productImages/alt yapı boruları/TELEKOM/banner/${locale}/PLP.png`,
        bgImage: '',
      },
      image: '/productImages/alt yapı boruları/TELEKOM/TELEKOM BORU 1.png',
      link: t('telecomPipe.link'),
      highlights: [
        { title: t('telecomPipe.highlights.durable'), icon: '/icons/durable.png' },
        { title: 'Esnek', icon: '/icons/flexible.png' },
        { title: t('telecomPipe.highlights.easyInstall'), icon: '/icons/easy-installation.png' },
      ],
      background: '',
    },

    {
      title: t('korigePipe.title'),
      description: t('korigePipe.description'),
      featuredProduct: false,
      logo: '/productImages/alt yapı boruları/Korige/logo.png',
      banner: {
        vertical: '/productImages/alt yapı boruları/Korige/banner/vertical.jpg',
        horizontal: `/productImages/alt yapı boruları/Korige/banner/${locale}/horizontal.jpg`,
        PLP: `/productImages/alt yapı boruları/Korige/banner/${locale}/PLP.png`,
        bgImage: '',
      },
      image: '/productImages/alt yapı boruları/Korige/Korige BORU.png',
      link: t('qPipe.link'),
      highlights: [
        { title: t('korigePipe.highlights.durable'), icon: '/icons/durable.png' },
        { title: t('korigePipe.highlights.longLasting'), icon: '/icons/long-lasting.png' },
        { title: t('korigePipe.highlights.easyInstall'), icon: '/icons/easy-installation.png' },
      ],
      background: '',
    },

    {
      title: t('korigeSpiralPipe.title'),
      description: t('korigeSpiralPipe.description'),
      featuredProduct: false,
      logo: '/productImages/alt yapı boruları/KorigeSarmal/logo.png',
      banner: {
        vertical: '/productImages/alt yapı boruları/KorigeSarmal/banner/vertical.jpg',
        horizontal: `/productImages/alt yapı boruları/KorigeSarmal/banner/${locale}/horizontal.png`,
        PLP: `/productImages/alt yapı boruları/KorigeSarmal/banner/${locale}/PLP.png`,
        bgImage: '',
      },
      image: '/productImages/alt yapı boruları/KorigeSarmal/korige-sarmal-2.png',
      link: t('korigeSpiralPipe.link'),
      highlights: [
        { title: t('korigeSpiralPipe.highlights.durable'), icon: '/icons/durable.png' },
        { title: t('korigeSpiralPipe.highlights.longLasting'), icon: '/icons/long-lasting.png' },
        {
          title: t('korigeSpiralPipe.highlights.easyInstallation'),
          icon: '/icons/easy-installation.png',
        },
      ],
      background: '',
    },

    {
      title: t('pe80Pipe.title'),
      description: t('pe80Pipe.description'),
      featuredProduct: false,
      logo: '/productImages/alt yapı boruları/PE 80/logo.png',
      banner: {
        vertical: '/productImages/alt yapı boruları/PE 80/banner/vertical.jpg',
        horizontal: `/productImages/alt yapı boruları/PE 80/banner/${locale}/horizontal.png`,
        PLP: `/productImages/alt yapı boruları/PE 80/banner/${locale}/PLP.png`,
        bgImage: '',
      },
      image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU.png',
      link: t('pe80Pipe.link'),
      highlights: [
        { title: t('pe80Pipe.highlights.highPressure'), icon: '/icons/high-pressure.png' },
        { title: t('pe80Pipe.highlights.flexible'), icon: '/icons/flexible.png' },
        {
          title: t('pe80Pipe.highlights.chemicalResistant'),
          icon: '/icons/chemical-resistant.png',
        },
      ],
      background: '',
    },

    {
      title: t('jeotermalPipe.title'),
      description: t('jeotermalPipe.description'),
      featuredProduct: false,
      logo: '/productImages/alt yapı boruları/JEOTERMAL/logo.png',
      banner: {
        vertical: '/productImages/alt yapı boruları/JEOTERMAL/banner/vertical.jpg',
        horizontal: `/productImages/alt yapı boruları/JEOTERMAL/banner/${locale}/horizontal.png`,
        PLP: `/productImages/alt yapı boruları/JEOTERMAL/banner/${locale}/PLP.png`,
        bgImage: '',
      },
      image: '/productImages/alt yapı boruları/JEOTERMAL/Jeotermal BORU.png',
      link: t('jeotermalPipe.link'),
      highlights: [
        { title: t('jeotermalPipe.highlights.highPressure'), icon: '/icons/high-temperature.png' },
        {
          title: t('jeotermalPipe.highlights.corrosionResistant'),
          icon: '/icons/corrosion.png',
        },
        { title: t('jeotermalPipe.highlights.longLasting'), icon: '/icons/long-lasting.png' },
      ],
      background: '',
    },

    {
      title: t('denizDesarjPipe.title'),
      description: t('denizDesarjPipe.description'),
      featuredProduct: false,
      logo: '/productImages/alt yapı boruları/Deniz Desarj/logo.png',
      banner: {
        vertical: '/productImages/alt yapı boruları/Deniz Desarj/banner/vertical.jpg',
        horizontal: `/productImages/alt yapı boruları/Deniz Desarj/banner/${locale}/horizontal.png`,
        PLP: `/productImages/alt yapı boruları/Deniz Desarj/banner/${locale}/PLP.png`,
        bgImage: '',
      },
      image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU.png',
      link: t('denizDesarjPipe.link'),
      highlights: [
        { title: t('denizDesarjPipe.highlights.durable'), icon: '/icons/durable.png' },
        { title: t('denizDesarjPipe.highlights.corrosion'), icon: '/icons/corrosion.png' },
        { title: t('denizDesarjPipe.highlights.longLasting'), icon: '/icons/long-lasting.png' },
      ],
      background: '',
    },

    {
      title: t('chemicalTank.title'),
      description: t('chemicalTank.description'),
      featuredProduct: false,
      logo: '/productImages/alt yapı boruları/kimyasal-tanklar/logo.png',
      banner: {
        vertical: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/vertical.jpg',
        horizontal: `/productImages/alt yapı boruları/kimyasal-tanklar/banner/${locale}/horizontal.png`,
        PLP: `/productImages/alt yapı boruları/kimyasal-tanklar/banner/${locale}/PLP.png`,
        bgImage: '',
      },
      image: '/productImages/alt yapı boruları/kimyasal-tanklar/kimyasal-tanklar.png',
      link: t('chemicalTank.link'),
      highlights: [
        {
          title: t('chemicalTank.highlights.chemicalResistant'),
          icon: '/icons/chemical-resistant.png',
        },
        { title: t('chemicalTank.highlights.lightWeight'), icon: '/icons/lightweight.png' },
        { title: t('chemicalTank.highlights.recyclable'), icon: '/icons/recyclable.png' },
      ],
      background: '',
    },
  ];

  return (
    <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div>
        <Header text={t('header')} />

        <div className="relative my-3 flex w-full flex-row px-2 max-md:flex-col ">
          <div className="absolute left-0 top-0 z-0 size-full gap-3 bg-contain opacity-45" />
          {infrastructureProducts
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
          {infrastructureProducts.map(
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
    </section>
  );
};
export default AltYapı;
