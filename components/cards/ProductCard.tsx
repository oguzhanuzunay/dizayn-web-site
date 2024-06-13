'use client';
import { sliderParam } from '@/types';
import { Image } from '@nextui-org/react';
import Link from 'next/link';

const ProductCard = (props: { item: sliderParam }) => {
  const { item } = props;
  return (
    <div
      className="col-span-1 flex h-full w-56 flex-col items-center justify-between px-2 py-4  transition-all duration-300 "
      key={item.title}
    >
      <Link
        key={item.title}
        href={item.link}
        className=" flex h-full flex-col items-center justify-between gap-3 rounded-lg transition-all duration-300 hover:scale-105"
      >
        <h3 className="text-2xl font-bold text-gray-900 max-md:text-lg max-sm:text-medium">
          {item.title}
        </h3>

        <Image
          alt={item.title}
          src={item.image}
          width={200}
          height={200}
          className={`${item.customCSS}` || ''}
        />

        <p className="font-roboto text-sm text-teal-900 dark:text-neutral-400">
          {item.description}
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
