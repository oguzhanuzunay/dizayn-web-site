import { certificateList, languageTexts } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

const Certificates = () => {
  const [language] = useLanguageContext();
  const router = useRouter();

  return (
    <div className="flex size-full flex-col items-center justify-center gap-5 bg-gray-500 px-3 py-6 max-sm:flex-nowrap">
      <div>
        <h1 className="text-4xl font-semibold text-white">
          {languageTexts[language].certificates.title}
        </h1>
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
          {languageTexts[language].certificates.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Certificates;
