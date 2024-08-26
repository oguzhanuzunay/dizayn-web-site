'use client';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

interface referenceListParams {
  title: string;
  image: string;
  alt?: string;
}

const Referanslar = () => {
  const t = useTranslations('Referanslar');

  const referenceList: referenceListParams[] = [
    {
      title: t('istanbulHavaAlani.title'),
      image: '/references/istanbul-hava-alani.png',
      alt: t('istanbulHavaAlani.alt'),
    },
    {
      title: t('hongKongAdalarProjesi.title'),
      image: '/references/hong hong adalar projesi.png',
      alt: 'Hong Hong Adalar Projesi',
    },
    {
      title: t('dubaiPalmiyeAdalari.title'),
      image: '/references/dubai palmiye adaları.png',
      alt: t('dubaiPalmiyeAdalari.alt'),
    },
    {
      title: t('sicilyaAdasiKanalizasyonProjesi.title'),
      image: '/references/sicilya-adasi-kanalizasyon-projesi.jpg',
      alt: t('sicilyaAdasiKanalizasyonProjesi.alt'),
    },
    {
      title: t('antalyahurmaatiksuaritmatesisleri.title'),
      image: '/references/antalya-hurma-atıksu-arıtma-tesisi.png',
      alt: t('antalyahurmaatiksuaritmatesisleri.alt'),
    },
    {
      title: t('buyukcekmeceDenizDesarjProjesi.title'),
      image: '/references/buyukcekmece-deniz-desarj-projesi.jpg',
      alt: t('buyukcekmeceDenizDesarjProjesi.alt'),
    },
    {
      title: t('HollandaBechtelEnkaElektrikSantraliProjesi.title'),
      image: '/references/hollanda-bechtel-enka-elektrik-santrali-projesi.jpg',
      alt: t('HollandaBechtelEnkaElektrikSantraliProjesi.alt'),
    },
    {
      title: t('JakartaSelatanEndonezyaProjesi.title'),
      image: '/references/jakarta-selatan-endonezya-projesi.jpg',
      alt: t('JakartaSelatanEndonezyaProjesi.alt'),
    },
    {
      title: t('PortoArabiaPearlIslandProjesi.title'),
      image: '/references/porto-arabia-pearl-island-projesi.jpg',
      alt: t('PortoArabiaPearlIslandProjesi.alt'),
    },
    {
      title: t('RizeHidroelektrikSantralProjesi.title'),
      image: '/references/rize-hidroelektrik-santral-projesi.jpg',
      alt: t('RizeHidroelektrikSantralProjesi.alt'),
    },
    {
      title: t('SalihliSehirIsitmaProjesi.title'),
      image: '/references/salihli-sehir-isitma-projesi.jpg',
      alt: t('SalihliSehirIsitmaProjesi.alt'),
    },
    {
      title: t('SicilyaAdasiKanalizasyonProjesi.title'),
      image: '/references/sicilya-adasi-kanalizasyon-projesi.jpg',
      alt: t('SicilyaAdasiKanalizasyonProjesi.alt'),
    },
    {
      title: t('SinopErfelekHidroelektrikSantralProjesi.title'),
      image: '/references/sinop-erfelek-hidroelektrik-santral-projesi.jpg',
      alt: t('SinopErfelekHidroelektrikSantralProjesi.alt'),
    },
    {
      title: t('SouthgateEndonezyaProjesi.title'),
      image: '/references/southgate-endonezya-projesi.jpg',
      alt: t('SouthgateEndonezyaProjesi.alt'),
    },
    {
      title: t('TanjungBaratEndonezyaProjesi.title'),
      image: '/references/tanjung-barat-endonezya-projesi.jpg',
      alt: t('TanjungBaratEndonezyaProjesi.alt'),
    },
  ];

  return (
    <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div>
        <Header text={t('Header')} />
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

        <Link
          href="/referanslar.pdf"
          target="_blank"
        >
          <div className="mx-2 mb-4 flex items-center justify-center rounded-lg bg-red-600 p-2">
            <p className=" text-lg font-bold text-white">{t('allReferances')}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Referanslar;
