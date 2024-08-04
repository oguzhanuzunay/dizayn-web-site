'use client';
import Header from '@/components/Header';
import LinkedButton from '@/components/LinkedButton';
import { kurumsalLinks } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const OdullerVeBasarılar = () => {
  const pathname = usePathname();
  const [language] = useLanguageContext();

  return (
    <div>
      <Header text="Tarihçe" />

      <div className="flex w-full items-start justify-center py-3 max-md:flex-col ">
        <div className="flex w-1/2 flex-col items-center justify-start max-md:w-full ">
          <div className="m-1 flex flex-row flex-wrap gap-3 p-3">
            {kurumsalLinks[language]
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
            src="/images/oduller.png"
            alt="ÖDÜLLER & BAŞARILAR"
            width={600}
            height={600}
            className="w-full rounded-lg"
          />
        </div>

        <div className="ml-4 flex w-1/2 flex-col items-start justify-center gap-3 max-md:ml-0 max-md:w-full max-md:pt-3">
          <h3 className="text-large font-semibold">37 YILDIR KITALARA ULAŞAN KALİTE</h3>
          <p>
            1987 yılında araştırma-geliştirme faaliyetleri yapmak üzere kurulan Dizayn Grup, 1991
            yılında ilk AR-GE çıktısı olan molekül yapısı özel dizayn edilmiş PPR boru ve ek
            parçaları üreterek bugünkü yapılanması için ilk adımlarını attı. Zaman içerisinde boru
            ve elemanları üretim ve satışı ile özdeşleştiği için Dizayn markası boru markası olarak
            konumlandı ve AR-GE şirketimiz Mir AR-GE ismi ile bağımsız bir yapıya kavuşturuldu.
            Dizayn Grup, Mir AR-GE şirketimiz ve diğer iştiraklerimiz ile birlikte 2010 yılı itibari
            ile Mir Holding çatısı altında toplandı.
          </p>

          <p>
            37 yılda Türkiye’ye de ilkleri üreten, dünya rekorlarını alt üst eden, endüstriye
            dönüştürdüğü onlarca patenti ile sektörünün teknolojide öncü firması haline gelen Dizayn
            Grup, deneyimi ve yüksek üretim gücü ile 85’in üzerinde ülkeye ihracat yapıp bir dünya
            markası haline geldi. 2015 yılında Rusya’da açtığı fabrika ve 2016 yılında Avrupa’da
            hayata geçirdiği yatırımı ile adını taşıdığı önemli pazarların yerel markası olması
            yolunda kilometre taşlarını koydu.
          </p>

          <p>
            Türkiye’nin kalkınması ve paydaşlarının refahı için sürekli gelişimi kendine şiar edinen
            Dizayn Grup, 37 yılı birlikte “dizayn” ettiği tüm paydaşlarına şükranlarını sunuyor ve
            gelecek yılları yine birlikte “dizayn” etmek adına tüm dünyaya sunduğu faydaları
            artıracak adımları atmaya devam ediyor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(OdullerVeBasarılar, 'OdullerVeBasarılar');
