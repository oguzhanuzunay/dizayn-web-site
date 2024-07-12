'use client';
import { useLanguageContext } from '@/context/language';
import Image from 'next/image';
import CountUp, { useCountUp } from 'react-countup';

interface countUpParams {
  [key: string]: {
    counterName: string;
    counterNumber: number;
    imageLink: string;
    alt: string;
    link: string;
  }[];
}

const CountUpComp = () => {
  const [language] = useLanguageContext();

  const countUpText: countUpParams = {
    en: [
      {
        counterName: 'Certificates',
        counterNumber: 36,
        imageLink: '/icons/certificate.jpg',
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
        counterName: 'Yıl',
        counterNumber: 37,
        imageLink: '/icons/calendar.png',
        alt: 'calendar',
        link: '',
      },
      {
        counterName: 'Sektörde ilk',
        counterNumber: 14,
        imageLink: '/icons/trophy.png',
        alt: 'trophy',
        link: '',
      },
      {
        counterName: 'Patent',
        counterNumber: 100,
        imageLink: '/icons/certificate.png',
        alt: 'certificate',
        link: '',
      },
      {
        counterName: 'Eşsiz Ürünler',
        counterNumber: 8,
        imageLink: '/icons/proposition.png',
        alt: 'research',
        link: '',
      },
    ],
  };

  useCountUp({
    ref: 'counter',
    end: 99,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="flex flex-row items-center justify-between bg-blue-400 px-24 py-6 max-md:grid max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:px-8">
      {countUpText[language].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-start py-3"
        >
          <Image
            width={64}
            height={64}
            src={item.imageLink}
            alt={item.alt}
            className="pb-5 invert max-md:w-24 max-sm:w-16"
          />
          <p className="text-center font-quicksand text-3xl font-bold text-white max-md:text-xl max-sm:text-lg">
            {item.counterName}
          </p>
          <div className="flex flex-row">
            <CountUp
              className="text-center font-quicksand  text-3xl font-semibold text-slate-100 max-md:text-2xl max-sm:text-xl"
              end={item.counterNumber}
              enableScrollSpy
            />
            <p className="text-center font-quicksand text-xl font-semibold text-slate-100 max-md:text-lg max-sm:text-medium ">
              +
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountUpComp;
