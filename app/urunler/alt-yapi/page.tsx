'use client';
import Header from '@/components/Header';
import ProductCard from '@/components/cards/ProductCard';
import { infrastructureProducts } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import { sliderParam } from '@/types';

const AltYapı = () => {
  const [language] = useLanguageContext();

  return (
    <div>
      <Header text="Alt Yapı" />

      <div
        className="grid grid-cols-4
     items-center justify-items-center gap-0 
     max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
      >
        {infrastructureProducts[language].map(
          (item: sliderParam) =>
            item && (
              <div
                className="flex size-full flex-col items-center justify-center gap-0 border-2 border-dashed border-gray-200 p-4 "
                key={item.title}
              >
                <ProductCard item={item} />
              </div>
            ),
        )}
      </div>
    </div>
  );
};
export default SectionWrapper(AltYapı, 'AltYapı');
