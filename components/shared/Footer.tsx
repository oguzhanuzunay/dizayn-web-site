'use client';
import { languageTexts } from '@/constants';
import { useLanguageContext } from '@/context/language';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const [language] = useLanguageContext();
  const imageContent = languageTexts[language].footer.imageContent;
  const footerContent = languageTexts[language].footer.footerContent;

  return (
    <div className="flex flex-col">
      <div className=" flex-1 flex-row flex-wrap items-end justify-around gap-5 bg-slate-200 px-5 max-md:gap-3 max-sm:gap-0">
        {/* Logo part */}
        <div className="flex justify-center py-8 max-sm:py-6">
          <Image
            src={'/dizayn-logo.png'}
            alt="Dizayn Logo"
            width={200}
            height={120}
            className="
            max-h-[120px] max-w-fit max-md:max-h-20 max-md:max-w-fit max-sm:max-h-16 max-sm:max-w-fit"
          />
        </div>

        {/* highlighted part */}
        <div
          className="flex h-full w-[4/5] flex-row  flex-wrap items-center justify-between gap-8 py-10 max-md:justify-center max-md:gap-6 max-md:pt-3
        max-sm:gap-4 max-sm:pt-0"
        >
          {imageContent.map((item) => (
            <div
              key={item.title}
              className="flex flex-row items-center justify-center gap-4 "
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={100}
                height={60}
                className="max-h-[60px] max-w-fit invert max-md:max-h-10 max-md:max-w-fit"
              />
              <p
                className="font-roboto
              text-lg font-bold text-gray-800
              max-md:font-roboto max-md:text-medium
              max-sm:font-roboto max-sm:text-sm
                            "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" h-full bg-slate-100 px-8 py-10  max-md:py-8 max-sm:py-6">
        {/* Social Media part */}
        <div className="grid grid-cols-4 items-center justify-around gap-5 pb-5 max-sm:grid-cols-2 max-sm:justify-between max-sm:gap-1">
          {footerContent.socialMedia.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer flex-row items-center justify-start gap-2"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={36}
                height={36}
                className="max-h-9 max-w-fit invert max-md:max-h-8 max-md:max-w-8 max-sm:max-h-7 max-sm:max-w-7 "
              />
              <p className="text-gray-800">{item.name}</p>
            </Link>
          ))}
        </div>

        {/* Address part */}
        <div
          className={`grid grid-cols-5 gap-2 border-b-1 border-black pb-3 max-md:grid-cols-3 max-sm:grid-cols-1`}
        >
          {footerContent.companyInformation.map((item, index) => (
            <div
              key={item.text}
              className={`flex flex-row items-center justify-start gap-3 ${
                index === 0 ? 'col-span-2 max-md:col-span-3' : 'max-sm:col-span-1'
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={100}
                height={60}
                className="max-h-9 max-w-fit invert max-md:max-h-8 max-md:max-w-fit max-sm:max-h-7 max-sm:max-w-fit"
              />
              <div className={`flex flex-col`}>
                <p className="text-sm font-bold text-gray-900">{item.title}</p>
                <p className="font-roboto text-tiny text-gray-800">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Links part */}
        <div className="flex flex-row flex-wrap justify-between gap-8 pt-8 max-md:gap-6 max-md:pt-6 max-sm:gap-4 max-sm:pt-4">
          {footerContent.links.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-1"
            >
              <div className="flex flex-row gap-2 ">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={24}
                  height={24}
                  className="max-h-6 max-w-fit invert"
                />
                <p className="text-lg font-bold text-gray-900">{item.title}</p>
              </div>

              {item.content.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                >
                  <div
                    className={`${
                      link.highlight ? 'font-bold text-yellow-700' : 'text-gray-700'
                    } font-roboto text-tiny`}
                  >
                    {link.title}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
