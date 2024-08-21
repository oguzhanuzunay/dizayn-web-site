'use client';
import { Card, CardBody, CardFooter, Image, Link } from '@nextui-org/react';
import { useLocale, useTranslations } from 'next-intl';

interface countryCertificateParams {
  name: string;
  code: string;
  title: string;
  certificates:
    | {
        product: string;
        allPDFs:
          | {
              name: string;
              image: string;
              link: string;
            }[]
          | [];
      }[]
    | [];
}

const Certificates = () => {
  const t = useTranslations('Certificates');
  const language = useLocale();

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
                '/certificates/files/tr/imgs/elite-sertifikaları/PEX BORU TSE  HIJYEN TEST RAPORU_00001.jpg',
              link: '/certificates/files/tr/pdfs/elite-sertifikaları/PEX BORU TSE  HIJYEN TEST RAPORU.pdf',
            },
            {
              name: t('turkey.elitePipe.certificate-2'),
              image:
                '/certificates/files/tr/imgs/elite-sertifikaları/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/elite-sertifikaları/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI.pdf',
            },
            {
              name: t('turkey.elitePipe.certificate-3'),
              image:
                '/certificates/files/tr/imgs/elite-sertifikaları/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI(ingilizce)_00001.jpg',
              link: '/certificates/files/tr/pdfs/elite-sertifikaları/TS 10762-2 PEX-B EN ISO 15875-2 PEX-A BORU TSE  SERTİFİKASI(ingilizce).pdf',
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
                '/certificates/files/tr/imgs/sarmal-ve-Koruge/DIN 16961 SARMAL BELGELENDİRME.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-Koruge/DIN 16961 SARMAL BELGELENDİRME.pdf',
            },
            {
              name: t('turkey.spiral-corrugated.certificate-2'),
              image:
                '/certificates/files/tr/imgs/sarmal-ve-Koruge/ISRAEL INSTITUTE OF QUALITY CORRUGATED PIPE CERTIFICATE 112093_00001.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-Koruge/ISRAEL INSTITUTE OF QUALITY CORRUGATED PIPE CERTIFICATE 112093.pdf',
            },
            {
              name: t('turkey.spiral-corrugated.certificate-3'),
              image:
                '/certificates/files/tr/imgs/sarmal-ve-Koruge/İSRAİL KALİTE ENSTİTÜSÜ SPİRAL SARIMLI BORU SERTİFİKASI -112093-ENG__00001.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-Koruge/İSRAİL KALİTE ENSTİTÜSÜ SPİRAL SARIMLI BORU SERTİFİKASI -112093-ENG_.pdf',
            },
            {
              name: t('turkey.spiral-corrugated.certificate-4'),
              image:
                '/certificates/files/tr/imgs/sarmal-ve-Koruge/TS 12132 SARMAL BORU TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-Koruge/TS 12132 SARMAL BORU TSE  SERTİFİKASI.pdf',
            },
            {
              name: t('turkey.spiral-corrugated.certificate-5'),
              image:
                '/certificates/files/tr/imgs/sarmal-ve-Koruge/TS EN 13476-3 KORİGE BORU TSE  SERTİFİKASI_00001.jpg',
              link: '/certificates/files/tr/pdfs/sarmal-ve-Koruge/TS EN 13476-3 KORİGE BORU TSE  SERTİFİKASI.pdf',
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

  return (
    <div>
      <div className="mb-0 flex h-5 w-full items-center bg-gray-500 p-5">
        <h2 className="font-spaceGrotesk text-2xl font-semibold text-white">{t('header')}</h2>
      </div>
      <div className="my-4 grid grid-cols-5 items-center justify-between gap-3 max-md:flex max-sm:flex-col">
        {Array.isArray(countryCertificate) &&
          countryCertificate.map((item: countryCertificateParams, index: number) => (
            <Link
              {...(item.certificates.length === 0 ? { isDisabled: true } : {})}
              href={`/${language}/sertifikalar/${item.code}`}
              key={index}
            >
              <Card
                shadow="sm"
                isPressable
                className={`flex size-[200px] flex-col items-center justify-between p-0 transition-all duration-300 hover:scale-105 hover:shadow-lg  `}
              >
                <CardBody className="overflow-visible p-0">
                  {item.certificates.length === 0 && (
                    <div className="absolute left-0 top-0 z-20 flex size-full items-center justify-center ">
                      <p className="rounded-xl bg-gray-800 p-1.5 text-xs font-semibold text-blue-200">
                        {t('noCertificate')}
                      </p>
                    </div>
                  )}
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.name.toString()}
                    className={`h-[140px] max-w-[200px] object-cover ${item.certificates.length === 0 ? 'grayscale ' : ''}`}
                    src={`
                https://flagcdn.com/${item.code}.svg
               `}
                  />
                </CardBody>
                <CardFooter className="w-[200px] justify-between text-xs">
                  <b>{item.title.toString()}</b>
                </CardFooter>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Certificates;
