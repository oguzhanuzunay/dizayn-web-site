import { productDetailParams } from '@/types';
import Image from 'next/image';

const ProductDetailCard = ({ title, productDetail, image, alt, index,textColor }: productDetailParams) => {
  return (
    <div
      className={`m-6 flex flex-row items-center justify-start gap-5
        ${index && index % 2 === 0 ? '' : 'flex-row-reverse'}`}
    >
      {image && alt ? (
        <Image
          src={image as string}
          alt={alt as string}
          width={300}
          height={300}
        />
      ) : null}

      <div className={`flex flex-col items-start justify-center gap-3 ${textColor}`}>
        <p
          className="font-quicksand text-2xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-medium"
          dangerouslySetInnerHTML={{ __html: productDetail }}
        />
      </div>
    </div>
  );
};

export default ProductDetailCard;
