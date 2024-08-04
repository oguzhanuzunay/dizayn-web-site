'use client';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

export interface calculationCardParams {
  title: string;
  description: string;
  img: string;
}

export interface calculationsCardDataParams {
  [key: string]: calculationCardParams[];
}

const CalculationCard = ({ title, description, img }: calculationCardParams) => {
  return (
    <Card className="w-fit py-4  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:grayscale-0">
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
    </Card>
  );
};

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
      title: 'Koruge Pipe Calculation',
      description: 'Click to calculate Koruge pipe',
      img: '/images/Koruge-boru-hesabi.jpeg',
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
      title: 'Koruge Boru Hesabı',
      description: 'Koruge Boru Hesabı yapmak için tıklayınız',
      img: '/images/Koruge-boru-hesabi.jpeg',
    },
  ],
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
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Hesaplamalar, 'Hesaplamalar');
