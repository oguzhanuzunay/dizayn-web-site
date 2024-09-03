import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export interface countryCertificateParams {
  name: string;
  code: string;
  title: string;
  certificates: {
    product: string;
    allPDFs: {
      name: string;
      image: string;
      link: string;
    }[];
  }[];
}

const Locale = ({ params }: { params: { locale: string; countryName: string } }) => {
  const t = useTranslations('Certificates');

  const countryCertificate: countryCertificateParams[] = [
    {
      name: t('germany.name'),
      code: 'de',
      title: t('germany.title'),
      certificates: [],
    },
    {
      name: t('turkey.name'),
      code: 'tr',
      title: t('turkey.title'),
      certificates: [
        {
          product: 'ElitePipe',
          allPDFs: [
            {
              name: t('turkey.elitePipe.certificate-1'),
              image:
                '/certificates/files/tr/imgs/elite-sertifikaları/ELİT BORU VE FITTINGS İÇME KULLANMA SUYUNA ETKİ DENEY RAPORU-1.png',
              link: '/certificates/files/tr/pdfs/elite-sertifikaları/ELİT BORU VE FITTINGS İÇME KULLANMA SUYUNA ETKİ DENEY RAPORU.pdf',
            },
            {
              name: t('turkey.elitePipe.certificate-2'),
              image:
                '/certificates/files/tr/imgs/elite-sertifikaları/ELITE NİPEL DD. TSE DENEY SERTİFİKASI (TS EN ISO 1167)-1.png',
              link: '/certificates/files/tr/pdfs/elite-sertifikaları/ELITE NİPEL DD. TSE DENEY SERTİFİKASI (TS EN ISO 1167).pdf',
            },
            {
              name: t('turkey.elitePipe.certificate-3'),
              image:
                '/certificates/files/tr/imgs/elite-sertifikaları/ELİT BORU TSE DENEY SERTİFİKASI  (TS EN ISO 9854)-1.png',
              link: '/certificates/files/tr/pdfs/elite-sertifikaları/ELİT BORU TSE DENEY SERTİFİKASI  (TS EN ISO 9854).pdf',
            },
            {
              name: t('turkey.elitePipe.certificate-4'),
              image:
                '/certificates/files/tr/imgs/elite-sertifikaları/ELİT NİPEL İD. TSE DENEY SERTİFİKASI (TS EN ISO 1167)-1.png',
              link: '/certificates/files/tr/pdfs/elite-sertifikaları/ELİT NİPEL İD. TSE DENEY SERTİFİKASI (TS EN ISO 1167).pdf',
            },
          ],
        },
        {
          product: t('turkey.pex.title'),
          allPDFs: [
            {
              name: t('turkey.pex.certificate-1'),
              image: '/certificates/files/tr/imgs/PEX/PEX BORU TSE  HIJYEN TEST RAPORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/PEX/PEX BORU TSE  HIJYEN TEST RAPORU.pdf',
            },
            {
              name: t('turkey.pex.certificate-2'),
              image:
                '/certificates/files/tr/imgs/PEX/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/PEX/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI.pdf',
            },
            {
              name: t('turkey.pex.certificate-3'),
              image:
                '/certificates/files/tr/imgs/PEX/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI(ingilizce)_00001.jpg',
              link: '/certificates/files/tr/pdfs/PEX/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI(ingilizce).pdf',
            },
          ],
        },
        {
          product: t('turkey.domestic.title'),
          allPDFs: [
            {
              name: t('turkey.domestic.certificate-1'),
              image:
                '/certificates/files/tr/imgs/Yerli-Malı/Yerli Malı Bel.PPRC Metalli Fittings.jpg',
              link: '/certificates/files/tr/pdfs/Yerli-Malı/Yerli Malı Bel.PPRC Metalli Fittings.pdf',
            },
          ],
        },
        {
          product: t('turkey.watewater-pipe.title'),
          allPDFs: [
            {
              name: t('turkey.watewater-pipe.certificate-1'),
              image:
                '/certificates/files/tr/imgs/atıksu-boru-ve-ekleme-parca-sertifikaları/ATIKSU NANOTEK SESSİZLİK TEST RAPORU FRAUNHOFER_00001.jpg',
              link: '/certificates/files/tr/pdfs/atıksu-boru-ve-ekleme-parca-sertifikaları/ATIKSU NANOTEK SESSİZLİK TEST RAPORU FRAUNHOFER.pdf',
            },
            {
              name: t('turkey.watewater-pipe.certificate-2'),
              image:
                '/certificates/files/tr/imgs/atıksu-boru-ve-ekleme-parca-sertifikaları/ATIKSU TRIPLEX SESSİZLİK TEST RAPORU FRAUNHOFER_00001.jpg',
              link: '/certificates/files/tr/pdfs/atıksu-boru-ve-ekleme-parca-sertifikaları/ATIKSU TRIPLEX SESSİZLİK TEST RAPORU FRAUNHOFER.pdf',
            },
            {
              name: t('turkey.watewater-pipe.certificate-3'),
              image:
                '/certificates/files/tr/imgs/atıksu-boru-ve-ekleme-parca-sertifikaları/triplextra_yanmazlık_belgesi_00001.jpg',
              link: '/certificates/files/tr/pdfs/atıksu-boru-ve-ekleme-parca-sertifikaları/triplextra_yanmazlık_belgesi.pdf',
            },
            {
              name: t('turkey.watewater-pipe.certificate-4'),
              image:
                '/certificates/files/tr/imgs/atıksu-boru-ve-ekleme-parca-sertifikaları/TS EN 1451-1 ATIKSU BORU VE EK PARÇALARI TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/atıksu-boru-ve-ekleme-parca-sertifikaları/TS EN 1451-1 ATIKSU BORU VE EK PARÇALARI TSE  SERTİFİKASI.pdf',
            },
            {
              name: t('turkey.watewater-pipe.certificate-5'),
              image:
                '/certificates/files/tr/imgs/atıksu-boru-ve-ekleme-parca-sertifikaları/yanmaz_boru_sessizlik_belgesi_ingilizce_00001.jpg',
              link: '/certificates/files/tr/pdfs/atıksu-boru-ve-ekleme-parca-sertifikaları/yanmaz_boru_sessizlik_belgesi_ingilizce.pdf',
            },
          ],
        },
        {
          product: t('turkey.ima.title'),
          allPDFs: [
            {
              name: t('turkey.ima.certificate-1'),
              image:
                '/certificates/files/tr/imgs/ima-sertifikaları/IMA Test Report V241-20-1  HDPE100 BORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/ima-sertifikaları/IMA Test Report V241-20-1  HDPE100 BORU.pdf',
            },
            {
              name: t('turkey.ima.certificate-2'),
              image:
                '/certificates/files/tr/imgs/ima-sertifikaları/IMA Test Report V241-20-2 PE80 D.GAZ BORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/ima-sertifikaları/IMA Test Report V241-20-2 PE80 D.GAZ BORU.pdf',
            },
            {
              name: t('turkey.ima.certificate-3'),
              image:
                '/certificates/files/tr/imgs/ima-sertifikaları/IMA Test Report V241-20-3  PPR BORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/ima-sertifikaları/IMA Test Report V241-20-3  PPR BORU.pdf',
            },
            {
              name: t('turkey.ima.certificate-4'),
              image:
                '/certificates/files/tr/imgs/ima-sertifikaları/IMA Test Report V241-20-4 PPR FITTINGS_00001.jpg',
              link: '/certificates/files/tr/pdfs/ima-sertifikaları/IMA Test Report V241-20-4 PPR FITTINGS.pdf',
            },
          ],
        },
        {
          product: t('turkey.ppr.title'),
          allPDFs: [
            {
              name: t('turkey.ppr.certificate-1'),
              image:
                '/certificates/files/tr/imgs/PPR-Sert/PPR BORU VE FITTINGS TSE HIJYEN TEST RAPORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/PPR BORU VE FITTINGS TSE HIJYEN TEST RAPORU.pdf',
            },
            {
              name: t('turkey.ppr.certificate-2'),
              image:
                '/certificates/files/tr/imgs/PPR-Sert/TS 13715 CAM ELYAF TAKVİYELİ KOMPOZİT BORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/TS 13715 CAM ELYAF TAKVİYELİ KOMPOZİT BORU.pdf',
            },
            {
              name: t('turkey.ppr.certificate-3'),
              image:
                '/certificates/files/tr/imgs/PPR-Sert/TS EN ISO 15874-2 PPR BORU TSE  SERTİFİKASI(ingilizce)_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/TS EN ISO 15874-2 PPR BORU TSE  SERTİFİKASI(ingilizce).pdf',
            },
            {
              name: t('turkey.ppr.certificate-4'),
              image:
                '/certificates/files/tr/imgs/PPR-Sert/TS EN ISO 15874-2 PPR BORU TSE  SERTİFİKASI(türkçe)_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/TS EN ISO 15874-2 PPR BORU TSE  SERTİFİKASI(türkçe).pdf',
            },
            {
              name: t('turkey.ppr.certificate-5'),
              image:
                '/certificates/files/tr/imgs/PPR-Sert/TS EN ISO 15874-3 PPR FIT. TSE  SERTİFİKASI(ingilizce)_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/TS EN ISO 15874-3 PPR FIT. TSE  SERTİFİKASI(ingilizce).pdf',
            },
            {
              name: t('turkey.ppr.certificate-6'),
              image:
                '/certificates/files/tr/imgs/PPR-Sert/TS EN ISO 15874-3 PPR FIT. TSE  SERTİFİKASI(turkçe)_00001.jpg',
              link: '/certificates/files/tr/pdfs/PPR-Sert/TS EN ISO 15874-3 PPR FIT. TSE  SERTİFİKASI(turkçe).pdf',
            },
          ],
        },
        {
          product: t('turkey.rtp-soft.title'),
          allPDFs: [
            {
              name: t('turkey.rtp-soft.certificate-1'),
              image: '/certificates/files/tr/imgs/RE_RTP-VE-SOFT/RTP BORU DENEY SERTİFİKASI.jpg',
              link: '/certificates/files/tr/pdfs/RE_RTP-VE-SOFT/RTP BORU DENEY SERTİFİKASI.pdf',
            },
            {
              name: t('turkey.rtp-soft.certificate-2'),
              image:
                '/certificates/files/tr/imgs/RE_RTP-VE-SOFT/SOFT POWER PIPE DENEY SERTİFİKASI.jpg',
              link: '/certificates/files/tr/pdfs/RE_RTP-VE-SOFT/SOFT POWER PIPE DENEY SERTİFİKASI.pdf',
            },
          ],
        },
        {
          product: t('turkey.spiral-corrugated.title'),
          allPDFs: [
            {
              name: t('turkey.spiral-corrugated.certificate-1'),
              image:
                '/certificates/files/tr/imgs/sarmal-ve-koruge/DIN 16961 SARMAL BELGELENDİRME.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-koruge/DIN 16961 SARMAL BELGELENDİRME.pdf',
            },
            {
              name: t('turkey.spiral-corrugated.certificate-4'),
              image:
                '/certificates/files/tr/imgs/sarmal-ve-koruge/TS 12132 SARMAL BORU TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-koruge/TS 12132 SARMAL BORU TSE  SERTİFİKASI.pdf',
            },
            {
              name: t('turkey.spiral-corrugated.certificate-5'),
              image:
                '/certificates/files/tr/imgs/sarmal-ve-koruge/TS EN 13476-3 KORİGE BORU TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-koruge/TS EN 13476-3 KORİGE BORU TSE  SERTİFİKASI.pdf',
            },
          ],
        },
      ],
    },
    {
      name: t('romania.name'),
      code: 'ro',
      title: t('romania.title'),
      certificates: [],
    },
    {
      name: t('russia.name'),
      code: 'ru',
      title: t('russia.title'),
      certificates: [],
    },
    {
      name: t('belarus.name'),
      code: 'by',
      title: t('belarus.title'),
      certificates: [],
    },
    {
      name: t('ukraine.name'),
      code: 'ua',
      title: t('ukraine.title'),
      certificates: [],
    },
    {
      name: t('poland.name'),
      code: 'pl',
      title: t('poland.title'),
      certificates: [],
    },
  ];

  console.log(params.countryName);
  const list = countryCertificate.filter((item) => item.code === params.countryName)[0];

  return (
    <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="mb-0 flex size-full items-center bg-gray-500 p-5">
        <p className="font-spaceGrotesk text-2xl font-semibold text-white">{list?.title}</p>
      </div>
      <div className="ml-5 mt-3">
        <Breadcrumbs>
          <BreadcrumbItem href="/">{t('Anasayfa')}</BreadcrumbItem>
          <BreadcrumbItem href="/sertifikalar">{t('Sertifikalar')}</BreadcrumbItem>
          <BreadcrumbItem href={`/sertifikalar/${params.locale}`}>
            {list?.title ?? ''}
          </BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="flex w-full flex-col flex-wrap items-start justify-start">
        {list?.certificates.map((certificate) => (
          <div key={certificate.product}>
            <h3 className="w-[200px] text-start font-semibold text-gray-500 max-lg:w-full">
              {certificate.product}
            </h3>
            <div className="my-5 flex w-full flex-wrap items-center justify-start gap-3 max-md:flex max-sm:flex-col">
              {certificate.allPDFs.map((pdf, index) => (
                <Link
                  href={pdf.link}
                  target="_blank"
                  key={index}
                  className="m-3 rounded-md bg-slate-100 p-3 transition-all duration-300 hover:scale-105 hover:bg-slate-200 hover:shadow-lg"
                >
                  <div className=" bg-white p-3 ">
                    <p className="w-[200px] text-start font-quicksand text-sm font-normal text-gray-500">
                      {pdf.name.toUpperCase()}
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
        ))}
      </div>
    </div>
  );
};

export default Locale;
