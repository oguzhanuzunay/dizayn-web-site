'use client';
import Header from '@/components/Header';
import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import Link from 'next/link';

import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

type referenceListParams = {
  title: string;
  image: string;
  alt?: string;
}[];

const referenceList: referenceListParams = [
  {
    title: 'İstanbul Hava Limanı',
    image: '/references/istanbul-hava-alani.png',
    alt: 'İstanbul Hava Limanı',
  },
  {
    title: 'Hong Hong Adalar Projesi',
    image: '/references/hong hong adalar projesi.png',
    alt: 'Hong Hong Adalar Projesi',
  },
  {
    title: 'Dubai Palmiye Adaları',
    image: '/references/dubai palmiye adaları.png',
    alt: 'Dubai Palmiye Adaları',
  },
  {
    title: 'Sicilya Adaları Kanalizasyon Projesi',
    image: '/references/sicilya-adasi-kanalizasyon-projesi.jpg',
    alt: 'Sicilya Adaları Kanalizasyon Projesi',
  },
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
    title: 'Hollanda Bechtel Enka Elektrik Santrali Projesi',
    image: '/references/hollanda-bechtel-enka-elektrik-santrali-projesi.jpg',
    alt: 'hollanda-bechtel-enka-elektrik-santrali-projesi',
  },
  {
    title: 'Jakarta Selatan Endonezya Projesi',
    image: '/references/jakarta-selatan-endonezya-projesi.jpg',
    alt: 'jakarta-selatan-endonezya-projesi',
  },
  {
    title: 'Porto Arabia Pearl Island Projesi',
    image: '/references/porto-arabia-pearl-island-projesi.jpg',
    alt: 'jakarta-selatan-endonezya-projesi',
  },
  {
    title: 'Rize Hidroelektrik Santral Projesi',
    image: '/references/rize-hidroelektrik-santral-projesi.jpg',
    alt: 'rize-hidroelektrik-santral-projesi',
  },
  {
    title: 'Salihli Sehir Isıtma Projesi',
    image: '/references/salihli-sehir-isitma-projesi.jpg',
    alt: 'salihli-sehir-isitma-projesi',
  },
  {
    title: 'Sicilya Adasi Kanalizasyon Projesi',
    image: '/references/sicilya-adasi-kanalizasyon-projesi.jpg',
    alt: 'sicilya-adasi-kanalizasyon-projesi',
  },
  {
    title: 'Sinop Erfelek Hidroelektrik Santral Projesi',
    image: '/references/sinop-erfelek-hidroelektrik-santral-projesi.jpg',
    alt: 'sinop-erfelek-hidroelektrik-santral-projesi',
  },
  {
    title: 'Southgate Endonezya Projesi',
    image: '/references/southgate-endonezya-projesi.jpg',
    alt: 'southgate-endonezya-projesi',
  },
  {
    title: 'Tanjung Barat Endonezya Projesi',
    image: '/references/tanjung-barat-endonezya-projesi.jpg',
    alt: 'tanjung-barat-endonezya-projesi',
  },
];

const Projelerimiz = () => {
  return (
    <div>
      <Header text="Projelerimiz" />
      <div className="mx-2 my-3 flex items-center justify-center">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="h-fit w-3/5 max-lg:w-5/6 max-sm:w-full"
        >
          {referenceList.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex h-auto w-full flex-col items-center justify-start gap-1 rounded-xl bg-sky-600 pb-4 transition duration-500 ease-in-out hover:bg-sky-400 "
            >
              <Image
                src={item.image}
                alt={item.alt ?? ''}
                width={450}
                height={450}
                className="mb-6 size-full rounded-xl"
              />
              <p className="text-center text-lg font-semibold text-white">{item.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link href="/referanslar.pdf" target='_blank'>
        <div className="mx-2 mb-4 flex items-center justify-center rounded-lg bg-red-600 p-2">
          <p className=" text-lg font-bold text-white">Tüm Referanslarımız</p>
        </div>
      </Link>
    </div>
  );
};

export default SectionWrapper(Projelerimiz, 'Projelerimiz');
