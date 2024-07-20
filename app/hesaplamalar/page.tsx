'use client';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import { calculationsCardDataParams } from '@/types';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import Link from 'next/link';

type calculationCardParams = {
  title: string;
  description: string;
  img: string;
  link: string;
};

const calculationsCardData: calculationsCardDataParams = {
  en: [
    {
      title: 'Water Hammer Calculation',
      description: 'Click to calculate water hammer',
      img: '/images/su-darbesi-hesabi.jpeg',
      link: '/hesaplamalar/su-darbesi-hesaplama',
    },
    {
      title: 'Compensator Calculation',
      description: 'Click to calculate compensator',
      img: '/images/kompansator-hesabi.jpeg',
      link: '/hesaplamalar/kompansator-hesaplama',
    },
    {
      title: 'Gravity Line Calculation',
      description: 'Click to calculate gravity line',
      img: '/images/cazibeli-hat-hesabi.jpeg',
      link: '/hesaplamalar/cazibeli-hat-hesaplama',
    },
    {
      title: 'Pressure Loss Calculation',
      description: 'Click to calculate pressure loss',
      img: '/images/basinc-kaybı-hesabi.jpeg',
      link: '/hesaplamalar/basinc-kaybi-hesaplama',
    },
    {
      title: 'Korige Pipe Calculation',
      description: 'Click to calculate korige pipe',
      img: '/images/korige-boru-hesabi.jpeg',
      link: '/hesaplamalar/korige-boru-hesaplama',
    },
  ],

  tr: [
    {
      title: 'Su Darbesi Hesabı',
      description: 'Su darbesi hesabı yapmak için tıklayınız',
      img: '/images/su-darbesi-hesabi.jpeg',
      link: '/hesaplamalar/su-darbesi-hesaplama',
    },
    {
      title: 'Kompansatör Hesabı ',
      description: 'Kompansatör hesabı yapmak için tıklayınız',
      img: '/images/kompansator-hesabi.jpeg',
      link: '/hesaplamalar/kompansator-hesaplama',
    },
    {
      title: 'Cazibeli Hat Hesabı',
      description: 'Cazibeli hat hesabı yapmak için tıklayınız',
      img: '/images/cazibeli-hat-hesabi.jpeg',
      link: '/hesaplamalar/cazibeli-hat-hesaplama',
    },
    {
      title: 'Basınç Kaybı Hesabı',
      description: 'Basınç kaybı hesabı yapmak için tıklayınız',
      img: '/images/basinc-kaybı-hesabi.jpeg',
      link: '/hesaplamalar/basinc-kaybi-hesaplama',
    },
    {
      title: 'Korige Boru Hesabı',
      description: 'Korige Boru Hesabı yapmak için tıklayınız',
      img: '/images/korige-boru-hesabi.jpeg',
      link: '/hesaplamalar/korige-boru-hesaplama',
    },
  ],
};

const CalculationCard = ({ title, description, img, link }: calculationCardParams) => {

  return (
    <Card className="w-fit py-4  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:grayscale-0">
      <Link href={link}>
        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
          <h4 className="text-large font-bold">{title}</h4>
          <small className="text-default-500">{description}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="rounded-xl object-cover"
            src={img}
            width={270}
          />
        </CardBody>
      </Link>
    </Card>
  );
};

const Hesaplamalar = () => {
  const [language] = useLanguageContext();
  const list = calculationsCardData[language];

  return (
    <div>
      <div className="mb-5 flex size-full flex-col items-start rounded-lg  p-5">
        <h2 className=" font-spaceGrotesk text-2xl font-bold text-black">
          Mühendislik Hesaplamaları
        </h2>
      </div>
      <h4 className="ml-5 mt-5 font-spaceGrotesk text-lg font-semibold text-gray-700 ">
        Doğru hesaplama yapabilmek için aşağıdaki seçeneklerden uygun seçeneği seçiniz.
      </h4>

      <div className="my-5 grid grid-cols-5 place-items-center items-center justify-center gap-5 justify-self-center max-lg:grid-cols-3 max-sm:grid-cols-1">
        {list.map((item: calculationCardParams) => (
          <CalculationCard
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Hesaplamalar, 'Hesaplamalar');
