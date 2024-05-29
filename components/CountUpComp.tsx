'use client';
import { countUpText } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import CountUp, { useCountUp } from 'react-countup';

const CountUpComp = () => {
  const [language] = useLanguageContext();

  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="flex flex-row items-center justify-between bg-blue-400 px-36 py-12 max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1">
      {countUpText[language].map((item, index) => (
        <div
          key={index}
          className=" flex flex-col items-center justify-start py-3"
        >
          <Image
            width={100}
            height={100}
            src={item.imageLink}
            alt={item.alt}
            className="pb-5 invert "
          />
          <p className="text-center font-roboto text-2xl text-slate-200">{item.counterName}</p>
          <CountUp
            className="text-center font-roboto  text-7xl font-bold text-slate-100"
            end={item.counterNumber}
            enableScrollSpy
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(CountUpComp, 'CountUpComp');
