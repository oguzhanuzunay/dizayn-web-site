'use client';
import Header from '@/components/Header';
import ProductCard from '@/components/cards/ProductCard';
import { superStructureProducts } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';

const Products = () => {
  const [language] = useLanguageContext();

  return (
    <div>
      <Header text="Üst Yapı" />

      <div
        className="grid grid-cols-4
       items-center justify-items-center gap-0 
       max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
      >
        {superStructureProducts[language].map(
          (item) =>
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

export default SectionWrapper(Products, 'urunler');
