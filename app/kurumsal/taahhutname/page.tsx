'use client';
import Header from '@/components/Header';
import LinkedButton from '@/components/LinkedButton';
import { kurumsalLinks } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Tahhutname = () => {
  const pathname = usePathname();
  const [language] = useLanguageContext();

  return (
    <div>
      <Header text="Tarihçe" />

      <div className="flex w-full items-start justify-center max-md:flex-col">
        <div className="flex w-1/2 flex-col items-center justify-start max-md:w-full">
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
            src="/images/tahhutname.png"
            alt="tarihce"
            width={600}
            height={600}
            className="w-full rounded-lg"
          />
        </div>

        <div className="ml-4 flex w-1/2 flex-col items-start justify-center gap-3 max-md:ml-0 max-md:w-full max-md:pt-3">
          <h3 className="text-large font-bold">TAAHHÜTNAME</h3>
          <p className="text-large font-semibold ">DEĞER DÖNGÜMÜZ</p>

          <p>
            İnsanların idealleri olduğu kadar, kurumların da idealleri olmalıdır. Karşılığı sadece
            maddi beklentiler üzerine kurgulanmış bir sistemin kontrolden çıkması kaçınılmazdır.
            Bugün, dünyanın içine düştüğü sıkıntı &quot;ne pahasına olursa olsun, para kazanmak&quot; hırsının
            doğal sonucudur. “Şirketleri ayakta tutan kârdır. Öyleyse, kâr etmeye giden bütün yollar
            meşrudur” anlayışı, suçluyu da masumu da mahkûm etmiştir. Bu yaklaşımın kazananı olamaz.
          </p>

          <p>
            Bireylerin ahlaklı olması gerektiği kadar, kurumlar da ürünler de ahlaklı olmalıdır.
          </p>

          <p>
            Üretirken çevreye duyarlılığı, kendi atığının sahibi olma sorumluluğu, istihdam ettiği
            kişilerin varlığı ile motive olması, ihracat yaparken ülkesine kazandırdıklarının
            heyecanını duyması, en önemlisi de ürettiği ürünün insanlığın temel ihtiyaçlarına çözüm
            olacağı duygusu ile huzur duyması ve nihayet kazancının kendi büyümesini engellemeyecek
            kadar makul bir kısmını ülkesinde ya da dünyanın herhangi bir yerinde yaşayan insanların
            ya da o insanlara hayat veren doğanın bir derdinin dermanı olarak kullanması, kurumun ve
            kurumun ürettiği ürünün ahlaklı olduğunun tarifini teşkil eder.
          </p>

          <p>
            Bize göre bireyler de ahlaklı olmalı, ürünler de ahlaklı olmalı, kurumlar da ahlaklı
            olmalıdır. Yaşamını bu felsefe üzerine oturtmuş hiçbir özel ya da tüzel kişilik dünyaya
            sorun üreten olamaz. En mutlu aile, en iyi vatandaş, en başarılı yönetici ve varlığı ile
            etrafını aydınlatan bireyler sadece ve sadece bu tür bir yaklaşımı içine sindirmiş
            insanlardan sadır olabilir.
          </p>

          <p>
            Sorumluluklarımızı biliyoruz. <b>Dünyanın Dizayn&apos;a ihtiyacı var.</b>
          </p>

          <p>İbrahim MİRMAHMUTOĞULLARI Yönetim Kurulu Başkan&apos;ı</p>
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(Tahhutname, 'Tahhutname');
