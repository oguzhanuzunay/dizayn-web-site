'use client';
import MapComponent from '@/components/MapComponent/MapComponent';
import { languageTexts } from '@/constants';
import { useLanguageContext } from '@/context/language';
import Image from 'next/image';

const Bayilerimiz = () => {
  const [language] = useLanguageContext();
  const dealers = languageTexts[language].pages.dealers;

  return (
    <div>
      <div className="mb-0 flex h-5 w-full items-center bg-gray-500 p-5">
        <h2 className="font-spaceGrotesk text-2xl font-semibold text-white">Bayilerimiz</h2>
      </div>
      <div>
        <MapComponent />
        <div className="absolute bottom-5 right-1 z-10 ">
          <a href={dealers.subPageLink}>
            <Image
            
              src={dealers.imgLink}
              alt={dealers.alt}
              width={150}
              height={150}
            />
            <p>{dealers.text}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bayilerimiz;
