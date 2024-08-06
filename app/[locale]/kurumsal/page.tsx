
import Header from '@/components/Header';
import LinkedButton from '@/components/LinkedButton';
import { kurumsalLinks } from '@/constants';
import { useLanguageContext } from '@/context/language';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Kurumsal = () => {
  const pathname = usePathname();
  const [language] = useLanguageContext();

  return (
    <div className="relative z-0 mx-auto max-w-7xl px-6 sm:px-16">
      <Header text="Kurumsal" />

      <div className="my-3 flex flex-col items-center justify-between gap-3 px-4 py-2">
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
              src="/images/kurumsal.png"
              alt="kurumsal"
              width={600}
              height={600}
              className="w-full rounded-lg"
            />
          </div>

          <div className="ml-4 flex w-1/2 flex-col items-start justify-center gap-3 max-md:ml-0 max-md:w-full max-md:pt-3">
            <h3 className="text-lg font-semibold text-gray-900">YÖNETİM KURULU BAŞKANI MESAJI</h3>
            <p className="font-quicksand">
              Mir Holding 37 yıl önce kurulmuştur. İlk kurulan şirketimizin felsefesi ARGE
              (araştırma-geliştirme) üzerine şekillendirilmiştir. İlk ARGE çıktımız “boru konusunda”
              olmuştur ve buradan Dizayn Grup doğmuştur. İlk endüstriyel şirketimiz olan Dizayn Grup
              bugün itibariyle, 20 mm’den 8 m çapa kadar ve 0,5 Bar basınçtan, 200 Bar basınca kadar
              türlü sektörler için boru üretmektedir.
            </p>

            <p>
              Mir Holding &apos;boru, tarım, enerji, yapı, savunma sanayi alanlarında&apos; faaliyet
              gösteren 15 şirketi bünyesinde barındırmaktadır.
            </p>

            <p>
              Türkiye, Almanya, Azerbaycan, Rusya Federasyonu’nda fabrikaları vardır.
              Almanya&apos;da kurulan yeni tesisin açılış törenine Sayın Angela Merkel katılmıştır.
            </p>

            <p>
              Ayrıca Mir Holding İstanbul Üniversitesi Teknoparkının ortağı ve Yönetim Kurulu
              Üyesidir.
            </p>

            <p>Mir Holding;</p>
            <p>
              - Sadece Ar-Ge alanında 50&apos;den fazla doktora derecesine sahip Ar-Ge mühendisi, 25
              profesör, toplamda 150 araştırmacıyı istihdam etmektedir. Üretime dönüşen patent
              sayısı açısından Türkiye&apos;de lider konumdadır.
            </p>

            <p>- %70&apos;i üretime dönüştürülen 100&apos;den fazla patente sahiptir.</p>

            <p>- Türkiye&apos;nin en büyük özel araştırma laboratuvarına sahiptir.</p>

            <p>
              - Savunma sanayinin en büyük bütçeli (10.2 milyon USD) projeyi (çelikten on kat daha
              güçlü, beş kat hafif malzemeyi) başarıyla gerçekleştirmiştir. Amerika ve
              Kanada&apos;dan sonra dünya çapında bu teknolojiye sahip 3. şirkettir.
            </p>
            <p>
              - Avrupa Birliğinin en büyük bütçeli (49 milyon Euro’luk) ARGE projesini (akıllı ve
              yeşil şehir) başarıyla tamamlamış ve endüstriye dönüştürmüştür.
            </p>

            <p>
              - Eskişehir’de 2 milyar USD büyüklüğünde SERAKENT projesi yatırımı hızla
              ilerlemektedir.
            </p>

            <p>
              Tüm paydaşlarımızla birlikte bu başarıya ulaştık. Onlara derin teşekkürlerimi
              sunuyorum.
            </p>
            <p>İbrahim Mirmahmutoğulları Mir Holding Yönetim Kurulu Başkanı</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kurumsal;