import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

export interface calculationCardParams {
  title: string;
  description: string;
  img: string;
  isComingSoon?: boolean;
}

const CalculationCard = ({ title, description, img, isComingSoon }: calculationCardParams) => {
  const t = useTranslations('Hesaplamalar');

  return (
    <Card
      className={`relative z-0  mx-auto w-fit max-w-7xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:grayscale-0`}
    >
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <h4 className="text-lg font-bold">{title}</h4>
        <small>{description}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {isComingSoon && (
          <div className="absolute left-2 top-2 z-50 mt-2 rotate-12 rounded-md bg-red-500 px-3 py-1 text-white">
            {t('comingSoon')}
          </div>
        )}
        <Image
          alt="Card background"
          className={`rounded-xl object-cover  ${isComingSoon ? 'grayscale' : 'grayscale-0'}`}
          src={img}
          width={270}
        />
      </CardBody>
    </Card>
  );
};

const Hesaplamalar = () => {
  const t = useTranslations('Hesaplamalar');

  const list: calculationCardParams[] = [
    {
      title: t('waterHammerCalculation'),
      description: t('waterHammerCalculationDescription'),
      img: '/images/su-darbesi-hesabi.jpeg',
      isComingSoon: true,
    },
    {
      title: t('compensatorCalculation'),
      description: t('compensatorCalculationDescription'),
      img: '/images/kompansator-hesabi.jpeg',
      isComingSoon: true,
    },
    {
      title: t('charmingHatCalculation'),
      description: t('charmingHatCalculationDescription'),
      img: '/images/cazibeli-hat-hesabi.jpeg',
      isComingSoon: true,
    },
    {
      title: t('pressureLossCalculation'),
      description: t('pressureLossCalculationDescription'),
      img: '/images/basinc-kaybı-hesabi.jpeg',
      isComingSoon: true,
    },
    {
      title: t('corrugatedPipeCalculation'),
      description: t('corrugatedPipeCalculationDescription'),
      img: '/images/Korige-boru-hesabi.jpeg',
      isComingSoon: true,
    },
  ];

  return (
    <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div>
        <div className="mb-5 flex size-full flex-col items-start rounded-lg  p-5">
          <h2 className=" font-spaceGrotesk text-2xl font-bold text-black">{t('title')}</h2>
        </div>
        <h4 className="ml-5 mt-5 font-spaceGrotesk text-lg font-semibold text-gray-700 ">
          {t('description')}
        </h4>

        <div className="my-5 grid grid-cols-5 place-items-center items-center justify-center gap-5 justify-self-center max-lg:grid-cols-3 max-sm:grid-cols-1">
          {list.map((item: calculationCardParams) => (
            <CalculationCard
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
              isComingSoon={item.isComingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hesaplamalar;
