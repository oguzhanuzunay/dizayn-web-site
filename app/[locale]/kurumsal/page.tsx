'use client';
import Header from '@/components/Header';
import LinkedButton from '@/components/LinkedButton';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface kurumsalLinksParam {
  title: string;
  link: string;
}

const Kurumsal = () => {
  const pathname = usePathname();
  const t = useTranslations('Kurumsal');
  const kurumsalLinks: kurumsalLinksParam[] = [
    {
      title: t('kurumsal.title'),
      link: t('kurumsal.link'),
    },
    {
      title: t('tarihce.title'),
      link: 'kurumsal/tarihce',
    },
    {
      title: t('vizyon-ve-misyon.title'),
      link: 'kurumsal/vizyon-ve-misyon',
    },
    {
      title: t('taahhutname.title'),
      link: 'kurumsal/taahhutname',
    },
    {
      title: t('oduller-ve-basarilar.title'),
      link: 'kurumsal/oduller-ve-basarilar',
    },
  ];

  return (
    <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="relative z-0 mx-auto max-w-7xl px-6 sm:px-16">
        <Header text={t('kurumsal.title')} />

        <div className="my-3 flex flex-col items-center justify-between gap-3 px-4 py-2">
          <div className="flex w-full items-start justify-center max-md:flex-col">
            <div className="flex w-1/2 flex-col items-center justify-start max-md:w-full">
              <div className="m-1 flex flex-row flex-wrap gap-3 p-3">
                {kurumsalLinks
                  .filter(
                    (page) =>
                      page.link.toLowerCase().split('/')[
                        page.link.toLowerCase().split('/').length - 1
                      ] !==
                      pathname.toLowerCase().split('/')[
                        pathname.toLowerCase().split('/').length - 1
                      ],
                  )
                  .map((page) => (
                    <LinkedButton
                      key={page.title}
                      text={page.title}
                      href={page.link}
                    />
                  ))}
              </div>
              <Image
                src="/images/kurumsal.png"
                alt="kurumsal"
                width={600}
                height={600}
                className="w-full rounded-lg"
              />
            </div>

            <div className="ml-4 flex w-1/2 flex-col items-start justify-center gap-3 max-md:ml-0 max-md:w-full max-md:pt-3">
              {t.rich('kurumsal.content', {
                p: (chunks) => <p>{chunks}</p>,
                b: (chunks) => <b>{chunks}</b>,
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kurumsal;
