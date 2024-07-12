'use client';
import { countryCertificate } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import { Card, CardBody, CardFooter, Image, Link } from '@nextui-org/react';

const Certificates = () => {
  const [language] = useLanguageContext();
  const list = countryCertificate[language];

  return (
    <div>
      <div className="mb-0 flex h-5 w-full items-center bg-gray-500 p-5">
        <h2 className="font-spaceGrotesk text-2xl font-semibold text-white">Sertifikalarımız</h2>
      </div>
      <div className="my-4 grid grid-cols-5 items-center justify-between gap-3 max-md:flex max-sm:flex-col">
        {list.map((item, index) => (
          <Link
            href={`/sertifikalar/${item.code}`}
            key={index}
          >
            <Card
              shadow="sm"
              isPressable
              onPress={() => console.log('item pressed')}
              className={`flex size-[200px] flex-col items-center justify-between p-0 transition-all duration-300 hover:scale-105 hover:shadow-lg  `}
            >
              <CardBody className="overflow-visible p-0">
                {item.certificates.length === 0 && (
                  <div className="absolute left-0 top-0 z-20 flex size-full items-center justify-center ">
                    <p className="rounded-xl bg-gray-800 p-1.5 text-xs font-semibold text-blue-200">
                      Sertifikalar Güncelleniyor
                    </p>
                  </div>
                )}
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.name}
                  className={`h-[140px] max-w-[200px] object-cover ${item.certificates.length === 0 ? 'grayscale ' : ''}`}
                  src={`
                https://flagcdn.com/${item.code}.svg
               `}
                />
              </CardBody>
              <CardFooter className="w-[200px] justify-between text-xs">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, 'Certificates');
