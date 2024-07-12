'use client';
import Header from '@/components/Header';
import { referenceList } from '@/constants';
import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import Link from 'next/link';

const Projelerimiz = () => {
  return (
    <div>
      <Header text="Projelerimiz" />

      <div className="flex flex-row flex-wrap items-center justify-center gap-3 p-5">
        {referenceList.map((item, index) => (
          <div
            key={index}
            className="flex w-80 h-60 flex-col items-center justify-start gap-1 rounded-xl bg-sky-600  pb-4 transition duration-500 ease-in-out hover:bg-sky-400 "
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={450}
              height={450}
              className="mb-4 rounded-xl"
            />
            <p className="text-center text-lg font-semibold text-white">{item.title}</p>
          </div>
        ))}
      </div>

      <Link href="">
        <div className="flex items-center justify-center bg-red-600 p-2">
          <p className=" text-lg font-bold text-white">Tüm Referanslarımız</p>
        </div>
      </Link>
    </div>
  );
};

export default SectionWrapper(Projelerimiz, 'Projelerimiz');
