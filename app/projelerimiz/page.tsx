'use client';
import Header from '@/components/Header';
import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import Link from 'next/link';

type referenceListParams = {
  title: string;
  image: string;
  alt?: string;
}[];


const referenceList: referenceListParams = [
  {
    title: 'Antalya Hurma Atıksu Arıtma Tesisi',
    image: '/references/antalya-hurma-atıksu-arıtma-tesisi.png',
    alt: 'Antalya Hurma Atıksu Arıtma Tesisi',
  },
  {
    title: 'Büyükçekmece Deniz Desarj Projesi',
    image: '/references/buyukcekmece-deniz-desarj-projesi.jpg',
    alt: 'Büyükçekmece Deniz Desarj Projesi',
  },
  {
    title: 'Dubai Palmiye Adaları',
    image: '/references/dubai palmiye adaları.png',
    alt: 'Dubai Palmiye Adaları',
  },
  {
    title: 'İstanbul Hava Limanı',
    image: '/references/istanbul-hava-alani.png',
    alt: 'İstanbul Hava Limanı',
  },
  {
    title: 'Sicilya Adaları Kanalizasyon Projesi',
    image: '/references/sicilya-adasi-kanalizasyon-projesi.jpg',
    alt: 'Sicilya Adaları Kanalizasyon Projesi',
  },
  {
    title: 'Hong Hong Adalar Projesi',
    image: '/references/hong hong adalar projesi.png',
    alt: 'Hong Hong Adalar Projesi',
  },
];

const Projelerimiz = () => {
  return (
    <div>
      <Header text="Projelerimiz" />

      <div className="flex flex-row flex-wrap items-center justify-center gap-3 p-5">
        {referenceList.map((item, index) => (
          <div
            key={index}
            className="flex h-60 w-80 flex-col items-center justify-start gap-1 rounded-xl bg-sky-600  pb-4 transition duration-500 ease-in-out hover:bg-sky-400 "
          >
            <Image
              src={item.image}
              alt={item.alt ?? ''}
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
