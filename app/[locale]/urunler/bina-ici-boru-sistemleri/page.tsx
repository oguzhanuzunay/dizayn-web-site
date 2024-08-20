import Header from '@/components/Header';
import MatrixCard from '@/components/cards/MatrixCard';
import ProductCard from '@/components/cards/ProductCard';
import { useTranslations } from 'next-intl';

const Products = () => {
  const t = useTranslations('Products.SuperStructureProducts');

  const superStructureProducts = [
    {
      title: t('elitePipe.title'),
      description: t('elitePipe.description'),
      featuredProduct: true,
      logo: '/productImages/üst yapı borular/elite-pipe-ve-ek/logo.png',
      isNewTech: true,
      banner: {
        vertical: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/vertical.jpg',
        horizontal: t('elitePipe.banner.horizontal'),
        bgImage: t('elitePipe.banner.bgImage'),
        PLP: t('elitePipe.banner.PLP'),
      },
      image: '/productImages/üst yapı borular/elite-pipe-ve-ek/elitePipeBanner.png',
      background: 'bg-background-1',
      link: t('elitePipe.link'),
      highlights: [
        {
          title: t('elitePipe.highlights.highPressure'),
          icon: '/icons/high-pressure.png',
        },
        {
          title: t('elitePipe.highlights.kangal'),
          icon: '/icons/worker-pushing-a-cart.png',
        },
        {
          title: t('elitePipe.highlights.durable'),
          icon: '/icons/durable.png',
        },
      ],
    },

    {
      title: t('sterilePipe.title'),
      description: t('sterilePipe.description'),
      featuredProduct: true,
      logo: '/productImages/üst yapı borular/sterile-pipe/logo.png',
      isNewTech: true,
      banner: {
        vertical: '/productImages/üst yapı borular/sterile-pipe/banner/vertical.jpg',
        horizontal: t('sterilePipe.banner.horizontal'),
        bgImage: '/productImages/üst yapı borular/sterile-pipe/banner/tr/bg-image.png',
        PLP: t('sterilePipe.banner.PLP'),
      },
      image: '/productImages/üst yapı borular/sterile-pipe/sterilePipeBanner.png',
      background: 'bg-background-2',
      link: t('sterilePipe.link'),
      highlights: [
        { title: t('sterilePipe.highlights.antimicrobial'), icon: '/icons/antimicrobial.png' },
        { title: t('sterilePipe.highlights.longLasting'), icon: '/icons/long-lasting.png' },
        { title: t('sterilePipe.highlights.drinkWater'), icon: '/icons/drink-water.png' },
      ],
    },

    {
      title: t('softPowerPipe.title'),
      description: t('softPowerPipe.description'),
      featuredProduct: false,
      logo: '/productImages/üst yapı borular/soft-power-ek/logo.png',
      isNewTech: true,
      banner: {
        vertical: '/productImages/üst yapı borular/soft-power-ek/banner/vertical.jpg',
        horizontal: t('softPowerPipe.banner.horizontal'),
        PLP: '/productImages/üst yapı borular/soft-power-ek/banner/tr/PLP.png',
        bgImage: '',
      },
      image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
      link: t('softPowerPipe.link'),
      highlights: [
        { title: t('softPowerPipe.highlights.durable'), icon: '/icons/durable.png' },
        { title: t('softPowerPipe.highlights.flexible'), icon: '/icons/flexible.png' },
        { title: t('softPowerPipe.highlights.saveTime'), icon: '/icons/save-time.png' },
      ],
      background: '',
    },

    {
      title: t('elasticaPipe.title'),
      description: t('elasticaPipe.description'),
      featuredProduct: false,
      logo: '/productImages/üst yapı borular/mobil-boru-ve-ek/logo.png',
      isNewTech: true,
      banner: {
        vertical: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/vertical.jpg',
        horizontal: t('elasticaPipe.banner.horizontal'),
        PLP: t('elasticaPipe.banner.PLP'),
        bgImage: '',
      },
      image: '/productImages//üst yapı borular/mobil-boru-ve-ek/KILIFLI ELASTICA BORU.png',
      link: t('elasticaPipe.link'),
      highlights: [
        {
          title: t('elasticaPipe.highlights.highTemperature'),
          icon: '/icons/high-temperature.png',
        },
        {
          title: t('elasticaPipe.highlights.flexible'),
          icon: '/icons/flexible-durable.png',
        },
        { title: t('elasticaPipe.highlights.easyInstall'), icon: '/icons/easy-installation.png' },
      ],
      background: '',
    },

    {
      title: t('nanotechPipe.title'),
      description: t('nanotechPipe.description'),
      featuredProduct: false,
      logo: '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/logo.png',
      isNewTech: true,
      banner: {
        vertical: '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/vertical.jpg',
        horizontal: t('nanotechPipe.banner.horizontal'),
        PLP: t('nanotechPipe.banner.PLP'),
        bgImage: '',
      },
      image:
        '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/üst yapı borular/atık-su-nanotek-boru-ve-ek.png',
      link: t('nanotechPipe.link'),
      highlights: [
        { title: t('nanotechPipe.highlights.soundProof'), icon: '/icons/soundproof.png' },
        { title: t('nanotechPipe.highlights.durable'), icon: '/icons/durability.png' },
        { title: t('nanotechPipe.highlights.longLasting'), icon: '/icons/long-lasting.png' },
      ],
      background: '',
    },

    {
      title: t('triplexPipe.title'),
      description: t('triplexPipe.description'),
      featuredProduct: false,
      logo: '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/logo.png',
      isNewTech: true,
      banner: {
        vertical:
          '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/vertical.jpg',
        horizontal: t('triplexPipe.banner.horizontal'),
        PLP: t('triplexPipe.banner.PLP'),
        bgImage: '',
      },
      image:
        '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/TRİPLEX ATIK SU BORUSU.png',
      link: t('triplexPipe.link'),
      highlights: [
        { title: t('triplexPipe.highlights.durable'), icon: '/icons/durable.png' },
        { title: t('triplexPipe.highlights.seal'), icon: '/icons/seal.png' },
        { title: t('triplexPipe.highlights.easyInstall'), icon: '/icons/easy-installation.png' },
      ],
      background: '',
    },

    {
      title: t('pprPipe.title'),
      description: t('pprPipe.description'),
      featuredProduct: false,
      logo: '',
      isNewTech: false,
      banner: {
        vertical: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/vertical.jpg',
        horizontal: t('pprPipe.banner.horizontal'),
        PLP: t('pprPipe.banner.PLP'),
        bgImage: '',
      },
      image: '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek.png',
      link: t('pprPipe.link'),
      highlights: [
        { title: t('pprPipe.highlights.highDurability'), icon: '/icons/high-durability.png' },
        { title: t('pprPipe.highlights.easyWelding'), icon: '/icons/easy-welding.png' },
        { title: t('pprPipe.highlights.longLasting'), icon: '/icons/long-lasting.png' },
      ],
      background: '',
    },
  ];

  return (
    <div>
      <Header text={t('header')} />

      <div className="px-2 py-4">
        <p className="text-center font-sans text-lg">{t('description')}</p>
      </div>

      <div className="relative my-3 flex w-full flex-row px-2 max-md:flex-col">
        <div className="absolute left-0 top-0 z-0 size-full gap-3 bg-contain opacity-45" />
        {superStructureProducts
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
              bgImage={item.banner.bgImage || ''}
            />
          ))}

        <div />
      </div>

      <div className="px-2 py-4">
        <p
          className="text-center font-sans text-lg"
          dangerouslySetInnerHTML={{ __html: t('description2') }}
        ></p>
      </div>

      <div
        className="my-5 grid
       grid-cols-5 items-center justify-items-center 
       gap-0 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
      >
        {superStructureProducts.map(
          (item) =>
            item &&
            !item.featuredProduct === true && (
              <div
                className="flex size-full flex-col items-center justify-center gap-0"
                key={item.title}
              >
                <ProductCard
                  item={{
                    ...item,
                    customCSS: ' rounded-2xl',
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

export default Products;
