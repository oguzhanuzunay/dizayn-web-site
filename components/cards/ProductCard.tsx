'use client';
import { sliderParam } from '@/types';
import Image from 'next/image';
import { BackgroundGradient } from '../ui/background-gradient';

const ProductCard = (props: { item: sliderParam }) => {
  const { item } = props;
  return (
    <BackgroundGradient
      containerClassName="max-w-full h-full"
      className="flex h-[420px] max-w-sm flex-col items-center justify-between gap-5 rounded-[22px] bg-white p-8"
      animate
      key={item.title}
    >
      <h3 className="text-4xl font-bold text-gray-900 max-sm:text-2xl">{item.title}</h3>
      <Image
        alt={item.title}
        src={item.image}
        width={200}
        height={200}
        className={`${item.customCSS}` || ''}
      />
      <p className="font-roboto text-sm text-teal-900 dark:text-neutral-400">{item.description}</p>
    </BackgroundGradient>
  );
};

export default ProductCard;
