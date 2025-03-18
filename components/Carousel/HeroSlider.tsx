'use client';
import Image from 'next/image';
// Import Swiper React components
import { scrollToHash } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface HeroSliderParams {
  [key: string]: {
    desktopImage: string;
    mobileImage: string;
    alt: string;
    title?: string;
    link?: string;
  }[];
}

const heroSlider: HeroSliderParams = {
  en: [
    {
      desktopImage: '/sliderImages/desktop/en/elite-pipe.jpg',
      mobileImage: '/sliderImages/mobile/en/elite-pipe.jpg',
      alt: 'ElitePipe',
      link: '/en/urunler/bina-ici-boru-sistemleri/elitepipe',
    },
    {
      desktopImage: '/sliderImages/desktop/en/sterilepipe.jpg',
      mobileImage: '/sliderImages/mobile/en/sterilepipe.jpg',
      alt: 'Sterile Pipe',
      link: '/en/urunler/bina-ici-boru-sistemleri/sterilepipe',
    },
    {
      desktopImage: '/sliderImages/desktop/en/alt-yapı.jpg',
      mobileImage: '/sliderImages/mobile/en/alt-yapı.jpg',
      alt: 'Altyapı Boru Sistemleri',
      link: '/en/urunler/altyapi-boru-sistemleri',
    },
    {
      desktopImage: '/sliderImages/desktop/en/elastica.jpg',
      mobileImage: '/sliderImages/mobile/en/elastica.jpg',
      alt: 'ElitePipe Hero Image',
      link: '/en/urunler/bina-ici-boru-sistemleri/elastica-boru',
    },
    {
      desktopImage: '/sliderImages/desktop/en/projelerimiz.jpg',
      mobileImage: '/sliderImages/mobile/en/projelerimiz.jpg',
      alt: 'referanslar',
      link: '/en/referanslar',
    },
    {
      desktopImage: '/sliderImages/desktop/en/nanotek-premium.jpg',
      mobileImage: '/sliderImages/mobile/en/nanotek-premium.jpg',
      alt: 'nanotek',
      link: '/en/urunler/bina-ici-boru-sistemleri/nanotek-ve-nanotek-premium',
    },
    {
      desktopImage: '/sliderImages/desktop/en/koruge.jpg',
      mobileImage: '/sliderImages/mobile/en/koruge.jpg',
      alt: 'Koruge',
      link: '/en/urunler/altyapi-boru-sistemleri/koruge-boru',
    },
  ],
  tr: [
    {
      desktopImage: '/sliderImages/desktop/tr/elite-pipe.jpg',
      mobileImage: '/sliderImages/mobile/tr/elite-pipe.jpg',
      alt: 'ElitePipe',
      link: '/tr/urunler/bina-ici-boru-sistemleri/elitepipe',
    },
    {
      desktopImage: '/sliderImages/desktop/tr/kaynak_makinesi.jpg',
      mobileImage: '/sliderImages/mobile/tr/kaynak_makinesi_mobil.jpg',
      alt: 'Kaynak Makinesi',
      link: '',
    },
    {
      desktopImage: '/sliderImages/desktop/tr/sterilepipe.jpg',
      mobileImage: '/sliderImages/mobile/tr/sterilepipe.jpg',
      alt: 'Sterile Pipe',
      link: '/tr/urunler/bina-ici-boru-sistemleri/sterilepipe',
    },
    {
      desktopImage: '/sliderImages/desktop/tr/alt-yapı.jpg',
      mobileImage: '/sliderImages/mobile/tr/alt-yapı.jpg',
      alt: 'Altyapı Boru Sistemleri',
      link: '/tr/urunler/altyapi-boru-sistemleri',
    },
    {
      desktopImage: '/sliderImages/desktop/tr/elastica.jpg',
      mobileImage: '/sliderImages/mobile/tr/elastica.jpg',
      alt: 'ElitePipe Hero Image',
      link: '/tr/urunler/bina-ici-boru-sistemleri/elastica-boru',
    },
    {
      desktopImage: '/sliderImages/desktop/tr/projelerimiz.jpg',
      mobileImage: '/sliderImages/mobile/tr/projelerimiz.jpg',
      alt: 'projelerimiz',
      link: '/tr/referanslar',
    },
    {
      desktopImage: '/sliderImages/desktop/tr/nanotek-premium.jpg',
      mobileImage: '/sliderImages/mobile/tr/nanotek-premium.jpg',
      alt: 'nanotek',
      link: '/tr/urunler/bina-ici-boru-sistemleri/nanotek-ve-nanotek-premium',
    },
    {
      desktopImage: '/sliderImages/desktop/tr/koruge.jpg',
      mobileImage: '/sliderImages/mobile/tr/koruge.jpg',
      alt: 'Koruge',
      link: '/tr/urunler/altyapi-boru-sistemleri/koruge-boru',
    },
  ],
};

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Tarayıcıda mevcut olduğunda çalışır
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 600px)').matches);
    };

    checkIsMobile(); // İlk kontrol
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  window.addEventListener('resize', checkIsMobile);

  const language = useLocale() ?? ('en' as keyof HeroSliderParams);

  return (
    <div className="top-0 flex w-full items-center justify-center">
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        className="h-screen w-full"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        keyboard={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, Keyboard, Autoplay]}
      >
        {heroSlider[language]?.map((slide) => (
          <SwiperSlide key={slide.link || ''}>
            <Link href={slide.link || ''}>
              <Image
                layout="fill"
                objectFit="cover"
                loading="lazy"
                alt={slide.alt}
                src={isMobile ? slide.mobileImage : slide.desktopImage}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-12 z-10 flex w-full items-center justify-center xs:bottom-10">
        <div onClick={scrollToHash.bind(null, 'newTechPipe')}>
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="mb-1 size-3 rounded-full bg-slate-50 "
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
function checkIsMobile(this: Window, ev: UIEvent) {
  throw new Error('Function not implemented.');
}
