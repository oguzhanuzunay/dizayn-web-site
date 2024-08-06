import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useRouter } from 'next/navigation';

export interface certificateListParam {
  id?: number;
  title: string;
  image: string;
}
const certificateList: certificateListParam[] = [
  {
    id: 1,
    title: 'ISO 9001:2015',
    image: '/certificates/iso-9001.png',
  },
  {
    id: 2,
    title: 'ISO 14001:2004',
    image: '/certificates/iso-14001-2004.png',
  },
  {
    id: 3,
    title: 'TSE',
    image: '/certificates/TSE.png',
  },
  {
    id: 4,
    title: 'ISO 50001',
    image: '/certificates/iso-50001.png',
  },
  {
    id: 5,
    title: 'OHSAS 18001',
    image: '/certificates/ohsas-18001.png',
  },
  {
    id: 6,
    title: 'ISO 10002',
    image: '/certificates/iso-10002.png',
  },
];

const Certificates = () => {
  const router = useRouter();
  const t = useTranslations('Certificates');

  return (
    <div className="flex size-full flex-col items-center justify-center gap-5 bg-gray-500 px-3 py-6 max-sm:flex-nowrap">
      <div>
        <h1 className="text-4xl font-semibold text-white">{
          t('title')}</h1>
      </div>
      <div className="grid w-full grid-cols-6 justify-items-center max-sm:grid-cols-3 ">
        {certificateList.map((certificate) => (
          <div
            key={certificate.id}
            className="
              m-2 flex size-20 cursor-pointer items-center justify-center rounded-lg bg-white p-2 grayscale transition-all duration-300 hover:scale-105 hover:shadow-lg hover:grayscale-0
              "
          >
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={100}
              height={100}
              className="!w-full"
            />
          </div>
        ))}
      </div>
      <div>
        <Button
          className="hover:text-blue-600"
          onClick={() => router.push('/sertifikalar')}
        >
          {t('buttonText')}
        </Button>
      </div>
    </div>
  );
};

export default Certificates;
