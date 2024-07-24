'use client';
import Header from '@/components/Header';
import MatrixCard from '@/components/cards/MatrixCard';
import ProductCard from '@/components/cards/ProductCard';
import { productList } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import { useEffect, useState } from 'react';

const Products = () => {
  const [language] = useLanguageContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    console.log(isMobile);
  }, [isMobile]);

  return (
    <div>
      <Header text="BİNA İÇİ BORU SİSTEMLERİ" />

      <div className="px-2 py-4">
        <p className="text-center font-sans text-lg">
          Dizayn Grup olarak, 37 yıllık tecrübemiz ve Ar-Ge çalışmalarımızla geliştirdiğimiz üstün
          kaliteli boru sistemleriyle dayanıklı ve uzun ömürlü çözümler sunuyoruz. Enerji
          verimliliği, çevre dostu ve hijyenik özellikleriyle ürünlerimiz, güvenilir ve
          sürdürülebilir projeler için idealdir.
        </p>
      </div>

      <div className="relative my-3 flex w-full flex-row px-2 max-md:flex-col">
        <div className="absolute left-0 top-0 z-0 size-full gap-3 bg-contain opacity-45" />
        {productList[language].superStructureProducts
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
              bgImage={item.banner.bgImage || ''}
              mobileBgImage={item.banner.mobileBgImage || ''}
              isMobile={isMobile}
            />
          ))}

        <div />
      </div>

      <div className="px-2 py-4">
        <p className="text-center font-sans text-lg">
          Bina içi boru sistemlerinde Dizayn Grup&apos;un üstün çözümleriyle projelerinizi bir adım
          öne taşıyın. Enerji verimliliği, hijyen ve uzun ömürlü kullanım sunar.
        </p>
      </div>

      <div
        className="my-5 grid
       grid-cols-5 items-center justify-items-center 
       gap-1 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-2 max-sm:grid-cols-1 max-sm:gap-6"
      >
        {productList[language].superStructureProducts.map(
          (item) =>
            item &&
            !item.featuredProduct === true && (
              <div
                className="flex size-full flex-col items-center justify-center gap-0"
                key={item.title}
              >
                <ProductCard
                  item={{
                    ...item,
                    customCSS: '',
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

export default SectionWrapper(Products, 'urunler');
