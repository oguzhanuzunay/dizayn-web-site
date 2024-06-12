'use client';

import Image from 'next/image';
// Import Swiper React components
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [window.innerWidth]);

  return (
    <div className="top-0 flex w-full items-center justify-center">
      <Swiper
        className="h-screen w-full"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        keyboard={true}
        modules={[Pagination, Navigation, Keyboard]}
      >
        <SwiperSlide>
          <Image
            layout="fill"
            objectFit="cover"
            alt="random image"
            src={isMobile ? '/images/sterile-mobile.png' : '/images/sterile-desktop.png'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout="fill"
            objectFit="cover"
            alt="random image"
            src="/images/slider-2.jpg"
          />
        </SwiperSlide>
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
