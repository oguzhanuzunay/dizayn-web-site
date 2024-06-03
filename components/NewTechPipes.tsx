'use client';
import { sliderItems } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import ProductCard from './cards/ProductCard';

const NewTechPipe = () => {
  const [language] = useLanguageContext();

  return (
    <div className="bg-white py-5" id='newTechPipe'>
      <div className="mb-3 flex flex-1 flex-col items-center justify-center ">
        <h1 className="text-center text-4xl font-bold text-gray-900 max-sm:text-2xl">
        🚀 Yeni Nesil Borularımız 🚀
        </h1>
        <p className="font-roboto text-gray-900">
          Yeni nesil, üstün teknolojili borularımız ile tanışın.
        </p>
      </div>

      <div className="flex flex-row items-center justify-around gap-5 p-5 max-sm:flex-col">
        {sliderItems[language].map(
          (item) =>
            item && (
              <a
                key={item.title}
                href={item.link}
              >
                <ProductCard item={item} />
              </a>
            ),
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(NewTechPipe, 'NewTechPipe');
