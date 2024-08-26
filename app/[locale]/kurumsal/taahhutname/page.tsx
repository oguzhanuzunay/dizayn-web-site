'use client';
import Header from '@/components/Header';
import LinkedButton from '@/components/LinkedButton';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Tahhutname = () => {
  const pathname = usePathname();
  const t = useTranslations('Kurumsal');
  interface kurumsalLinksParam {
    title: string;
    link: string;
  }

  const kurumsalLinks: kurumsalLinksParam[] = [
    {
      title: t('kurumsal.title'),
      link: t('kurumsal.link'),
    },
    {
      title: t('tarihce.title'),
      link: t('tarihce.link'),
    },
    {
      title: t('vizyon-ve-misyon.title'),
      link: t('vizyon-ve-misyon.link'),
    },
    {
      title: t('taahhutname.title'),
      link: t('taahhutname.link'),
    },
    {
      title: t('oduller-ve-basarilar.title'),
      link: t('oduller-ve-basarilar.link'),
    },
  ];

  return (
    <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div>
        <Header text={t('taahhutname.title')} />

        <div className="flex w-full items-start justify-center py-3 max-md:flex-col">
          <div className="flex w-1/2 flex-col items-center justify-start  max-md:w-full ">
            <div className="m-1 flex flex-row flex-wrap gap-3 p-3">
              {kurumsalLinks
                .filter(
                  (page) =>
                    page.link.toLowerCase().split('/')[
                      page.link.toLowerCase().split('/').length - 1
                    ] !==
                    pathname.toLowerCase().split('/')[pathname.toLowerCase().split('/').length - 1],
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
              src="/images/tahhutname.png"
              alt="tarihce"
              width={600}
              height={600}
              className="w-full rounded-lg"
            />
          </div>

          <div className="ml-4 flex w-1/2 flex-col items-start justify-center gap-3 max-md:ml-0 max-md:w-full max-md:pt-3">
            <p className="text-lg font-semibold ">{t('taahhutname.content.0')}</p>

            <p>{t.rich('taahhutname.content.1')}</p>

            <p>{t.rich('taahhutname.content.2')}</p>

            <p>{t.rich('taahhutname.content.3')}</p>

            <p>{t.rich('taahhutname.content.4')}</p>

            <p>{t('taahhutname.content.5')}</p>

            <p>{t('taahhutname.content.6')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tahhutname;
