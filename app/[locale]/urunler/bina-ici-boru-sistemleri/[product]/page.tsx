'use client';
import FAQs from '@/components/FAQs';
import Header from '@/components/Header';
import ProductDetailCard from '@/components/ProductDetail/ProductDetailCard';
import FeaturesCard from '@/components/cards/FeaturesCard';
import { productList } from '@/constants';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

const Page = ({ params }: { params: { product: string } }) => {
  const language = useLocale();

  const t = useTranslations('Breadcrumb');

  const product = productList[language]?.superStructureProducts.find(
    (item) => item.link.split('/')[item.link.split('/').length - 1] === params.product,
  );

  if (product === undefined) {
    return <>{t('productNotFound')}</>;
  }

  const productDetail = product?.productDetails;

  return (
    <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <Header text={productDetail.title} />

      <div className="ml-5 mt-3">
        <Breadcrumbs>
          <BreadcrumbItem href="/">{t('home')}</BreadcrumbItem>
          <BreadcrumbItem href="/tr/urunler/bina-ici-boru-sistemleri	">
            {t('products')}
          </BreadcrumbItem>
          <BreadcrumbItem href={`tr/ürünler/${params.product}`}>
            {params.product.replace('-', ' ').replace('boru', '').toUpperCase()}
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

      <div className="flex h-full flex-row items-center justify-center gap-5 py-2 max-sm:flex-col max-sm:px-12">
        <Image
          src={productDetail.images[0]?.image ?? ''}
          alt={productDetail.images[0]?.alt ?? ''}
          width={300}
          height={400}
        />

        <div className="flex h-full flex-col items-start justify-start ">
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

      <div className="m-3 flex flex-col items-start justify-center rounded-lg p-3">
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

      <FAQs faqs={productDetail.faqs} />
    </section>
  );
};

export default Page;
