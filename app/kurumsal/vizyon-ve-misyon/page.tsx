'use client';

import Header from '@/components/Header';
import LinkedButton from '@/components/LinkedButton';
import { kurumsalLinks } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const VizyonVeMisyon = () => {
  const pathname = usePathname();
  const [language] = useLanguageContext();

  return (
    <div>
      <Header text="Vizyonumuz ve Misyonumuz" />

      <div className="flex w-full items-start justify-center py-3 max-md:flex-col ">
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
            src="/images/vizyon ve misyon.png"
            alt="vizyonVeMisyon"
            width={600}
            height={600}
            className="w-full rounded-lg"
          />
        </div>

        <div className="ml-4 flex w-1/2 flex-col items-start justify-center gap-3 max-md:ml-0 max-md:w-full max-md:pt-3">
          <h3 className="text-large font-semibold">Viyonumuz ve Misyonumuz</h3>
          <p className="font-semibold">Vizyonumuz</p>

          <p>
            Akışkanların taşınmasında farklılık oluşturacak yeni teknolojiler üreterek bir dünya
            markası olmak.
          </p>

          <p className="font-semibold">Misyonumuz</p>
          <p>
            Akışkanların en optimal yöntem ile taşınabilmesi için; doğru teknolojiyle, soruna özel
            proje, ürün ve sistem geliştirerek güvenilir, verimli bir şirket olabilmeyi başarmak.
          </p>

          <p className="font-semibold">Yeni Ürün Geliştirme Stratejilerimiz</p>

          <div>
            - Herkesin ürettiği ya da üretebileceği ürünlerden uzak durmak. - Kalite ve fiyat
            açısından rekabet edilebilir ürünler üretmek. - Rakiplerin şimdiye kadar düşünemediği
            değer oluşturan farklılıkları, düşünebilmek. - Olabildiğince ürünlere odaklanmak. -
            Üzerinde çalıştığımız her konuda bir tamlık duygusuna ulaşmayı başarmak. - Asla ulusal
            ve uluslararası bir rakibin ürününü taklit etmemek. - Geliştirilen tüm ürünlerde
            ayrıcalıklar oluşturmak ve oluşan ayrıcalıkları, patentlerle kanuni koruma altına almayı
            başarmak.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(VizyonVeMisyon, 'VizyonVeMisyon');
