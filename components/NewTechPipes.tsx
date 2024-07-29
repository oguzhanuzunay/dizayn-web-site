'use client';
import '@/app/globals.css';

import { productList } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import ProductCard from './cards/ProductCard';

const NewTechPipe = () => {
  const [language] = useLanguageContext();
  const combinedProducts = [
    ...productList[language].superStructureProducts,
    ...productList[language].infrastructureProducts
];

  return (
    <div
      className="bg-white py-5"
      id="newTechPipe"
    >
      <div className="mb-3 flex flex-1 flex-col items-center justify-center ">
        <h1 className="text-center text-4xl font-bold text-gray-900 max-sm:text-2xl ">
          Üstün Teknoloji Ürünlerimiz
        </h1>
        <p className="font-quicksand text-gray-900">
          Yeni nesil, üstün teknolojili borularımız ile tanışın.
        </p>
      </div>

      <div
        className="grid grid-cols-4
       items-center justify-items-stretch gap-0 
       max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
      >
        {combinedProducts.map(
          (item) =>
            item.banner && item.isNewTech && (
              <div
                className="m-4 mx-6  flex size-full flex-col
                items-center justify-center gap-0"
                key={item.title}
              >
                <ProductCard item={{ ...item, customCSS: '' }} isPLP={false} />
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(NewTechPipe, 'NewTechPipe');
