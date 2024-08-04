'use client';
import Header from '@/components/Header';
import MatrixCard from '@/components/cards/MatrixCard';
import ProductCard from '@/components/cards/ProductCard';
import { productList } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';

const AltYapı = () => {
  const [language] = useLanguageContext();

  return (
    <div>
      <Header text="Altyapı Boru Sistemleri" />

      <div className="relative my-3 flex w-full flex-row px-2 max-md:flex-col ">
        <div className="absolute left-0 top-0 z-0 size-full gap-3 bg-contain opacity-45" />
        {productList[language].infrastructureProducts
          .filter((item) => item.featuredProduct === true)
          .map((item, index) => (
            <MatrixCard
              link={item.link}
              key={item.title}
              id={index}
              title={item.title}
              image={item.image}
              highlights={item.highlights}
              logo={item.logo}
            />
          ))}
        <div />

        <div
          className={`absolute left-0 top-0 z-0 h-full  gap-3 bg-contain opacity-45`}
        />
      </div>

      <div
        className="grid grid-cols-5
       items-center justify-items-center gap-0 
       max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
      >
        {productList[language].infrastructureProducts.map(
          (item) =>
            item &&
            !item.featuredProduct === true && (
              <div
                className="flex size-full flex-col items-center justify-center gap-0  p-4"
                key={item.title}
              >
                <ProductCard
                  item={{
                    ...item,
                    customCSS: ''
                  }}
                  isPLP={true}
                />
              </div>
            ),
        )}
      </div>
    </div>
  );
};
export default SectionWrapper(AltYapı, 'AltYapı');
