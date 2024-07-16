"use client";
import { languageTexts } from "@/constants";
import { useLanguageContext } from "@/context/language";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [language] = useLanguageContext();
  const imageContent = languageTexts[language].footer.imageContent;
  const footerContent = languageTexts[language].footer.footerContent;

  const socialMedia = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/dizayngroup",
      image: "/icons/socialMedia/facebook.png",
      alt: "facebook",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/dizayngrup",
      image: "/icons/socialMedia/instagram.png",
      alt: "instagram",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/dizayngrup",
      image: "/icons/socialMedia/linkedin.png",
      alt: "linkedin",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@dizayngrup",
      image: "/icons/socialMedia/youtube.png",
      alt: "youtube",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-end justify-around gap-5 bg-slate-800 px-5 max-lg:flex-wrap max-md:gap-3 max-sm:gap-0">
        {/* Logo part */}
        <div className="flex justify-center py-8 max-sm:py-6 ">
          <Image
            src={"/dizayn_logo_white.png"}
            alt="Dizayn Logo"
            width={200}
            height={120}
            className="
            max-h-[120px] max-w-fit max-md:max-h-20 max-md:max-w-fit max-sm:max-h-16 max-sm:max-w-fit"
          />
        </div>

        {/* highlighted part */}
        <div className="flex h-full flex-row items-center justify-between gap-8 py-10 max-lg:gap-4 max-lg:pt-2 max-md:flex-wrap max-md:justify-center max-md:gap-6 max-md:pt-1 max-sm:gap-4 max-sm:pb-2 max-sm:pt-0">
          {imageContent.map((item) => (
            <div
              key={item.title}
              className="flex flex-row items-center justify-center gap-4 hover:opacity-70"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={100}
                height={60}
                className="max-h-[60px] max-w-fit max-md:max-h-10 max-md:max-w-fit"
              />
              <p
                className="font-quicksand
              text-lg font-bold text-white
              max-md:font-quicksand max-md:text-medium
              max-sm:font-quicksand max-sm:text-sm
                            "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" h-full bg-slate-900 px-8 py-10  max-md:py-8 max-sm:py-6">
        {/* Social Media bölümü */}
        <div className="grid grid-cols-4 items-center justify-around gap-5 pb-5 max-sm:grid-cols-2 max-sm:justify-between max-sm:gap-1">
          {socialMedia.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer flex-row items-center justify-start gap-2 hover:scale-105 hover:opacity-70"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={36}
                height={36}
                className="max-h-9 max-w-fit max-md:max-h-8 max-md:max-w-8 max-sm:max-h-7 max-sm:max-w-7 "
              />
              <p className="text-gray-100">{item.name}</p>
            </Link>
          ))}
        </div>

        {/* Address part 
        <div
          className={`grid grid-cols-5 gap-2 border-b-1 border-black pb-3 max-md:grid-cols-3 max-sm:grid-cols-1`}
        >
          {footerContent.companyInformation.map((item, index) => (
            <div
              key={item.text}
              className={`flex flex-row items-center justify-start gap-3 ${
                index === 0 ? 'col-span-2 max-md:col-span-3' : 'max-sm:col-span-3'
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
                <p className="font-quicksand text-tiny text-gray-800">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
*/}
        {/* Links part */}
        <div className="flex flex-row flex-wrap justify-between gap-8 pt-8 max-md:gap-6 max-md:pt-6 max-sm:gap-4 max-sm:pt-4">
          {footerContent.links.map((item) => (
            <div key={item.title} className="flex flex-col gap-1">
              <div className="flex flex-row gap-2 ">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={24}
                  height={24}
                  className="max-h-6 max-w-fit "
                />
                <p className="text-lg font-bold text-white">{item.title}</p>
              </div>

              {item.content.map((link) => (
                <Link key={link.title} href={link.link}>
                  <div
                    className={`${
                      link.highlight
                        ? "font-bold text-yellow-400"
                        : "text-gray-100"
                    } cursor-pointer font-quicksand text-tiny transition-all duration-100 hover:underline`}
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
