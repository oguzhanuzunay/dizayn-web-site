'use client';
import { countryList } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const Locale = ({ params }: { params: { locale: string } }) => {
  const [language] = useLanguageContext();
  const list = countryList[language].filter((item) => item.code === params.locale)[0];

  return (
    <div className="">
      <div className="mb-0 flex size-full items-center bg-gray-500 p-5">
        <p className="font-spaceGrotesk text-2xl font-semibold text-white">{list.title}</p>
      </div>
      <div className="ml-5 mt-3">
        <Breadcrumbs>
          <BreadcrumbItem href="/">Anasayfa</BreadcrumbItem>
          <BreadcrumbItem href="/sertifikalar">Sertifikalar</BreadcrumbItem>
          <BreadcrumbItem href={`/sertifikalar/${params.locale}`}>{list.title}</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="my-5 flex flex-row flex-wrap items-center justify-center">
        {list.allPDFs.map((pdf, index) => (
          <Link
            href={pdf.link}
            target="_blank"
            key={index}
            className="m-3 rounded-md bg-slate-100 p-3 transition-all duration-300 hover:scale-105 hover:bg-slate-200 hover:shadow-lg"
          >
            <div className=" bg-white p-3 ">
              <p className="w-[200px] text-start font-roboto text-tiny font-normal text-gray-500">
                {pdf.name}
              </p>
              <Image
                src={pdf.image}
                alt={pdf.name}
                width={200}
                height={200}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Locale;
