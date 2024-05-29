'use client';
import { useLanguageContext } from '@/context/language';
import Image from 'next/image';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { sliderItems } from '@/constants';
import { sliderParam } from '@/types';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const MiniCard = ({ item }: { item: sliderParam }) => (
  <div
    className="flex size-36 flex-col items-center justify-between rounded-lg bg-white p-4 shadow-md"
    key={item.title}
  >
    <div className="flex flex-col items-center justify-between">
      <Image
        src={item.image}
        alt={item.alt}
        width={100}
        height={100}
      />
      <p className="text-sm text-gray-500"> {item.title}</p>
    </div>
  </div>
);

const MiniSlider = () => {
  const [language] = useLanguageContext();

  return (
    <div
      id="mini-slider"
      className=""
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className=""
      >
        {sliderItems[language].map(
          (item) =>
            item && (
              <SwiperSlide key={item.title}>
                <MiniCard item={item} />
              </SwiperSlide>
            ),
        )}
      </Swiper>
    </div>
  );
};

export default MiniSlider;
