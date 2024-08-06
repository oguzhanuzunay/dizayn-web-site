'use client';
import Image from 'next/image';
// Import Swiper React components
import { useLanguageContext } from '@/context/language';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
      desktopImage: '/sliderImages/1.jpg',
      mobileImage: '/sliderImages/mobile/1.jpg',
      alt: 'ElitePipe',
      title: 'ElitePipe',
      link: '/product/elitepipe',
    },
    {
      desktopImage: '/sliderImages/2.jpg',
      mobileImage: '/sliderImages/2.jpg',
      alt: 'SterilePipe',
      title: 'SterilePipe',
      link: '/product/sterilepipe',
    },
    {
      desktopImage: '/sliderImages/3.jpg',
      mobileImage: '/sliderImages/3.jpg',
      alt: 'SterilePipe',
      title: 'SterilePipe',
      link: '/product/sterilepipe',
    },
    {
      desktopImage: '/sliderImages/4.jpg',
      mobileImage: '/sliderImages/4.jpg',
      alt: 'SterilePipe',
      title: 'SterilePipe',
      link: '/product/sterilepipe',
    },
  ],
  tr: [
    {
      desktopImage: '/sliderImages/desktop/elite-pipe.jpg',
      mobileImage: '/sliderImages/mobile/elite-pipe.jpg',
      alt: 'ElitePipe',
      link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
    },
    {
      desktopImage: '/sliderImages/desktop/sterilepipe.jpg',
      mobileImage: '/sliderImages/mobile/sterilepipe.jpg',
      alt: 'Sterile Pipe',
      link: '/urunler/bina-ici-boru-sistemleri/sterilepipe',
    },
    {
      desktopImage: '/sliderImages/desktop/alt-yapı.jpg',
      mobileImage: '/sliderImages/mobile/alt-yapı.jpg',
      alt: 'Altyapı Boru Sistemleri',
      link: '/urunler/altyapi-boru-sistemleri',
    },
    {
      desktopImage: '/sliderImages/desktop/elastica.jpg',
      mobileImage: '/sliderImages/mobile/elastica.jpg',
      alt: 'ElitePipe Hero Image',
      link: '/urunler/bina-ici-boru-sistemleri/elastica-boru',
    },
    {
      desktopImage: '/sliderImages/desktop/projelerimiz.jpg',
      mobileImage: '/sliderImages/mobile/projelerimiz.jpg',
      alt: 'projelerimiz',
      link: '/projelerimiz',
    },
    {
      desktopImage: '/sliderImages/desktop/nanotek-premium.jpg',
      mobileImage: '/sliderImages/mobile/nanotek-premium.jpg',
      alt: 'nanotek',
      link: '/urunler/bina-ici-boru-sistemleri/nanotek-ve-nanotek-premium',
    },
    {
      desktopImage: '/sliderImages/desktop/koruge.jpg',
      mobileImage: '/sliderImages/mobile/koruge.jpg',
      alt: 'Koruge',
      link: '/urunler/altyapi-boru-sistemleri/koruge-boru',
    },
  ],
};

const Carousel = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    console.log(isMobile);
  }, [isMobile]);

  const [language] = useLanguageContext();

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
        {heroSlider[language].map((slide) => (
          <SwiperSlide
            key={slide.link || ''}
            onClick={() => {
              if (slide.link) {
                router.push(slide.link);
              }
            }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              loading="lazy"
              alt={slide.alt}
              src={isMobile ? slide.mobileImage : slide.desktopImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-12 z-10 flex w-full items-center justify-center xs:bottom-10">
        <a href="#newTechPipe">
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
        </a>
      </div>
    </div>
  );
};

export default Carousel;
