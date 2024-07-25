'use client';
import FAQs from '@/components/FAQs';
import Header from '@/components/Header';
import ProductDetailCard from '@/components/ProductDetail/ProductDetailCard';
import FeaturesCard from '@/components/cards/FeaturesCard';
import { productList } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import Image from 'next/image';

const Page = ({ params }: { params: { product: string } }) => {
  const [language] = useLanguageContext();

  const product = productList[language].infrastructureProducts.find(
    (item) => item.link.split('/')[item.link.split('/').length - 1] === params.product,
  );

  console.log(product);

  if (product === undefined) {
    return <div>Ürün bulunamadı.</div>;
  }

  const productDetail = product?.productDetails;

  return (
    <div>
      <Header text={productDetail.title} />

      <div className="ml-5 mt-3">
        <Breadcrumbs>
          <BreadcrumbItem href="/">Anasayfa</BreadcrumbItem>
          <BreadcrumbItem href="/urunler/bina-ici-boru-sistemleri">Ürünler</BreadcrumbItem>
          <BreadcrumbItem href={`/urunler/${params.product}`}>
            {params.product.replace('-', ' ').toUpperCase()}
          </BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="flex w-full flex-row items-center justify-center rounded-3xl border-0 px-10 py-3">

        <Image
          src={product.banner.horizontal}
          alt={productDetail.title}
          width={1800}
          height={400}
          className="mx-10 my-3 w-full rounded-xl border-0 shadow-lg transition-all duration-500 hover:shadow-xl"
        />
      </div>
      <div />

      <div className="flex h-full flex-row items-center justify-center gap-5">
        <Image
          src={productDetail.images[0].image}
          alt={productDetail.images[0].alt}
          width={300}
          height={400}
        />

        <div className="flex h-full flex-col items-start justify-start">
          <b className="mb-2">{productDetail.title}</b>
          <p>{productDetail.description}</p>
        </div>
      </div>

      <div className="my-2 flex size-full flex-row flex-wrap items-center justify-center gap-5">
        {productDetail.features.map((item, index) => (
          <FeaturesCard
            key={index}
            title={item.title}
            description={item.description}
            src={item.icon}
            alt={item.alt}
            size={64}
          />
        ))}
      </div>

      <div className="m-3 flex flex-col items-start justify-start rounded-lg p-3">
        {productDetail?.headers.map((item, index) => (
          <ProductDetailCard
            key={index}
            title={item.title}
            productDetail={item.description}
            index={index}
            textColor="text-dark"
            {...(item.image && item.alt ? { image: item.image, alt: item.alt } : {})}
          />
        ))}
      </div>

      <FAQs faqs={productDetail?.faqs} />
    </div>
  );
};

export default Page;
