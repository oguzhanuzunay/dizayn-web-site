'use client';
import { countUpText } from '@/constants';
import { useLanguageContext } from '@/context/language';
import Image from 'next/image';
import CountUp, { useCountUp } from 'react-countup';

const CountUpComp = () => {
  const [language] = useLanguageContext();

  useCountUp({
    ref: 'counter',
    end: 99,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="flex flex-row items-center justify-between bg-blue-400 px-36 py-12 max-md:grid max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:px-8">
      {countUpText[language].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-start py-3"
        >
          <Image
            width={100}
            height={100}
            src={item.imageLink}
            alt={item.alt}
            className="pb-5 invert max-md:w-24 max-sm:w-16"
          />
          <p className="text-center font-roboto text-3xl text-white max-md:text-xl max-sm:text-lg">
            {item.counterName}
          </p>
          <CountUp
            className="text-center font-roboto  text-7xl font-bold text-slate-100 max-md:text-4xl max-sm:text-3xl"
            end={item.counterNumber}
            enableScrollSpy
          />
        </div>
      ))}
    </div>
  );
};

export default CountUpComp;
