'use client';
import { Image } from '@nextui-org/react';
import Link from 'next/link';

const ProductCard = ({
  item: { title, description, link, logo, banner, customCSS },
  isPLP,
}: {
  item: {
    title: string;
    description: string;
    link: string;
    logo: string;
    banner: {
      PLP: string | undefined;
      vertical: string;
    };
    customCSS: string;
  };
  isPLP: boolean;
}) => {
  return (
    <div
      className="relative col-span-1 flex size-full flex-col items-center justify-between transition-all duration-300"
      key={title}
    >
      <Link
        key={title}
        href={link}
        className="flex h-fit flex-col items-center justify-between rounded-2xl border-2 border-gray-200 transition-all
        duration-300 hover:scale-105 hover:border-blue-400  
        "
      >
        <div className="relative">
          <Image
            alt={title}
            src={isPLP ? banner.PLP : banner.vertical}
            width={240}
            height={330}
            className={`${customCSS || ''} z-10 rounded-lg`}
          />
          {!isPLP && (
            <div
              className="absolute inset-0 z-10 flex
          flex-col
          items-center justify-start overflow-visible"
            >
              <div
                className=" flex
            flex-col items-center justify-center
            py-4 text-center  text-black overflow-visible"
              >
                <div className="mb-3 flex h-auto w-full flex-row items-center justify-center overflow-visible bg-white px-2 py-2">
                  {logo !== '' ? (
                    <Image
                      src={logo}
                      alt={`${title} logo`}
                      width={100}
                      height={100}
                      className="z-0 w-fit object-contain"
                    />
                  ) : (
                    <h3 className="text-lg font-bold">{title}</h3>
                  )}
                </div>

                <p
                  className="font-quicksand text-xs font-normal text-gray-800"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
