'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface socialMediaParams {
  name: string;
  link: string;
  image: string;
  alt: string;
}

interface linksParams {
  title: string;
  image: string;
  alt: string;
  content: {
    title: string;
    link: string;
    highlight?: boolean;
  }[];
}

interface imageContentParams {
  title: string;
  image: string;
  alt: string;
}

const Footer = () => {
  const t = useTranslations('Footer');

  const links: linksParams[] = [
    {
      title: t('link.company.title'),
      image: '/icons/company.png',
      alt: 'company icon',
      content: [
        {
          title: t('link.company.about.name'),
          link: t('link.company.about.link'),
        },
        {
          title: t('link.company.visionMission.name'),
          link: t('link.company.visionMission.link'),
        },
        {
          title: t('link.company.awards.name'),
          link: t('link.company.awards.link'),
          highlight: true,
        },
        {
          title: t('link.company.qualityPolicy.name'),
          link: t('link.company.qualityPolicy.link'),
        },
      ],
    },
    {
      title: t('link.products.title'),
      image: '/icons/product.png',
      alt: 'product icon',
      content: [
        {
          title: 'ElitePipe',
          link: t('link.products.elitePipe.link'),
        },
        {
          title: 'SterilePipe',
          link: t('link.products.sterilePipe.link'),
        },
        {
          title: t('link.products.indoorPipeSystems.name'),
          link: t('link.products.indoorPipeSystems.link'),
        },
        {
          title: t('link.products.outdoorPipeSystems.name'),
          link: t('link.products.outdoorPipeSystems.link'),
        },
      ],
    },
    {
      title: t('link.services.title.name'),
      image: '/icons/service.png',
      alt: 'service icon',
      content: [
        {
          title: t('link.services.calculations.name'),
          link: t('link.services.calculations.link'),
        },
        {
          title: t('link.services.dealers.name'),
          link: t('link.services.dealers.link'),
        },
        {
          title: t('link.services.projects.name'),
          link: t('link.services.projects.link'),
        },
        {
          title: t('link.services.certificates.name'),
          link: t('link.services.certificates.link'),
        },
      ],
    },
    {
      title: t('link.communication.title'),
      image: '/icons/communication.png',
      alt: 'communication icon',
      content: [
        {
          title: t('link.communication.contact.name'),
          link: t('link.communication.contact.link'),
        },
      ],
    },
  ];

  const imageContent: imageContentParams[] = [
    {
      title: t('imageContent.domesticProduction'),
      image: '/icons/atom.png',
      alt: t('imageContent.domesticProduction').toString().toLowerCase().replace(' ', '-'),
    },
    {
      title: t('imageContent.highTechnology'),
      image: '/icons/raw.png',
      alt: t('imageContent.highTechnology').toString().toLowerCase().replace(' ', '-'),
    },
    {
      title: t('imageContent.highQuality'),
      image: '/icons/high-tech.png',
      alt: t('imageContent.highQuality').toString().toLowerCase().replace(' ', '-'),
    },
  ];

  const socialMedia: socialMediaParams[] = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/dizayngroup',
      image: '/icons/socialMedia/facebook.png',
      alt: 'facebook',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/dizayngroup',
      image: '/icons/socialMedia/instagram.png',
      alt: 'instagram',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/company/dizayn-grup',
      image: '/icons/socialMedia/linkedin.png',
      alt: 'linkedin',
    },
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/@dizayngrup',
      image: '/icons/socialMedia/youtube.png',
      alt: 'youtube',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-end justify-around gap-5 bg-slate-800 px-5 max-lg:flex-wrap max-md:gap-3 max-sm:gap-0">

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
              max-md:font-quicksand max-md:text-base
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

        {/* Links part */}
        <div className="flex flex-row flex-wrap justify-between gap-8 pt-8 max-md:gap-6 max-md:pt-6 max-sm:gap-4 max-sm:pt-4">
          {links.map((item) => (
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
                  className="max-h-6 max-w-fit "
                />
                <p className="text-lg font-bold text-white">{item.title}</p>
              </div>

              {item.content.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                >
                  <div
                    className={`${
                      link.highlight ? 'font-bold text-yellow-400' : 'text-gray-100'
                    } cursor-pointer font-quicksand text-sm transition-all duration-100 hover:underline`}
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
