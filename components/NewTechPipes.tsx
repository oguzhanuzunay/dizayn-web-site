import '@/app/globals.css';

import { productList } from '@/constants';
import { useLocale, useTranslations } from 'next-intl';
import ProductCard from './cards/ProductCard';

const NewTechPipe = () => {
  const language = useLocale();
  const combinedProducts = [
    ...(productList[language]?.superStructureProducts ?? []),
    ...(productList[language]?.infrastructureProducts ?? []),
  ];

  const t = useTranslations('NewTechPipe');

  return (
    <div
      className="bg-white py-5"
      id="newTechPipe"
    >
      <div className="mb-3 flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-gray-900 max-sm:text-2xl">{t('title')}</h1>
        <p className="font-quicksand text-gray-900">{t('description')}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {combinedProducts.map(
          (item) =>
            item.banner &&
            item.isNewTech && (
              <div
                className="flex w-full flex-col items-center justify-center"
                key={item.title}
              >
                <ProductCard
                  item={{ ...item, customCSS: '' }}
                  isPLP={false}
                />
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default NewTechPipe;
