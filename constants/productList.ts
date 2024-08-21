interface productParams {
  title: string;
  featuredProduct?: boolean;
  image?: string;
  description: string;
  logo: string;
  isNewTech?: boolean;
  banner: {
    vertical: string;
    horizontal: string;
    bgImage?: string;
    PLP: string;
  };
  link: string;
  background: string;
  highlights: {
    title: string;
    icon: string;
  }[];
  productDetails: {
    title: string;
    description: string;
    features: {
      title: string;
      icon: string;
      alt: string;
      description: string;
    }[];
    fittings: {
      title: string;
      image: string;
      alt: string;
      category: string;
    }[];
    images: {
      image: string;
      alt: string;
      description: string;
    }[];
    headers: {
      title: string;
      image?: string;
      alt?: string;
      description: string;
    }[];
    faqs: {
      question: string;
      answer: string;
    }[];
  };
}
interface productListParams {
  [key: string]: {
    superStructureProducts: productParams[];
    infrastructureProducts: productParams[];
  };
}

export const productList: productListParams = {
  tr: {
    superStructureProducts: [
      {
        title: 'ElitePipe',
        description:
          'ElitePipe, yüksek sıcaklık ve basınç dayanımı ile güvenli ve uzun ömürlü bir boru sistemidir. PPR, PEX ve PERT boruların avantajlarını bir araya getirerek, üstün performans ve dayanıklılık sağlar.',
        featuredProduct: true,
        logo: '/productImages/üst yapı borular/elite-pipe-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/tr/horizontal.png',
          bgImage: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/tr/bg-image.png',
          PLP: 'productImages/üst yapı borular/elite-pipe-ve-ek/banner/tr/PLP.png',
        },
        image: '/productImages/üst yapı borular/elite-pipe-ve-ek/elitePipeBanner.png',
        background: 'bg-background-1',
        link: '/tr/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          {
            title: 'Yüksek Sıcaklıkta Yüksek Basınç Dayanımı',
            icon: '/icons/high-pressure.png',
          },
          {
            title: 'Kangal Halinde Sevkiyat Kolaylığı',
            icon: '/icons/worker-pushing-a-cart.png',
          },
          {
            title: 'Eksi 40 Derecede Dahi Kırılma Direnci',
            icon: '/icons/durable.png',
          },
        ],
        productDetails: {
          title: 'ElitePipe',
          description:
            'ElitePipe, Mir Ar-Ge Şirketimizin 7 yıllık Ar-Ge çalışmaları sonucunda geliştirilmiştir. PPR’ın kaynak kabiliyetini, PEX’in yüksek sıcaklık dayanım performansını ve PERT’in elastikiyetini optimize ederek, yeni ve benzersiz bir hibrit ürün oluşturduk. ElitePipe, hem iç hem de dış mekan tesisat uygulamalarında güvenle kullanılabilir.',
          features: [
            {
              title: 'Yüksek Sıcaklıkta Yüksek Basınç Dayanımı',
              icon: '/icons/high-pressure.png',
              alt: 'High Pressure',
              description:
                'PPRC PN25: 50 Yıl Ömür 70°C 8,8 Bar / ElitePipe PN25: 50 Yıl Ömür 70°C 11 Bar.',
            },
            {
              title: 'Kangal Halinde Sevkiyat Kolaylığı',
              icon: '/icons/worker-pushing-a-cart.png',
              alt: 'Easy Installation',
              description: 'Küçük araçlarla taşınabilir, tek kişiyle kolayca taşınabilir.',
            },
            {
              title: 'Eksi 40 Derecede Dahi Kırılma Direnci',
              icon: '/icons/durable.png',
              alt: 'reliability',
              description:
                'Soğuk hava koşullarında bile kırılma ve çatlama yaşanmaz, bu da ürünü zorlu iklimlerde güvenli hale getirir.',
            },
            {
              title: 'Esnek ve Kolay Şekil Alır',
              icon: '/icons/flexible.png',
              alt: 'flexible',
              description:
                'Esnek yapısı ve kolay şekil alma özelliği, montaj sürecini kolaylaştırır ve ek parça ihtiyacını azaltır. Bu da maliyet ve zaman tasarrufu sağlar.',
            },
            {
              title: 'Çatlama Direnci Yüksek',
              icon: '/icons/seal.png',
              alt: 'Crack Resistance',
              description: 'Yüzey aktif maddelere karşı mükemmel direnç gösterir.',
            },
            {
              title: 'PPR Gibi Kaynak Yapılır',
              icon: '/icons/welding.png',
              alt: 'welding',
              description: 'Soket füzyon kaynağı yapılma özelliği PPR borular seviyesindedir.',
            },
            {
              title: 'Daha Az Ek Parça İhtiyacı',
              icon: '/icons/fittings.png',
              alt: 'welding',
              description:
                'Kavis, manşon ihtiyacı sıfırlanmış, dirsek ihtiyacı minimize edilmiştir.',
            },
            {
              title: 'Fireleri Önler',
              icon: '/icons/coil.png',
              alt: 'coil',
              description: 'Kangal halinde sevk edilmesi, boru firelerini sıfıra indirir.',
            },
            {
              title: 'Döşendikten Sonra Oluşan Riskleri Ortadan Kaldırır',
              icon: '/icons/plastering.png',
              alt: 'plastering',
              description: 'Sıva sırasında oluşabilecek darbelere karşı daha dayanıklıdır.',
            },
            {
              title: 'Kullanım Alanları',
              icon: '/icons/application.png',
              alt: 'application',
              description:
                'Sıcak-soğuk su tesisatları, ısıtma sistemleri, temiz su ve mobil dağıtım hatları, güneş enerjisi, soğutma ve havalandırma sistemleri, kar ve buz eritme sistemleri.',
            },
            {
              title: 'ElitePipe Sitem Garantisi',
              icon: '/icons/guarantee.png',
              alt: 'guarantee',
              description:
                'Sadece ElitePipe ve EK PARÇALAR, ElitePipe ÖZEL PAFTASI, KAYNAK EKİPMANLARI ile geçerlidir.',
            },
            {
              title: 'Daha Az Malzeme, Daha Çok Tasarruf',
              icon: '/icons/economical.png',
              alt: 'economical.',
              description:
                'Montaj kolaylığı ve daha az ek parça ihtiyacı ile maliyet ve zaman tasarrufu sağlar.',
            },
          ],
          images: [
            {
              image:
                '/productImages/üst yapı borular/elite-pipe-ve-ek/ELİTE PİPE KANGAL BORU 2.png',
              alt: 'ElitePipe',
              description: 'ElitePipe',
            },
            {
              image: '/productImages/üst yapı borular/elite-pipe-ve-ek/ELİTE PİPE BORU GRUP.png',
              alt: 'ElitePipe',
              description: 'ElitePipe',
            },
            {
              image:
                '/productImages/üst yapı borular/elite-pipe-ve-ek/ELİTE PİPE COMPOZİT BORU GRUP.png',
              alt: 'ElitePipe',
              description: 'ElitePipe',
            },
          ],

          headers: [
            {
              title: '<b>ElitePipe</b> ve Ek Parçaları',
              description:
                'PPR, PEX ve PERT borularının en iyi özelliklerini birleştirerek yüksek sıcaklık ve basınç dayanımı, esneklik ve kırılma direnci sunar. Ek Parçalar, sistemin güvenli ve verimli çalışmasını sağlayarak montaj kolaylığı ve düşük basınç kaybı sunar. Esnek ve kolay şekil alan yapıları, zaman ve maliyet tasarrufu sağlar. ElitePipe ve Ek Parçaları, sıcak-soğuk su tesisatları, ısıtma sistemleri ve güneş enerjisi sistemlerinde üstün performans gösterir. Yüksek teknoloji ve mühendislik birikimi ile geliştirilmiş bu sistem, kullanıcılarına üstün kalite ve güven sunar.',
            },
            {
              title: 'ElitePipe <b>Avantajları</b>',
              description:
                'ElitePipe, <b>70°Cde 50 yıl ömür ve 11 bar basınç dayanımı</b> ile yüksek sıcaklık ve basınca dayanıklıdır. <b>Kangal halinde sevkiyat kolaylığı</b> sunar, küçük araçlarla taşınabilir ve tek kişiyle kolayca taşınabilir. <b>Eksi 40 derecede bile kırılma ve çatlama yaşanmaz</b>, esnek yapısıyla montaj kolaylığı sağlar ve ek parça ihtiyacını azaltır. <b>Yüzey aktif maddelere karşı yüksek çatlama direnci</b> gösterir ve <b>PPR borular gibi kolayca kaynak yapılabilir</b>. <b>Kavis ve manşon ihtiyacı sıfırlanmış</b>, dirsek ihtiyacı minimize edilmiştir. <b>Kangal halinde sevk edilerek boru firelerini sıfıra indirir</b>. <b>Sıva sırasında oluşabilecek darbelere karşı daha dayanıklıdır</b>. <b>Sıcak-soğuk su tesisatları</b>, <b>ısıtma sistemleri</b>, <b>temiz su hatları</b> ve <b>güneş enerjisi sistemlerinde</b> üstün performans gösterir.',
            },
            {
              title: 'ElitePipe <b>Nerelerde Kullanılır?</b>',
              description: `<ul>
  <li><b>Sıcak-soğuk su tesisatları</b>: Hem sıcak hem de soğuk su tesisatlarında güvenle kullanılabilir.</li>
  <li><b>Isıtma sistemleri</b>: Kombi ve kat kaloriferi tesisatlarında yüksek performans gösterir.</li>
  <li><b>Temiz su ve mobil dağıtım hatları</b>: Temiz su hatlarında ve mobil dağıtım sistemlerinde uzun ömürlüdür.</li>
  <li><b>Güneş enerjisi sistemleri</b>: Güneş enerjisi sistemlerinde yüksek sıcaklığa dayanıklıdır.</li>
  <li><b>Soğutma ve havalandırma sistemleri</b>: Soğutma ve havalandırma tesisatlarında etkin bir çözüm sunar.</li>
  <li><b>Kar ve buz eritme sistemleri</b>: Kış aylarında kar ve buz eritme sistemlerinde kullanıma uygundur.</li>
</ul>`,
            },
            {
              title: 'ElitePipe <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn Grup ElitePipe boruları, dayanıklılığı ve performansı ile bilinir. Bu boruların ağırlıkları, kullanılan malzeme ve üretim teknikleri ile doğru orantılıdır. ElitePipe boruları, iç ve dış çaplarına göre değişen ağırlıklara sahiptir.',
            },
            {
              title: 'ElitePipe Teknik <b>Özellikleri</b>',
              description: `
                  <ul>
    <li><b>Renk</b>: Buz Mavisi</li>
    <li><b>Üretim Çap Aralığı</b>: Ø 16mm'den Ø 63mm'ye kadar</li>
    <li><b>Kangal Boru Çapları</b>: Ø16mm / Ø20mm / Ø25mm / Ø32mm</li>
    <li><b>Düz Boru Çapları</b>: Ø 16mm'den Ø63mm'ye kadar</li>
    <li><b>Boy Boru Çapları</b>: Ø 20mm'den Ø63mm'ye kadar</li>
    <li><b>Isıl İletkenlik Katsayısı</b>: 0,37±0,02 W/m.K</li>
    <li><b>Isıl Genleşme Katsayısı</b>: ~ 0,2 mm/mK</li>
    <li><b>Maksimum Çalışma Sıcaklığı</b>: 95°C</li>
    <li><b>50 yıl 70°C Basınç Dayanımı</b>: 11 Bar</li>
    <li><b>Önerilen Kaynak Metodu</b>: Soket Füzyon Kaynağı</li>
  </ul>
                `,
            },
            {
              title: 'ElitePipe <b>Ek Parçaları</b>',
              description: `<ul>
    <li><b>Dirsek (Elbow)</b>: Boru yön değişikliklerinde kullanılan dirsek, kırılma ve çatlamaya karşı yüksek dayanıklılık sunar. ElitePipe dirsekleri, uzun ömürlü ve güvenli bağlantılar sağlar.</li>
    <li><b>Manşon (Coupling)</b>: Boru birleştirmelerinde kullanılan manşon, yüksek basınca dayanıklıdır ve sızdırmaz bir bağlantı sunar. ElitePipe manşonları, tesisatın güvenilirliğini artırır.</li>
    <li><b>Tee (T Parça)</b>: Akışın yönünü değiştirmek veya iki boruyu birleştirmek için kullanılan tee parçaları, sistemin verimliliğini artırır. ElitePipe tee parçaları, kaliteli ve güvenli bağlantılar sunar.</li>
    <li><b>Redüksiyon (Reducer)</b>: Farklı çaplarda boruları birleştirmek için kullanılan redüksiyon parçaları, esnek ve güvenli bağlantılar sağlar. ElitePipe redüksiyonları, montaj kolaylığı ve sistem bütünlüğü sunar.</li>
    <li><b>Kaplin (Coupling)</b>: Boru uçlarını birleştirmek için kullanılan kaplinler, esnek ve sızdırmaz yapısıyla güvenli bir bağlantı sağlar. ElitePipe kaplinleri, montaj sürecini hızlandırır ve maliyetleri düşürür.</li>
    <li><b>Kelepçe (Clamp)</b>: Boruları sabitlemek ve montajını kolaylaştırmak için kullanılan kelepçeler, tesisatın stabilitesini artırır. ElitePipe kelepçeleri, dayanıklı ve uzun ömürlüdür.</li>
    <li><b>Flanş (Flange)</b>: Büyük çaplı boruların bağlantısında kullanılan flanşlar, demontaj ve montaj kolaylığı sağlar. ElitePipe flanşları, yüksek mukavemet ve güvenilir bağlantılar sunar.</li>
    <li><b>Adaptör (Adapter)</b>: Farklı tip boruların veya ek parçaların bağlantısını sağlamak için kullanılan adaptörler, sistemin esnekliğini artırır. ElitePipe adaptörleri, montaj kolaylığı ve güvenilirlik sunar.</li>
  </ul>
<p>ElitePipe ve ek parçaları, su tesisatlarında, ısıtma sistemlerinde, temiz su ve mobil dağıtım hatlarında, güneş enerjisi sistemlerinde ve soğutma ve havalandırma sistemlerinde üstün performans gösterir. Bu parçalar, ElitePipe sisteminin verimli ve güvenli çalışmasını sağlayarak montaj kolaylığı ve düşük basınç kaybı sunar. Ayrıca, esnek ve kolay şekil alan yapıları sayesinde zaman ve maliyet tasarrufu sağlarlar.</p><p><b>Daha fazla detay ve bilgi için, ürün sayfasının en üst kısmında yer alan Fiyat Listesine bakabilirsiniz.</b></p>`,
            },
            {
              title: 'ElitePipe Boru <b>Birleştirme Yöntemleri</b>',
              description: `<p>Dizayn Boru, boru kaynağında öncü teknolojiler geliştirmektedir. İşte ElitePipe boru birleştirme yöntemleri:</p>
  <ul>
    <li><b>Soket Füzyon Kaynağı</b>: Et kalınlığı ince olan boruların, düzgün ve sağlam bir şekilde birleştirilmesi için kullanılır. Kaynak paftasının üzerinde kaynak esnasında eriğin çıkmasını sağlayan delik, borunun kaynak sıcaklığına geldiğini gösterir.</li>
    <li><b>Alın Kaynağı</b>: Kalın duvarlı boruların, yüksek dayanım gerektiren uygulamalar için birleştirilmesini sağlar. Borunun iç çapının daralmamasını sağlayan seramik bir sistem kullanılır.</li>
    <li><b>Elektro Füzyon Kaynağı</b>: Elektrik akımı kullanılarak boru ve ek parçalarının birleştirilmesi sağlanır. Yüksek basınç ve sıcaklık dayanımı gerektiren uygulamalar için uygundur.</li>
    <li><b>Mekanik Birleştirme Yöntemi</b>: Metal alaşımlı veya PPSU gibi polimerlerden üretilen ek parçalar kullanılarak boruların birleştirilmesi sağlanır. Bu yöntem, maliyetli bir birleştirme yöntemidir.</li>
  </ul>
  <p>ElitePipe boru birleştirme yöntemleri, boruların uzun ömürlü ve güvenli bir şekilde montajını sağlar. Tesisat maliyetlerini azaltan ve iş kolaylığı sunan bu yöntemler, patentle korunmaktadır.</p>
  <p><b>Daha fazla detay ve bilgi için, ürün sayfasının en üst kısmında yer alan Fiyat Listesine bakabilirsiniz.</b></p>`,
            },
            {
              title: 'ElitePipe Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                '<b>Alın Kaynak</b>, ElitePipe boru ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. <b>Alın Kaynak</b> makinesi kullanılarak, kaynatılacak olan boruların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, ElitePipe boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 32 mm çapa kadar olan ElitePipe borular kaynatılabilir.',
            },
            {
              title: 'ElitePipe Boru <b>Fiyat Listesi</b>',
              description:
                'Dizayn Grup ElitePipe boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. ElitePipe borular, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve montaj sürecindeki ekip çalışması ile size en uygun ürünü sunar. ElitePipe boru avantajlarından yararlanmak ve 2024 ElitePipe Boru Fiyat Listesine ulaşmak için bizimle iletişime geçiniz.\n\nElitePipe borularımız hakkında detaylı bilgi almak için fiyat listemize tıklayarak inceleyebilirsiniz.',
            },
          ],

          faqs: [
            {
              question: 'ElitePipe borular hangi malzemeden üretilir?',
              answer:
                'ElitePipe borular, PPR (Polipropilen Random Kopolimer), PEX (Çapraz Bağlantılı Polietilen) ve PERT (Yüksek Sıcaklık Dayanımlı Polietilen) malzemelerinin en iyi özelliklerini birleştiren hibrit bir yapıya sahiptir. Bu malzemelerin kombinasyonu, borulara yüksek sıcaklık ve basınca dayanıklılık, esneklik ve uzun ömür sağlar.',
            },
            {
              question: 'ElitePipe boruların kullanım alanları nelerdir?',
              answer: ` <ul>
    <li><b>Sıcak-soğuk su tesisatları</b>: ElitePipe borular, sıcak ve soğuk su tesisatlarında üstün performans sunar ve güvenle kullanılabilir.</li>
    <li><b>Isıtma sistemleri</b>: ElitePipe boruları, kombi ve kat kaloriferi sistemlerinde yüksek verimlilik sağlar.</li>
    <li><b>Temiz su ve mobil dağıtım hatları</b>: ElitePipe, temiz su hatlarında ve mobil dağıtım sistemlerinde uzun ömürlü ve dayanıklıdır.</li>
    <li><b>Güneş enerjisi sistemleri</b>: ElitePipe boruları, güneş enerjisi sistemlerinde yüksek sıcaklık dayanıklılığı ile öne çıkar.</li>
    <li><b>Soğutma ve havalandırma sistemleri</b>: ElitePipe, soğutma ve havalandırma tesisatlarında etkin bir çözüm sunar.</li>
    <li><b>Kar ve buz eritme sistemleri</b>: ElitePipe boruları, kış aylarında kar ve buz eritme sistemlerinde kullanıma uygundur ve yüksek performans gösterir.</li>
  </ul>
  <p>ElitePipe boruları, geniş kullanım alanları ve üstün performans özellikleri ile tesisat projelerinizde güvenilir bir tercihtir. Daha fazla bilgi ve detay için, Fiyat Listesini inceleyebilirsiniz.</p>`,
            },
            {
              question: 'ElitePipe borular hangi çap ve basınç sınıflarında mevcuttur?',
              answer: `<p>ElitePipe borular, çeşitli çap ve basınç sınıflarında sunulmaktadır. Bu çeşitlilik, farklı tesisat ihtiyaçlarına uygun çözümler sunar:</p>
  <ul>
    <li><b>Çap Aralığı</b>: Ø 16mm'den Ø 63mm'ye kadar geniş bir çap aralığı mevcuttur.</li>
    <li><b>Kangal Boru Çapları</b>: Ø16mm, Ø20mm, Ø25mm ve Ø32mm çaplarında kangal borular.</li>
    <li><b>Düz Boru Çapları</b>: Ø 16mm'den Ø63mm'ye kadar düz borular.</li>
    <li><b>Boy Boru Çapları</b>: Ø 20mm'den Ø63mm'ye kadar boy borular.</li>
    <li><b>Basınç Sınıfları</b>: 11 bar (70°C'de 50 yıl ömür).</li>
  </ul>
  <p>ElitePipe borular, yüksek sıcaklık ve basınç dayanımı ile çeşitli çaplarda sunularak her türlü tesisat ihtiyacınıza cevap verir. Güncel çap ve basınç sınıfları bilgileri için Fiyat Listesini inceleyebilirsiniz.</p>`,
            },
            {
              question: 'ElitePipe boruların Birleştirme Yöntemleri nelerdir?',
              answer: ` <p>ElitePipe boruları, yüksek performans ve uzun ömürlü bağlantılar için çeşitli kaynak yöntemleri ile birleştirilir. İşte ElitePipe boruların birleştirme yöntemleri:</p>
  <ul>
    <li><b>Soket Füzyon Kaynağı</b>: İnce et kalınlığına sahip boruların düzgün ve sağlam bir şekilde birleştirilmesi için kullanılır. Kaynak paftasında bulunan delik, borunun kaynak sıcaklığına ulaştığını gösterir.</li>
    <li><b>Alın Kaynağı</b>: Kalın duvarlı boruların yüksek dayanım gerektiren uygulamalar için birleştirilmesini sağlar. Borunun iç çapının daralmamasını sağlayan seramik bir sistem kullanılır.</li>
    <li><b>Elektro Füzyon Kaynağı</b>: Elektrik akımı kullanılarak boru ve ek parçalarının birleştirilmesi sağlanır. Yüksek basınç ve sıcaklık dayanımı gerektiren uygulamalar için idealdir.</li>
    <li><b>Mekanik Birleştirme Yöntemi</b>: Metal alaşımlı veya PPSU gibi polimerlerden üretilen ek parçalar ile boruların birleştirilmesi sağlanır. Bu yöntem, yüksek maliyetli bir birleştirme yöntemidir.</li>
  </ul>
  <p>ElitePipe boru birleştirme yöntemleri, tesisat maliyetlerini azaltan ve montaj kolaylığı sunan ekonomik çözümler sağlar. Bu yöntemler, yüksek kalite standartlarına uygun olarak üretilmiş ve patentle korunmaktadır.</p>
  <p><b>Güncel bilgiler ve detaylar için, ürün sayfasının en üst kısmında yer alan Fiyat Listesini inceleyebilirsiniz.</b></p>`,
            },
            {
              question: 'ElitePipe boruları kimyasallara karşı dayanıklı mı?',
              answer: `<h2>ElitePipe Boruları Kimyasallara Karşı Dayanıklı mı?</h2>
  <p>ElitePipe boruları, çeşitli kimyasallara karşı yüksek dayanıklılık sunar. Bu özellik, boruların uzun ömürlü olmasını ve zorlu çevre koşullarında bile güvenli bir şekilde kullanılmasını sağlar.</p>
  <p>ElitePipe boruları, yüzey aktif maddeler, alkoller, sabunlar ve boyalar gibi kimyasallara karşı mükemmel direnç gösterir. Bu kimyasal direnç, boruların iç ve dış gerilmelere maruz kaldığında bile deformasyona uğramasını engeller ve çatlama riskini minimize eder.</p>
  <p>ElitePipe'ın kimyasal dayanıklılığı, tesisat sistemlerinde güvenilir bir çözüm sunar ve çeşitli uygulamalarda üstün performans sağlar.</p>
  <p><b>Daha fazla bilgi ve detay için, ürün sayfasının en üst kısmında yer alan Fiyat Listesini inceleyebilirsiniz.</b></p>`,
            },
            {
              question: 'ElitePipe boruların avantajları nelerdir?',
              answer: `<ul>
    <li><b>Yüksek Sıcaklık ve Basınç Dayanımı</b>: ElitePipe boruları, 70°C'de 50 yıl ömür ve 11 bar basınç dayanımı ile yüksek sıcaklık ve basınca karşı üstün dayanıklılık sağlar.</li>
    <li><b>Kangal Halinde Sevkiyat Kolaylığı</b>: Küçük araçlarla taşınabilir, tek kişiyle kolayca taşınabilir ve montaj sürecini hızlandırır.</li>
    <li><b>Eksi 40 Derecede Bile Kırılma Direnci</b>: Soğuk hava koşullarında bile kırılma ve çatlama yaşanmaz, bu da ürünü çeşitli iklimlerde güvenli hale getirir.</li>
    <li><b>Esnek ve Kolay Şekil Alır</b>: Montaj kolaylığı sağlar ve ek parça ihtiyacını azaltır, bu da zaman ve maliyet tasarrufu sağlar.</li>
    <li><b>Çatlama Direnci Yüksek</b>: Yüzey aktif maddelere karşı yüksek direnç gösterir, deformasyon ve çatlama riskini minimize eder.</li>
    <li><b>PPR Gibi Kaynak Yapılır</b>: Soket füzyon kaynağı yapılma özelliği ile PPR borular seviyesinde kaynak yapılabilir.</li>
    <li><b>Daha Az Ek Parça İhtiyacı</b>: Kavis, manşon ve dirsek ihtiyacı minimize edilmiştir, bu da maliyet ve zaman tasarrufu sağlar.</li>
    <li><b>Fireleri Önler</b>: Kangal halinde sevk edilmesi, boru firelerini sıfıra indirir ve malzeme kaybını önler.</li>
    <li><b>Döşendikten Sonra Oluşan Riskleri Ortadan Kaldırır</b>: Sıva sırasında oluşabilecek darbelere karşı daha dayanıklıdır, bu da ek maliyetleri ve riskleri azaltır.</li>
  </ul>
  <p>ElitePipe boruları, geniş kullanım alanları ve üstün performans özellikleri ile tesisat projelerinizde güvenilir bir tercihtir. Daha fazla bilgi ve detay için, ürün sayfasının en üst kısmında yer alan Fiyat Listesini inceleyebilirsiniz.</p>`,
            },
            {
              question: 'ElitePipe boruların ömrü ne kadar?',
              answer: `  <h2>ElitePipe Boruların Ömrü Ne Kadar?</h2>
  <p>ElitePipe boruları, üstün malzeme kalitesi ve ileri teknoloji ile üretilmiştir. Bu nedenle, yüksek sıcaklık ve basınca karşı uzun ömürlü bir performans sergiler. ElitePipe boruları, 70°C'de 50 yıl ömür ve 11 bar basınç dayanımı ile sektörde öne çıkmaktadır.</p>
  <p>ElitePipe borularının uzun ömrü, su tesisatları, ısıtma sistemleri, temiz su hatları ve diğer uygulamalarda güvenilir bir çözüm sunar. Bu dayanıklılık, kullanıcıların uzun yıllar boyunca sorunsuz bir kullanım deneyimi yaşamasını sağlar.</p>
  <p><b>Daha fazla bilgi ve detay için, ürün sayfasının en üst kısmında yer alan Fiyat Listesini inceleyebilirsiniz.</b></p>
        `,
            },
            {
              question: 'ElitePipe boruların fiyat listesine nasıl ulaşabilirim?',
              answer:
                'ElitePipe boruların 2024 Fiyat Listesi için ürün katalogumuzu inceleyebilirsiniz.',
            },
            {
              question: 'ElitePipe boruların teknik özellikleri nelerdir?',
              answer: `
               <ul>
    <li><b>Renk</b>: Buz Mavisi</li>
    <li><b>Üretim Çap Aralığı</b>: Ø 16mm'den Ø 63mm'ye kadar</li>
    <li><b>Kangal Boru Çapları</b>: Ø16mm, Ø20mm, Ø25mm ve Ø32mm</li>
    <li><b>Düz Boru Çapları</b>: Ø 16mm'den Ø63mm'ye kadar</li>
    <li><b>Boy Boru Çapları</b>: Ø 20mm'den Ø63mm'ye kadar</li>
    <li><b>Isıl İletkenlik Katsayısı</b>: 0,37±0,02 W/m.K</li>
    <li><b>Isıl Genleşme Katsayısı</b>: ~ 0,2 mm/mK</li>
    <li><b>Maksimum Çalışma Sıcaklığı</b>: 95°C</li>
    <li><b>50 yıl 70°C Basınç Dayanımı</b>: 11 Bar</li>
    <li><b>Önerilen Kaynak Metodu</b>: Soket Füzyon Kaynağı</li>
  </ul>
  <p>ElitePipe boruları, üstün malzeme kalitesi ve teknik özellikleri ile tesisat projelerinizde güvenilir ve uzun ömürlü çözümler sunar. Güncel teknik özellikler ve daha fazla bilgi için, Fiyat Listesini inceleyebilirsiniz.</p>`,
            },
            {
              question: 'ElitePipe boruları nasıl temin edebilirim?',
              answer:
                "ElitePipe borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
            },
          ],

          fittings: [
            {
              title: 'Soft Power Eşit Te',
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
              alt: 'Soft Power Eşit Te',
              category: 'Fittings',
            },
            {
              title: 'Soft Power Redüksiyon',
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 3.png',
              alt: 'Soft Power Redüksiyon',
              category: 'Fittings',
            },

            {
              title: 'Soft Power Dirsekler',
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
              alt: 'Soft Power Dirsekler',
              category: 'Fittings',
            },
            {
              title: 'Soft Power İnegal Te',
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 3.png',
              alt: 'Soft Power İnegal Te',
              category: 'Fittings',
            },
            {
              title: 'Soft Power Manşon',
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 4.png',
              alt: 'Soft Power Manşon',
              category: 'Fittings',
            },
          ],
        },
      },

      {
        title: 'Sterile Pipe',
        description:
          "Sterile Pipe, bakteri, küf, mantar ve diğer mikrobiyal canlıları yok ederek içerisinden geçen suyu %99,9'a kadar sterilize eden yenilikçi bir boru sistemidir.",
        featuredProduct: true,
        logo: '/productImages/üst yapı borular/sterile-pipe/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/sterile-pipe/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/sterile-pipe/banner/tr/horizontal.png',
          bgImage: '/productImages/üst yapı borular/sterile-pipe/banner/tr/bg-image.png',
          PLP: '/productImages/üst yapı borular/sterile-pipe/banner/tr/PLP.png',
        },
        image: '/productImages/üst yapı borular/sterile-pipe/sterilePipeBanner.png',
        background: 'bg-background-2',
        link: '/tr/urunler/bina-ici-boru-sistemleri/sterilepipe',
        highlights: [
          { title: 'Antimikrobiyal Özellik', icon: '/icons/antimicrobial.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
          { title: 'Sağlıklı Su', icon: '/icons/drink-water.png' },
        ],
        productDetails: {
          title: 'Sterile Pipe',
          description:
            'SterilePipe, içme ve kullanma sularının mikrobiyolojik açıdan temiz kalmasını sağlamak için geliştirilmiş, üst segment anti-mikrobiyal PP-RC boru ve ek parçalarından oluşan bir ürün grubudur. Bu yenilikçi ürün, bakteriler, küf, mantar ve diğer mikrobiyal canlıları %99,9 oranında yok ederek suyun tadını, kokusunu ve rengini değiştirmeden sağlıklı hale getirir. SterilePipe, boru iç yüzeylerinde biyofilm oluşumunu engelleyerek içme suyu tesisatlarında maksimum hijyen sağlar. Hafif yapısı, kolay montaj imkanı ve yüksek basınç dayanımı ile kullanıcı dostu ve çevre dostu bir çözümdür. 4°C ile 95°C arasındaki ideal kullanım sıcaklığı sayesinde geniş bir kullanım yelpazesi sunar.',
          features: [
            {
              title: 'Mikrobiyolojik Temizlik',
              icon: '/icons/bacteria.png',
              alt: 'Mikrobiyolojik Temizlik',
              description:
                "Bakteri, küf, mantar ve diğer mikrobiyal canlıları %99,9'a kadar yok ederek suyu sağlıklı hale getirir.",
            },
            {
              title: 'Biyofilm Engelleme',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'Boru iç yüzeyinde biyofilm oluşumunu engelleyerek mikrobiyolojik kirlenmeyi önler.',
            },
            {
              title: 'Geniş Uygulama Alanı',
              icon: '/icons/application.png',
              alt: 'Application',
              description:
                'Sterile Pipe, temiz su tesisatları, sıcak ve soğuk su hatları, radyatör ısıtma sistemleri gibi birçok alanda kullanılabilir.',
            },
            {
              title: 'Ekonomik ve Güvenilir',
              icon: '/icons/economical.png',
              alt: 'Economical',
              description:
                'Sterile Pipe, ekonomik fiyatı ve uzun ömürlü yapısıyla projelerinizde maliyet tasarrufu sağlar.',
            },
          ],

          images: [
            {
              image: '/productImages/üst yapı borular/sterile-pipe/sterile-pipe.png',
              alt: 'Sterile Pipe',
              description: 'Sterile Pipe',
            },
            {
              image: '/productImages/üst yapı borular/sterile-pipe/sterile-pipe-2.png',
              alt: 'Sterile Pipe',
              description: 'Sterile Pipe',
            },
            {
              image: '/productImages/üst yapı borular/sterile-pipe/sterile-pipe-3.png',
              alt: 'Sterile Pipe',
              description: 'Sterile Pipe',
            },
          ],

          headers: [
            {
              title: '<b>Sterile Pipe</b> ve Ek Parçaları',
              description:
                'Dizayn Grup Sterile Pipe boruları, performansı ve yüksek kalitesi ile 20 mm - 32 mm arası çaplarda ve çeşitli basınç sınıflarında üretilmektedir. Sterile Pipe boruları, su şebekeleri, sıcak ve soğuk su hatları, kimyasal sanayi hatları gibi birçok alanda ideal çözümler sunar. Uzun ömürlü ve dayanıklı yapısıyla projelerinizin vazgeçilmezi olacak. Sterile Pipe <b>Fiyat Listesi</b> için <b>0212 886 57 41</b> numaralı hattımızı arayarak bilgi sahibi olabilirsiniz.',
              image: '/productImages/üst yapı borular/sterile-pipe/sterile-pipe-2.png',
              alt: 'Sterile Pipe',
            },
            {
              title: 'Sterile Pipe <b>Avantajları</b>',
              description:
                'Dizayn Grup Sterile Pipe boruları, sudaki mikroorganizmaları %99.9 u öldürerek suyu temizler. Yüksek sıcaklık ve basınca dayanımına sahiptir. Kimyasallara karşı yüksek direnç gösterir. Tuzlu su, sıhhi kanalizasyon atık suyu, korozif asitler, bazlar ve tuzlar gibi maddelere karşı üstün koruma sunar. Bu <b>özellikleri</b> ile Sterile Pipe boruları, uzun ömürlü, güvenilir ve yüksek performans sağlar.',
            },
            {
              title: 'Sterile Pipe <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn Grup Sterile Pipe boruları, üstün hijyen standartları ve kalitesi ile hastaneler, oteller, belediye ve devlet daireleri, üniversiteler gibi prestijli projelerde tercih edilen bir üründür. Su şebekeleri, sıcak ve soğuk su hatları, kimyasal sanayi hatlarında güvenle kullanılabilir. Sterile Pipe boruları, projelerinizde güvenilir ve uzun ömürlü çözümler sunar. Sterile Pipe <b>Fiyat Listesi</b> için bizimle iletişime geçiniz.',
            },
            {
              title: 'Sterile Pipe <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn Grup Sterile Pipe borularının ağırlık hesaplaması, içi boş silindir hacmi ve borunun yoğunluğu çarpılarak yapılır.  Bu boruların ağırlıkları, kullanılan malzeme ve üretim teknikleri ile doğru orantılıdır. ElitePipe boruları, iç ve dış çaplarına göre değişen ağırlıklara sahiptir.',
            },
            {
              title: 'Sterile Pipe Teknik <b>Özellikleri</b>',
              description:
                'Dizayn Grup olarak kalite laboratuvarlarımızda sürekli gelişmeleri izleyip araştırmalar yapmaktayız. Sterile Pipe borularımız, 20 mm - 32 mm çap aralığında ve yüksek teknoloji ile üretilmektedir. Polietilenin <b>özellikleri</b> sayesinde, basınçlı su sistemlerinde kullanıma en uygun alternatiflerden biridir. Yeraltı ve yerüstü basınçlı su şebeke hatları, deniz deşarj projeleri ve endüstriyel uygulamalar gibi birçok alanda kullanılmaktadır.\n\nSterile Pipe boruları, sert beton borulara göre daha kolay işlenir, monte edilir ve maliyet tasarrufu sağlar. Yapısal olarak darbelere ve soğuk hava koşullarına dayanacak şekilde tasarlanmıştır. Deniz uygulamalarında uzun boylarda borular kıyıda monte edilip daha sonra yerine oturtulabilir.',
            },
            {
              title: 'Sterile Pipe <b>Ek Parçaları</b>',
              description:
                'Dizayn Grup Sterile Pipe <b>ek parçaları</b> üstün kalitede üretilip tek tek kontrol edilerek sevk edilmektedir. Uygulama kolaylığı ve ergonomik tasarıma sahip ek parçalarımız, yüksek kalite ve uygun fiyat ekseninde siz değerli müşterilerimizin hizmetindedir. Sterile Pipe <b>ek parçaları</b>, basınçlı su sistemleri ve diğer endüstriyel uygulamalarda güvenle kullanılabilir.\n\n- Sterile Pipe <b>ek parçaları</b>\n- Sterile Pipe Eşit Te\n- Sterile Pipe Redüksiyon\n- Sterile Pipe Semer\n- Sterile Pipe Dirsekler\n- Sterile Pipe İnegal Te\n- Sterile Pipe Manşon\n- Sterile Pipe Körtapa\n- Sterile Pipe Flanş Adaptörü\nBu <b>ek parçaları</b>, Sterile Pipe boru sistemlerinizin güvenli ve dayanıklı bir şekilde birleştirilmesini sağlar.',
            },
            {
              title: 'Sterile Pipe Boru <b>Birleştirme Yöntemleri</b>',
              description:
                'Dizayn Grup Sterile Pipe boruları ve ek parçaları birbirlerine eritilerek veya mekanik ek parçalar ile bağlanırlar. Polietilen dışında diğer malzemelerden yapılan borulara dıştan sıkmalı ek parçalar, flanşlar veya amaca uygun yapılmış diğer geçiş adaptörleri ile bağlanabilirler. Bağlantı ek parçaları kullanılacak yerlere göre kolaylık sağlamaktadır.\n\n<b>Birleştirme Yöntemleri</b>\n- Elektrofüzyon (EF) Kaynağı: Elektrik enerjisi ile boru ve ek parça uçları eritilerek birleştirilir.\n- Alın Kaynağı: Boru uçlarının yüksek sıcaklıkta eritilerek birleştirilmesi.\n- Kaplin ile Birleştirme: Mekanik kaplin kullanılarak boru uçlarının birleştirilmesi.',
            },
            {
              title: 'Sterile Pipe Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description:
                '<b>Elektrofüzyon Kaynak</b> yönteminde, kaynak işlemi füzyon ek parçanın iç kısmındaki ısıtma rezistansları ile gerçekleştirilir. Sterile Pipe borular, elektrofüzyon ek parçalarının içine yerleştirilir ve kaynak makinesinin uçları ek parçanın üzerindeki soketlere bağlanarak elektrik akımı ile ısıtılır.\n\nBu yöntemle, Sterile Pipe borular güvenli ve sağlam bir şekilde birleştirilmiş olur. <b>Elektrofüzyon Kaynak</b> metodu ile 16 mm çaptan 63 mm çapa kadar olan Sterile Pipe borular kaynatılabilir.',
            },
            {
              title: 'Sterile Pipe Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                '<b>Alın Kaynak</b>, Sterile Pipe boru ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. <b>Alın Kaynak</b> makinesi kullanılarak, kaynatılacak olan boruların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, Sterile Pipe boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 63 mm çapa kadar olan Sterile Pipe borular kaynatılabilir.',
            },
            {
              title: 'Sterile Pipe Boru <b>Fiyat Listesi</b>',
              description:
                'Dizayn Grup Sterile Pipe boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Sterile Pipe borular, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Sterile Pipe boru avantajlarından yararlanmak ve 2024 Sterile Pipe Boru Fiyat Listesine ulaşmak için bizimle iletişime geçiniz.\n\nSterile Pipe borularımız hakkında detaylı bilgi almak için 0212 886 57 41 numaralı hattımızı arayabilirsiniz.',
            },
          ],

          faqs: [
            {
              question: 'Sterile Pipe borular hangi malzemeden üretilir?',
              answer:
                'Sterile Pipe boruları, yüksek kaliteli polietilen malzemeden üretilmektedir. %100 saf ve orijinal hammadde kullanılarak üretilir.',
            },
            {
              question: 'Sterile Pipe boruların kullanım alanları nelerdir?',
              answer:
                'Sterile Pipe boruları, su şebekeleri, sıcak ve soğuk su hatları, kimyasal sanayi hatları, atık su ve drenaj sistemleri, endüstriyel uygulamalar ve yeraltı su drenaj sistemlerinde kullanılabilir.',
            },
            {
              question: 'Sterile Pipe borular hangi çap ve basınç sınıflarında mevcuttur?',
              answer:
                "Sterile Pipe boruları, 16 mm'den 63 mm'ye kadar çeşitli çaplarda ve farklı basınç sınıflarında üretilmektedir.",
            },
            {
              question: 'Sterile Pipe boruların birleştirme yöntemleri nelerdir?',
              answer:
                'Sterile Pipe boruları elektrofüzyon (EF) kaynağı, alın kaynağı ve kaplin ile birleştirme yöntemleri ile birleştirilebilir.',
            },
            {
              question: 'Sterile Pipe boruları kimyasallara karşı dayanıklı mı?',
              answer:
                'Evet, Sterile Pipe boruları tuzlu su, korozif asitler, bazlar ve diğer kimyasallara karşı yüksek direnç sağlar.',
            },
            {
              question: 'Sterile Pipe boruların avantajları nelerdir?',
              answer:
                'Sterile Pipe boruları hafif, esnek ve dayanıklıdır. Paslanmaya karşı yüksek direnç gösterir ve uzun ömürlüdür. Ayrıca, taşıma ve kurulum sırasında minimum ağır ekipman gerektirir.',
            },
            {
              question: 'Sterile Pipe boruların ömrü ne kadar?',
              answer:
                'Sterile Pipe boruları, yüksek kaliteli malzemeler ve üretim teknikleri sayesinde uzun ömürlüdür ve projelerinizde güvenle kullanılabilir.',
            },
            {
              question: 'Sterile Pipe boruların fiyat listesine nasıl ulaşabilirim?',
              answer:
                'Sterile Pipe boruların 2024 Fiyat Listesi için 0212 886 57 41 numaralı hattımızı arayarak bilgi alabilirsiniz.',
            },
            {
              question: 'Sterile Pipe boruların teknik özellikleri nelerdir?',
              answer:
                'Sterile Pipe boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için Fiyat Listesini bakabilirsiniz.',
            },
            {
              question: 'Sterile Pipe boruları nasıl temin edebilirim?',
              answer:
                "Sterile Pipe borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
            },
          ],
          fittings: [],
        },
      },

      {
        title: 'Elastica Boru',
        description:
          'Elastica Boru, yüksek sıcaklık ve basınca dayanıklılığı, esnek yapısı ve montaj kolaylığı ile öne çıkan yenilikçi bir boru sistemidir. Hem yerden ısıtma sistemlerinde hem de radyatörlü tesisatlarda güvenle kullanılabilir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/mobil-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/tr/horizontal.png',
          PLP: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages//üst yapı borular/mobil-boru-ve-ek/KILIFLI ELASTICA BORU.png',
        link: '/tr/urunler/bina-ici-boru-sistemleri/elastica-boru',
        highlights: [
          {
            title: 'Yüksek Sıcaklık ve Basınç Dayanımı',
            icon: '/icons/high-temperature.png',
          },
          {
            title: 'Esneklik ve Dayanıklılık',
            icon: '/icons/flexible-durable.png',
          },
          { title: 'Kolay Montaj', icon: '/icons/easy-installation.png' },
        ],
        productDetails: {
          title: 'Elastica Boru',
          description:
            'Elastica Boru, özel formüllü ham maddesi ve üretim yöntemi sayesinde uygulama kolaylığı ve maksimum tesisat güvenliği sağlar. Yüksek sıcaklık ve basınç dayanımı sağlayan güçlü zincir yapısının yanında, kolay montaj sağlayan esnek yapısıyla öne çıkar. Hem yerden ısıtma sistemlerinde hem de radyatörlü tesisatlarda güvenle kullanılabilir.',
          features: [
            {
              title: 'Yüksek Dayanıklılık',
              icon: '/icons/durability.png',
              alt: 'Durability',
              description:
                'Elastica Boru, yüksek sıcaklık ve basınca dayanıklıdır, uzun ömürlü ve güvenilir bir çözüm sunar.',
            },
            {
              title: 'Kolay Montaj',
              icon: '/icons/easy-installation.png',
              alt: 'Easy Installation',
              description:
                'Esnek yapısı sayesinde kolayca montajlanabilir ve şekil alır, bu da işçilik maliyetlerini düşürür.',
            },
            {
              title: 'Kimyasal Dayanıklılık',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'Elastica Boru, kimyasal maddelere karşı yüksek direnç gösterir ve korozyona karşı koruma sağlar.',
            },
            {
              title: 'Geniş Uygulama Alanı',
              icon: '/icons/application.png',
              alt: 'Application',
              description:
                'Elastica Boru, yerden ısıtma sistemleri, sıcak ve soğuk su hatları, endüstriyel uygulamalar gibi birçok alanda kullanılabilir.',
            },
            {
              title: 'Ekonomik ve Güvenilir',
              icon: '/icons/economical.png',
              alt: 'Economical',
              description:
                'Elastica Boru, ekonomik fiyatı ve uzun ömürlü yapısıyla projelerinizde maliyet tasarrufu sağlar.',
            },
            {
              title: 'Çevre Dostu',
              icon: '/icons/eco-friendly.png',
              alt: 'Eco-Friendly',
              description: 'Elastica Boru, geri dönüşüme uygunluğu ile çevre dostu bir üründür.',
            },
          ],
          images: [
            {
              image: '/productImages/üst yapı borular/mobil-boru-ve-ek/KILIFLI ELASTICA BORU.png',
              alt: 'Elastica Boru',
              description: 'Elastica Boru',
            },
            {
              image: '/productImages/üst yapı borular/mobil-boru-ve-ek/PE X ELASTICA.png',
              alt: 'Elastica Boru',
              description: 'Elastica Boru',
            },
            {
              image: '/productImages/üst yapı borular/mobil-boru-ve-ek/mobil-boru-ve-ek-3.png',
              alt: 'Elastica Boru',
              description: 'Elastica Boru',
            },
          ],
          headers: [
            {
              title: '<b>Elastica Boru</b> ve Ek Parçaları',
              description:
                'Dizayn Grup Elastica Boruları, performansı ve yüksek kalitesi ile 16 mm - 110 mm arası çaplarda ve çeşitli basınç sınıflarında üretilmektedir. Elastica Boruları, yerden ısıtma, radyatör ısıtma sistemleri ve endüstriyel uygulamalar gibi birçok alanda ideal çözümler sunar. Uzun ömürlü ve dayanıklı yapısıyla projelerinizin vazgeçilmezi olacak. Elastica Boru <b>Fiyat Listesi</b> için <b>0212 886 57 41</b> numaralı hattımızı arayarak bilgi sahibi olabilirsiniz.',
              image: '/productImages/üst yapı borular/mobil-boru-ve-ek/pe-x-elastica.png',
              alt: 'Elastica Boru',
            },
            {
              title: 'Elastica Boru <b>Avantajları</b>',
              description:
                'Dizayn Grup Elastica Boruları, hafif, esnek ve sağlam yapısıyla montaj kolaylığı sağlar. Yüksek sıcaklık ve basınca dayanıklıdır. Kimyasallara karşı yüksek direnç gösterir. Tuzlu su, sıhhi kanalizasyon atık suyu, korozif asitler, bazlar ve tuzlar gibi maddelere karşı üstün koruma sunar. Bu <b>özellikleri</b> ile Elastica Boruları, uzun ömürlü ve güvenilir performans sağlar.',
            },
            {
              title: 'Elastica Boru <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn Grup Elastica Boruları, üstün performansı ve kalitesi ile prestijli projelerde tercih edilen bir üründür. Yerden ısıtma sistemleri, sıcak ve soğuk su hatları, kimyasal sanayi hatları, atık su ve drenaj sistemleri, endüstriyel uygulamalar ve yeraltı su drenaj sistemlerinde güvenle kullanılabilir. Elastica Boruları, projelerinizde güvenilir ve uzun ömürlü çözümler sunar. Elastica Boru <b>Fiyat Listesi</b> için bizimle iletişime geçiniz.',
            },
            {
              title: 'Elastica Boru <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn ElasticA Boruları, farklı çap ve basınç sınıflarında çeşitli ağırlıklarla üretilmektedir. Ağırlık tablosu, boruların içi boş silindir hacmi ve borunun yoğunluğu çarpılarak hesaplanmaktadır. Boruların üretim aşamasında ısıl işlem gördüğü için genleşme özelliği dikkate alınarak tablo hazırlanmıştır.\nBu tablo, Dizayn ElasticA Borularının farklı çap ve basınç sınıflarında karşılaşılan ağırlık değerlerini göstermektedir. Detaylı bilgi ve diğer çaplar için firmamızla iletişime geçebilirsiniz.',
            },
            {
              title: 'Elastica Boru Teknik <b>Özellikleri</b>',
              description: `
                Dizayn ElasticA Boruları, yüksek sıcaklık ve basınç dayanımı ile öne çıkan üstün özelliklere sahiptir. İşte ElasticA Borularının teknik özellikleri:


                 <ul>
        <li><b>Çalışma Sıcaklığı</b>: Sürekli 95°C, anlık 120°C sıcaklık dayanımı.</li>
        <li><b>Çalışma Basıncı</b>: 11 bar basınç dayanımı.</li>
        <li><b>Malzeme</b>: Özel formüllü PE-RT (Polyethylene of Raised Temperature Resistance) malzemesi.</li>
        <li><b>Montaj Kolaylığı</b>: Soğuk havalarda bile ısıtılmadan kolay montaj imkanı.</li>
        <li><b>Dayanıklılık</b>: Yüksek sıcaklık ve basınç dayanımı, soğuk havalarda kırılma ve çatlamaya karşı üstün direnç.</li>
        <li><b>Düşük Sürtünme Direnci</b>: Verimli tesisat performansı için düşük sürtünme direnci.</li>
        <li><b>Oksijen Bariyeri</b>: Oksijen bariyerli model, korozyonu %100 önler.</li>
        <li><b>Kendi Kendini Tamir Etme</b>: Montaj esnasında genişletmelerden sonra eski haline hızla dönme özelliği.</li>
        <li><b>Ekonomiklik</b>: Muadili PEX-A borulara göre daha ekonomik ve uzun ömürlü.</li>
    </ul>

    ElasticA Boruları, yerden ısıtma ve radyatörlü sistemlerde güvenle kullanılabilir. Bu üstün teknik özellikler sayesinde, ElasticA Boruları en iyi çözüm olarak öne çıkmaktadır. Dizayn ElasticA Boruları ile tesisatlarınızda maksimum güvenlik ve verimlilik sağlayın.
`,
            },
            {
              title: 'Elastica Boru <b>Ek Parçaları</b>',
              description: `
                Dizayn ElasticA Boruları için çeşitli ek parçalar mevcuttur. Bu ek parçalar, boruların montajını kolaylaştırır ve sistemlerin verimliliğini artırır. İşte ElasticA Boruları için kullanılan bazı ek parçalar:
                    <ul>
        <li><b>Dirsekler</b>: Boru hattında yön değişiklikleri için kullanılır ve montaj sırasında esneklik sağlar.</li>
        <li><b>Te Parçaları</b>: Boru hatlarının dallanmasını sağlar ve çeşitli yönlere su akışını yönlendirir.</li>
        <li><b>Manşonlar</b>: İki boru parçasını birleştirir ve sızdırmaz bir bağlantı sağlar.</li>
        <li><b>Flanşlar</b>: Metal boru bağlantıları ve diğer sistem bileşenleri ile güvenli bağlantılar oluşturur.</li>
        <li><b>Körtapa</b>: Boru uçlarını kapatarak su akışını durdurur ve hattın güvenliğini sağlar.</li>
        <li><b>Redüksiyonlar</b>: Farklı çaplarda boruların birleştirilmesini sağlar.</li>
        <li><b>Semer</b>: Boru hattının çeşitli noktalarda desteklenmesini ve sabitlenmesini sağlar.</li>
    </ul>
Bu ek parçalar, Dizayn ElasticA Borularının sistemlerinize entegrasyonunu kolaylaştırır ve uzun ömürlü, güvenli bir tesisat sağlar.
                `,
            },
            {
              title: 'Elastica Boru <b>Birleştirme Yöntemleri</b>',
              description: `<p>Dizayn ElasticA Boruları, çeşitli birleştirme yöntemleri ile güvenli ve sağlam bağlantılar sunar. İşte ElasticA Boruları için kullanılan birleştirme yöntemleri:</p>
    <ul>
        <li><b>Kaplin ile Birleştirme</b>: Mekanik kaplin parçaları kullanılarak boruların kolayca birleştirilmesini sağlar. Bu yöntem, hızlı ve güvenilir bir montaj imkanı sunar.</li>
        <li><b>Manşon ile Birleştirme</b>: İki boru parçasını birleştirirken manşon kullanılır. Bu yöntem, sızdırmaz ve sağlam bir bağlantı oluşturur.</li>
        <li><b>Flanş Bağlantısı</b>: Metal borular veya diğer sistem bileşenleri ile bağlantı için flanşlar kullanılır. Flanş bağlantıları, yüksek basınca dayanıklı ve güvenli bir bağlantı sağlar.</li>
        <li><b>Kaynak Yöntemleri</b>: PE-RT boruların birleştirilmesinde, alın kaynağı ve elektrofüzyon kaynağı gibi yöntemler kullanılır. Bu yöntemler, yüksek basınç ve sıcaklık dayanımı sunar.</li>
    </ul>
    <p>Bu birleştirme yöntemleri, Dizayn ElasticA Borularının çeşitli uygulamalarda güvenli ve uzun ömürlü kullanılmasını sağlar. Tesisatınızın ihtiyacına göre en uygun birleştirme yöntemini seçerek maksimum verimlilik elde edebilirsiniz.</p>`,
            },
            {
              title: 'Elastica Boru Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description:
                '<b>Elektrofüzyon kaynak</b> yöntemi, Dizayn ElasticA Borularının birleştirilmesinde güvenilir ve sağlam bir yöntem sunar. Elektrofüzyon kaynak, boru ve ek parçaların iç kısmında bulunan rezistans tellerinin elektrik enerjisi ile ısıtılmasıyla gerçekleştirilir. Bu işlem, boru yüzeylerinin erimesini ve birleşmesini sağlar. <b>Kolay montaj</b> imkanı sunan elektrofüzyon ek parçaları, boru uçlarına yerleştirilir ve kaynak makinesi ile kolayca birleştirilir. Sağlam ve sızdırmaz bağlantı oluşturur, bu da tesisatın uzun ömürlü ve güvenilir olmasını sağlar. Elektrofüzyon ile birleştirilmiş borular, <b>yüksek basınç ve deprem</b> gibi dış etkilere karşı dayanıklıdır. Bu, özellikle kritik altyapı projelerinde önemli bir avantaj sağlar. Elektrofüzyon kaynak yöntemi, Dizayn ElasticA Borularının kullanımında yüksek güvenlik ve verimlilik sunar ve özellikle uzun ömür ve güvenilirlik gerektiren projelerde tercih edilir.',
            },
            {
              title: 'Elastica Boru Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                '<b>Alın Kaynak</b>, Elastica Boru ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. <b>Alın Kaynak</b> makinesi kullanılarak, kaynatılacak olan boruların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, Elastica Boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 110 mm çapa kadar olan Elastica Boruları kaynatılabilir.',
            },
            {
              title: 'Elastica Boru <b>Fiyat Listesi</b>',
              description:
                'Dizayn Grup Elastica Boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Elastica Borular, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Elastica Boru avantajlarından yararlanmak ve 2024 Elastica Boru Fiyat Listesine ulaşmak için bizimle iletişime geçiniz.\n\nElastica Borularımız hakkında detaylı bilgi almak için 0212 886 57 41 numaralı hattımızı arayabilirsiniz.',
            },
          ],
          faqs: [
            {
              question: 'Elastica Borular hangi malzemeden üretilir?',
              answer:
                'Elastica Boruları, yüksek kaliteli polietilen malzemeden üretilmektedir. %100 saf ve orijinal hammadde kullanılarak üretilir.',
            },
            {
              question: 'Elastica Boruların kullanım alanları nelerdir?',
              answer:
                'Elastica Boruları, yerden ısıtma sistemleri, sıcak ve soğuk su hatları, kimyasal sanayi hatları, atık su ve drenaj sistemleri, endüstriyel uygulamalar ve yeraltı su drenaj sistemlerinde kullanılabilir.',
            },
            {
              question: 'Elastica Borular hangi çap ve basınç sınıflarında mevcuttur?',
              answer:
                "Elastica Boruları, 16 mm'den 110 mm'ye kadar çeşitli çaplarda ve farklı basınç sınıflarında üretilmektedir.",
            },
            {
              question: 'Elastica Boruların birleştirme yöntemleri nelerdir?',
              answer:
                'Elastica Boruları elektrofüzyon (EF) kaynağı, alın kaynağı ve kaplin ile birleştirme yöntemleri ile birleştirilebilir.',
            },
            {
              question: 'Elastica Boruları kimyasallara karşı dayanıklı mı?',
              answer:
                'Evet, Elastica Boruları tuzlu su, korozif asitler, bazlar ve diğer kimyasallara karşı yüksek direnç sağlar.',
            },
            {
              question: 'Elastica Boruların avantajları nelerdir?',
              answer:
                'Elastica Boruları hafif, esnek ve dayanıklıdır. Paslanmaya karşı yüksek direnç gösterir ve uzun ömürlüdür. Ayrıca, taşıma ve kurulum sırasında minimum ağır ekipman gerektirir.',
            },
            {
              question: 'Elastica Boruların ömrü ne kadar?',
              answer:
                'Elastica Boruları, yüksek kaliteli malzemeler ve üretim teknikleri sayesinde uzun ömürlüdür ve projelerinizde güvenle kullanılabilir.',
            },
            {
              question: 'Elastica Boruların fiyat listesine nasıl ulaşabilirim?',
              answer:
                'Elastica Boruların 2024 Fiyat Listesi için 0212 886 57 41 numaralı hattımızı arayarak bilgi alabilirsiniz.',
            },
            {
              question: 'Elastica Boruların teknik özellikleri nelerdir?',
              answer:
                'Elastica Boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için Fiyat Listesini bakabilirsiniz.',
            },
            {
              question: 'Elastica Boruları nasıl temin edebilirim?',
              answer:
                "Elastica Borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
            },
          ],
          fittings: [],
        },
        background: '',
      },

      {
        title: 'NanoTech Atık Su Borusu',
        description:
          'NanoTech Atık Su Borusu, ses yalıtımı sağlayan, yüksek dayanıklılığa sahip ve uzun ömürlü bir boru sistemidir. Bina içi ve dışı atık su tahliyesi için ideal bir çözümdür.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical:
            '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/vertical.jpg',
          horizontal:
            '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/tr/horizontal.png',
          PLP: '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/tr/PLP.png',
          bgImage: '',
        },
        image:
          '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/üst yapı borular/atık-su-nanotek-boru-ve-ek.png',
        link: '/tr/urunler/bina-ici-boru-sistemleri/nanotek-ve-nanotek-premium',
        highlights: [
          { title: 'Ses Yalıtımı', icon: '/icons/soundproof.png' },
          { title: 'Yüksek Dayanıklılık', icon: '/icons/durability.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
        ],
        productDetails: {
          title: 'NanoTech Atık Su Borusu',
          description:
            'NanoTech Atık Su Boruları, bina içi ve dışı atık su tahliyesi için kullanılan, ses yalıtımı ve yüksek dayanıklılık sağlayan özel borulardır. Çift dudaklı conta sistemi ile sızdırmazlık sağlanırken, özel katman yapısı sayesinde uzama ve kısalma problemleri önlenmiştir. Depreme karşı dayanıklı olup, yüksek halka rijitliği ile toprak altında da güvenle kullanılabilir.',
          features: [
            {
              title: 'Sessiz Çalışma',
              icon: '/icons/soundproof.png',
              alt: 'Soundproof',
              description:
                'Özel geliştirilmiş ara katmanı sayesinde, bina tesisatlarındaki rahatsız edici ses oluşumunu önler.',
            },
            {
              title: 'Yüksek Dayanıklılık',
              icon: '/icons/durable.png',
              alt: 'Durability',
              description:
                'Toprak altı dayanımı güçlendirilen atıksu boruları; ezilmeyen, güçlü bir yapıya sahiptir.',
            },
            {
              title: 'Uzun Ömür',
              icon: '/icons/long-lasting.png',
              alt: 'Long Lasting',
              description:
                'Uzama ve kısalma sonucu oluşabilecek problemler özel katman sayesinde önlenmiştir.',
            },
            {
              title: 'Depreme Dayanıklı',
              icon: '/icons/earthquake-resistant.png',
              alt: 'Earthquake Resistant',
              description: 'Depremin neden olduğu salınım hareketine karşı dayanıklıdır.',
            },
            {
              title: 'Kimyasal Dayanıklılık',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description: 'Kimyasallara karşı yüksek dayanım gösterir.',
            },
            {
              title: 'Kolay Montaj',
              icon: '/icons/easy-installation.png',
              alt: 'Easy Installation',
              description:
                'Çift dudaklı conta ve montaj esnasında çıkmasını önleyen tespit çemberi ile kolay montaj edilir.',
            },
          ],
          images: [
            {
              image:
                '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/NANOTEK ATIK SU BORU GRUP.png',
              alt: 'NanoTech Atık Su Borusu',
              description: 'NanoTech Atık Su Borusu',
            },
            {
              image:
                '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/NANOTEK ATIK SU BORU.png',
              alt: 'NanoTech Atık Su Borusu',
              description: 'NanoTech Atık Su Borusu',
            },
            {
              image:
                '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/atık-su-nanotek-boru-ve-ek-3.png',
              alt: 'NanoTech Atık Su Borusu',
              description: 'NanoTech Atık Su Borusu',
            },
          ],

          headers: [
            {
              title: '<b>NanoTech Atık Su Borusu</b> ve Ek Parçaları',
              description:
                'Dizayn Grup NanoTech Atık Su Boruları, performansı ve yüksek kalitesi ile 50 mm - 200 mm arası çaplarda ve çeşitli basınç sınıflarında üretilmektedir. NanoTech Atık Su Boruları, bina içi ve dışı atık su tahliyesi için ideal çözümler sunar. Uzun ömürlü ve dayanıklı yapısıyla projelerinizin vazgeçilmezi olacak. NanoTech Atık Su Boruları <b>Fiyat Listesi</b> için <b>0212 886 57 41</b> numaralı hattımızı arayarak bilgi sahibi olabilirsiniz.',
              image:
                '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/NANOTEK S SİFON DİRSEKLİ 45.png',
              alt: 'NanoTech Atık Su Borusu',
            },
            {
              title: 'NanoTech Atık Su Borusu <b>Avantajları</b>',
              description:
                'Dizayn Grup NanoTech Atık Su Boruları, hafif, esnek ve sağlam yapısıyla montaj kolaylığı sağlar. Yüksek sıcaklık ve basınca dayanıklıdır. Paslanmaz ve kimyasallara karşı yüksek direnç gösterir. Tuzlu su, sıhhi kanalizasyon atık suyu, korozif asitler, bazlar ve tuzlar gibi maddelere karşı üstün koruma sunar. Bu <b>özellikleri</b> ile NanoTech Atık Su Boruları, uzun ömürlü ve güvenilir performans sağlar.',
            },
            {
              title: 'NanoTech Atık Su Borusu <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn Grup NanoTech Atık Su Boruları, üstün performansı ve kalitesi ile prestijli projelerde tercih edilen bir üründür. Bina içi ve dışı atık su tahliyesi, yağmur suyu drenaj sistemleri, endüstriyel uygulamalar ve yeraltı su drenaj sistemlerinde güvenle kullanılabilir. NanoTech Atık Su Boruları, projelerinizde güvenilir ve uzun ömürlü çözümler sunar. NanoTech Atık Su Boruları <b>Fiyat Listesi</b> için bizimle iletişime geçiniz.',
            },
            {
              title: 'NanoTech Atık Su Borusu <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn Grup NanoTech Atık Su Borularının ağırlık hesaplaması, içi boş silindir hacmi ve borunun yoğunluğu çarpılarak yapılır. NanoTech Atık Su Boruları üretim aşamasında ısıl işlem gördüğü için genleşme özelliği gösterir. Bu nedenle, NanoTech Atık Su Borularının ölçü tablosu hazırlanırken tolerans değerleri dikkate alınmalıdır.\n\n<b>Ağırlık Tablosu</b> Örneği\n50 mm: 0.60 kg/m\n75 mm: 0.90 kg/m\n100 mm: 1.20 kg/m\n125 mm: 1.50 kg/m\n150 mm: 1.80 kg/m\n200 mm: 2.20 kg/m',
            },
            {
              title: 'NanoTech Atık Su Borusu Teknik <b>Özellikleri</b>',
              description:
                'Dizayn Grup olarak kalite laboratuvarlarımızda sürekli gelişmeleri izleyip araştırmalar yapmaktayız. NanoTech Atık Su Borularımız, 50 mm - 200 mm çap aralığında ve yüksek teknoloji ile üretilmektedir. Polipropilenin <b>özellikleri</b> sayesinde, basınçlı su sistemlerinde kullanıma en uygun alternatiflerden biridir. Yeraltı ve yerüstü basınçlı su şebeke hatları, deniz deşarj projeleri ve endüstriyel uygulamalar gibi birçok alanda kullanılmaktadır.\n\nNanoTech Atık Su Boruları, sert beton borulara göre daha kolay işlenir, monte edilir ve maliyet tasarrufu sağlar. Yapısal olarak darbelere ve soğuk hava koşullarına dayanacak şekilde tasarlanmıştır. Deniz uygulamalarında uzun boylarda borular kıyıda monte edilip daha sonra yerine oturtulabilir.',
            },
            {
              title: 'NanoTech Atık Su Borusu <b>Ek Parçaları</b>',
              description:
                'Dizayn Grup NanoTech Atık Su Borusu <b>ek parçaları</b> üstün kalitede üretilip tek tek kontrol edilerek sevk edilmektedir. Uygulama kolaylığı ve ergonomik tasarıma sahip ek parçalarımız, yüksek kalite ve uygun fiyat ekseninde siz değerli müşterilerimizin hizmetindedir. NanoTech Atık Su Borusu <b>ek parçaları</b>, basınçlı su sistemleri ve diğer endüstriyel uygulamalarda güvenle kullanılabilir.\n\n- NanoTech Atık Su Borusu <b>ek parçaları</b>\n- NanoTech Atık Su Borusu Eşit Te\n- NanoTech Atık Su Borusu Redüksiyon\n- NanoTech Atık Su Borusu Semer\n- NanoTech Atık Su Borusu Dirsekler\n- NanoTech Atık Su Borusu İnegal Te\n- NanoTech Atık Su Borusu Manşon\n- NanoTech Atık Su Borusu Körtapa\n- NanoTech Atık Su Borusu Flanş Adaptörü\nBu <b>ek parçaları</b>, NanoTech Atık Su Borusu sistemlerinizin güvenli ve dayanıklı bir şekilde birleştirilmesini sağlar.',
            },
            {
              title: 'NanoTech Atık Su Borusu <b>Birleştirme Yöntemleri</b>',
              description:
                'Dizayn Grup NanoTech Atık Su Boruları ve ek parçaları birbirlerine eritilerek veya mekanik ek parçalar ile bağlanırlar. Polipropilen dışında diğer malzemelerden yapılan borulara dıştan sıkmalı ek parçalar, flanşlar veya amaca uygun yapılmış diğer geçiş adaptörleri ile bağlanabilirler. Bağlantı ek parçaları kullanılacak yerlere göre kolaylık sağlamaktadır.\n\n<b>Birleştirme Yöntemleri</b>\n- Elektrofüzyon (EF) Kaynağı: Elektrik enerjisi ile boru ve ek parça uçları eritilerek birleştirilir.\n- Alın Kaynağı: Boru uçlarının yüksek sıcaklıkta eritilerek birleştirilmesi.\n- Kaplin ile Birleştirme: Mekanik kaplin kullanılarak boru uçlarının birleştirilmesi.',
            },
            {
              title: 'NanoTech Atık Su Borusu Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description:
                '<b>Elektrofüzyon Kaynak</b> yönteminde, kaynak işlemi füzyon ek parçanın iç kısmındaki ısıtma rezistansları ile gerçekleştirilir. NanoTech Atık Su Boruları, elektrofüzyon ek parçalarının içine yerleştirilir ve kaynak makinesinin uçları ek parçanın üzerindeki soketlere bağlanarak elektrik akımı ile ısıtılır.\n\nBu yöntemle, NanoTech Atık Su Boruları güvenli ve sağlam bir şekilde birleştirilmiş olur. <b>Elektrofüzyon Kaynak</b> metodu ile 50 mm çaptan 200 mm çapa kadar olan NanoTech Atık Su Boruları kaynatılabilir.',
            },
            {
              title: 'NanoTech Atık Su Borusu Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                '<b>Alın Kaynak</b>, NanoTech Atık Su Borusu ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. <b>Alın Kaynak</b> makinesi kullanılarak, kaynatılacak olan boruların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, NanoTech Atık Su Boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 200 mm çapa kadar olan NanoTech Atık Su Boruları kaynatılabilir.',
            },
            {
              title: 'NanoTech Atık Su Borusu <b>Fiyat Listesi</b>',
              description:
                'Dizayn Grup NanoTech Atık Su Boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. NanoTech Atık Su Boruları, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. NanoTech Atık Su Borusu avantajlarından yararlanmak ve 2024 NanoTech Atık Su Borusu Fiyat Listesine ulaşmak için bizimle iletişime geçiniz.\n\nNanoTech Atık Su Borularımız hakkında detaylı bilgi almak için 0212 886 57 41 numaralı hattımızı arayabilirsiniz.',
            },
          ],

          faqs: [
            {
              question: 'NanoTech Atık Su Boruları hangi malzemeden üretilir?',
              answer:
                'NanoTech Atık Su Boruları, yüksek kaliteli polipropilen malzemeden üretilmektedir. %100 saf ve orijinal hammadde kullanılarak üretilir.',
            },
            {
              question: 'NanoTech Atık Su Borularının kullanım alanları nelerdir?',
              answer:
                'NanoTech Atık Su Boruları, bina içi ve dışı atık su tahliyesi, yağmur suyu drenaj sistemleri, endüstriyel uygulamalar ve yeraltı su drenaj sistemlerinde kullanılabilir.',
            },
            {
              question: 'NanoTech Atık Su Boruları hangi çap ve basınç sınıflarında mevcuttur?',
              answer:
                "NanoTech Atık Su Boruları, 50 mm'den 200 mm'ye kadar çeşitli çaplarda ve farklı basınç sınıflarında üretilmektedir.",
            },
            {
              question: 'NanoTech Atık Su Borularının birleştirme yöntemleri nelerdir?',
              answer:
                'NanoTech Atık Su Boruları elektrofüzyon (EF) kaynağı, alın kaynağı ve kaplin ile birleştirme yöntemleri ile birleştirilebilir.',
            },
            {
              question: 'NanoTech Atık Su Boruları kimyasallara karşı dayanıklı mı?',
              answer:
                'Evet, NanoTech Atık Su Boruları tuzlu su, korozif asitler, bazlar ve diğer kimyasallara karşı yüksek direnç sağlar.',
            },
            {
              question: 'NanoTech Atık Su Borularının avantajları nelerdir?',
              answer:
                'NanoTech Atık Su Boruları hafif, esnek ve dayanıklıdır. Paslanmaya karşı yüksek direnç gösterir ve uzun ömürlüdür. Ayrıca, taşıma ve kurulum sırasında minimum ağır ekipman gerektirir.',
            },
            {
              question: 'NanoTech Atık Su Borularının ömrü ne kadar?',
              answer:
                'NanoTech Atık Su Boruları, yüksek kaliteli malzemeler ve üretim teknikleri sayesinde uzun ömürlüdür ve projelerinizde güvenle kullanılabilir.',
            },
            {
              question: 'NanoTech Atık Su Borularının fiyat listesine nasıl ulaşabilirim?',
              answer:
                'NanoTech Atık Su Borularının 2024 Fiyat Listesi için 0212 886 57 41 numaralı hattımızı arayarak bilgi alabilirsiniz.',
            },
            {
              question: 'NanoTech Atık Su Borularının teknik özellikleri nelerdir?',
              answer:
                'NanoTech Atık Su Boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için Fiyat Listesini bakabilirsiniz.',
            },
            {
              question: 'NanoTech Atık Su Borularını nasıl temin edebilirim?',
              answer:
                "NanoTech Atık Su Borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
            },
          ],
          fittings: [],
        },
        background: '',
      },

      {
        title: 'Triplex Yanmaz Sessiz Boru Sistemleri',
        description:
          'Triplex Atık <b>Yanmaz Sessiz Boru Sistemleri </b> bina içi ve dışı kullanılmış suyun tahliyesi için döşenen, yüksek dayanıklılığa sahip ve uzun ömürlü bir boru sistemidir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical:
            '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/vertical.jpg',
          horizontal:
            '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/tr/horizontal.png',
          PLP: '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/tr/PLP.png',
          bgImage: '',
        },
        image:
          '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/TRİPLEX ATIK SU BORUSU.png',
        link: '/tr/urunler/bina-ici-boru-sistemleri/triplex-pipe',
        highlights: [
          { title: 'Kırılmaz Yapı', icon: '/icons/durable.png' },
          { title: 'Yüksek Sızdırmazlık', icon: '/icons/seal.png' },
          { title: 'Kolay Montaj', icon: '/icons/easy-installation.png' },
        ],
        productDetails: {
          title: 'Triplex Atık Su Boruları',
          description:
            'Triplex Atık Su Boruları, bina içi ve dışı kullanılmış suyun tahliyesi için döşenen, poliolefin grubu hammaddeden imal edilen borulardır. Özel contası ve tespit çemberi ile sızdırmazlık sağlar, kırılmalara karşı dayanıklıdır ve hafif yapısı ile montaj kolaylığı sunar.',
          features: [
            {
              title: 'Yüksek Dayanıklılık',
              icon: '/icons/durability.png',
              alt: 'Durability',
              description:
                'Poliolefin hammaddesi sayesinde alternatif ürünlerdeki gibi kırılma görülmez ve yüksek darbe mukavemeti sağlar.',
            },
            {
              title: 'Yüksek Sızdırmazlık',
              icon: '/icons/seal.png',
              alt: 'Seal',
              description: 'Çift dudaklı conta ve tespit çemberi sayesinde sızdırmazlık sağlar.',
            },
            {
              title: 'Kolay Montaj',
              icon: '/icons/easy-installation.png',
              alt: 'Easy Installation',
              description:
                'Hafif yapısı ve montaj esnasında contanın çıkmasını önleyen tespit çemberi ile kolayca montaj edilir.',
            },
            {
              title: 'Kimyasal Dayanıklılık',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description: 'Kimyasallara karşı yüksek dayanım gösterir.',
            },
            {
              title: 'Ses Yalıtımı',
              icon: '/icons/soundproof.png',
              alt: 'Soundproof',
              description:
                'Malzemesinin özellikleri sayesinde rijit borulara göre çok daha az ses üretir.',
            },
            {
              title: 'Uzun Ömür',
              icon: '/icons/long-lasting.png',
              alt: 'Long Lasting',
              description: '50 yıl garantili ömre sahiptir, korozyona uğramaz ve paslanmaz.',
            },
          ],
          images: [
            {
              image:
                '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/TRİPLEX ATIK SU BORUSU GRUP.png',
              alt: 'Triplex Atık Su Borusu',
              description: 'Triplex Atık Su Borusu',
            },
            {
              image:
                '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/TRİPLEX ATIK SU BORUSU.png',
              alt: 'Triplex Atık Su Borusu',
              description: 'Triplex Atık Su Borusu',
            },
            {
              image:
                '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/triplex-pipe-3.png',
              alt: 'Triplex Atık Su Borusu',
              description: 'Triplex Atık Su Borusu',
            },
          ],

          headers: [
            {
              title: '<b>Triplex Atık Su Borusu</b> ve Ek Parçaları',
              description:
                'Dizayn Grup Triplex Atık Su Boruları, performansı ve yüksek kalitesi ile 50 mm - 200 mm arası çaplarda ve çeşitli basınç sınıflarında üretilmektedir. Triplex Atık Su Boruları, bina içi ve dışı atık su tahliyesi için ideal çözümler sunar. Uzun ömürlü ve dayanıklı yapısıyla projelerinizin vazgeçilmezi olacak. Triplex Atık Su Boruları <b>Fiyat Listesi</b> için <b>0212 886 57 41</b> numaralı hattımızı arayarak bilgi sahibi olabilirsiniz.',
            },
            {
              title: 'Triplex Atık Su Borusu <b>Avantajları</b>',
              description:
                'Dizayn Grup Triplex Atık Su Boruları, hafif, esnek ve sağlam yapısıyla montaj kolaylığı sağlar. Yüksek sıcaklık ve basınca dayanıklıdır. Paslanmaz ve kimyasallara karşı yüksek direnç gösterir. Tuzlu su, sıhhi kanalizasyon atık suyu, korozif asitler, bazlar ve tuzlar gibi maddelere karşı üstün koruma sunar. Bu <b>özellikleri</b> ile Triplex Atık Su Boruları, uzun ömürlü ve güvenilir performans sağlar.',
            },
            {
              title: 'Triplex Atık Su Borusu <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn Grup Triplex Atık Su Boruları, üstün performansı ve kalitesi ile prestijli projelerde tercih edilen bir üründür. Bina içi ve dışı atık su tahliyesi, yağmur suyu drenaj sistemleri, endüstriyel uygulamalar ve yeraltı su drenaj sistemlerinde güvenle kullanılabilir. Triplex Atık Su Boruları, projelerinizde güvenilir ve uzun ömürlü çözümler sunar. Triplex Atık Su Boruları <b>Fiyat Listesi</b> için bizimle iletişime geçiniz.',
            },
            {
              title: 'Triplex Atık Su Borusu <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn Grup Triplex Atık Su Borularının ağırlık hesaplaması, içi boş silindir hacmi ve borunun yoğunluğu çarpılarak yapılır. Triplex Atık Su Boruları üretim aşamasında ısıl işlem gördüğü için genleşme özelliği gösterir. Bu nedenle, Triplex Atık Su Borularının ölçü tablosu hazırlanırken tolerans değerleri dikkate alınmalıdır.\n\n<b>Ağırlık Tablosu</b> Örneği\n50 mm: 0.60 kg/m\n75 mm: 0.90 kg/m\n100 mm: 1.20 kg/m\n125 mm: 1.50 kg/m\n150 mm: 1.80 kg/m\n200 mm: 2.20 kg/m',
            },
            {
              title: 'Triplex Atık Su Borusu Teknik <b>Özellikleri</b>',
              description:
                'Dizayn Grup olarak kalite laboratuvarlarımızda sürekli gelişmeleri izleyip araştırmalar yapmaktayız. Triplex Atık Su Borularımız, 50 mm - 200 mm çap aralığında ve yüksek teknoloji ile üretilmektedir. Poliolefinin <b>özellikleri</b> sayesinde, basınçlı su sistemlerinde kullanıma en uygun alternatiflerden biridir. Yeraltı ve yerüstü basınçlı su şebeke hatları, deniz deşarj projeleri ve endüstriyel uygulamalar gibi birçok alanda kullanılmaktadır.\n\nTriplex Atık Su Boruları, sert beton borulara göre daha kolay işlenir, monte edilir ve maliyet tasarrufu sağlar. Yapısal olarak darbelere ve soğuk hava koşullarına dayanacak şekilde tasarlanmıştır. Deniz uygulamalarında uzun boylarda borular kıyıda monte edilip daha sonra yerine oturtulabilir.',
            },
            {
              title: 'Triplex Atık Su Borusu <b>Ek Parçaları</b>',
              description:
                'Dizayn Grup Triplex Atık Su Borusu <b>ek parçaları</b> üstün kalitede üretilip tek tek kontrol edilerek sevk edilmektedir. Uygulama kolaylığı ve ergonomik tasarıma sahip ek parçalarımız, yüksek kalite ve uygun fiyat ekseninde siz değerli müşterilerimizin hizmetindedir. Triplex Atık Su Borusu <b>ek parçaları</b>, basınçlı su sistemleri ve diğer endüstriyel uygulamalarda güvenle kullanılabilir.\n\n- Triplex Atık Su Borusu <b>ek parçaları</b>\n- Triplex Atık Su Borusu Eşit Te\n- Triplex Atık Su Borusu Redüksiyon\n- Triplex Atık Su Borusu Semer\n- Triplex Atık Su Borusu Dirsekler\n- Triplex Atık Su Borusu İnegal Te\n- Triplex Atık Su Borusu Manşon\n- Triplex Atık Su Borusu Körtapa\n- Triplex Atık Su Borusu Flanş Adaptörü\nBu <b>ek parçaları</b>, Triplex Atık Su Borusu sistemlerinizin güvenli ve dayanıklı bir şekilde birleştirilmesini sağlar.',
            },
            {
              title: 'Triplex Atık Su Borusu <b>Birleştirme Yöntemleri</b>',
              description:
                'Dizayn Grup Triplex Atık Su Boruları ve ek parçaları birbirlerine eritilerek veya mekanik ek parçalar ile bağlanırlar. Poliolefin dışında diğer malzemelerden yapılan borulara dıştan sıkmalı ek parçalar, flanşlar veya amaca uygun yapılmış diğer geçiş adaptörleri ile bağlanabilirler. Bağlantı ek parçaları kullanılacak yerlere göre kolaylık sağlamaktadır.\n\n<b>Birleştirme Yöntemleri</b>\n- Elektrofüzyon (EF) Kaynağı: Elektrik enerjisi ile boru ve ek parça uçları eritilerek birleştirilir.\n- Alın Kaynağı: Boru uçlarının yüksek sıcaklıkta eritilerek birleştirilmesi.\n- Kaplin ile Birleştirme: Mekanik kaplin kullanılarak boru uçlarının birleştirilmesi.',
            },
            {
              title: 'Triplex Atık Su Borusu Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description:
                '<b>Elektrofüzyon Kaynak</b> yönteminde, kaynak işlemi füzyon ek parçanın iç kısmındaki ısıtma rezistansları ile gerçekleştirilir. Triplex Atık Su Boruları, elektrofüzyon ek parçalarının içine yerleştirilir ve kaynak makinesinin uçları ek parçanın üzerindeki soketlere bağlanarak elektrik akımı ile ısıtılır.\n\nBu yöntemle, Triplex Atık Su Boruları güvenli ve sağlam bir şekilde birleştirilmiş olur. <b>Elektrofüzyon Kaynak</b> metodu ile 50 mm çaptan 200 mm çapa kadar olan Triplex Atık Su Boruları kaynatılabilir.',
            },
            {
              title: 'Triplex Atık Su Borusu Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                '<b>Alın Kaynak</b>, Triplex Atık Su Borusu ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. <b>Alın Kaynak</b> makinesi kullanılarak, kaynatılacak olan boruların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, Triplex Atık Su Boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 200 mm çapa kadar olan Triplex Atık Su Boruları kaynatılabilir.',
            },
            {
              title: 'Triplex Atık Su Borusu <b>Fiyat Listesi</b>',
              description:
                'Dizayn Grup Triplex Atık Su Boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Triplex Atık Su Boruları, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Triplex Atık Su Borusu avantajlarından yararlanmak ve 2024 Triplex Atık Su Borusu Fiyat Listesine ulaşmak için bizimle iletişime geçiniz.\n\nTriplex Atık Su Borularımız hakkında detaylı bilgi almak için 0212 886 57 41 numaralı hattımızı arayabilirsiniz.',
            },
          ],

          faqs: [
            {
              question: 'Triplex Atık Su Boruları hangi malzemeden üretilir?',
              answer:
                "Triplex Atık Su Boruları, poliolefin grubu hammaddeden üretilmektedir. Bu malzeme, PVC'den daha üstün özelliklere sahiptir ve kırılma, sızdırma gibi sorunları önler.",
            },
            {
              question: 'Triplex Atık Su Borularının kullanım alanları nelerdir?',
              answer:
                'Triplex Atık Su Boruları, bina içi ve dışı atık su tahliyesi, yağmur suyu drenaj sistemleri, endüstriyel uygulamalar ve yeraltı su drenaj sistemlerinde kullanılabilir.',
            },
            {
              question: 'Triplex Atık Su Boruları hangi çap ve basınç sınıflarında mevcuttur?',
              answer:
                "Triplex Atık Su Boruları, 50 mm'den 200 mm'ye kadar çeşitli çaplarda ve farklı basınç sınıflarında üretilmektedir.",
            },
            {
              question: 'Triplex Atık Su Borularının birleştirme yöntemleri nelerdir?',
              answer:
                'Triplex Atık Su Boruları elektrofüzyon (EF) kaynağı, alın kaynağı ve kaplin ile birleştirme yöntemleri ile birleştirilebilir.',
            },
            {
              question: 'Triplex Atık Su Boruları kimyasallara karşı dayanıklı mı?',
              answer:
                'Evet, Triplex Atık Su Boruları tuzlu su, korozif asitler, bazlar ve diğer kimyasallara karşı yüksek direnç sağlar.',
            },
            {
              question: 'Triplex Atık Su Borularının avantajları nelerdir?',
              answer:
                'Triplex Atık Su Boruları hafif, esnek ve dayanıklıdır. Paslanmaya karşı yüksek direnç gösterir ve uzun ömürlüdür. Ayrıca, taşıma ve kurulum sırasında minimum ağır ekipman gerektirir.',
            },
            {
              question: 'Triplex Atık Su Borularının ömrü ne kadar?',
              answer:
                'Triplex Atık Su Boruları, yüksek kaliteli malzemeler ve üretim teknikleri sayesinde uzun ömürlüdür ve projelerinizde güvenle kullanılabilir.',
            },
            {
              question: 'Triplex Atık Su Borularının fiyat listesine nasıl ulaşabilirim?',
              answer:
                'Triplex Atık Su Borularının 2024 Fiyat Listesi için 0212 886 57 41 numaralı hattımızı arayarak bilgi alabilirsiniz.',
            },
            {
              question: 'Triplex Atık Su Borularının teknik özellikleri nelerdir?',
              answer:
                'Triplex Atık Su Boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için Fiyat Listesini bakabilirsiniz.',
            },
            {
              question: 'Triplex Atık Su Borularını nasıl temin edebilirim?',
              answer:
                "Triplex Atık Su Borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
            },
          ],
          fittings: [],
        },
        background: '',
      },

      {
        title: 'PPR Boru',
        description:
          'PPR Boru ve ek parçaları, düşük eriyik akış indisli, yüksek moleküler ağırlıklı ve yüksek esnekliğe sahip Polipropilen Random Kopolimer hammaddesinden üretilmektedir.',
        featuredProduct: false,
        logo: '',
        isNewTech: false,
        banner: {
          vertical: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/tr/horizontal.png',
          PLP: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek.png',
        link: '/tr/urunler/bina-ici-boru-sistemleri/ppr-boru',
        highlights: [
          { title: 'Yüksek Dayanım', icon: '/icons/high-durability.png' },
          { title: 'Kolay Kaynak', icon: '/icons/easy-welding.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
        ],
        productDetails: {
          title: 'PPR Boru',
          description:
            'PPR Boruları, düşük eriyik akış indisli, yüksek moleküler ağırlıklı ve yüksek esnekliğe sahip Polipropilen Random Kopolimer hammaddesinden üretilir. Sıcak ve soğuk su tesisatlarında kullanılabilir. Galvaniz borulara alternatif olarak geliştirilmiş olup, kaynak kabiliyeti yüksektir. Ø20-125 mm aralığında üretim yapılmaktadır.',
          features: [
            {
              title: 'Yüksek Dayanım',
              icon: '/icons/durability.png',
              alt: 'High Durability',
              description: '20 °C’de PN25 bara dayanım gösterir ve 95 °C’de kullanılabilir.',
            },
            {
              title: 'Kolay Kaynak',
              icon: '/icons/welding.png',
              alt: 'Easy Welding',
              description: 'Kolay kaynak edilebilir ve kısa sürede döşenebilir.',
            },
            {
              title: 'Uzun Ömür',
              icon: '/icons/long-lasting.png',
              alt: 'Long Lasting',
              description: '50 yıl ömür garantisi vardır.',
            },
            {
              title: 'Korozyona Dayanıklı',
              icon: '/icons/corrosion.png',
              alt: 'Corrosion Resistant',
              description: 'Korozyon olmaz ve mineraller ile reaksiyona girip çapı daralmaz.',
            },
            {
              title: 'Hafif ve Taşınabilir',
              icon: '/icons/lightweight.png',
              alt: 'Lightweight',
              description: "Metalin 8'de 1 ağırlığında olup, işçiyi yormadan taşınabilir.",
            },
            {
              title: 'Paslanmaz',
              icon: '/icons/rustproof.png',
              alt: 'Rustproof',
              description: 'Paslanmaz ve içme suyunu kirletmez.',
            },
          ],
          images: [
            {
              image:
                '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek.png',
              alt: 'PPR Boru',
              description: 'PPR Boru',
            },
            {
              image:
                '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek-2.png',
              alt: 'PPR Boru',
              description: 'PPR Boru',
            },
            {
              image:
                '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek-3.png',
              alt: 'PPR Boru',
              description: 'PPR Boru',
            },
          ],
          headers: [
            {
              title: '<b>PPR Boru</b> ve Ek Parçaları',
              description:
                'Dizayn Grup PPR Boruları, performansı ve yüksek kalitesi ile 20 mm - 125 mm arası çaplarda ve çeşitli basınç sınıflarında üretilmektedir. PPR Boruları, sıcak ve soğuk su tesisatlarında ideal çözümler sunar. Uzun ömürlü ve dayanıklı yapısıyla projelerinizin vazgeçilmezi olacak. PPR Boruları <b>Fiyat Listesi</b> için <b>0212 886 57 41</b> numaralı hattımızı arayarak bilgi sahibi olabilirsiniz.',
              image:
                '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek.png',
              alt: 'PPR Boru',
            },
            {
              title: 'PPR Boru <b>Avantajları</b>',
              description:
                'Dizayn Grup PPR Boruları, hafif, esnek ve sağlam yapısıyla montaj kolaylığı sağlar. Yüksek sıcaklık ve basınca dayanıklıdır. Paslanmaz ve kimyasallara karşı yüksek direnç gösterir. Tuzlu su, sıhhi kanalizasyon atık suyu, korozif asitler, bazlar ve tuzlar gibi maddelere karşı üstün koruma sunar. Bu <b>özellikleri</b> ile PPR Boruları, uzun ömürlü ve güvenilir performans sağlar.',
            },
            {
              title: 'PPR Boru <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn Grup PPR Boruları, üstün performansı ve kalitesi ile prestijli projelerde tercih edilen bir üründür. Sıcak ve soğuk su tesisatları, içme suyu sistemleri, kimyasal sanayi hatları ve endüstriyel uygulamalarda güvenle kullanılabilir. PPR Boruları, projelerinizde güvenilir ve uzun ömürlü çözümler sunar. PPR Boruları <b>Fiyat Listesi</b> için bizimle iletişime geçiniz.',
            },
            {
              title: 'PPR Boru <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn Grup PPR Borularının ağırlık hesaplaması, içi boş silindir hacmi ve borunun yoğunluğu çarpılarak yapılır. PPR Boruları üretim aşamasında ısıl işlem gördüğü için genleşme özelliği gösterir. Bu nedenle, PPR Borularının ölçü tablosu hazırlanırken tolerans değerleri dikkate alınmalıdır.\n\n<b>Ağırlık Tablosu</b> Örneği\n20 mm: 0.10 kg/m\n25 mm: 0.15 kg/m\n32 mm: 0.20 kg/m\n40 mm: 0.25 kg/m\n50 mm: 0.35 kg/m\n63 mm: 0.45 kg/m',
            },
            {
              title: 'PPR Boru Teknik <b>Özellikleri</b>',
              description:
                'Dizayn Grup olarak kalite laboratuvarlarımızda sürekli gelişmeleri izleyip araştırmalar yapmaktayız. PPR Borularımız, 20 mm - 125 mm çap aralığında ve yüksek teknoloji ile üretilmektedir. Polipropilenin <b>özellikleri</b> sayesinde, basınçlı su sistemlerinde kullanıma en uygun alternatiflerden biridir. Yeraltı ve yerüstü basınçlı su şebeke hatları, deniz deşarj projeleri ve endüstriyel uygulamalar gibi birçok alanda kullanılmaktadır.\n\nPPR Boruları, sert beton borulara göre daha kolay işlenir, monte edilir ve maliyet tasarrufu sağlar. Yapısal olarak darbelere ve soğuk hava koşullarına dayanacak şekilde tasarlanmıştır. Deniz uygulamalarında uzun boylarda borular kıyıda monte edilip daha sonra yerine oturtulabilir.',
            },
            {
              title: 'PPR Boru <b>Ek Parçaları</b>',
              description:
                'Dizayn Grup PPR Boru <b>ek parçaları</b> üstün kalitede üretilip tek tek kontrol edilerek sevk edilmektedir. Uygulama kolaylığı ve ergonomik tasarıma sahip ek parçalarımız, yüksek kalite ve uygun fiyat ekseninde siz değerli müşterilerimizin hizmetindedir. PPR Boru <b>ek parçaları</b>, basınçlı su sistemleri ve diğer endüstriyel uygulamalarda güvenle kullanılabilir.\n\n- PPR Boru <b>ek parçaları</b>\n- PPR Boru Eşit Te\n- PPR Boru Redüksiyon\n- PPR Boru Semer\n- PPR Boru Dirsekler\n- PPR Boru İnegal Te\n- PPR Boru Manşon\n- PPR Boru Körtapa\n- PPR Boru Flanş Adaptörü\nBu <b>ek parçaları</b>, PPR Boru sistemlerinizin güvenli ve dayanıklı bir şekilde birleştirilmesini sağlar.',
            },
            {
              title: 'PPR Boru <b>Birleştirme Yöntemleri</b>',
              description:
                'Dizayn Grup PPR Boruları ve ek parçaları birbirlerine eritilerek veya mekanik ek parçalar ile bağlanırlar. Polipropilen dışında diğer malzemelerden yapılan borulara dıştan sıkmalı ek parçalar, flanşlar veya amaca uygun yapılmış diğer geçiş adaptörleri ile bağlanabilirler. Bağlantı ek parçaları kullanılacak yerlere göre kolaylık sağlamaktadır.\n\n<b>Birleştirme Yöntemleri</b>\n- Elektrofüzyon (EF) Kaynağı: Elektrik enerjisi ile boru ve ek parça uçları eritilerek birleştirilir.\n- Alın Kaynağı: Boru uçlarının yüksek sıcaklıkta eritilerek birleştirilmesi.\n- Kaplin ile Birleştirme: Mekanik kaplin kullanılarak boru uçlarının birleştirilmesi.',
            },
            {
              title: 'PPR Boru Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description:
                '<b>Elektrofüzyon Kaynak</b> yönteminde, kaynak işlemi füzyon ek parçanın iç kısmındaki ısıtma rezistansları ile gerçekleştirilir. PPR Boruları, elektrofüzyon ek parçalarının içine yerleştirilir ve kaynak makinesinin uçları ek parçanın üzerindeki soketlere bağlanarak elektrik akımı ile ısıtılır.\n\nBu yöntemle, PPR Boruları güvenli ve sağlam bir şekilde birleştirilmiş olur. <b>Elektrofüzyon Kaynak</b> metodu ile 20 mm çaptan 125 mm çapa kadar olan PPR Boruları kaynatılabilir.',
            },
            {
              title: 'PPR Boru Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                '<b>Alın Kaynak</b>, PPR Boru ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. <b>Alın Kaynak</b> makinesi kullanılarak, kaynatılacak olan boruların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, PPR Boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 125 mm çapa kadar olan PPR Boruları kaynatılabilir.',
            },
            {
              title: 'PPR Boru <b>Fiyat Listesi</b>',
              description:
                'Dizayn Grup PPR Boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. PPR Boruları, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. PPR Boru avantajlarından yararlanmak ve 2024 PPR Boru Fiyat Listesine ulaşmak için bizimle iletişime geçiniz.\n\nPPR Borularımız hakkında detaylı bilgi almak için 0212 886 57 41 numaralı hattımızı arayabilirsiniz.',
            },
          ],
          faqs: [
            {
              question: 'PPR Boruları hangi malzemeden üretilir?',
              answer:
                'PPR Boruları, düşük eriyik akış indisli, yüksek moleküler ağırlıklı ve yüksek esnekliğe sahip Polipropilen Random Kopolimer hammaddesinden üretilmektedir.',
            },
            {
              question: 'PPR Borularının kullanım alanları nelerdir?',
              answer:
                'PPR Boruları, sıcak ve soğuk su tesisatları, içme suyu sistemleri, kimyasal sanayi hatları ve endüstriyel uygulamalarda kullanılabilir.',
            },
            {
              question: 'PPR Boruları hangi çap ve basınç sınıflarında mevcuttur?',
              answer:
                "PPR Boruları, 20 mm'den 125 mm'ye kadar çeşitli çaplarda ve farklı basınç sınıflarında üretilmektedir.",
            },
            {
              question: 'PPR Borularının birleştirme yöntemleri nelerdir?',
              answer:
                'PPR Boruları elektrofüzyon (EF) kaynağı, alın kaynağı ve kaplin ile birleştirme yöntemleri ile birleştirilebilir.',
            },
            {
              question: 'PPR Boruları kimyasallara karşı dayanıklı mı?',
              answer:
                'Evet, PPR Boruları tuzlu su, korozif asitler, bazlar ve diğer kimyasallara karşı yüksek direnç sağlar.',
            },
            {
              question: 'PPR Borularının avantajları nelerdir?',
              answer:
                'PPR Boruları hafif, esnek ve dayanıklıdır. Paslanmaya karşı yüksek direnç gösterir ve uzun ömürlüdür. Ayrıca, taşıma ve kurulum sırasında minimum ağır ekipman gerektirir.',
            },
            {
              question: 'PPR Borularının ömrü ne kadar?',
              answer:
                'PPR Boruları, yüksek kaliteli malzemeler ve üretim teknikleri sayesinde uzun ömürlüdür ve projelerinizde güvenle kullanılabilir.',
            },
            {
              question: 'PPR Borularının fiyat listesine nasıl ulaşabilirim?',
              answer:
                'PPR Borularının 2024 Fiyat Listesi için 0212 886 57 41 numaralı hattımızı arayarak bilgi alabilirsiniz.',
            },
            {
              question: 'PPR Borularının teknik özellikleri nelerdir?',
              answer:
                'PPR Boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için Fiyat Listesini bakabilirsiniz.',
            },
            {
              question: 'PPR Borularını nasıl temin edebilirim?',
              answer:
                "PPR Borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
            },
          ],
          fittings: [],
        },
        background: '',
      },
    ],

    infrastructureProducts: [
      {
        title: 'SoftPower Boru',
        description:
          'SoftPower Boru, yüksek oksidasyon dayanımı, esneklik ve kolay montaj imkanı sunan, PE63 hammaddesinden üretilmiş dayanıklı ve uzun ömürlü bir boru sistemidir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/soft-power-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/soft-power-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/soft-power-ek/banner/tr/horizontal.png',
          PLP: '/productImages/üst yapı borular/soft-power-ek/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
        link: '/tr/urunler/alt yapı boruları/softpower-boru',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],
        productDetails: {
          title: 'SoftPower Boru',
          description:
            'SoftPower Pipe, yüksek oksidasyon dayanımı, esnekliği ve kolay montaj imkanı ile öne çıkan bir boru sistemidir. PE63 hammaddeden üretilen SoftPower Pipe, yüksek bükülme direnci, UV ışınlarına karşı dayanıklılık ve uzun ömürlü kullanım performansı sunar. İçme suyu ve sulama sistemlerinde güvenle kullanılır.',
          features: [
            {
              title: 'İleri Üretim Teknolojisi',
              icon: '/icons/high-tech (1).png',
              alt: 'High Technology',
              description:
                'Dizayn Grup, Soft Power borularını üretim sürecinin başından sonuna kadar ileri teknoloji altyapısı ile üretmektedir.',
            },
            {
              title: 'Dayanıklı ve Güvenilir',
              icon: '/icons/reliability.png',
              alt: 'Reliability',
              description:
                'Soft Power boruları, üstün dayanıklılığı ve uzun ömürlü yapısıyla projelerinizde güvenle kullanabileceğiniz bir üründür.',
            },
            {
              title: 'Üstün Özellikli Hammadde ',
              icon: '/icons/purity.png',
              alt: 'Purity',
              description:
                'Soft Power boruları, %100 saf ve orijinal hammadde kullanılarak üretilir, bu da en yüksek kaliteyi garanti eder.',
            },
            {
              title: 'Akredite Test Laboratuvarı',
              icon: '/icons/test.png',
              alt: 'test',
              description:
                'Dizayn Grup’un akredite test laboratuvarı, deneyimli mühendis kadrosu ile tarafsız ve güvenilir test hizmeti sunar.',
            },
            {
              title: 'Projeye Özel Çözümler',
              icon: '/icons/solution.png',
              alt: 'Solution',
              description:
                'Soft Power borular, projelerinize özel çözümler sunarak üretim sürecinin her aşamasında yanınızda olur.',
            },
            {
              title: 'Yüksek Kalite ve Ekonomik Fiyat',
              icon: '/icons/reward.png',
              alt: 'reward',
              description:
                'Soft Power boruları, yüksek kalite ve uygun fiyat avantajı ile projelerinizin vazgeçilmezi olacaktır. Detaylı bilgi için bizimle iletişime geçin.',
            },
          ],
          images: [
            {
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
              alt: 'SoftPower Boru',
              description: 'SoftPower Boru',
            },
            {
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 3.png',
              alt: 'SoftPower Boru',
              description: 'SoftPower Boru',
            },
            {
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 4.png',
              alt: 'SoftPower Boru',
              description: 'SoftPower Boru',
            },
          ],
          headers: [
            {
              title: '<b>Soft Power Boru</b> ve Ek Parçaları',
              description:
                'Dizayn Grup Soft Power boruları, performansı ve yüksek kalitesi ile 20 mm - 1600 mm arası çaplarda ve çeşitli basınç sınıflarında üretilmektedir. Soft Power boruları, tarımsal sulama, su şebekeleri, atık su hatları ve endüstriyel uygulamalar için ideal çözümler sunar. Uzun ömürlü ve dayanıklı yapısıyla projelerinizin vazgeçilmezi olacak. Soft Power Boru <b>Fiyat Listesi</b> için <b>0212 886 57 41</b> numaralı hattımızı arayarak bilgi sahibi olabilirsiniz.',
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
              alt: 'SoftPower Boru',
            },
            {
              title: 'Soft Power Boru <b>Avantajları</b>',
              description:
                'Dizayn Grup Soft Power boruları, pürüzsüz iç ve dış yüzeyi ile hafif, esnek ve sağlam bir yapıya sahiptir. Taşıma ve kurulum sırasında minimum ağır ekipman gerektirir ve tüm saha koşullarında, zorlu çevre koşullarında bile kolayca uygulanabilir.\nSoft Power boruları, UV ışınlarına karşı yüksek direnç gösterir ve kimyasallara karşı mükemmel dayanıklılık sağlar. Tuzlu su, sıhhi kanalizasyon atık suyu, korozif asitler, bazlar ve tuzlar gibi maddelere karşı üstün koruma sunar. Bu <b>Özellikleri</b> ile Soft Power boruları, uzun ömürlü ve güvenilir performans sağlar, projelerinizde sizi asla yarı yolda bırakmaz.',
            },
            {
              title: 'Soft Power Boru <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn Grup Soft Power boruları, üstün performansı ve kalitesi ile prestijli projelerde tercih edilen bir üründür. Su şebekeleri, tarımsal sulama sistemleri, atık su sistemleri, endüstriyel uygulamalarda güvenle kullanılabilir. Soft Power boruları, projelerinizde güvenilir ve uzun ömürlü çözümler sunar. Soft Power Boru <b>Fiyat Listesi</b> için bizimle iletişime geçiniz.',
            },
            {
              title: 'Soft Power Boru <b>Ağırlık Tablosu</b>',
              description:
                'SoftPower Boru, üstün dayanıklılığı ve esnekliği ile bilinir. Her proje için özel olarak üretilen boruların ağırlıkları, çap ve et kalınlıklarına göre değişiklik göstermektedir. Detaylı ağırlık bilgileri için lütfen Dizayn Grup ile iletişime geçiniz.',
            },
            {
              title: 'Soft Power Boru Teknik <b>Özellikleri</b>',
              description:
                'SoftPower Boru, yüksek oksidasyon dayanımı, esneklik ve kolay montaj imkanı sunan yenilikçi bir boru sistemidir. PE63 hammaddesinden üretilen bu borular, yüksek basınç dayanımı ile uzun ömürlü kullanım sağlar. Güneşin UV ışınlarına karşı dayanıklı olan SoftPower Boru, içme suyu ve sulama sistemleri gibi çeşitli uygulamalarda mükemmel performans gösterir. Çevresel çatlak direnci yüksektir ve bükülme anında çatlama yapmaz, böylece ilave ek parçalar kullanılmasına gerek kalmaz. 20°C’de 50 yıl boyunca güvenle kullanılabilir.',
            },
            {
              title: 'Soft Power <b>Ek Parçaları</b>',
              description: `SoftPower Boru, çeşitli ek parçalarla birlikte sunulur, bu parçalar sayesinde montaj ve bağlantı işlemleri kolayca gerçekleştirilir. Yüksek kalitede üretilen bu ek parçalar, borunun dayanıklılığını ve performansını artırır. Aşağıda SoftPower Boru için mevcut ek parçalar listelenmiştir:

<b>Eşit Te:</b> Boruların üç yöne ayrılmasını sağlar, aynı çaplarda bağlantı yapar.
<b>Redüksiyon:</b> Farklı çaplarda boruların bağlanmasını sağlar, çap küçültme işlevi görür.
<b>Semer:</b> Boruların üzerine oturarak sabitlenmesini ve yön değiştirmesini sağlar.
<b>Dirsekler:</b> Boruların belirli açılarla yön değiştirmesini sağlar, 90° ve 45° açılarında bulunur.
<b>İnegal Te:</b> Farklı çaplarda boruların üç yöne ayrılmasını sağlar.
<b>Manşon:</b> İki borunun uç uca bağlanmasını sağlar, sızdırmazlık sağlar.
<b>Körtapa:</b> Boru uçlarını kapatarak sistemin sonlandırılmasını sağlar.
<b>Flanş Adaptörü:</b> Boruların flanşlarla bağlantısını sağlar, güçlü ve sızdırmaz bir bağlantı oluşturur.
Bu ek parçalar, SoftPower Boru sisteminin esnekliğini ve dayanıklılığını artırırken, montaj ve bakım işlemlerini kolaylaştırır.`,
            },
            {
              title: 'Soft Power Boru <b>Birleştirme Yöntemleri</b>',
              description: `SoftPower Boru, çeşitli birleştirme yöntemleri ile kolay ve güvenli montaj imkanı sunar. Aşağıda, SoftPower Boru sisteminde kullanılan başlıca birleştirme yöntemleri belirtilmiştir:\n

<b>Kaplin Ek Parçaları ile Kolay Montaj:</b> SoftPower Boru, kaplin tarzı mekanik ek parçaları ile montaj edilmeye uygundur. Bu yöntem, boruların hızlı ve güvenli bir şekilde birleştirilmesini sağlar ve özellikle esnek ve kolay şekil alabilen borular için idealdir.

\n<b>Bükülme Direnci:</b> SoftPower Boru, büküldüğünde çatlama göstermez ve basınç dayanımı özelliklerini korur. Bu özellik, ilave ek parça kullanımını gereksiz kılar ve montaj sürecini kolaylaştırır.

SoftPower Boru, montaj ve birleştirme işlemlerinde kolaylık sağlar, bu da montaj sürecini hızlandırır ve işçilik maliyetlerini düşürür. Yüksek bükülme direnci ve kaplin ek parçaları ile kullanımı, borunun sağlam ve uzun ömürlü olmasını garanti eder.`,
            },
            {
              title: 'Soft Power Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                '<b>Alın Kaynak</b>, Soft Power boru ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. <b>Alın Kaynak</b> makinesi kullanılarak, kaynatılacak olan boruların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, Soft Power boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 1600 mm çapa kadar olan Soft Power borular kaynatılabilir.',
            },
            {
              title: 'Soft Power Boru <b>Fiyat Listesi</b>',
              description:
                'SoftPower Boru, yüksek kalite ve dayanıklılığı ile öne çıkan bir boru sistemidir. Fiyat listesi, boru çapı, et kalınlığı ve uzunluğu gibi özelliklere bağlı olarak değişiklik göstermektedir. SoftPower Borunun rekabetçi fiyatları, uzun ömürlü performansı ve yüksek dayanıklılığı ile maliyet-fayda açısından kullanıcılarına büyük avantaj sağlar. Detaylı fiyat bilgisi ve projeye özel fiyat teklifleri için Dizayn Grup ile iletişime geçebilirsiniz. SoftPower Boru, yüksek performansı ve uygun fiyatları ile projelerinizde güvenle kullanabileceğiniz bir üründür.',
            },
          ],

          faqs: [
            {
              question: 'Soft Power borular hangi malzemeden üretilir?',
              answer:
                'Soft Power Borular, Dizayn Teknik Boru ve Elemanları San. Tic. AŞ AR-GE ekibi tarafından geliştirilen PE63 hammaddeden üretilmektedir. Bu malzeme, yüksek basınç dayanımı ve uzun ömürlü kullanım sunar. Piyasadaki yumuşak PE borularda yaygın olarak kullanılan LDPE hammaddeye göre çok daha dayanıklıdır.',
            },
            {
              question: 'Soft Power boruların kullanım alanları nelerdir?',
              answer:
                'Soft Power Borular, içme suyu tesisatlarında, içme suyu hatlarında, tarımsal sulama sistemlerinde, sera sulama sistemlerinde, park ve bahçe peyzaj sulama sistemlerinde ve diğer uygun içme suyu uygulamalarında kullanılır.',
            },
            {
              question: 'Soft Power borular hangi çap ve basınç sınıflarında mevcuttur?',
              answer:
                'Soft Power Borular, çeşitli çap ve basınç sınıflarında mevcuttur. Ürünler, projeye özel olarak farklı çap ve basınç sınıflarında üretilebilir.',
            },
            {
              question: 'Soft Power boruların Birleştirme Yöntemleri nelerdir?',
              answer:
                'Soft Power Borular, kaplin tarzı mekanik birleştirme parçaları ile montaj edilir. Bu yöntem, boruların hızlı ve güvenli bir şekilde birleştirilmesini sağlar.',
            },
            {
              question: 'Soft Power boruları kimyasallara karşı dayanıklı mı?',
              answer:
                'Evet, Soft Power Borular kimyasallara karşı yüksek dayanıklılığa sahiptir. Çevresel çatlak direnci ve oksidasyon dayanımı ile uzun ömürlü ve güvenli kullanım sunar.',
            },
            {
              question: 'Soft Power boruların Avantajları nelerdir?',
              answer:
                'Soft Power Borular, yüksek oksidasyon dayanımı, esneklik, kolay montaj, yüksek bükülme direnci, uzun ömürlü kullanım ve güneşin UV ışınlarına karşı dayanıklılık gibi avantajlar sunar.',
            },
            {
              question: 'Soft Power boruların ömrü ne kadar?',
              answer:
                'Soft Power Borular, 20°C’de 50 yıl boyunca tasarlanan basınç değerinde güvenle kullanılabilir. 50 yıllık ömür dayanımı, 80°C’de 1000 saatlik basınç testi ile ölçülmüştür.',
            },
            {
              question: 'Soft Power boruların fiyat listesine nasıl ulaşabilirim?',
              answer:
                'Soft Power Boruların detaylı fiyat listesi ve projeye özel fiyat teklifleri için Dizayn Grup ile iletişime geçebilirsiniz.',
            },
            {
              question: 'Soft Power boruların teknik Özellikleri nelerdir?',
              answer:
                'Soft Power Borular, yüksek oksidasyon dayanımı, esneklik, kolay montaj, yüksek bükülme direnci, UV ışınlarına karşı dayanıklılık ve çevresel çatlak direnci gibi teknik özelliklere sahiptir.',
            },
            {
              question: 'Soft Power boruları nasıl temin edebilirim?',
              answer:
                'Soft Power Boruları, Dizayn Grup yetkili satıcılarından veya doğrudan Dizayn Grup ile iletişime geçerek temin edebilirsiniz.',
            },
          ],
          fittings: [],
        },
        background: '',
      },

      {
        title: 'RTP Boru',
        description:
          'RTP (Reinforced Thermoplastic Pipe) Borular yüksek basınç dayanımı ile her türlü su, gaz, petrol vb. taşınmasında kullanılmaktadır. Sahip olduğu güçlü kompozit yapısı ile çelik borular gibi yüksek basınçlara mukavemet gösterirken termoplastik hammaddesi ile de plastik boruların tüm avantajlarını kullanıcısına sunmaktadır.',
        featuredProduct: false,
        logo: '',
        isNewTech: true,
        banner: {
          vertical: '/productImages/alt yapı boruları/RTP BORU/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/RTP BORU/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/RTP BORU/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
        link: '/tr/urunler/altyapi-boru-sistemleri/rtp-boru',
        highlights: [
          { title: 'Yüksek Basınç Dayanımı', icon: '/icons/high-pressure.png' },
          { title: 'Esneklik', icon: '/icons/flexible.png' },
          { title: 'Uzun Ömür', icon: '/icons/durable.png' },
        ],
        productDetails: {
          title: 'RTP Boru',
          description:
            'RTP Borular 3 katmanlı hibrid yapıya sahiptir. Borunun iç ve dış katmanı termoplastik iken, orta katman yüksek mukavemetli kompozit malzemeden oluşmaktadır. Termoplastik katmanlar proje gereksinimlerine göre HDPE, PP, PE-RT vb. gibi farklı malzemelerde tasarlanabilmektedir. Aynı şekilde orta katmanda yer alan sürekli elyaf takviye katmanı da cam elyaf, aramid, karbon elyaf vb. gibi proje gereksinimlerine göre farklılık gösterebilmektedir.',
          features: [
            {
              title: 'Yüksek Dayanıklılık',
              icon: '/icons/durability.png',
              alt: 'Durability',
              description:
                'RTP Borular, çelik borular gibi yüksek basınçlara mukavemet gösterirken termoplastik hammaddesi ile de plastik boruların tüm avantajlarını sunar.',
            },
            {
              title: 'Kolay Montaj',
              icon: '/icons/easy-installation.png',
              alt: 'Easy Installation',
              description:
                'Esnek yapısı sayesinde kolayca montajlanabilir ve şekil alır, bu da işçilik maliyetlerini düşürür.',
            },
            {
              title: 'Kimyasal Dayanıklılık',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'RTP Borular, kimyasal maddelere karşı yüksek direnç gösterir ve korozyona karşı koruma sağlar.',
            },
            {
              title: 'Geniş Uygulama Alanı',
              icon: '/icons/application.png',
              alt: 'Application',
              description:
                'RTP Borular, yüksek basınçlı su hatları, doğalgaz iletim ve dağıtım hatları, petrol iletim hatları, jeotermal su taşıma hatları ve offshore uygulamalar gibi birçok alanda kullanılabilir.',
            },
            {
              title: 'Ekonomik ve Güvenilir',
              icon: '/icons/economical.png',
              alt: 'Economical',
              description:
                'RTP Borular, ekonomik fiyatı ve uzun ömürlü yapısıyla projelerinizde maliyet tasarrufu sağlar.',
            },
            {
              title: 'Çevre Dostu',
              icon: '/icons/eco-friendly.png',
              alt: 'Eco-Friendly',
              description: 'RTP Borular, geri dönüşüme uygunluğu ile çevre dostu bir üründür.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
              alt: 'RTP Boru',
              description: 'RTP Boru',
            },
            {
              image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
              alt: 'RTP Boru',
              description: 'RTP Boru',
            },
            {
              image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
              alt: 'RTP Boru',
              description: 'RTP Boru',
            },
          ],
          headers: [
            {
              title: '<b>RTP Boru</b> ve Ek Parçaları',
              description:
                'RTP Boruları, yüksek basınç dayanımı ve üstün kompozit yapısı ile 90 mm - 1200 mm arası çaplarda ve çeşitli basınç sınıflarında üretilmektedir. RTP Boruları, su, gaz, petrol gibi farklı akışkanların taşınmasında güvenilir çözümler sunar. RTP Boru <b>Fiyat Listesi</b> için internet sitemizde yer alan Fiyat Listesini inceleyebilirsiniz.',
              alt: 'RTP Boru',
            },
            {
              title: 'RTP Boru <b>Avantajları</b>',
              description:
                'RTP Boruları, çelik borular gibi yüksek basınçlara mukavemet gösterirken termoplastik hammaddesi ile de plastik boruların tüm avantajlarını sunar. Bu özellikleri ile RTP Boruları, uzun ömürlü ve güvenilir performans sağlar.',
            },
            {
              title: 'RTP Boru <b>Nerelerde Kullanılır?</b>',
              description:
                'RTP Boruları, yüksek performansı ve kalitesi ile su, gaz, petrol taşımacılığı, jeotermal su taşıma hatları ve offshore uygulamalar gibi birçok alanda güvenle kullanılabilir. RTP Boruları, projelerinizde güvenilir ve uzun ömürlü çözümler sunar. RTP Boru <b>Fiyat Listesi</b> için internet sitemizde yer alan Fiyat Listesini inceleyebilirsiniz.',
            },
            {
              title: 'RTP Boru <b>Ağırlık Tablosu</b>',
              description:
                'RTP Boruları, farklı çap ve basınç sınıflarında çeşitli ağırlıklarla üretilmektedir. Ağırlık tablosu, boruların içi boş silindir hacmi ve borunun yoğunluğu çarpılarak hesaplanmaktadır. Boruların üretim aşamasında ısıl işlem gördüğü için genleşme özelliği dikkate alınarak tablo hazırlanmıştır. Bu tablo, RTP Borularının farklı çap ve basınç sınıflarında karşılaşılan ağırlık değerlerini göstermektedir. Detaylı bilgi ve diğer çaplar için firmamızla iletişime geçebilirsiniz.',
            },
            {
              title: 'RTP Boru Teknik <b>Özellikleri</b>',
              description:
                'RTP Boruları, çelik borular gibi yüksek basınçlara mukavemet gösterirken termoplastik hammaddesi ile de plastik boruların tüm avantajlarını sunar. Üç katmanlı hibrid yapısı sayesinde, yüksek sıcaklık dayanımı, kimyasal direnç ve çevresel dayanıklılık sağlar. Teknik özellikler şunlardır:\n<ul><li><b>Çalışma Sıcaklığı</b>: Sürekli 60°C, anlık 80°C sıcaklık dayanımı.</li><li><b>Çalışma Basıncı</b>: 200 bar basınç dayanımı.</li><li><b>Malzeme</b>: Özel formüllü HDPE, PP, PE-RT gibi termoplastik malzemeler.</li><li><b>Montaj Kolaylığı</b>: Esnek yapısı sayesinde kolay montaj imkanı.</li><li><b>Dayanıklılık</b>: Yüksek sıcaklık ve basınç dayanımı, çevresel etkilere karşı üstün direnç.</li><li><b>Düşük Sürtünme Direnci</b>: Verimli tesisat performansı için düşük sürtünme direnci.</li></ul>',
            },
            {
              title: 'RTP Boru <b>Ek Parçaları</b>',
              description:
                'RTP Boruları için çeşitli ek parçalar mevcuttur. Bu ek parçalar, boruların montajını kolaylaştırır ve sistemlerin verimliliğini artırır. Ek parçalar, projelerinizin ihtiyaçlarına göre seçilebilir ve borularla uyumlu olarak kullanılabilir.',
            },
            {
              title: 'RTP Boru <b>Birleştirme Yöntemleri</b>',
              description:
                'RTP Boruların birleştirilmesinde farklı tipte birleştirme yöntemleri tercih edilmektedir. Bu yöntemler şunlardır:\n<ul><li><b>EF (Elektrofüzyon) Birleştirme</b>: < 40 Bar</li><li><b>EF + Alın Kaynak Birleştirme</b>: < 80 Bar</li><li><b>Mekanik Birleştirme</b>: < 200 Bar</li></ul>',
            },
            {
              title: 'RTP Boru Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description:
                'Elektrofüzyon kaynak yöntemi, RTP Borularının birleştirilmesinde güvenilir ve sağlam bir yöntem sunar. Elektrofüzyon kaynak, boru ve ek parçaların iç kısmında bulunan rezistans tellerinin elektrik enerjisi ile ısıtılmasıyla gerçekleştirilir. Bu işlem, boru yüzeylerinin erimesini ve birleşmesini sağlar. Kolay montaj imkanı sunan elektrofüzyon ek parçaları, boru uçlarına yerleştirilir ve kaynak makinesi ile kolayca birleştirilir. Sağlam ve sızdırmaz bağlantı oluşturur, bu da tesisatın uzun ömürlü ve güvenilir olmasını sağlar.',
            },
            {
              title: 'RTP Boru Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                'Alın Kaynak, RTP Boru ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. Alın Kaynak makinesi kullanılarak, kaynatılacak olan boruların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, RTP Boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 1200 mm çapa kadar olan RTP Borular kaynatılabilir.',
            },
            {
              title: 'RTP Boru <b>Fiyat Listesi</b>',
              description:
                'RTP Boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. RTP Borular, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. RTP Boru avantajlarından yararlanmak ve 2024 RTP Boru Fiyat Listesine ulaşmak için internet sitemizde yer alan Fiyat Listesini inceleyebilirsiniz.',
            },
          ],
          faqs: [
            {
              question: 'RTP Boruları hangi malzemeden üretilir?',
              answer:
                'RTP Boruları, polietilen ve alüminyum katmanlarının kombinasyonu ile üretilmektedir. Bu malzemeler, boruların yüksek basınç dayanımı ve esneklik sağlamasına yardımcı olur.',
            },
            {
              question: 'RTP Borularının kullanım alanları nelerdir?',
              answer:
                'RTP Boruları, endüstriyel tesisler, altyapı projeleri, su dağıtım sistemleri ve diğer yüksek basınç gerektiren uygulamalarda kullanılabilir.',
            },
            {
              question: 'RTP Boruları hangi çap ve basınç sınıflarında mevcuttur?',
              answer:
                "RTP Boruları, 20 mm'den 1600 mm'ye kadar çeşitli çaplarda ve farklı basınç sınıflarında üretilmektedir.",
            },
            {
              question: 'RTP Borularının birleştirme yöntemleri nelerdir?',
              answer:
                'RTP Boruları elektrofüzyon (EF) kaynağı, alın kaynağı ve kaplin ile birleştirme yöntemleri ile birleştirilebilir.',
            },
            {
              question: 'RTP Boruları kimyasallara karşı dayanıklı mı?',
              answer:
                'Evet, RTP Boruları tuzlu su, korozif asitler, bazlar ve diğer kimyasallara karşı yüksek direnç sağlar.',
            },
            {
              question: 'RTP Borularının avantajları nelerdir?',
              answer:
                'RTP Boruları hafif, esnek ve dayanıklıdır. Paslanmaya karşı yüksek direnç gösterir ve uzun ömürlüdür. Ayrıca, taşıma ve kurulum sırasında minimum ağır ekipman gerektirir.',
            },
            {
              question: 'RTP Borularının ömrü ne kadar?',
              answer:
                'RTP Boruları, yüksek kaliteli malzemeler ve üretim teknikleri sayesinde uzun ömürlüdür ve projelerinizde güvenle kullanılabilir.',
            },
            {
              question: 'RTP Borularının fiyat listesine nasıl ulaşabilirim?',
              answer:
                'RTP Borularının 2024 Fiyat Listesi için 0212 886 57 41 numaralı hattımızı arayarak bilgi alabilirsiniz.',
            },
            {
              question: 'RTP Borularının teknik özellikleri nelerdir?',
              answer:
                'RTP Boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için Fiyat Listesini bakabilirsiniz.',
            },
            {
              question: 'RTP Borularını nasıl temin edebilirim?',
              answer:
                "RTP Borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
            },
          ],
          fittings: [
            {
              title: 'RTP Eşit Te',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 1.png',
              alt: 'RTP Eşit Te',
              category: 'Fittings',
            },
            {
              title: 'RTP Redüksiyon',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 2.png',
              alt: 'RTP Redüksiyon',
              category: 'Fittings',
            },
            {
              title: 'RTP Semer',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 3.png',
              alt: 'RTP Semer',
              category: 'Fittings',
            },
            {
              title: 'RTP Dirsekler',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 1.png',
              alt: 'RTP Dirsekler',
              category: 'Fittings',
            },
            {
              title: 'RTP İnegal Te',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 2.png',
              alt: 'RTP İnegal Te',
              category: 'Fittings',
            },
            {
              title: 'RTP Manşon',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 3.png',
              alt: 'RTP Manşon',
              category: 'Fittings',
            },
            {
              title: 'RTP Körtapa',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 1.png',
              alt: 'RTP Körtapa',
              category: 'Fittings',
            },
            {
              title: 'RTP Flanş Adaptörü',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 2.png',
              alt: 'RTP Flanş Adaptörü',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Telekom Boruları',
        description:
          'Kablo Muhafaza Boruları, hızla gelişen haberleşme ve data iletimi borulama sistemlerinde kullanılır. Talebe ve şartnameye uygun olarak, tekli ile üçlü arasında farklı seçeneklerle sunulur. Göz çoklayıcı ve tamamlayıcı elemanları olan ek parçalar ile bir sistem bütünü sunmaktadır.',
        featuredProduct: false,
        logo: '',
        isNewTech: true,
        banner: {
          vertical: '/productImages/alt yapı boruları/TELEKOM/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/TELEKOM/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/TELEKOM/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/TELEKOM/TELEKOM BORU 1.png',
        link: '/tr/urunler/altyapi-boru-sistemleri/telekom-boru',
        highlights: [
          { title: 'Yüksek Dayanıklılık', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Kolay Kurulum', icon: '/icons/easy-installation.png' },
        ],
        productDetails: {
          title: 'Telekom Boruları',
          description:
            'Telekom Boruları, polietilen ve polipropilen hammaddelerden üretilen, yüksek dayanıklılık ve uzun ömür sunan kablo muhafaza borularıdır. Renk seçenekleri arasında turuncu, siyah ve mavi bulunmaktadır. Çap ve basınç sınıflarına göre farklı seçeneklerle üretilmektedir.',
          features: [
            {
              title: 'Güçlü ve Dayanıklı',
              icon: '/icons/durable.png',
              alt: 'Strong and Durable',
              description:
                'Telekom Boruları, zorlu çevre koşullarına dayanıklı olup, uzun yıllar sorunsuz hizmet sunar.',
            },
            {
              title: 'Esnek Yapı',
              icon: '/icons/flexible.png',
              alt: 'Flexible Structure',
              description:
                'Esnek yapıları sayesinde kolayca döşenebilir ve telekomünikasyon kablolarını güvenle taşır.',
            },
            {
              title: 'Üstün Özellikli Hammadde ',
              icon: '/icons/purity.png',
              alt: 'Purity',
              description:
                'Telekom Boruları, %100 saf ve orijinal hammadde kullanılarak üretilir, bu da en yüksek kaliteyi garanti eder.',
            },
            {
              title: 'Akredite Test Laboratuvarı',
              icon: '/icons/test.png',
              alt: 'test',
              description:
                'Dizayn Grup’un akredite test laboratuvarı, deneyimli mühendis kadrosu ile tarafsız ve güvenilir test hizmeti sunar.',
            },
            {
              title: 'Projeye Özel Çözümler',
              icon: '/icons/solution.png',
              alt: 'Solution',
              description:
                'Telekom Boruları, projelerinize özel çözümler sunarak üretim sürecinin her aşamasında yanınızda olur.',
            },
            {
              title: 'Yüksek Kalite ve Ekonomik Fiyat',
              icon: '/icons/reward.png',
              alt: 'reward',
              description:
                'Telekom Boruları, yüksek kalite ve uygun fiyat avantajı ile projelerinizin vazgeçilmezi olacaktır. Detaylı bilgi için bizimle iletişime geçin.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/TELEKOM/telekom-boru.png',
              alt: 'Telekom Boruları',
              description: 'Telekom Boruları',
            },
            {
              image: '/productImages/alt yapı boruları/TELEKOM/TELEKOM BORU 2.png',
              alt: 'Telekom Boruları',
              description: 'Telekom Boruları',
            },
            {
              image: '/productImages/alt yapı boruları/TELEKOM/TELEKOM BORU 3.png',
              alt: 'Telekom Boruları',
              description: 'Telekom Boruları',
            },
          ],
          headers: [
            {
              title: '<b>Telekom Boru</b> ve Ek Parçaları',
              description:
                'Telekom Boruları, yüksek dayanıklılık ve uzun ömür sunan, çeşitli çap ve renk seçenekleriyle üretilen kablo muhafaza borularıdır. Telekom Boru <b>Fiyat Listesi</b> için internet sitemizde yer alan Fiyat Listesini inceleyebilirsiniz. Bu borular, polietilen ve polipropilen hammaddelerden üretilmiştir ve her türlü çevresel koşullara dayanıklıdır.',
              image: '/productImages/alt yapı boruları/TELEKOM/telekom-boru-1.png',
              alt: 'Telekom Boru',
            },
            {
              title: 'Telekom Boru <b>Avantajları</b>',
              description:
                'Telekom Boruları, yüksek dayanıklılık, esneklik, kimyasal dayanıklılık ve uzun ömür gibi birçok avantaja sahiptir. Bu özellikleri ile projelerinizde güvenilir ve uzun ömürlü çözümler sunar. Ayrıca, hafif yapıları sayesinde taşıma ve montaj kolaylığı sağlar.',
            },
            {
              title: 'Telekom Boru <b>Nerelerde Kullanılır?</b>',
              description:
                'Telekom Boruları, yüksek performansı ve kalitesi ile haberleşme ve data iletimi borulama sistemlerinde, özellikle kablo muhafazası için kullanılmaktadır. Yer altı ve yer üstü uygulamalarında güvenle kullanılabilir.',
            },
            {
              title: 'Telekom Boru Teknik <b>Özellikleri</b>',
              description:
                'Telekom Boruları, yüksek dayanıklılık, esneklik, kimyasal dayanıklılık ve uzun ömür gibi teknik özelliklere sahiptir. Detaylı bilgi için Fiyat Listesini inceleyebilirsiniz. Bu borular, çeşitli çap ve basınç sınıflarında üretilmektedir ve her türlü zorlu koşulda üstün performans sunar.',
            },
            {
              title: 'Telekom Boru <b>Ek Parçaları</b>',
              description:
                'Telekom Boruları için çeşitli ek parçalar mevcuttur. Bu ek parçalar, boruların montajını kolaylaştırır ve sistemlerin verimliliğini artırır. Ek parçalar, projelerinizin ihtiyaçlarına göre seçilebilir ve borularla uyumlu olarak kullanılabilir.',
            },
            {
              title: 'Telekom Boru <b>Birleştirme Yöntemleri</b>',
              description:
                'Telekom Borularının birleştirilmesinde contalı sistemler ve elektrofüzyon kaynak yöntemleri kullanılmaktadır. Bu yöntemler, boruların sızdırmaz ve güvenli bir şekilde birleştirilmesini sağlar. Proje gereksinimlerine göre en uygun birleştirme yöntemi seçilmelidir.',
            },
            {
              title: 'Telekom Boru Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description:
                'Elektrofüzyon kaynak yöntemi, Telekom Borularının birleştirilmesinde güvenilir ve sağlam bir yöntem sunar. Elektrofüzyon kaynak, boru ve ek parçaların iç kısmında bulunan rezistans tellerinin elektrik enerjisi ile ısıtılmasıyla gerçekleştirilir. Kolay montaj imkanı sunan elektrofüzyon ek parçaları, boru uçlarına yerleştirilir ve kaynak makinesi ile kolayca birleştirilir. Sağlam ve sızdırmaz bağlantı oluşturur, bu da tesisatın uzun ömürlü ve güvenilir olmasını sağlar.',
            },
            {
              title: 'Telekom Boru <b>Fiyat Listesi</b>',
              description:
                'Telekom Boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Telekom Borular, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Telekom Boru avantajlarından yararlanmak ve 2024 Telekom Boru Fiyat Listesine ulaşmak için internet sitemizde yer alan Fiyat Listesini inceleyebilirsiniz.',
            },
          ],
          faqs: [
            {
              question: 'Telekom Borularının hammaddesi nedir?',
              answer:
                'Telekom Boruları, yüksek kaliteli polietilen (PE) ve polipropilen (PP) hammaddelerden üretilmektedir. Bu hammaddeler, borulara yüksek dayanıklılık ve uzun ömür sağlar.',
            },
            {
              question: 'Telekom Boruların kullanım alanları nelerdir?',
              answer:
                'Telekom Boruları, haberleşme ve data iletimi borulama sistemlerinde, özellikle kablo muhafazası için kullanılmaktadır. Yer altı ve yer üstü uygulamalarında, veri iletişim hatları ve fiber optik kablo korumasında güvenle kullanılabilir.',
            },
            {
              question: 'Telekom Boruların avantajları nelerdir?',
              answer:
                'Telekom Boruları, yüksek dayanıklılık, esneklik, kimyasal dayanıklılık ve uzun ömür gibi birçok avantaja sahiptir. Esnek yapısı sayesinde zeminin sismik hareketlerinden etkilenmez ve kimyasal maddelere karşı yüksek direnç gösterir.',
            },
            {
              question: 'Telekom Boruların ömrü ne kadar?',
              answer:
                'Telekom Boruları, asgari 50 yıl süre ile ilk günkü gibi çalışma ömrüne sahiptir. Yüksek kaliteli hammaddeler ve üretim teknikleri sayesinde uzun ömürlüdür ve projelerinizde güvenle kullanılabilir.',
            },
            {
              question: 'Telekom Boruların birleştirme yöntemleri nelerdir?',
              answer:
                'Telekom Borularının birleştirilmesinde contalı sistemler ve elektrofüzyon kaynak yöntemleri kullanılmaktadır. Contalı sistemler hızlı ve kolay montaj imkanı sunarken, elektrofüzyon kaynak yöntemleri sağlam ve sızdırmaz bağlantılar sağlar.',
            },
            {
              question: 'Telekom Boruları kimyasallara karşı dayanıklı mı?',
              answer:
                'Evet, Telekom Boruları kimyasal maddelere karşı yüksek direnç sağlar. Polietilen hammaddesi, boruların kimyasallara karşı dayanıklılığını artırır ve korozyona karşı koruma sağlar.',
            },
            {
              question: 'Telekom Boruları nasıl temin edebilirim?',
              answer:
                "Telekom Borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz. Ürünlerimiz hakkında daha fazla bilgi ve sipariş için internet sitemizi ziyaret edebilirsiniz.",
            },
            {
              question: 'Telekom Boruların teknik özellikleri nelerdir?',
              answer:
                'Telekom Boruları, yüksek dayanıklılık, esneklik, kimyasal dayanıklılık ve uzun ömür gibi teknik özelliklere sahiptir. Çeşitli çap ve basınç sınıflarında üretilir ve her türlü zorlu koşulda üstün performans sunar.',
            },
            {
              question: 'Telekom Boruların montajı nasıl yapılır?',
              answer:
                'Telekom Borularının montajı, contalı sistemler ve elektrofüzyon kaynak yöntemleri ile yapılır. Her iki yöntem de boruların sızdırmaz ve güvenli bir şekilde birleştirilmesini sağlar. Montaj sırasında boruların ve ek parçaların temiz ve kuru olduğundan emin olunmalıdır.',
            },
            {
              question: 'Telekom Boruların fiyat listesine nasıl ulaşabilirim?',
              answer:
                'Telekom Boruların 2024 Fiyat Listesi için internet sitemizde yer alan Fiyat Listesini inceleyebilirsiniz. Detaylı bilgi ve diğer çaplar için firmamızla iletişime geçebilirsiniz.',
            },
          ],
          fittings: [
            {
              title: 'Telekom Eşit Te',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 1.png',
              alt: 'Telekom Eşit Te',
              category: 'Fittings',
            },
            {
              title: 'Telekom Redüksiyon',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 2.png',
              alt: 'Telekom Redüksiyon',
              category: 'Fittings',
            },
            {
              title: 'Telekom Semer',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 3.png',
              alt: 'Telekom Semer',
              category: 'Fittings',
            },
            {
              title: 'Telekom Dirsekler',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 1.png',
              alt: 'Telekom Dirsekler',
              category: 'Fittings',
            },
            {
              title: 'Telekom İnegal Te',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 2.png',
              alt: 'Telekom İnegal Te',
              category: 'Fittings',
            },
            {
              title: 'Telekom Manşon',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 3.png',
              alt: 'Telekom Manşon',
              category: 'Fittings',
            },
            {
              title: 'Telekom Körtapa',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 1.png',
              alt: 'Telekom Körtapa',
              category: 'Fittings',
            },
            {
              title: 'Telekom Flanş Adaptörü',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 2.png',
              alt: 'Telekom Flanş Adaptörü',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Koruge Boru',
        description:
          'Koruge Boruları, kanalizasyon sistemlerinde yüksek dayanıklılık ve uzun ömür sunar.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/Koruge/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/Koruge/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/Koruge/banner/tr/horizontal.jpg',
          PLP: '/productImages/alt yapı boruları/Koruge/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Koruge/Koruge BORU.png',
        link: '/tr/urunler/altyapi-boru-sistemleri/koruge-boru',
        highlights: [
          { title: 'Yüksek Dayanıklılık', icon: '/icons/durable.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
          { title: 'Kolay Kurulum', icon: '/icons/easy-installation.png' },
        ],
        productDetails: {
          title: 'Dizayn Koruge Boru',
          description:
            'Koruge Borular, iki farklı üretim yöntemi ile üretilmektedir: Ekstrüde ve sarmal metod. Bu boruların iç ve dış katmanı polietilen ve polipropilen malzemeden oluşmaktadır. İç katman akışkanı taşıyan düz bir yapıya sahipken, dış katman kaburgalı yapısıyla mukavemeti artırmaktadır.',
          features: [
            {
              title: 'Yüksek Korozyon Dayanımı',
              icon: '/icons/corrosion.png',
              alt: 'Corrosion Resistance',
              description:
                'Koruge Borular, korozyona karşı yüksek dayanıklılık gösterir, bu sayede uzun ömürlü kullanım sunar.',
            },
            {
              title: 'Kimyasal Dayanıklılık',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'Koruge Borular, çeşitli kimyasallara karşı dirençli olup, aşınma ve kimyasal etkilerden etkilenmez.',
            },
            {
              title: 'Hafif ve Esnek Yapı',
              icon: '/icons/lightweight.png',
              alt: 'Lightweight',
              description:
                'Hafif ve esnek yapısıyla Koruge Borular, kolayca taşınabilir ve monte edilebilir.',
            },
            {
              title: 'Sızdırmazlık Garantisi',
              icon: '/icons/seal.png',
              alt: 'Leak Proof',
              description:
                'Koruge Borular, sızdırmaz yapısıyla yer altı sularının ve toprağın kirlenmesini önler.',
            },
            {
              title: 'Yüksek Halka Mukavemeti',
              icon: '/icons/high-ring-stiffness.png',
              alt: 'High Ring Stiffness',
              description:
                'Yüksek halka mukavemeti sayesinde, ağır yükler altında bile şekil değiştirmez ve dayanıklılığını korur.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 1.png',
              alt: 'Dizayn Koruge Boru',
              description: 'Dizayn Koruge Boru',
            },
            {
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 3.png',
              alt: 'Dizayn Koruge Boru',
              description: 'Dizayn Koruge Boru',
            },
            {
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 4.png',
              alt: 'Dizayn Koruge Boru',
              description: 'Dizayn Koruge Boru',
            },
          ],
          headers: [
            {
              title: '<b>Koruge Boru</b> ve Ek Parçaları',
              description:
                'Koruge Boruları, yüksek dayanıklılık ve uzun ömür özellikleri ile 450 mm çapa kadar olan ekstrüde borular ve 500 mm üzeri sarmal borular olarak üretilmektedir. Kanalizasyon, yağmur suyu ve drenaj sistemlerinde güvenilir çözümler sunar. Detaylı bilgi ve fiyat listesi için internet sitemizi ziyaret edebilirsiniz.',
            },
            {
              title: 'Koruge Boru <b>Avantajları</b>',
              description:
                'Koruge Borular, yüksek korozyon dayanımı, kimyasal direnç, hafiflik ve esneklik gibi özellikleri ile öne çıkar. Bu borular, uzun ömürlü kullanım sunar ve çeşitli uygulama alanlarında güvenle kullanılabilir.',
            },
            {
              title: 'Koruge Boru <b>Kullanım Alanları</b>',
              description:
                'Koruge Borular, kanalizasyon, yağmur suyu ve drenaj sistemlerinde, endüstriyel atık su hatlarında, tarımsal sulama sistemlerinde ve altyapı projelerinde yaygın olarak kullanılmaktadır.',
            },
            {
              title: 'Koruge Boru <b>Teknik Özellikler</b>',
              description:
                'Koruge Borular, iki katmanlı yapısı ile yüksek mukavemet ve dayanıklılık sağlar. Ekstrüde borular Ø450 mm çapa kadar, sarmal borular ise Ø500 mm ve üzeri çaplarda üretilmektedir. Her iki tip boru da yüksek halka mukavemetine sahiptir ve çeşitli kimyasallara karşı dirençlidir.',
            },
          ],
          faqs: [
            {
              question: 'Koruge Borular hangi malzemeden üretilir?',
              answer:
                'Koruge Borular, Polietilen (PE) ve Polipropilen (PP) malzemelerinden üretilmektedir. Aynı et kalınlığında PP, daha yüksek halka mukavemeti sağlar.',
            },
            {
              question: 'Koruge Boruların kullanım alanları nelerdir?',
              answer:
                'Koruge Borular, kanalizasyon sistemleri, yağmur suyu ve drenaj hatları, endüstriyel atık su hatları ve tarımsal sulama sistemlerinde kullanılmaktadır.',
            },
            {
              question: 'Koruge Boruların ömrü ne kadardır?',
              answer:
                'Koruge Borular, korozyon ve kimyasal dayanımı ile 50 yıl ömür garantisi sunmaktadır.',
            },
            {
              question: 'Koruge Borular nasıl birleştirilir?',
              answer:
                'Koruge Borular, fitingler ile birleştirilmektedir. Ekstrüde borular enjeksiyon fitingleri ile, sarmal borular ise muflu ve spigot uçları ile birleştirilir. Elektrofüzyon yöntemi de kullanılabilir.',
            },
            {
              question: 'Koruge Boruların avantajları nelerdir?',
              answer:
                'Koruge Borular, yüksek dayanıklılık, kimyasal direnç, hafiflik, esneklik ve kolay montaj gibi avantajlara sahiptir. Ayrıca, çevresel etkilere karşı dirençli ve uzun ömürlüdür.',
            },
            {
              question: 'Koruge Borular hangi standartlara uygundur?',
              answer:
                'Koruge Borular, TS EN 13476, TS 12132, DIN 16961, EN155 standartlarına uygun olarak üretilmektedir.',
            },
            {
              question: 'Koruge Boruların rengi nedir?',
              answer:
                'Koruge Borular genellikle siyah renkte üretilmektedir. İç katman ise projeye göre farklı renklerde olabilir.',
            },
            {
              question: 'Koruge Boruların basınç dayanımı nedir?',
              answer:
                'Koruge Borular, normalde 0,5 bar basınç altında kullanılırken, elektrofüzyon yöntemi ile birleştirildiğinde 4 bar basınca kadar dayanıklıdır.',
            },
            {
              question: 'Koruge Boruların çap aralığı nedir?',
              answer:
                'Koruge Borular, Ø50 mm ile Ø8000 mm arasında değişen çaplarda üretilebilmektedir.',
            },
            {
              question: 'Koruge Borular nasıl temin edilebilir?',
              answer:
                "Koruge Borular, Dizayn Grup'un yetkili satıcılarından veya doğrudan firmamız ile iletişime geçilerek temin edilebilir.",
            },
          ],
          fittings: [
            {
              title: 'Koruge Eşit Te',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 1.png',
              alt: 'Koruge Eşit Te',
              category: 'Fittings',
            },
            {
              title: 'Koruge Redüksiyon',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 2.png',
              alt: 'Koruge Redüksiyon',
              category: 'Fittings',
            },
            {
              title: 'Koruge Semer',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 3.png',
              alt: 'Koruge Semer',
              category: 'Fittings',
            },
            {
              title: 'Koruge Dirsekler',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 1.png',
              alt: 'Koruge Dirsekler',
              category: 'Fittings',
            },
            {
              title: 'Koruge İnegal Te',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 2.png',
              alt: 'Koruge İnegal Te',
              category: 'Fittings',
            },
            {
              title: 'Koruge Manşon',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 3.png',
              alt: 'Koruge Manşon',
              category: 'Fittings',
            },
            {
              title: 'Koruge Körtapa',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 1.png',
              alt: 'Koruge Körtapa',
              category: 'Fittings',
            },
            {
              title: 'Koruge Flanş Adaptörü',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 2.png',
              alt: 'Koruge Flanş Adaptörü',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Dizayn Koruge Sarmal Boru',
        description:
          'Korige sarmal borular, iç ve dış katmanlardan oluşan çift katmanlı bir yapıya sahiptir. İç katman akışkanı taşıyan düz satıhlı borudur. Dış katman ise kaburgalı yapıdadır. Polietilen ve Polipropilen hammaddelerinden üretilmektedir.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/KorugeSarmal/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/KorugeSarmal/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/KorugeSarmal/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/KorugeSarmal/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/KorugeSarmal/koruge-sarmal-2.png',
        link: '/tr/urunler/altyapi-boru-sistemleri/koruge-sarmal-boru',
        highlights: [
          { title: 'Yüksek Dayanıklılık', icon: '/icons/durable.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
          { title: 'Kolay Kurulum', icon: '/icons/easy-installation.png' },
        ],
        productDetails: {
          title: 'Koruge Sarmal Boru',
          description:
            'Kanalizasyon boruları Poliolefin grubu içerisindeki Polipropilen ve Polietilen hammaddelerinden üretilen bir üründür. Ø450 mm çapa kadar üretilen ekstrüdekorige boru polietilen ve polipropilen hammaddeden üretilebilirken, sarmal korige borular polietilenden üretilmektedir. Aynı et kalınlığında halka mukavemet değeri polipropilende daha yüksek çıktığından daha fazla tercih edilmektedir. Sarmal yöntemle ise Ø500 mm çap ve üzerindeki borular üretilmektedir. Dizayn Grup 8.000 mm çapa kadar korige sarmal boru üretme teknolojisine sahiptir.',
          features: [
            {
              title: 'Yüksek Dayanıklılık',
              icon: '/icons/durability.png',
              alt: 'Durability',
              description:
                'Korige sarmal borular, polietilen ve polipropilen olması nedeniyle yüksek korozyon dayanımına sahiptir.',
            },
            {
              title: 'Kolay Montaj',
              icon: '/icons/easy-installation.png',
              alt: 'Easy Installation',
              description: 'Hafif yapısı sayesinde kolay montajlanabilir ve taşınabilir.',
            },
            {
              title: 'Kimyasal Dayanıklılık',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'Korige sarmal borular, kimyasal maddelere karşı yüksek direnç gösterir ve korozyona karşı koruma sağlar.',
            },
            {
              title: 'Geniş Uygulama Alanı',
              icon: '/icons/application.png',
              alt: 'Application',
              description:
                'Korige sarmal borular, kanalizasyon, yağmursuyu, drenaj ve daha birçok altyapı uygulamalarında kullanılabilir.',
            },
            {
              title: 'Ekonomik ve Güvenilir',
              icon: '/icons/economical.png',
              alt: 'Economical',
              description:
                'Korige sarmal borular, ekonomik fiyatı ve uzun ömürlü yapısıyla projelerinizde maliyet tasarrufu sağlar.',
            },
            {
              title: 'Çevre Dostu',
              icon: '/icons/eco-friendly.png',
              alt: 'Eco-Friendly',
              description:
                'Korige sarmal borular, geri dönüşüme uygunluğu ile çevre dostu bir üründür.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/KorugeSarmal/koruge-sarmal-2.png',
              alt: 'Dizayn Koruge Sarmal Boru',
              description: 'Dizayn Koruge Sarmal Boru',
            },
            {
              image: '/productImages/alt yapı boruları/KorugeSarmal/KorugeSarmal BORU 3.png',
              alt: 'Dizayn Koruge Sarmal Boru',
              description: 'Dizayn Koruge Sarmal Boru',
            },
            {
              image: '/productImages/alt yapı boruları/KorugeSarmal/KorugeSarmal BORU 4.png',
              alt: 'Dizayn Koruge Sarmal Boru',
              description: 'Dizayn Koruge Sarmal Boru',
            },
          ],
          headers: [
            {
              title: '<b>Korige Sarmal Boru</b> ve Ek Parçaları',
              description:
                'Korige sarmal borular, yüksek korozyon dayanımı ve uzun ömürlü yapısıyla altyapı projelerinde güvenle kullanılmaktadır. Ø450 mm çapa kadar üretilen ekstrüde korige borular fitingler ile birleştirilirken, Ø500 mm ve üzeri çaptaki sarmal korige borular muflu ve spigot uçludur. Farklı çap ve basınç sınıflarında üretilen korige sarmal borular, geniş bir kullanım alanına sahiptir.',
            },
            {
              title: 'Korige Sarmal Boru <b>Avantajları</b>',
              description:
                'Korige sarmal borular, yüksek korozyon dayanımı, kimyasal direnci ve uzun ömürlü yapısıyla altyapı projelerinde güvenilir bir çözüm sunar. Esnek yapısı sayesinde yer hareketlerinden etkilenmez ve kolay montaj imkanı sağlar. Hafif yapısı ile nakliye ve işçilik maliyetlerini düşürür.',
            },
            {
              title: 'Korige Sarmal Boru <b>Kullanım Alanları</b>',
              description:
                'Korige sarmal borular, kanalizasyon, yağmursuyu, drenaj, atıksu ve endüstriyel uygulamalar gibi birçok altyapı projesinde kullanılabilir. Farklı çap ve basınç sınıflarında üretilen korige sarmal borular, projelerinizde güvenle kullanılabilecek esnek ve dayanıklı bir çözümdür.',
            },
            {
              title: 'Korige Sarmal Boru <b>Teknik Özellikler</b>',
              description:
                'Korige sarmal borular, çift katmanlı yapısı sayesinde yüksek mukavemet ve esneklik sunar. Termoplastik malzemeden üretilen iç ve dış katmanları, kimyasal ve mekanik etkilere karşı dayanıklıdır. Teknik özellikler şunlardır: \n<ul><li><b>Çap Aralığı:</b> 450 mm - 8000 mm</li><li><b>Halka Mukavemeti:</b> Yüksek</li><li><b>Malzeme:</b> Polietilen (PE) ve Polipropilen (PP)</li><li><b>Montaj Kolaylığı:</b> Contalı, elektrofüzyon ve ekstrüder kaynak yöntemleri</li><li><b>Dayanıklılık:</b> Yüksek kimyasal ve mekanik dayanım</li></ul>',
            },
            {
              title: 'Korige Sarmal Boru <b>Birleştirme Yöntemleri</b>',
              description:
                'Korige sarmal boruların birleştirilmesinde farklı yöntemler kullanılmaktadır: \n<ul><li><b>Contalı Birleştirme:</b> Ø450 mm çapa kadar olan borularda kullanılır</li><li><b>Ekstrüder Kaynak:</b> Yüksek mukavemet ve sızdırmazlık sağlar</li><li><b>Elektrofüzyon Kaynak:</b> 4 bar basınca kadar dayanıklıdır ve yüksek sızdırmazlık sağlar</li></ul>',
            },
            {
              title: 'Korige Sarmal Boru <b>Fiyat Listesi</b>',
              description:
                'Korige sarmal borular, yüksek kalitesi ve uygun fiyatı ile projelerinizde maliyet avantajı sağlar. Farklı çap ve basınç sınıflarında üretilen borular için fiyat listesine ulaşmak ve detaylı bilgi almak için internet sitemizi ziyaret edebilirsiniz.',
            },
          ],
          faqs: [
            {
              question: 'Korige sarmal boruların hammaddesi nedir?',
              answer:
                'Korige sarmal borular, polietilen (PE) ve polipropilen (PP) hammaddelerinden üretilmektedir. Bu malzemeler, yüksek korozyon dayanımı ve uzun ömür sunar.',
            },
            {
              question: 'Korige sarmal boruların avantajları nelerdir?',
              answer:
                'Korige sarmal borular, yüksek korozyon dayanımı, kimyasal direnç, uzun ömürlü yapısı ve esnekliği sayesinde altyapı projelerinde güvenilir bir çözüm sunar. Hafif yapısı ile kolay montaj ve nakliye imkanı sağlar.',
            },
            {
              question: 'Korige sarmal boruların kullanım alanları nelerdir?',
              answer:
                'Korige sarmal borular, kanalizasyon, yağmursuyu, drenaj, atıksu ve endüstriyel uygulamalar gibi birçok altyapı projesinde kullanılabilir.',
            },
            {
              question: 'Korige sarmal borular nasıl birleştirilir?',
              answer:
                'Korige sarmal borular, Ø450 mm çapa kadar contalı yöntem ile birleştirilir. Daha büyük çaplar için ekstrüder kaynak ve elektrofüzyon kaynak yöntemleri kullanılır.',
            },
            {
              question: 'Korige sarmal boruların ömrü ne kadardır?',
              answer:
                'Korige sarmal borular, 50 yıl ömür garantisi ile satılmaktadır ve dış etkilere karşı 100 yıl kullanılabilir.',
            },
            {
              question: 'Korige sarmal boruların teknik özellikleri nelerdir?',
              answer:
                'Korige sarmal borular, çift katmanlı yapısı sayesinde yüksek mukavemet ve esneklik sunar. Teknik özellikler arasında yüksek kimyasal ve mekanik dayanım, kolay montaj ve düşük ağırlık bulunur.',
            },
            {
              question: 'Korige sarmal boruların üretim çap aralığı nedir?',
              answer:
                "Korige sarmal borular, 450 mm'den 8000 mm'ye kadar çeşitli çaplarda üretilmektedir.",
            },
            {
              question: 'Korige sarmal borular çevre dostu mudur?',
              answer:
                'Evet, korige sarmal borular geri dönüşüme uygunluğu ile çevre dostu bir üründür.',
            },
          ],
          fittings: [],
        },
        background: '',
      },

      {
        title: 'Dizayn PE 80 Doğalgaz Boru',
        description:
          'Dizayn PE 80 Doğalgaz Boru ve Ek Parçaları, doğalgaz hatlarında güvenilir ve dayanıklı çözümler sunar. Polietilen malzeme kullanımı sayesinde hafif, esnek ve darbelere dayanıklı olan bu borular, doğalgaz hatlarında güvenle kullanılabilir.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/PE 80/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/PE 80/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/PE 80/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/PE 80/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU.png',
        link: '/tr/urunler/altyapi-boru-sistemleri/pe-80-dogalgaz-boru',
        highlights: [
          { title: 'Yüksek Basınç Dayanımı', icon: '/icons/high-pressure.png' },
          { title: 'Esnek ve Hafif', icon: '/icons/flexible.png' },
          { title: 'Kimyasal Dayanım', icon: '/icons/chemical-resistant.png' },
        ],
        productDetails: {
          title: 'Dizayn PE 80 Doğalgaz Boru',
          description:
            'Dizayn PE 80 doğalgaz boruları, yüksek kaliteli PE80 malzemesi kullanılarak üretilmiştir. Bu borular, yüksek basınç dayanımı ve esnek yapısı ile doğalgaz hatlarında güvenle kullanılabilir. PE80 doğalgaz boruları, hafif ve dayanıklı yapısı ile döşeme ve montaj kolaylığı sağlar.',
          features: [
            {
              title: 'Elastik Yapı',
              icon: '/icons/flexible.png',
              alt: 'Flexible',
              description:
                'Dizayn PE 80 Doğalgaz Boruları, elastik yapısıyla deprem gibi doğal afetlerde zarar görmez ve güvenilir bir şekilde kullanılır.',
            },
            {
              title: 'Yüksek Kimyasal Dayanım',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistant',
              description:
                'Bu borular, kimyasallara karşı yüksek direnç gösterir ve korozyon olmaz.',
            },
            {
              title: 'Hafif ve Kolay Kurulum',
              icon: '/icons/lightweight.png',
              alt: 'Lightweight',
              description:
                'Hafif yapısı sayesinde taşıma ve kurulum kolaylığı sağlar, işçilik maliyetlerini düşürür.',
            },
            {
              title: 'Uzun Ömür',
              icon: '/icons/long-lasting.png',
              alt: 'Long-lasting',
              description: 'Dizayn PE 80 Doğalgaz Boruları, en az 50 yıl servis ömrü sunar.',
            },
            {
              title: 'Elektrofüzyon Kaynak',
              icon: '/icons/welding.png',
              alt: 'Electrofusion',
              description:
                'En emniyetli kaynak yöntemi olan elektrofüzyon kaynağı ile birleştirilir, doğalgaz kaçağı riski minimuma indirilir.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'Dizayn PE 80 Doğalgaz Boru',
              description: 'Dizayn PE 80 Doğalgaz Boru',
            },
            {
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'Dizayn PE 80 Doğalgaz Boru',
              description: 'Dizayn PE 80 Doğalgaz Boru',
            },
            {
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 4.png',
              alt: 'Dizayn PE 80 Doğalgaz Boru',
              description: 'Dizayn PE 80 Doğalgaz Boru',
            },
          ],
          headers: [
            {
              title: '<b>Dizayn PE 80 Doğalgaz Boru</b> ve Ek Parçaları',
              description:
                'Dizayn PE 80 doğalgaz boruları, doğalgaz hatlarında güvenilir ve dayanıklı çözümler sunar. PE80 malzeme kullanımı sayesinde yüksek basınç dayanımı, esneklik ve uzun ömürlü kullanım sağlar. Detaylı bilgi ve fiyat listesi için internet sitemizi ziyaret edebilirsiniz.',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 1.jpg',
              alt: 'Dizayn PE 80 Doğalgaz Boru',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Avantajları</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları, yüksek basınç dayanımı, esneklik ve kimyasal direnç gibi özellikleri ile doğalgaz hatlarında güvenli ve uzun ömürlü çözümler sunar. PE80 malzeme kullanımı sayesinde bu borular, çeşitli uygulamalarda kullanılabilir.',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları, doğalgaz hatlarında, bina içi doğalgaz sistemlerinde ve diğer doğalgaz iletim hatlarında güvenle kullanılabilir. Bu borular, yüksek performansı ve dayanıklılığı ile geniş bir uygulama yelpazesi sunar.',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları, farklı çap ve basınç sınıflarında çeşitli ağırlıklarla üretilmektedir. Ağırlık tablosu, boruların içi boş silindir hacmi ve borunun yoğunluğu çarpılarak hesaplanmaktadır. Boruların üretim aşamasında ısıl işlem gördüğü için genleşme özelliği dikkate alınarak tablo hazırlanmıştır. Detaylı bilgi ve diğer çaplar için firmamızla iletişime geçebilirsiniz.',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru Teknik <b>Özellikleri</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları, yüksek basınç dayanımı, esneklik ve kimyasal direnç gibi özellikleri ile doğalgaz hatlarında güvenli ve uzun ömürlü çözümler sunar. Teknik özellikler şunlardır:\n<ul><li><b>Çalışma Sıcaklığı</b>: Sürekli 60°C, anlık 80°C sıcaklık dayanımı.</li><li><b>Çalışma Basıncı</b>: 4 bar basınç dayanımı.</li><li><b>Malzeme</b>: Özel formüllü PE80 malzeme.</li><li><b>Montaj Kolaylığı</b>: Esnek yapısı sayesinde kolay montaj imkanı.</li><li><b>Dayanıklılık</b>: Yüksek sıcaklık ve basınç dayanımı, çevresel etkilere karşı üstün direnç.</li><li><b>Düşük Sürtünme Direnci</b>: Verimli tesisat performansı için düşük sürtünme direnci.</li></ul>',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Ek Parçaları</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları için çeşitli ek parçalar mevcuttur. Bu ek parçalar, boruların montajını kolaylaştırır ve sistemlerin verimliliğini artırır. Ek parçalar, projelerinizin ihtiyaçlarına göre seçilebilir ve borularla uyumlu olarak kullanılabilir.',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Birleştirme Yöntemleri</b>',
              description:
                'Dizayn PE 80 doğalgaz borularının birleştirilmesinde farklı tipte birleştirme yöntemleri tercih edilmektedir. Bu yöntemler şunlardır:\n<ul><li><b>Elektrofüzyon Birleştirme</b>: Bu yöntem, doğalgaz borularının güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Elektrofüzyon fitingleri, boruların uçlarına yerleştirilir ve kaynak makinesi ile kolayca birleştirilir. Sağlam ve sızdırmaz bağlantı oluşturur.</li></ul>',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Kaynak Yöntemi: Elektrofüzyon</b>',
              description:
                'Elektrofüzyon kaynak yöntemi, Dizayn PE 80 doğalgaz borularının birleştirilmesinde kullanılan güvenilir ve sağlam bir yöntemdir. Elektrofüzyon kaynak, boru ve ek parçaların iç kısmında bulunan rezistans tellerinin elektrik enerjisi ile ısıtılmasıyla gerçekleştirilir. Bu işlem, boru yüzeylerinin erimesini ve birleşmesini sağlar. Kolay montaj imkanı sunan elektrofüzyon ek parçaları, boru uçlarına yerleştirilir ve kaynak makinesi ile kolayca birleştirilir. Sağlam ve sızdırmaz bağlantı oluşturur.',
            },
            {
              title: 'Dizayn PE 80 Doğalgaz Boru <b>Fiyat Listesi</b>',
              description:
                'Dizayn PE 80 doğalgaz boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Dizayn PE 80 doğalgaz boruları, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Dizayn PE 80 doğalgaz boru avantajlarından yararlanmak ve 2024 Dizayn PE 80 Doğalgaz Boru Fiyat Listesine ulaşmak için internet sitemizde yer alan Fiyat Listesini inceleyebilirsiniz.',
            },
          ],
          faqs: [
            {
              question: 'Dizayn PE 80 doğalgaz boruları hangi basınçtaki hatlarda kullanılabilir?',
              answer:
                'Dizayn PE 80 doğalgaz boruları, doğalgaz hatlarının 4 bar basınçlı kısımlarında güvenle kullanılabilir. Bu borular, yüksek basınç dayanımı ve esnek yapısı ile doğalgaz hatlarında güvenli ve uzun ömürlü çözümler sunar.',
            },
            {
              question: 'Neden sarı renklidir?',
              answer:
                'Doğalgaz borularının sarı renkli olması, standartlar gereği zorunludur. Sarı renk, doğalgaz hatlarının içme suyu hatlarından kolayca ayırt edilmesini sağlar.',
            },
            {
              question: 'PE 80 doğalgaz boruları su hatlarında kullanılabilir mi?',
              answer:
                'Evet, PE 80 doğalgaz boruları su hatlarında da kullanılabilir. Bu borular, su hatlarında 10 bar basınca kadar dayanıklıdır ve içme suyu hatlarında güvenle kullanılabilir.',
            },
            {
              question: 'PE 80 doğalgaz boruları nasıl birleştirilir?',
              answer:
                'PE 80 doğalgaz boruları, elektrofüzyon fitingleri ile birleştirilir. Elektrofüzyon kaynak yöntemi, boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar.',
            },
            {
              question: 'PE 80 doğalgaz borularının avantajları nelerdir?',
              answer:
                'PE 80 doğalgaz boruları, yüksek basınç dayanımı, esneklik, kimyasal direnç, hafiflik ve kolay montaj gibi avantajlara sahiptir. Bu özellikleri ile doğalgaz hatlarında güvenli ve uzun ömürlü çözümler sunar.',
            },
            {
              question: 'PE 80 doğalgaz borularının servis ömrü ne kadardır?',
              answer:
                'PE 80 doğalgaz borularının servis ömrü 50 yıldır. Yüksek kaliteli malzemeler ve üretim teknikleri sayesinde bu borular, uzun ömürlü ve güvenli çözümler sunar.',
            },
            {
              question: 'PE 80 doğalgaz borularının fiyat listesine nasıl ulaşabilirim?',
              answer:
                'PE 80 doğalgaz borularının 2024 Fiyat Listesi için internet sitemizde yer alan Fiyat Listesini inceleyebilirsiniz.',
            },
            {
              question: 'PE 80 doğalgaz boruları kimyasallara karşı dayanıklı mıdır?',
              answer:
                'Evet, PE 80 doğalgaz boruları kimyasal maddelere karşı yüksek direnç sağlar ve korozyona karşı koruma sunar.',
            },
            {
              question: 'PE 80 doğalgaz borularının teknik özellikleri nelerdir?',
              answer:
                'PE 80 doğalgaz boruları, yüksek basınç dayanımı, esneklik, kimyasal direnç ve uzun ömür gibi teknik özelliklere sahiptir. Detaylı teknik özellikler için internet sitemizde yer alan Fiyat Listesini inceleyebilirsiniz.',
            },
            {
              question: 'PE 80 doğalgaz boruları nasıl temin edebilirim?',
              answer:
                "PE 80 doğalgaz borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
            },
          ],
          fittings: [
            {
              title: 'PE 80 Eşit Te',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'PE 80 Eşit Te',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Redüksiyon',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'PE 80 Redüksiyon',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Semer',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 4.png',
              alt: 'PE 80 Semer',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Dirsekler',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'PE 80 Dirsekler',
              category: 'Fittings',
            },
            {
              title: 'PE 80 İnegal Te',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'PE 80 İnegal Te',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Manşon',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 4.png',
              alt: 'PE 80 Manşon',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Körtapa',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'PE 80 Körtapa',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Flanş Adaptörü',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'PE 80 Flanş Adaptörü',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Dizayn Jeotermal Boru',
        description:
          'Dizayn Jeotermal Boruları, sıcak ve soğuk akışkanların ısı transferini engelleyen kompozit borulardır.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/Jeotermal/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/Jeotermal/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/Jeotermal/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/Jeotermal/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU.png',
        link: '/tr/urunler/altyapi-boru-sistemleri/jeotermal-boru',
        highlights: [
          { title: 'Yüksek Isı Dayanımı', icon: '/icons/high-temperature.png' },
          {
            title: 'Korozyona Dayanıklı',
            icon: '/icons/corrosion.png',
          },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
        ],
        productDetails: {
          title: 'Dizayn Jeotermal Boru',
          description:
            'Sıcak veya soğuk akışkanın ısı transferini engelleyecek özellikte imal edilmiş borulardır. Boru değişik malzeme katmanlarından oluştuğu için kompozit boru sınıfına girmektedir. Jeotermal borular üç katmanlıdır. İçteki taşıyıcı boru, arada yalıtım malzemesi olarak Poliüretan katman (PUR) ve koruyucu kılıf olarak en dışta Polietilen (PE) borudan oluşmaktadır. Taşıyıcı boru malzemesi kullanım sıcaklıklarına göre farklı olabilmektedir. PolipropilenRandom (PPr) boru 70 °C sıcaklık ve altında, 140 °C ve altında ise Çelik boru kullanılmaktadır. Sunmuş olduğu teknik ve maliyet avantajları sayesinde Camyünü izolasyonlu boruların dezavantajlarını ortadan kaldırmıştır.',
          features: [
            {
              title: 'Korozyona Karşı Yüksek Dayanım',
              icon: '/icons/corrosion.png',
              alt: 'Corrosion Resistance',
              description:
                'Polietilen kılıf boru sayesinde yüksek korozyon direnci sağlar ve nemli ortamlarda uzun ömürlüdür.',
            },
            {
              title: 'Uzun Ömür',
              icon: '/icons/durable.png',
              alt: 'Durability',
              description:
                'Jeotermal borular, dış etkilere karşı izolasyon ömrü en az 30 yıl olan yüksek kaliteli poliüretan kullanılarak üretilir.',
            },
            {
              title: 'Yüksek Isı Dayanımı',
              icon: '/icons/heat-proof.png',
              alt: 'Heat Resistance',
              description:
                "140°C'ye kadar sıcaklıklarda kullanılabilen taşıyıcı borular, çeşitli yüksek sıcaklık uygulamaları için idealdir.",
            },
            {
              title: 'Düşük Isı İletkenliği',
              icon: '/icons/low-temperature.png',
              alt: 'Low Thermal Conductivity',
              description:
                'PUR yalıtım malzemesi, düşük ısı iletkenliği ile yüksek enerji verimliliği sağlar.',
            },
            {
              title: 'Deprem Dayanıklılığı',
              icon: '/icons/earthquake-resistant.png',
              alt: 'Earthquake Resistance',
              description:
                'Esnek yapısı sayesinde jeotermal borular, deprem gibi yer hareketlerinden etkilenmez ve güvenli bir performans sunar.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/JEOTERMAL/JEOTERMAL.png',
              alt: 'Dizayn Jeotermal Boru',
              description: 'Dizayn Jeotermal Boru',
            },
            {
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 3.png',
              alt: 'Dizayn Jeotermal Boru',
              description: 'Dizayn Jeotermal Boru',
            },
            {
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 4.png',
              alt: 'Dizayn Jeotermal Boru',
              description: 'Dizayn Jeotermal Boru',
            },
          ],
          headers: [
            {
              title: '<b>Jeotermal Boru</b> ve Ek Parçaları',
              description:
                'Jeotermal borular, üç katmanlı kompozit yapısı ile yüksek ısı dayanımı ve uzun ömür sunar. 140°C sıcaklığa kadar kullanılabilen bu borular, bölgesel ısıtma ve jeotermal enerji uygulamalarında ideal çözümler sunar.',
            },
            {
              title: 'Jeotermal Boru <b>Avantajları</b>',
              description:
                'Jeotermal borular, yüksek korozyon dayanımı, düşük ısı iletkenliği ve yüksek sıcaklık dayanımı gibi özellikleri ile uzun ömürlü ve güvenilir performans sağlar.',
            },
            {
              title: 'Jeotermal Boru <b>Nerelerde Kullanılır?</b>',
              description:
                'Jeotermal borular, bölgesel ısıtma, jeotermal enerji uygulamaları ve kojenerasyon sistemlerinde güvenle kullanılabilir.',
            },
            {
              title: 'Jeotermal Boru <b>Teknik Özellikleri</b>',
              description:
                "Jeotermal borular, üç katmanlı kompozit yapısı ile yüksek dayanıklılık ve düşük ısı iletkenliği sağlar. Teknik özellikler şunlardır:\n<ul><li><b>Çalışma Sıcaklığı</b>: 140°C'ye kadar sıcaklık dayanımı.</li><li><b>Yalıtım Malzemesi</b>: Poliüretan (PUR).</li><li><b>Kılıf Malzemesi</b>: Polietilen (PE).</li></ul>",
            },
            {
              title: 'Jeotermal Boru <b>Montaj ve Uygulama</b>',
              description:
                'Jeotermal boruların montajında dikkat edilmesi gereken noktalar ve uygulama yöntemleri. Doğru montaj teknikleri ile boruların performansını maksimum seviyede tutabilirsiniz.',
            },
            {
              title: 'Jeotermal Boru <b>Fiyat Listesi</b>',
              description:
                'Jeotermal boruların 2024 Fiyat Listesi için internet sitemizde yer alan Fiyat Listesini inceleyebilirsiniz. Geniş çap seçenekleri ve uygun fiyatları ile projelerinizde ekonomik çözümler sunar.',
            },
          ],
          faqs: [
            {
              question: 'Jeotermal borular hangi sıcaklıklarda kullanılabilir?',
              answer:
                "Jeotermal borular, 140°C'ye kadar olan sıcaklıklarda güvenle kullanılabilir.",
            },
            {
              question: '140°C üzerindeki sıcaklıklarda jeotermal borular kullanılabilir mi?',
              answer:
                'Evet, 140°C üzerindeki sıcaklıklar için tasyünü-PUR kombinasyonu ile kullanılabilmektedir.',
            },
            {
              question: 'Jeotermal borular buhar taşımada kullanılabilir mi?',
              answer: 'Evet, içi çelik olan jeotermal borular buhar taşımada kullanılabilir.',
            },
            {
              question: 'Jeotermal borular soğuksu hatlarında kullanılabilir mi?',
              answer:
                "Evet, ön izolasyonlu borular soğuksu hatlarında da kullanılabilir. Chiller'lerde soğutulmuş akışkan da ısınmadan taşınabilir.",
            },
            {
              question: 'Jeotermal borularda kompansatör kullanılır mı?',
              answer:
                'Ön izolasyonlu döşeme tekniği uygulandığında, toprak sürtünme kuvvetleri sayesinde kompansatörlere ihtiyaç kalmaz.',
            },
            {
              question: 'Korona işlemi nedir? Olmasa olmaz mı?',
              answer:
                "Korona işlemi, PUR'un hem çelik hem de PE ile kimyasal reaksiyona girerek bağ yapmasını sağlar. Korona yapılmadığı takdirde kompansatör kullanılması gerekmektedir.",
            },
            {
              question: 'Galeri açmaya gerek var mıdır?',
              answer:
                'Jeotermal borular direkt toprağa gömüldüğünden galeri açmaya gerek yoktur. Açılması durumunda uzama dikkate alınmalıdır.',
            },
          ],
          fittings: [
            {
              title: 'Jeotermal Eşit Te',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 2.png',
              alt: 'Jeotermal Eşit Te',
              category: 'Fittings',
            },
            {
              title: 'Jeotermal Redüksiyon',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 3.png',
              alt: 'Jeotermal Redüksiyon',
              category: 'Fittings',
            },
            {
              title: 'Jeotermal Semer',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 4.png',
              alt: 'Jeotermal Semer',
              category: 'Fittings',
            },
            {
              title: 'Jeotermal Dirsekler',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 2.png',
              alt: 'Jeotermal Dirsekler',
              category: 'Fittings',
            },
            {
              title: 'Jeotermal İnegal Te',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 3.png',
              alt: 'Jeotermal İnegal Te',
              category: 'Fittings',
            },
            {
              title: 'Jeotermal Manşon',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 4.png',
              alt: 'Jeotermal Manşon',
              category: 'Fittings',
            },
            {
              title: 'Jeotermal Körtapa',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 2.png',
              alt: 'Jeotermal Körtapa',
              category: 'Fittings',
            },
            {
              title: 'Jeotermal Flanş Adaptörü',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 3.png',
              alt: 'Jeotermal Flanş Adaptörü',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Dizayn Deniz Deşarj Boruları',
        description:
          'Dizayn Deniz Deşarj Boruları, deniz, göl ve nehirlerde atık suyun güvenli ve verimli bir şekilde tahliyesi için tasarlanmıştır.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/Deniz Desarj/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/Deniz Desarj/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/Deniz Desarj/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/Deniz Desarj/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU.png',
        link: '/tr/urunler/altyapi-boru-sistemleri/deniz-desarj-boru',
        highlights: [
          { title: 'Yüksek Dayanıklılık', icon: '/icons/durable.png' },
          { title: 'Korozyon Direnci', icon: '/icons/corrosion.png' },
          { title: 'Uzun Ömür', icon: '/icons/long-lasting.png' },
        ],
        productDetails: {
          title: 'Dizayn Deniz Deşarj Boruları',
          description:
            'Dizayn Deniz Deşarj Boruları, deniz, göl ve nehirlerde atık suyun güvenli ve verimli bir şekilde tahliyesi için tasarlanmıştır. Bu borular, korozyona ve aşınmaya karşı yüksek dayanıklılık sunar ve çeşitli su geçişleri projelerinde güvenle kullanılabilir. Esnek yapısı sayesinde borular, zorlu çevre koşullarına ve yer hareketlerine karşı dirençlidir.',
          features: [
            {
              title: 'Kimyasal Dayanıklılık',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'Deniz Deşarj Boruları, polietilenin yüksek kimyasal dayanımı sayesinde deniz tuzuna ve diğer kimyasallara karşı uzun süreli koruma sağlar.',
            },
            {
              title: 'Uzun Ömür',
              icon: '/icons/long-lasting.png',
              alt: 'Long Lifetime',
              description:
                'Bu borular, minimum 50 yıl servis ömrü ile uzun süreli ve güvenilir kullanım sunar.',
            },
            {
              title: 'Hidrolik Pürüzsüzlük',
              icon: '/icons/hydraulic.png',
              alt: 'Hydraulic Smoothness',
              description:
                'Hidrolik pürüzsüz yapısı sayesinde akışkanların daha yüksek debilerle taşınmasını sağlar ve proje maliyetlerini düşürür.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 2.png',
              alt: 'Dizayn Deniz Deşarj Boru',
              description: 'Dizayn Deniz Deşarj Boru',
            },
            {
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 3.png',
              alt: 'Dizayn Deniz Deşarj Boru',
              description: 'Dizayn Deniz Deşarj Boru',
            },
            {
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 4.png',
              alt: 'Dizayn Deniz Deşarj Boru',
              description: 'Dizayn Deniz Deşarj Boru',
            },
          ],

          headers: [
            {
              title: '<b>Dizayn Deniz Deşarj Boruları</b> ve Avantajları',
              description:
                'Dizayn Deniz Deşarj Boruları, denizlerde atık suyun çevreye zarar vermeden güvenli bir şekilde tahliyesi için kullanılan yüksek mukavemetli borulardır. Polietilen hammaddesinden üretilen bu borular, deniz tuzuna karşı dirençli olup, en az 50 yıl servis ömrü sunar. Hidrolik pürüzsüzlüğü sayesinde akışkanların daha yüksek debilerle taşınmasını sağlar ve tıkanma riskini azaltır.',
              alt: 'Dizayn Deniz Deşarj Boruları',
            },
            {
              title: 'Dizayn Deniz Deşarj Boruları <b>Üretim Özellikleri</b>',
              description:
                'Deniz Deşarj Boruları, büyük silindirler üzerinde mandrel yöntemiyle üretilir. Ekstrüder makinesinde polietilen şeritler çekilerek mandrel üzerine sarılır ve boru formu verilir. Bu borular, alın kaynaklı, ekstrüder kaynaklı ve elektrofüzyon kaynaklı birleştirmeye uygun olarak farklı formlarda üretilir. Üretim sürecinde kullanılan ileri teknoloji ve kaliteli hammaddeler, boruların yüksek performans ve dayanıklılığını garanti eder.',
            },
            {
              title: 'Dizayn Deniz Deşarj Boruları <b>Kimyasal Dayanıklılık</b>',
              description:
                'Deniz Deşarj Boruları, polietilen hammaddesi sayesinde deniz tuzuna ve çeşitli kimyasallara karşı yüksek dayanıklılık gösterir. Bu özellik, boruların uzun ömürlü olmasını ve çevre şartlarına karşı dirençli kalmasını sağlar. Kimyasal dayanıklılığı sayesinde borular, deniz suyu, tuzlu su ve diğer agresif maddelerle temas ettiğinde bile performansını korur.',
            },
            {
              title: 'Dizayn Deniz Deşarj Boruları <b>Uzun Ömür ve Dayanıklılık</b>',
              description:
                'Deniz Deşarj Boruları, minimum 50 yıl servis ömrü sunar. Polietilenin doğal dayanıklılığı ve kimyasal direnci, boruların uzun süre boyunca güvenilir bir şekilde hizmet vermesini sağlar. Bu uzun ömür, boruların bakım ve değiştirme maliyetlerini azaltarak ekonomik avantaj sağlar.',
            },
            {
              title: 'Dizayn Deniz Deşarj Boruları <b>Hidrolik Pürüzsüzlük</b>',
              description:
                'Deniz Deşarj Boruları, hidrolik pürüzsüz yapısı sayesinde akışkanların daha yüksek debilerle taşınmasını sağlar. Bu özellik, boru iç yüzeyinde minimum sürtünme ve enerji kaybı oluşturarak akışkanların daha verimli bir şekilde taşınmasını mümkün kılar. Hidrolik pürüzsüzlük, boruların tıkanma riskini azaltır ve uzun süreli verimli kullanım sunar.',
            },
            {
              title: 'Dizayn Deniz Deşarj Boruları <b>Kolay Uygulama ve Döşeme</b>',
              description:
                'Deniz Deşarj Boruları, hafif yapısı ve esnekliği sayesinde kolayca döşenebilir. Borular, deniz altına yerleştirilirken düşük yoğunluğu sayesinde su üzerinde yüzebilir ve kolayca yönlendirilebilir. Beton ağırlıklar kullanılarak deniz dibine sabitlenir. Bu sayede, boruların döşeme işlemi hızlı ve etkili bir şekilde gerçekleştirilebilir.',
            },
            {
              title: 'Dizayn Deniz Deşarj Boruları <b>Çevresel Koruma ve Sürdürülebilirlik</b>',
              description:
                'Deniz Deşarj Boruları, çevre dostu bir çözüm sunar. Ön arıtma uygulanmış kanalizasyon sularını deniz akıntısına taşıyarak suyun doğal olarak temizlenmesini sağlar. Bu yöntem, deniz ekosistemine zarar vermeden atık suyun güvenli bir şekilde bertaraf edilmesini mümkün kılar. Ayrıca, boruların uzun ömürlü ve dayanıklı yapısı, çevresel ayak izini azaltır.',
            },
            {
              title: 'Dizayn Deniz Deşarj Boruları <b>Deprem ve Yer Hareketlerine Dayanıklılık</b>',
              description:
                'Deniz Deşarj Boruları, polietilenin esnek yapısı sayesinde deprem ve yer hareketlerine karşı yüksek dayanıklılık gösterir. Borular, yer hareketleri sırasında esneyerek kırılma ve hasar riskini minimize eder. Bu özellik, boruların uzun süre boyunca güvenli ve kesintisiz bir şekilde hizmet vermesini sağlar.',
            },
          ],
          faqs: [
            {
              question: 'Deniz Deşarj Borularının hammaddesi nedir?',
              answer: 'Deniz Deşarj Boruları, polietilen (PE) hammaddesinden üretilmektedir.',
            },
            {
              question: 'Deniz Deşarj Boruları ne kadar servis ömrü sunar?',
              answer:
                'Deniz Deşarj Boruları, 0,5 bar basınç altında minimum 50 yıl servis ömrü sunar.',
            },
            {
              question: 'Deniz Deşarj Borularının kimyasal dayanıklılığı nasıldır?',
              answer:
                'Deniz Deşarj Boruları, polietilenin yüksek kimyasal dayanımı sayesinde deniz tuzuna ve diğer kimyasallara karşı dirençlidir.',
            },
            {
              question: 'Deniz Deşarj Boruları nasıl döşenir?',
              answer:
                'Deniz Deşarj Boruları, deniz altına döşenirken düşük yoğunluğu sayesinde su üzerinde yüzebilir. Beton ağırlıklar kullanılarak deniz dibine sabitlenir ve flanşlar ile birleştirilir.',
            },
            {
              question: 'Deniz Deşarj Boruları deprem ve yer hareketlerine dayanıklı mıdır?',
              answer:
                'Evet, Deniz Deşarj Boruları polietilenin esnek yapısı sayesinde deprem ve yer hareketlerine karşı yüksek dayanıklılık gösterir.',
            },
          ],
          fittings: [
            {
              title: 'Deniz Deşarj Eşit Te',
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 2.png',
              alt: 'Deniz Deşarj Eşit Te',
              category: 'Fittings',
            },
            {
              title: 'Deniz Deşarj Redüksiyon',
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 3.png',
              alt: 'Deniz Deşarj Redüksiyon',
              category: 'Fittings',
            },
            {
              title: 'Deniz Deşarj Semer',
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 4.png',
              alt: 'Deniz Deşarj Semer',
              category: 'Fittings',
            },
            {
              title: 'Deniz Deşarj Dirsekler',
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 2.png',
              alt: 'Deniz Deşarj Dirsekler',
              category: 'Fittings',
            },
            {
              title: 'Deniz Deşarj İnegal Te',
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 3.png',
              alt: 'Deniz Deşarj İnegal Te',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Dizayn Kimyasal Tanklar',
        description:
          'Dizayn Kimyasal Tanklar, korozif kimyasalların güvenli ve verimli bir şekilde depolanması için tasarlanmıştır.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/kimyasal-tanklar/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/kimyasal-tanklar/kimyasal-tanklar.png',
        link: '/tr/urunler/altyapi-boru-sistemleri/kimyasal-tanklar',
        highlights: [
          {
            title: 'Yüksek Kimyasal Dayanım',
            icon: '/icons/chemical-resistant.png',
          },
          { title: 'Hafif ve Dayanıklı', icon: '/icons/lightweight.png' },
          { title: 'Geri Dönüşümlü', icon: '/icons/recyclable.png' },
        ],
        productDetails: {
          title: 'Dizayn Kimyasal Tanklar',
          description:
            "Dizayn Kimyasal Tanklar, korozif yapıdaki asit, baz ve tuz gibi maddelerin depolanmasında kullanılabilir. Polietilen hammaddesi sayesinde yüksek kimyasal dayanım sunar ve su ile sıvı gıdaların depolanmasında da hijyenik çözümler sağlar. 1-50 m³ arası hacimlerde, Ø900 mm'den Ø3600 mm çapa kadar üretilebilir.",
          features: [
            {
              title: 'Yüksek Kimyasal Dayanım',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistant',
              description:
                'Polietilenin yüksek kimyasal dayanımı sayesinde korozif maddelere karşı dirençlidir.',
            },
            {
              title: 'Hafif ve Dayanıklı',
              icon: '/icons/lightweight.png',
              alt: 'Lightweight',
              description:
                "Metal ürünlere göre yoğunluğu 8'de 1 oranında olduğundan hafiftir ve taşıma maliyetlerini düşürür.",
            },
            {
              title: 'Hijyenik ve Güvenli',
              icon: '/icons/bacteria.png',
              alt: 'Hygienic',
              description:
                'Hijyenik özellikleri sayesinde su ve sıvı gıdaların güvenli depolanmasını sağlar.',
            },
            {
              title: 'Çevreci ve Geri Dönüşümlü',
              icon: '/icons/recyclable.png',
              alt: 'Recyclable',
              description:
                'Çevre dostu ve geri dönüştürülebilir özelliktedir, toprağı ve suyu kirletmez.',
            },
            {
              title: 'Esnek ve Dayanıklı',
              icon: '/icons/flexible.png',
              alt: 'Flexible',
              description:
                'Deprem gibi yer sarsıntılarından etkilenmez, esnek yapısı ile sarsıntıları absorbe eder.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/kimyasal-tanklar/tank.png',
              alt: 'Dizayn Kimyasal Tank',
              description: 'Dizayn Kimyasal Tank',
            },
            {
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Dizayn Kimyasal Tank',
              description: 'Dizayn Kimyasal Tank',
            },
            {
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Dizayn Kimyasal Tank',
              description: 'Dizayn Kimyasal Tank',
            },
          ],
          headers: [
            {
              title: '<b>Dizayn Kimyasal Tanklar</b> ve Ek Parçaları',
              description:
                'Dizayn Kimyasal Tanklar, korozif yapıdaki asit, baz ve tuz gibi maddelerin depolanmasında kullanılır. Polietilenin yüksek kimyasal dayanımı sayesinde uzun ömürlü ve güvenilir çözümler sunar. Dizayn Kimyasal Tanklar <b>Fiyat Listesi</b> için <b>0212 886 57 41</b> numaralı hattımızı arayarak bilgi sahibi olabilirsiniz.',
              alt: 'Dizayn Kimyasal Tanklar',
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Avantajları</b>',
              description:
                'Dizayn Kimyasal Tanklar, yüksek kimyasal dayanım, hafiflik ve dayanıklılık özellikleri ile öne çıkar. Bu özellikleri sayesinde asit, baz ve tuz gibi korozif maddelerin güvenli depolanmasını sağlar.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn Kimyasal Tanklar, korozif maddelerin yanı sıra su ve sıvı gıdaların depolanmasında da kullanılır. Kimyasal dayanımı sayesinde endüstriyel tesisler ve çeşitli depolama alanlarında güvenle kullanılabilir.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn Kimyasal Tanklarının ağırlık hesaplaması, içi boş silindir hacmi ve tankın yoğunluğu çarpılarak yapılır. Bu tankların ağırlık tablosu hazırlanırken tolerans değerleri dikkate alınmalıdır.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar Teknik <b>Özellikleri</b>',
              description:
                'Dizayn Kimyasal Tanklar, polietilen malzemeden üretilir ve yüksek kimyasal dayanım sunar. Bu tanklar, çeşitli hacim ve çaplarda üretilebilir ve korozif maddelerin depolanmasında idealdir. Yüksek esneklikleri sayesinde zorlu çevre koşullarında güvenle kullanılabilir.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Ek Parçaları</b>',
              description:
                'Dizayn Kimyasal Tank ek parçaları üstün kalitede üretilip tek tek kontrol edilerek sevk edilmektedir. Uygulama kolaylığı ve ergonomik tasarıma sahip ek parçalarımız, yüksek kalite ve uygun fiyat ekseninde siz değerli müşterilerimizin hizmetindedir. Kimyasal Tank ek parçaları, endüstriyel projelerde güvenle kullanılabilir.\n\n- Kimyasal Tank Ek Parçaları\n- Kimyasal Tank Eşit Te\n- Kimyasal Tank Redüksiyon\n- Kimyasal Tank Semer\n- Kimyasal Tank Dirsekler\n- Kimyasal Tank İnegal Te\n- Kimyasal Tank Manşon\n- Kimyasal Tank Körtapa\n- Kimyasal Tank Flanş Adaptörü\nBu ek parçaları, kimyasal tank sistemlerinizin güvenli ve dayanıklı bir şekilde birleştirilmesini sağlar.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Birleştirme Yöntemleri</b>',
              description:
                'Dizayn Kimyasal Tanklar ve ek parçaları, eritme veya mekanik ek parçalar ile bağlanır. Polietilen dışında diğer malzemelerden yapılan tanklara dıştan sıkmalı ek parçalar, flanşlar veya amaca uygun yapılmış diğer geçiş adaptörleri ile bağlanabilir. Bağlantı ek parçaları kullanılacak yerlere göre kolaylık sağlamaktadır.\n\n<b>Birleştirme Yöntemleri</b>\n- Elektrofüzyon (EF) Kaynağı: Elektrik enerjisi ile tank ve ek parça uçları eritilerek birleştirilir.\n- Alın Kaynağı: Tank uçlarının yüksek sıcaklıkta eritilerek birleştirilmesi.\n- Kaplin ile Birleştirme: Mekanik kaplin kullanılarak tank uçlarının birleştirilmesi.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description:
                'Elektrofüzyon Kaynak yönteminde, kaynak işlemi füzyon ek parçanın iç kısmındaki ısıtma rezistansları ile gerçekleştirilir. Kimyasal Tanklar, elektrofüzyon ek parçalarının içine yerleştirilir ve kaynak makinesinin uçları ek parçanın üzerindeki soketlere bağlanarak elektrik akımı ile ısıtılır. Bu yöntemle, Kimyasal Tanklar güvenli ve sağlam bir şekilde birleştirilmiş olur. Elektrofüzyon Kaynak metodu ile 20 mm çaptan 3600 mm çapa kadar olan Kimyasal Tanklar kaynatılabilir.',
            },
            {
              title: 'Dizayn Kimyasal Tanklar Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                "Alın Kaynak, Kimyasal Tanklar ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. Alın Kaynak makinesi kullanılarak, kaynatılacak olan tankların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, Kimyasal Tanklar'ın güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 3600 mm çapa kadar olan Kimyasal Tanklar kaynatılabilir.",
            },
            {
              title: 'Dizayn Kimyasal Tanklar <b>Fiyat Listesi</b>',
              description:
                'Dizayn Kimyasal Tanklar, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Kimyasal Tanklar, geniş hacim seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Kimyasal Tank avantajlarından yararlanmak ve 2024 Kimyasal Tank Fiyat Listesine ulaşmak için bizimle iletişime geçiniz. Kimyasal Tanklarımız hakkında detaylı bilgi almak için 0212 886 57 41 numaralı hattımızı arayabilirsiniz.',
            },
          ],
          faqs: [
            {
              question:
                'Dizayn Kimyasal Tanklar hangi sıcaklıktaki akışkanlara kadar kullanılabilir?',
              answer:
                'Dizayn Kimyasal Tanklar, kimyasalın türüne ve kullanım koşullarına bağlı olarak yüksek sıcaklıklarda kullanılabilir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar korozyona dayanıklı mıdır?',
              answer:
                'Evet, Dizayn Kimyasal Tanklar, polietilen malzemesi sayesinde korozyona karşı yüksek direnç gösterir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar hangi kimyasalları depolamak için uygundur?',
              answer:
                'Dizayn Kimyasal Tanklar, asit, baz ve tuz gibi korozif maddeleri güvenle depolamak için uygundur. Kimyasal dayanım tablosu, kullanılabilirlik derecelerini göstermektedir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar hijyenik midir?',
              answer:
                'Evet, Dizayn Kimyasal Tanklar hijyenik özelliklere sahiptir ve su ile sıvı gıdaların depolanmasında kullanılabilir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar nasıl birleştirilir?',
              answer:
                'Dizayn Kimyasal Tanklar elektrofüzyon, alın kaynağı ve mekanik kaplinler ile birleştirilir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar ne kadar dayanıklıdır?',
              answer:
                'Dizayn Kimyasal Tanklar, en az 50 yıl hizmet ömrü sunar ve uzun süreli projelerde güvenle kullanılabilir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar hafif midir?',
              answer:
                'Evet, Dizayn Kimyasal Tanklar hafif yapısı sayesinde kolay taşıma ve kurulum imkanı sunar.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar geri dönüştürülebilir mi?',
              answer:
                'Evet, Dizayn Kimyasal Tanklar çevreci özelliklere sahiptir ve geri dönüştürülebilir.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar için kompansatör kullanılır mı?',
              answer:
                'Dizayn Kimyasal Tanklar esnek yapısı sayesinde genellikle kompansatör kullanımı gerektirmez.',
            },
            {
              question: 'Dizayn Kimyasal Tanklar uluslararası standartlara uygun mudur?',
              answer:
                'Evet, Dizayn Kimyasal Tanklar uluslararası standartlara uygun olarak üretilmektedir ve sertifikalara sahiptir.',
            },
          ],
          fittings: [
            {
              title: 'Kimyasal Tank Eşit Te',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Kimyasal Tank Eşit Te',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Redüksiyon',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Kimyasal Tank Redüksiyon',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Semer',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-1.png',
              alt: 'Kimyasal Tank Semer',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Dirsekler',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Kimyasal Tank Dirsekler',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank İnegal Te',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Kimyasal Tank İnegal Te',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Manşon',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-1.png',
              alt: 'Kimyasal Tank Manşon',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Körtapa',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Kimyasal Tank Körtapa',
              category: 'Fittings',
            },
            {
              title: 'Kimyasal Tank Flanş Adaptörü',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Kimyasal Tank Flanş Adaptörü',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },
    ],
  },

  en: {
    superStructureProducts: [
      {
        title: 'ElitePipe',
        description:
          'ElitePipe is a safe and long-lasting pipe system with high temperature and pressure resistance. It combines the advantages of PPR, PEX, and PERT pipes to provide superior performance and durability.',
        featuredProduct: true,
        logo: '/productImages/üst yapı borular/elite-pipe-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/en/horizontal.png',
          bgImage: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/en/bg-image.png',
          PLP: 'productImages/üst yapı borular/elite-pipe-ve-ek/banner/en/PLP.png',
        },
        image: '/productImages/üst yapı borular/elite-pipe-ve-ek/elitePipeBanner.png',
        background: 'bg-background-1',
        link: '/en/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          {
            title: 'High Temperature High Pressure Resistance',
            icon: '/icons/high-pressure.png',
          },
          {
            title: 'Ease of Shipment',
            icon: '/icons/worker-pushing-a-cart.png',
          },
          {
            title: 'Breakage Resistance Even at -40 Degrees',
            icon: '/icons/durable.png',
          },
        ],
        productDetails: {
          title: 'ElitePipe',
          description:
            'ElitePipe has been developed as a result of 7 years of R&D work by our Mir R&D Company. We have created a new and unique hybrid product by optimizing the welding ability of PPR, the high temperature performance of PEX, and the elasticity of PERT. ElitePipe can be safely used in both indoor and outdoor plumbing applications.',
          features: [
            {
              title: 'High Temperature High Pressure Resistance',
              icon: '/icons/high-pressure.png',
              alt: 'High Pressure',
              description:
                'PPRC PN25: 50 Year Lifespan at 70°C 8.8 Bar / ElitePipe PN25: 50 Year Lifespan at 70°C 11 Bar.',
            },
            {
              title: 'Ease of Shipment',
              icon: '/icons/worker-pushing-a-cart.png',
              alt: 'Easy Installation',
              description: 'Can be transported by small vehicles, easily movable by one person.',
            },
            {
              title: 'Breakage Resistance Even at -40 Degrees',
              icon: '/icons/durable.png',
              alt: 'Reliability',
              description:
                'Even in cold weather conditions, it does not break or crack, making the product safe in harsh climates.',
            },
            {
              title: 'Flexible and Easy to Shape',
              icon: '/icons/flexible.png',
              alt: 'Flexible',
              description:
                'Its flexible nature and easy shaping feature simplify the installation process and reduce the need for additional parts, saving both cost and time.',
            },
            {
              title: 'High Crack Resistance',
              icon: '/icons/seal.png',
              alt: 'Crack Resistance',
              description: 'Shows excellent resistance against surface-active substances.',
            },
            {
              title: 'Welds Like PPR',
              icon: '/icons/welding.png',
              alt: 'Welding',
              description: 'Features socket fusion welding capabilities at the level of PPR pipes.',
            },
            {
              title: 'Less Need for Additional Parts',
              icon: '/icons/fittings.png',
              alt: 'Welding',
              description:
                'The need for bends and couplings has been eliminated, minimizing the need for elbows.',
            },
            {
              title: 'Prevents Waste',
              icon: '/icons/coil.png',
              alt: 'Coil',
              description: 'Being shipped in coils reduces pipe wastage to zero.',
            },
            {
              title: 'Eliminates Risks After Installation',
              icon: '/icons/plastering.png',
              alt: 'Plastering',
              description: 'More resistant to impacts that may occur during plastering.',
            },
            {
              title: 'Applications',
              icon: '/icons/application.png',
              alt: 'Application',
              description:
                'Hot-cold water plumbing, heating systems, clean water and mobile distribution lines, solar energy, cooling and ventilation systems, snow and ice melting systems.',
            },
            {
              title: 'ElitePipe System Guarantee',
              icon: '/icons/guarantee.png',
              alt: 'Guarantee',
              description:
                'Only valid with ElitePipe and FITTINGS, ElitePipe SPECIAL TEMPLATE, WELDING EQUIPMENT.',
            },
            {
              title: 'Less Material, More Savings',
              icon: '/icons/economical.png',
              alt: 'Money bag.',
              description:
                'Ease of assembly and fewer additional parts needed lead to cost and time savings.',
            },
          ],
          images: [
            {
              image:
                '/productImages/üst yapı borular/elite-pipe-ve-ek/ELİTE PİPE KANGAL BORU 2.png',
              alt: 'ElitePipe',
              description: 'ElitePipe',
            },
            {
              image: '/productImages/üst yapı borular/elite-pipe-ve-ek/ELİTE PİPE BORU GRUP.png',
              alt: 'ElitePipe',
              description: 'ElitePipe',
            },
            {
              image:
                '/productImages/üst yapı borular/elite-pipe-ve-ek/ELİTE PİPE COMPOZİT BORU GRUP.png',
              alt: 'ElitePipe',
              description: 'ElitePipe',
            },
          ],
          headers: [
            {
              title: '<b>ElitePipe</b> and Fittings',
              description:
                'Combining the best features of PPR, PEX, and PERT pipes, it offers high temperature and pressure resistance, flexibility, and breakage resistance. Fittings ensure the system works safely and efficiently, providing ease of installation and low pressure loss. Their flexible and easy-to-shape structures save time and costs. ElitePipe and fittings perform excellently in hot-cold water plumbing, heating systems, and solar energy systems. Developed with high technology and engineering expertise, this system offers users superior quality and reliability.',
            },
            {
              title: 'ElitePipe <b>Advantages</b>',
              description:
                'ElitePipe is resistant to high temperature and pressure with a lifespan of 50 years at 70°C and 11 bar pressure resistance. It offers ease of shipment in coils, can be transported by small vehicles, and is easily movable by one person. It does not break or crack even at minus 40 degrees, its flexible structure facilitates installation and reduces the need for additional parts. It shows high crack resistance against surface-active substances and can be welded easily like PPR pipes. The need for bends and couplings has been eliminated, minimizing the need for elbows. Being shipped in coils eliminates pipe wastage. More resistant to impacts that may occur during plastering. It performs excellently in hot-cold water plumbing, heating systems, clean water lines, and solar energy systems.',
            },
            {
              title: 'Where is ElitePipe Used?',
              description: ` <ul>
        <li><b>Hot-cold water plumbing</b>: Can be safely used in both hot and cold water plumbing.</li>
        <li><b>Heating systems</b>: Performs highly efficiently in combi and floor heating systems.</li>
        <li><b>Clean water and mobile distribution lines</b>: Long-lasting and durable in clean water lines and mobile distribution systems.</li>
        <li><b>Solar energy systems</b>: Highly resistant to high temperatures in solar energy systems.</li>
        <li><b>Cooling and ventilation systems</b>: Offers an effective solution in cooling and ventilation plumbing.</li>
        <li><b>Snow and ice melting systems</b>: Suitable for use in snow and ice melting systems during the winter months.</li>
      </ul>`,
            },
            {
              title: 'ElitePipe Weight Table',
              description:
                'Design Group ElitePipe pipes are known for their durability and performance. The weights of these pipes are proportional to the materials and production techniques used. ElitePipe pipes have varying weights according to their internal and external diameters.',
            },
            {
              title: 'Technical Features of ElitePipe',
              description: `
                        <ul>
          <li><b>Color</b>: Ice Blue</li>
          <li><b>Production Diameter Range</b>: Ø 16mm to Ø 63mm</li>
          <li><b>Coil Pipe Diameters</b>: Ø16mm, Ø20mm, Ø25mm, and Ø32mm</li>
          <li><b>Straight Pipe Diameters</b>: Ø 16mm to Ø63mm</li>
          <li><b>Length Pipe Diameters</b>: Ø 20mm to Ø63mm</li>
          <li><b>Thermal Conductivity Coefficient</b>: 0.37±0.02 W/m.K</li>
          <li><b>Thermal Expansion Coefficient</b>: ~ 0.2 mm/mK</li>
          <li><b>Maximum Operating Temperature</b>: 95°C</li>
          <li><b>50-Year 70°C Pressure Resistance</b>: 11 Bar</li>
          <li><b>Recommended Welding Method</b>: Socket Fusion Welding</li>
        </ul>
                      `,
            },
            {
              title: 'ElitePipe Fittings',
              description: `<ul>
          <li><b>Elbow</b>: Used in pipe direction changes, the elbow offers high breakage and cracking resistance. ElitePipe elbows provide long-lasting and secure connections.</li>
          <li><b>Coupling</b>: Used in pipe joints, the coupling is pressure resistant and provides a leak-proof connection. ElitePipe couplings increase the reliability of the plumbing.</li>
          <li><b>Tee</b>: Used to change the direction of flow or to join two pipes, tee pieces enhance the efficiency of the system. ElitePipe tee pieces offer quality and safe connections.</li>
          <li><b>Reducer</b>: Used to join pipes of different diameters, reducer pieces provide flexible and secure connections. ElitePipe reducers offer ease of assembly and system integrity.</li>
          <li><b>Coupling</b>: Used to join pipe ends, couplings provide a flexible and leak-proof connection. ElitePipe couplings speed up the assembly process and reduce costs.</li>
          <li><b>Clamp</b>: Used to secure pipes and facilitate their assembly, clamps enhance the stability of the plumbing. ElitePipe clamps are durable and long-lasting.</li>
          <li><b>Flange</b>: Used in the connection of large diameter pipes, flanges provide ease of disassembly and assembly. ElitePipe flanges offer high strength and reliable connections.</li>
          <li><b>Adapter</b>: Used to connect different types of pipes or fittings, adapters increase the system's flexibility. ElitePipe adapters offer ease of assembly and reliability.</li>
        </ul>
      <p>ElitePipe and its fittings perform excellently in water plumbing, heating systems, clean water and mobile distribution lines, solar energy systems, and cooling and ventilation systems. These parts ensure the efficient and safe operation of the ElitePipe system, providing ease of assembly and low pressure loss. Additionally, their flexible and easy-to-shape structures save time and costs.</p><p><b>For more details and information, please refer to the product catalog at the top of the product page.</b></p>`,
            },
            {
              title: 'ElitePipe Joining Methods',
              description: `<p>Design Pipe develops leading technologies in pipe welding. Here are the ElitePipe joining methods:</p>
        <ul>
          <li><b>Socket Fusion Welding</b>: Used for joining thin-walled pipes smoothly and robustly. The hole in the welding template that allows the melt to escape during welding indicates that the pipe has reached the welding temperature.</li>
          <li><b>Butt Welding</b>: Used to join thick-walled pipes for applications requiring high strength. A ceramic system is used to prevent the inner diameter of the pipe from narrowing.</li>
          <li><b>Electrofusion Welding</b>: Uses electric current to join pipes and fittings. Suitable for applications requiring high pressure and temperature resistance.</li>
          <li><b>Mechanical Joining Method</b>: Uses fittings made from metal alloys or polymers like PPSU to join pipes. This method is a costly joining technique.</li>
        </ul>
        <p>ElitePipe joining methods ensure long-lasting and safe installation of pipes. These methods, which reduce plumbing costs and provide ease of work, are patented.</p>
        <p><b>For more details and current information, please refer to the product catalog at the top of the product page.</b></p>`,
            },
            {
              title: 'ElitePipe Welding Method: Butt Welding',
              description:
                '<b>Butt Welding</b>, one of the most common methods used in joining ElitePipe pipes and fittings. Using a butt welding machine, the ends of the pipes to be welded are shaved and then pushed towards each other under a certain heat with pressure. This method ensures that ElitePipe pipes are joined securely and robustly. The butt welding method can weld ElitePipe pipes up to 32 mm in diameter.',
            },
            {
              title: 'ElitePipe Price List',
              description:
                'Design Group ElitePipe pipes reach you with high quality and competitive pricing. ElitePipe pipes, with a wide range of diameter options, low cost, ease of transport, and teamwork during the production process, offer the most suitable product for you. To benefit from the advantages of ElitePipe pipes and access the 2024 ElitePipe Pipe Price List, please contact us.\n\nFor detailed information about our ElitePipe pipes, please click on our price list.',
            },
          ],

          faqs: [
            {
              question: 'What material are ElitePipe pipes made from?',
              answer:
                'ElitePipe pipes are a hybrid structure that combines the best features of PPR (Polypropylene Random Copolymer), PEX (Cross-Linked Polyethylene), and PERT (High Temperature Resistant Polyethylene). This combination of materials provides the pipes with high temperature and pressure resistance, flexibility, and longevity.',
            },
            {
              question: 'What are the applications for ElitePipe pipes?',
              answer: ` <ul>
          <li><b>Hot-cold water plumbing</b>: ElitePipe pipes provide superior performance in both hot and cold water plumbing and can be safely used.</li>
          <li><b>Heating systems</b>: ElitePipe pipes provide high efficiency in combi and floor heating systems.</li>
          <li><b>Clean water and mobile distribution lines</b>: ElitePipe is long-lasting and durable in clean water lines and mobile distribution systems.</li>
          <li><b>Solar energy systems</b>: ElitePipe pipes stand out for their high temperature resistance in solar energy systems.</li>
          <li><b>Cooling and ventilation systems</b>: ElitePipe offers an effective solution in cooling and ventilation plumbing.</li>
          <li><b>Snow and ice melting systems</b>: ElitePipe pipes are suitable for use in snow and ice melting systems during the winter months and perform highly.</li>
        </ul>
        <p>ElitePipe pipes are a reliable choice in your plumbing projects due to their wide range of uses and superior performance characteristics. For more information and details, please refer to our product catalog.</p>`,
            },
            {
              question: 'What diameters and pressure classes are ElitePipe pipes available in?',
              answer: `<p>ElitePipe pipes are available in various diameters and pressure classes. This variety offers suitable solutions for different plumbing needs:</p>
        <ul>
          <li><b>Diameter Range</b>: Available in a wide range of diameters from Ø 16mm to Ø 63mm.</li>
          <li><b>Coil Pipe Diameters</b>: Coil pipes in diameters Ø16mm, Ø20mm, Ø25mm, and Ø32mm.</li>
          <li><b>Straight Pipe Diameters</b>: Straight pipes from Ø 16mm to Ø63mm.</li>
          <li><b>Length Pipe Diameters</b>: Length pipes from Ø 20mm to Ø63mm.</li>
          <li><b>Pressure Classes</b>: 11 bar (50 years lifespan at 70°C).</li>
        </ul>
        <p>ElitePipe pipes, with their high temperature and pressure resistance, are offered in various diameters to meet all kinds of plumbing needs. For current information on diameters and pressure classes, please refer to our product catalog.</p>`,
            },
            {
              question: 'What are the joining methods for ElitePipe pipes?',
              answer: ` <p>ElitePipe pipes are joined using various welding methods for high performance and long-lasting connections. Here are the ElitePipe joining methods:</p>
        <ul>
          <li><b>Socket Fusion Welding</b>: Used for joining thin-walled pipes smoothly and robustly. The hole in the welding template that allows the melt to escape during welding indicates that the pipe has reached the welding temperature.</li>
          <li><b>Butt Welding</b>: Used to join thick-walled pipes for applications requiring high strength. A ceramic system is used to prevent the inner diameter of the pipe from narrowing.</li>
          <li><b>Electrofusion Welding</b>: Uses electric current to join pipes and fittings. Ideal for applications requiring high pressure and temperature resistance.</li>
          <li><b>Mechanical Joining Method</b>: Uses fittings made from metal alloys or polymers like PPSU to join pipes. This method is a costly joining technique.</li>
        </ul>
        <p>ElitePipe joining methods offer economical solutions that ensure long-lasting and safe installation of pipes, reducing plumbing costs and providing ease of work. These methods are produced to high quality standards and are patented.</p>
        <p><b>For more details and current information, please refer to the product catalog at the top of the product page.</b></p>`,
            },
            {
              question: 'Are ElitePipe pipes resistant to chemicals?',
              answer: `<h2>Are ElitePipe Pipes Chemically Resistant?</h2>
        <p>ElitePipe pipes offer high resistance to various chemicals. This feature ensures the pipes are long-lasting and safe to use even in harsh environmental conditions.</p>
        <p>ElitePipe pipes exhibit excellent resistance against chemicals such as surfactants, alcohols, soaps, and paints. This chemical resistance prevents deformation of the pipes under internal and external stresses, minimizing the risk of cracking.</p>
        <p>The chemical resistance of ElitePipe provides a reliable solution in plumbing systems and offers superior performance in various applications.</p>
        <p><b>For more information and details, please refer to the product catalog at the top of the product page.</b></p>`,
            },
            {
              question: 'What are the advantages of ElitePipe pipes?',
              answer: `<ul>
          <li><b>High Temperature and Pressure Resistance</b>: ElitePipe pipes offer superior durability against high temperatures and pressures, with a lifespan of 50 years at 70°C and 11 bar pressure resistance.</li>
          <li><b>Ease of Shipment in Coils</b>: Can be transported by small vehicles, easily movable by one person, and accelerates the installation process.</li>
          <li><b>Breakage Resistance Even at Minus 40 Degrees</b>: Does not break or crack even in cold weather conditions, making the product safe in various climates.</li>
          <li><b>Flexible and Easy to Shape</b>: Facilitates installation and reduces the need for additional parts, thus saving time and costs.</li>
          <li><b>High Crack Resistance</b>: Shows high resistance against surface-active substances, minimizing deformation and the risk of cracking.</li>
          <li><b>Welds Like PPR</b>: Features socket fusion welding capabilities at the level of PPR pipes.</li>
          <li><b>Less Need for Additional Parts</b>: The need for bends and couplings has been eliminated, minimizing the need for elbows.</li>
          <li><b>Prevents Waste</b>: Being shipped in coils eliminates pipe wastage.</li>
          <li><b>Eliminates Risks After Installation</b>: More resistant to impacts that may occur during plastering.</li>
        </ul>
        <p>ElitePipe pipes are a reliable choice in your plumbing projects due to their wide range of uses and superior performance characteristics. For more information and details, please refer to our product catalog.</p>`,
            },
            {
              question: 'How long do ElitePipe pipes last?',
              answer: `  <h2>How Long Do ElitePipe Pipes Last?</h2>
        <p>ElitePipe pipes are produced with superior material quality and advanced technology. Therefore, they perform durably against high temperatures and pressures. ElitePipe pipes stand out in the industry with a lifespan of 50 years at 70°C and 11 bar pressure resistance.</p>
        <p>The longevity of ElitePipe pipes offers a reliable solution in water plumbing, heating systems, clean water lines, and other applications. This durability ensures that users experience a trouble-free usage experience for many years.</p>
        <p><b>For more information and details, please refer to the product catalog at the top of the product page.</b></p>
              `,
            },
            {
              question: 'How can I access the price list for ElitePipe pipes?',
              answer:
                'You can review the product catalog for the 2024 Price List for ElitePipe pipes.',
            },
            {
              question: 'What are the technical specifications of ElitePipe pipes?',
              answer: `
                     <ul>
          <li><b>Color</b>: Ice Blue</li>
          <li><b>Production Diameter Range</b>: Ø 16mm to Ø 63mm</li>
          <li><b>Coil Pipe Diameters</b>: Ø16mm, Ø20mm, Ø25mm, and Ø32mm</li>
          <li><b>Straight Pipe Diameters</b>: Ø 16mm to Ø63mm</li>
          <li><b>Length Pipe Diameters</b>: Ø 20mm to Ø63mm</li>
          <li><b>Thermal Conductivity Coefficient</b>: 0.37±0.02 W/m.K</li>
          <li><b>Thermal Expansion Coefficient</b>: ~ 0.2 mm/mK</li>
          <li><b>Maximum Operating Temperature</b>: 95°C</li>
          <li><b>50-Year 70°C Pressure Resistance</b>: 11 Bar</li>
          <li><b>Recommended Welding Method</b>: Socket Fusion Welding</li>
        </ul>
        <p>ElitePipe pipes offer reliable and long-lasting solutions in your plumbing projects with their superior material quality and technical features. For current technical specifications and more information, please refer to our product catalog.</p>`,
            },
            {
              question: 'How can I obtain ElitePipe pipes?',
              answer:
                'You can obtain ElitePipe pipes from authorized sellers of the Design Group or by contacting us directly.',
            },
          ],

          fittings: [],
        },
      },
      {
        title: 'Sterile Pipe',
        description:
          'Sterile Pipe is an innovative pipe system that sterilizes the water passing through it up to 99.9% by eliminating bacteria, mold, fungi, and other microbial organisms.',
        featuredProduct: true,
        logo: '/productImages/üst yapı borular/sterile-pipe/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/sterile-pipe/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/sterile-pipe/banner/en/horizontal.png',
          bgImage: '/productImages/üst yapı borular/sterile-pipe/banner/en/bg-image.png',
          PLP: '/productImages/üst yapı borular/sterile-pipe/banner/en/PLP.png',
        },
        image: '/productImages/üst yapı borular/sterile-pipe/sterilePipeBanner.png',
        background: 'bg-background-2',
        link: '/en/urunler/bina-ici-boru-sistemleri/sterilepipe',
        highlights: [
          { title: 'Antimicrobial Feature', icon: '/icons/antimicrobial.png' },
          { title: 'Long Lifespan', icon: '/icons/long-lasting.png' },
          { title: 'Healthy Water', icon: '/icons/drink-water.png' },
        ],
        productDetails: {
          title: 'Sterile Pipe',
          description:
            'SterilePipe is a product group consisting of upper segment anti-microbial PP-RC pipes and fittings, developed to keep drinking and utility waters microbiologically clean. This innovative product eliminates bacteria, mold, fungi, and other microbial organisms by 99.9%, making the water healthy without altering its taste, odor, or color. SterilePipe prevents the formation of biofilm on the inner surfaces of pipes, ensuring maximum hygiene in drinking water plumbing. Its lightweight structure, easy installation capability, and high pressure resistance make it a user-friendly and environmentally friendly solution. It offers a wide range of uses with an ideal operating temperature range from 4°C to 95°C.',
          features: [
            {
              title: 'Microbiological Cleanliness',
              icon: '/icons/bacteria.png',
              alt: 'Microbiological Cleanliness',
              description:
                'Eliminates bacteria, mold, fungi, and other microbial organisms up to 99.9%, making the water healthy.',
            },
            {
              title: 'Biofilm Prevention',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'Prevents the formation of biofilm on the inner surfaces of pipes, preventing microbiological contamination.',
            },
            {
              title: 'Wide Application Area',
              icon: '/icons/application.png',
              alt: 'Application',
              description:
                'Sterile Pipe can be used in clean water plumbing, hot and cold water lines, radiator heating systems, and many other areas.',
            },
            {
              title: 'Economical and Reliable',
              icon: '/icons/economical.png',
              alt: 'Economical',
              description:
                'Sterile Pipe offers cost savings in your projects with its economical price and long-lasting structure.',
            },
          ],

          images: [
            {
              image: '/productImages/üst yapı borular/sterile-pipe/sterile-pipe.png',
              alt: 'Sterile Pipe',
              description: 'Sterile Pipe',
            },
            {
              image: '/productImages/üst yapı borular/sterile-pipe/sterile-pipe-2.png',
              alt: 'Sterile Pipe',
              description: 'Sterile Pipe',
            },
            {
              image: '/productImages/üst yapı borular/sterile-pipe/sterile-pipe-3.png',
              alt: 'Sterile Pipe',
              description: 'Sterile Pipe',
            },
          ],

          headers: [
            {
              title: '<b>Sterile Pipe</b> and Fittings',
              description:
                'Design Group Sterile Pipe pipes are produced in diameters between 20 mm and 32 mm and various pressure classes, providing ideal solutions in areas like water networks, hot and cold water lines, and chemical industry lines. Its long-lasting and durable structure will make it an essential part of your projects. For the Sterile Pipe <b>Price List</b>, you can obtain information by calling our line at <b>0212 886 57 41</b>.',
              image: '/productImages/üst yapı borular/sterile-pipe/sterile-pipe-2.png',
              alt: 'Sterile Pipe',
            },
            {
              title: 'Advantages of Sterile Pipe',
              description:
                'Design Group Sterile Pipe pipes clean the water by killing 99.9% of microorganisms in the water. It is resistant to high temperatures and pressures. It shows high resistance against chemicals. It offers superior protection against salty water, sanitary sewage wastewater, corrosive acids, bases, and salts. These <b>features</b> make Sterile Pipe pipes long-lasting, reliable, and high-performing.',
            },
            {
              title: 'Where is Sterile Pipe Used?',
              description:
                'Design Group Sterile Pipe pipes, with their superior hygiene standards and quality, are the preferred product in prestigious projects such as hospitals, hotels, municipal and government buildings, and universities. They can be safely used in water networks, hot and cold water lines, and chemical industry lines. Sterile Pipe pipes offer reliable and long-lasting solutions in your projects. For the Sterile Pipe <b>Price List</b>, please contact us.',
            },
            {
              title: 'Sterile Pipe Weight Table',
              description:
                'The weight calculation of Design Group Sterile Pipe pipes is made by multiplying the volume of the hollow cylinder by the density of the pipe. The weights of these pipes are proportional to the materials and production techniques used. ElitePipe pipes have varying weights according to their internal and external diameters.',
            },
            {
              title: 'Technical Features of Sterile Pipe',
              description:
                'As Design Group, we continuously monitor developments and conduct research in our quality laboratories. Our Sterile Pipe pipes are produced in the diameter range of 20 mm to 32 mm with high technology. Thanks to the <b>features</b> of polyethylene, it is one of the most suitable alternatives for use in pressurized water systems. It can be used in underground and above-ground pressurized water network lines, sea discharge projects, and industrial applications.\n\nSterile Pipe pipes are easier to process, install, and save costs compared to rigid concrete pipes. Structurally, they are designed to withstand impacts and cold weather conditions. In marine applications, long lengths of pipes can be assembled onshore and then placed in position.',
            },
            {
              title: 'Sterile Pipe Fittings',
              description:
                'Design Group Sterile Pipe <b>fittings</b> are produced with high quality and individually checked before shipment. Our fittings, which offer ease of application and ergonomic design, are at your service with high quality and reasonable prices. Sterile Pipe <b>fittings</b> can be safely used in pressurized water systems and other industrial applications.\n\n- Sterile Pipe <b>fittings</b>\n- Sterile Pipe Equal Tee\n- Sterile Pipe Reduction\n- Sterile Pipe Saddle\n- Sterile Pipe Elbows\n- Sterile Pipe Inegal Tee\n- Sterile Pipe Sleeve\n- Sterile Pipe Blind Plug\n- Sterile Pipe Flange Adapter\nThese <b>fittings</b> ensure the safe and durable connection of your Sterile Pipe piping systems.',
            },
            {
              title: 'Sterile Pipe Joining Methods',
              description:
                'Design Group Sterile Pipe pipes and fittings are joined by melting them together or by mechanical fittings. Pipes made from materials other than polyethylene can be connected using external clamp fittings, flanges, or other suitable transition adapters. Connection fittings provide convenience depending on the place of use.\n\n<b>Joining Methods</b>\n- Electrofusion (EF) Welding: The ends of the pipe and fitting are melted using electrical energy for joining.\n- Butt Welding: The ends of the pipe are melted at high temperatures for joining.\n- Coupling Joining: The ends of the pipes are joined using a mechanical coupling.',
            },
            {
              title: 'Sterile Pipe Welding Method: Electrofusion Welding',
              description:
                '<b>Electrofusion Welding</b> method involves the welding process being carried out with heating resistors inside the fusion fitting. Sterile Pipe pipes are placed inside the electrofusion fittings, and the ends of the welding machine are connected to the sockets on the fitting and heated with electric current.\n\nThis method ensures that Sterile Pipe pipes are joined securely and robustly. <b>Electrofusion Welding</b> method can weld Sterile Pipe pipes from 16 mm to 63 mm in diameter.',
            },
            {
              title: 'Sterile Pipe Welding Method: Butt Welding',
              description:
                '<b>Butt Welding</b>, one of the most common methods used in joining Sterile Pipe pipes and fittings. Using a butt welding machine, the ends of the pipes to be welded are shaved and then pushed towards each other under a certain heat with pressure. This method ensures that Sterile Pipe pipes are joined securely and robustly. The butt welding method can weld Sterile Pipe pipes up to 63 mm in diameter.',
            },
            {
              title: 'Sterile Pipe Price List',
              description:
                'Design Group Sterile Pipe pipes reach you with high quality and competitive pricing. Sterile Pipe pipes, with a wide range of diameter options, low cost, ease of transport, and teamwork during the production process, offer the most suitable product for you. To benefit from the advantages of Sterile Pipe pipes and access the 2024 Sterile Pipe Pipe Price List, please contact us.\n\nFor detailed information about our Sterile Pipe pipes, please call our line at 0212 886 57 41.',
            },
          ],

          faqs: [
            {
              question: 'What material are Sterile Pipe pipes made from?',
              answer:
                'Sterile Pipe pipes are made from high-quality polyethylene. They are produced using 100% pure and original raw materials.',
            },
            {
              question: 'What are the applications for Sterile Pipe pipes?',
              answer:
                'Sterile Pipe pipes can be used in water networks, hot and cold water lines, chemical industry lines, wastewater and drainage systems, industrial applications, and underground water drainage systems.',
            },
            {
              question: 'What diameters and pressure classes are Sterile Pipe pipes available in?',
              answer:
                'Sterile Pipe pipes are available in various diameters from 16 mm to 63 mm and in different pressure classes.',
            },
            {
              question: 'What are the joining methods for Sterile Pipe pipes?',
              answer:
                'Sterile Pipe pipes can be joined using electrofusion (EF) welding, butt welding, and coupling joining methods.',
            },
            {
              question: 'Are Sterile Pipe pipes resistant to chemicals?',
              answer:
                'Yes, Sterile Pipe pipes offer high resistance against salty water, corrosive acids, bases, and other chemicals.',
            },
            {
              question: 'What are the advantages of Sterile Pipe pipes?',
              answer:
                'Sterile Pipe pipes are light, flexible, and durable. They show high resistance to rusting and are long-lasting. Additionally, they require minimal heavy equipment during transportation and installation.',
            },
            {
              question: 'How long do Sterile Pipe pipes last?',
              answer:
                'Sterile Pipe pipes, thanks to their high-quality materials and production techniques, are long-lasting and can be reliably used in your projects.',
            },
            {
              question: 'How can I access the price list for Sterile Pipe pipes?',
              answer:
                'You can obtain information about the 2024 Price List for Sterile Pipe pipes by calling our line at 0212 886 57 41.',
            },
            {
              question: 'What are the technical specifications of Sterile Pipe pipes?',
              answer:
                'Sterile Pipe pipes are produced with a wide diameter range, high pressure resistance, and smooth internal and external surfaces. For more information, please refer to our product catalog.',
            },
            {
              question: 'How can I obtain Sterile Pipe pipes?',
              answer:
                'You can obtain Sterile Pipe pipes from authorized sellers of the Design Group or by contacting us directly.',
            },
          ],
          fittings: [],
        },
      },

      {
        title: 'NanoTech Wastewater Pipe',
        description:
          'NanoTech Wastewater Pipe is a durable and long-lasting pipe system that provides sound insulation. It is an ideal solution for both indoor and outdoor wastewater discharge.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical:
            '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/vertical.jpg',
          horizontal:
            '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/en/horizontal.png',
          PLP: '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/en/PLP.png',
          bgImage: '',
        },
        image:
          '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/üst yapı borular/atık-su-nanotek-boru-ve-ek.png',
        link: '/en/urunler/bina-ici-boru-sistemleri/nanotek-ve-nanotek-premium',
        highlights: [
          {
            title: 'Sound Insulation',
            icon: '/icons/soundproof.png',
          },
          {
            title: 'High Durability',
            icon: '/icons/durability.png',
          },
          {
            title: 'Long Lifespan',
            icon: '/icons/long-lasting.png',
          },
        ],
        productDetails: {
          title: 'NanoTech Wastewater Pipe',
          description:
            'NanoTech Wastewater Pipes are specialized pipes used for indoor and outdoor wastewater discharge, providing sound insulation and high durability. The double-lipped seal system ensures leak-proof performance, while a special layer structure prevents issues related to expansion and contraction. These pipes are earthquake resistant and can be safely used underground due to their high ring stiffness.',
          features: [
            {
              title: 'Quiet Operation',
              icon: '/icons/soundproof.png',
              alt: 'Soundproof',
              description:
                'The specially developed intermediate layer prevents the formation of disturbing noises in building installations.',
            },
            {
              title: 'High Durability',
              icon: '/icons/durable.png',
              alt: 'Durability',
              description:
                'The wastewater pipes are reinforced for subsoil endurance, offering a strong and crush-resistant structure.',
            },
            {
              title: 'Long Lifespan',
              icon: '/icons/long-lasting.png',
              alt: 'Long Lasting',
              description:
                'Problems due to expansion and contraction are prevented by a special layer, ensuring a long lifespan.',
            },
            {
              title: 'Earthquake Resistant',
              icon: '/icons/earthquake-resistant.png',
              alt: 'Earthquake Resistant',
              description: 'Resistant to oscillation movements caused by earthquakes.',
            },
            {
              title: 'Chemical Resistance',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description: 'Offers high resistance against chemicals.',
            },
            {
              title: 'Easy Installation',
              icon: '/icons/easy-installation.png',
              alt: 'Easy Installation',
              description:
                'Features a double-lipped seal and a retaining ring that prevents it from coming off during installation, making installation easy.',
            },
          ],
          images: [
            {
              image:
                '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/NANOTEK ATIK SU BORU GRUP.png',
              alt: 'NanoTech Wastewater Pipe',
              description: 'NanoTech Wastewater Pipe',
            },
            {
              image:
                '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/NANOTEK ATIK SU BORU.png',
              alt: 'NanoTech Wastewater Pipe',
              description: 'NanoTech Wastewater Pipe',
            },
            {
              image:
                '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/atık-su-nanotek-boru-ve-ek-3.png',
              alt: 'NanoTech Wastewater Pipe',
              description: 'NanoTech Wastewater Pipe',
            },
          ],
          headers: [
            {
              title: '<b>NanoTech Wastewater Pipe</b> and Accessories',
              description:
                'Design Group NanoTech Wastewater Pipes are produced in diameters ranging from 50 mm to 200 mm and various pressure classes, offering ideal solutions for indoor and outdoor wastewater discharge. Their long-lasting and durable structure will make them essential for your projects. For the NanoTech Wastewater Pipes <b>Price List</b>, you can obtain information by calling our line at <b>0212 886 57 41</b>.',
              image:
                '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/NANOTEK S SIFON DİRSEKLİ 45.png',
              alt: 'NanoTech Wastewater Pipe',
            },
            {
              title: 'Advantages of NanoTech Wastewater Pipe',
              description:
                'Design Group NanoTech Wastewater Pipes are lightweight, flexible, and sturdy, making installation easy. They are resistant to high temperatures and pressures. They are rust-resistant and offer high resistance against chemicals. They provide superior protection against salty water, sanitary sewage wastewater, corrosive acids, bases, and salts. These <b>features</b> ensure long-lasting and reliable performance.',
            },
            {
              title: 'Where is NanoTech Wastewater Pipe Used?',
              description:
                'Design Group NanoTech Wastewater Pipes, with their superior performance and quality, are the preferred product in prestigious projects. They can be safely used in indoor and outdoor wastewater discharge, rainwater drainage systems, industrial applications, and underground water drainage systems. NanoTech Wastewater Pipes offer reliable and long-lasting solutions in your projects. For the NanoTech Wastewater Pipes <b>Price List</b>, please contact us.',
            },
            {
              title: 'NanoTech Wastewater Pipe <b>Weight Table</b>',
              description:
                "Design Group NanoTech Wastewater Pipes' weight calculation is performed by multiplying the volume of the hollow cylinder by the density of the pipe. NanoTech Wastewater Pipes show expansion properties due to heat treatment during the production phase. Therefore, tolerance values should be considered while preparing the size table of NanoTech Wastewater Pipes.\n\n<b>Weight Table</b> Example\n50 mm: 0.60 kg/m\n75 mm: 0.90 kg/m\n100 mm: 1.20 kg/m\n125 mm: 1.50 kg/m\n150 mm: 1.80 kg/m\n200 mm: 2.20 kg/m",
            },
            {
              title: 'Technical Features of NanoTech Wastewater Pipe',
              description:
                'At Design Group, we continuously monitor and research developments in our quality laboratories. Our NanoTech Wastewater Pipes are produced in the diameter range of 50 mm to 200 mm with high technology. Due to the properties of polypropylene, it is one of the most suitable alternatives for pressurized water systems. It is used in many areas such as underground and above-ground pressurized water network lines, marine discharge projects, and industrial applications.\n\nNanoTech Wastewater Pipes are easier to process, install, and offer cost savings compared to rigid concrete pipes. Structurally designed to withstand impacts and cold weather conditions. Long pipes for marine applications can be assembled on the shore and then positioned in place.',
            },
            {
              title: 'NanoTech Wastewater Pipe <b>Accessories</b>',
              description:
                'Design Group NanoTech Wastewater Pipe <b>accessories</b> are produced in superior quality and are individually checked before shipment. Our accessories, which are easy to apply and have an ergonomic design, are at your service with high quality and reasonable prices. NanoTech Wastewater Pipe <b>accessories</b> can be safely used in pressurized water systems and other industrial applications.\n\n- NanoTech Wastewater Pipe <b>accessories</b>\n- NanoTech Wastewater Pipe Equal Tee\n- NanoTech Wastewater Pipe Reduction\n- NanoTech Wastewater Pipe Saddle\n- NanoTech Wastewater Pipe Elbows\n- NanoTech Wastewater Pipe Unequal Tee\n- NanoTech Wastewater Pipe Sleeve\n- NanoTech Wastewater Pipe Blind Plug\n- NanoTech Wastewater Pipe Flange Adapter\nThese <b>accessories</b> ensure that your NanoTech Wastewater Pipe systems are safely and durably connected.',
            },
            {
              title: 'Joining Methods for NanoTech Wastewater Pipe',
              description:
                'Design Group NanoTech Wastewater Pipes and accessories are connected by fusion or mechanical accessories. Pipes made of materials other than polypropylene can be connected with external clamp accessories, flanges, or other appropriate transition adapters. Connection accessories make installation easier according to the location.\n\n<b>Joining Methods</b>\n- Electrofusion (EF) Welding: The ends of the pipe and fitting are melted together using electric energy.\n- Butt Welding: The ends of the pipes are melted together at high temperatures.\n- Coupling Joining: Pipes are joined using mechanical couplings.',
            },
            {
              title: 'Welding Method for NanoTech Wastewater Pipe: <b>Electrofusion Welding</b>',
              description:
                '<b>Electrofusion Welding</b> is performed by heating the resistance wires inside the fusion fitting. NanoTech Wastewater Pipes are placed inside the electrofusion fittings, and the ends of the welding machine are connected to the sockets on the fitting, heated by electric current.\n\nThis method securely and robustly joins NanoTech Wastewater Pipes. <b>Electrofusion Welding</b> can be performed on NanoTech Wastewater Pipes from a diameter of 50 mm up to 200 mm.',
            },
            {
              title: 'Welding Method for NanoTech Wastewater Pipe: <b>Butt Welding</b>',
              description:
                '<b>Butt Welding</b> is one of the most common methods used for joining NanoTech Wastewater Pipe and fittings. Using a butt welding machine, the ends of the pipes to be welded are shaved and then pushed towards each other under a certain heat and pressure. This method ensures that NanoTech Wastewater Pipes are joined safely and robustly. Butt welding can be performed on NanoTech Wastewater Pipes up to a diameter of 200 mm.',
            },
            {
              title: 'NanoTech Wastewater Pipe <b>Price List</b>',
              description:
                'Design Group NanoTech Wastewater Pipes reach you with high quality and at an affordable price. NanoTech Wastewater Pipes, with a wide range of diameters, low cost, ease of transport, and teamwork during the production process, offer you the most suitable product. Take advantage of the benefits of NanoTech Wastewater Pipes and access the 2024 NanoTech Wastewater Pipe Price List by contacting us.\n\nFor detailed information about our NanoTech Wastewater Pipes, you can call our line at 0212 886 57 41.',
            },
          ],
          faqs: [
            {
              question: 'What material are NanoTech Wastewater Pipes made from?',
              answer:
                'NanoTech Wastewater Pipes are manufactured from high-quality polypropylene material. They are produced using 100% pure and original raw material.',
            },
            {
              question: 'What are the uses of NanoTech Wastewater Pipes?',
              answer:
                'NanoTech Wastewater Pipes can be used in indoor and outdoor wastewater discharge, rainwater drainage systems, industrial applications, and underground water drainage systems.',
            },
            {
              question:
                'What diameters and pressure classes are NanoTech Wastewater Pipes available in?',
              answer:
                'NanoTech Wastewater Pipes are available in various diameters from 50 mm to 200 mm and in different pressure classes.',
            },
            {
              question: 'What are the Joining Methods for NanoTech Wastewater Pipes?',
              answer:
                'NanoTech Wastewater Pipes can be joined using electrofusion (EF) welding, butt welding, and coupling joining methods.',
            },
            {
              question: 'Are NanoTech Wastewater Pipes chemically resistant?',
              answer:
                'Yes, NanoTech Wastewater Pipes provide high resistance against salty water, corrosive acids, bases, and other chemicals.',
            },
            {
              question: 'What are the advantages of NanoTech Wastewater Pipes?',
              answer:
                'NanoTech Wastewater Pipes are lightweight, flexible, and durable. They show high resistance against rusting and are long-lasting. Moreover, they require minimal heavy equipment during transport and installation.',
            },
            {
              question: 'What is the lifespan of NanoTech Wastewater Pipes?',
              answer:
                'NanoTech Wastewater Pipes, due to high-quality materials and manufacturing techniques, are long-lasting and can be reliably used in your projects.',
            },
            {
              question: 'How can I access the price list for NanoTech Wastewater Pipes?',
              answer:
                'You can obtain information about the 2024 Price List for NanoTech Wastewater Pipes by calling our line at 0212 886 57 41.',
            },
            {
              question: 'What are the technical features of NanoTech Wastewater Pipes?',
              answer:
                'NanoTech Wastewater Pipes are produced with a wide diameter range, high pressure resistance, and smooth internal and external surface features. For more information, you can refer to our product catalog.',
            },
            {
              question: 'How can I obtain NanoTech Wastewater Pipes?',
              answer:
                'You can obtain NanoTech Wastewater Pipes from authorized sellers of Design Group or by contacting Design Group directly.',
            },
          ],
          fittings: [],
        },
        background: '',
      },

      {
        title: 'Elastica Pipe',
        description:
          'Elastica Pipe is an innovative pipe system known for its high temperature and pressure resistance, flexibility, and ease of installation. It can be safely used in both underfloor heating systems and radiator installations.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/mobil-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/en/horizontal.png',
          PLP: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/en/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/mobil-boru-ve-ek/KILIFLI ELASTICA BORU.png',
        link: '/en/urunler/bina-ici-boru-sistemleri/elastica-boru',
        highlights: [
          {
            title: 'High Temperature and Pressure Resistance',
            icon: '/icons/high-temperature.png',
          },
          {
            title: 'Flexibility and Durability',
            icon: '/icons/flexible-durable.png',
          },
          {
            title: 'Easy Installation',
            icon: '/icons/easy-installation.png',
          },
        ],
        productDetails: {
          title: 'Elastica Pipe',
          description:
            'Elastica Pipe, with its specially formulated raw material and production method, offers ease of application and maximum installation security. It features a strong chain structure that provides high temperature and pressure resistance, and it stands out with its flexible structure that facilitates easy installation. It can be safely used in both underfloor heating systems and radiator installations.',
          features: [
            {
              title: 'High Durability',
              icon: '/icons/durability.png',
              alt: 'Durability',
              description:
                'Elastica Pipe is resistant to high temperatures and pressures, offering a durable and reliable solution.',
            },
            {
              title: 'Easy Installation',
              icon: '/icons/easy-installation.png',
              alt: 'Easy Installation',
              description:
                'Its flexible structure allows for easy installation and shaping, reducing labor costs.',
            },
            {
              title: 'Chemical Resistance',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'Elastica Pipe offers high resistance to chemicals and provides protection against corrosion.',
            },
            {
              title: 'Wide Application Range',
              icon: '/icons/application.png',
              alt: 'Application',
              description:
                'Elastica Pipe can be used in various areas such as underfloor heating systems, hot and cold water lines, and industrial applications.',
            },
            {
              title: 'Economical and Reliable',
              icon: '/icons/economical.png',
              alt: 'Economical',
              description:
                'Elastica Pipe provides cost savings in your projects with its economical price and long-lasting structure.',
            },
            {
              title: 'Eco-Friendly',
              icon: '/icons/eco-friendly.png',
              alt: 'Eco-Friendly',
              description:
                'Elastica Pipe is an environmentally friendly product due to its recyclability.',
            },
          ],
          images: [
            {
              image: '/productImages/üst yapı borular/mobil-boru-ve-ek/KILIFLI ELASTICA BORU.png',
              alt: 'Elastica Pipe',
              description: 'Elastica Pipe',
            },
            {
              image: '/productImages/üst yapı borular/mobil-boru-ve-ek/PE X ELASTICA.png',
              alt: 'Elastica Pipe',
              description: 'Elastica Pipe',
            },
            {
              image: '/productImages/üst yapı borular/mobil-boru-ve-ek/mobil-boru-ve-ek-3.png',
              alt: 'Elastica Pipe',
              description: 'Elastica Pipe',
            },
          ],
          headers: [
            {
              title: '<b>Elastica Pipe</b> and Fittings',
              description:
                'Design Group Elastica Pipes are produced in diameters ranging from 16 mm to 110 mm and various pressure classes, offering ideal solutions for underfloor heating, radiator heating systems, and industrial applications. Their long-lasting and durable structure will make them essential for your projects. For the Elastica Pipe <b>Price List</b>, you can obtain information by calling our line at <b>0212 886 57 41</b>.',
              image: '/productImages/üst yapı borular/mobil-boru-ve-ek/pe-x-elastica.png',
              alt: 'Elastica Pipe',
            },
            {
              title: 'Advantages of Elastica Pipe',
              description:
                'Design Group Elastica Pipes are lightweight, flexible, and sturdy, making installation easy. They are resistant to high temperatures and pressures and offer high resistance against chemicals. They provide superior protection against salty water, sanitary sewage wastewater, corrosive acids, bases, and salts. These <b>features</b> ensure long-lasting and reliable performance.',
            },
            {
              title: 'Where is Elastica Pipe Used?',
              description:
                'Design Group Elastica Pipes, with their superior performance and quality, are the preferred product in prestigious projects. They can be safely used in underfloor heating systems, hot and cold water lines, chemical industry lines, wastewater and drainage systems, industrial applications, and underground water drainage systems. Elastica Pipes offer reliable and long-lasting solutions in your projects. For the Elastica Pipe <b>Price List</b>, please contact us.',
            },
            {
              title: 'Elastica Pipe <b>Weight Table</b>',
              description:
                'Design Group Elastica Pipes are produced in various weights for different diameters and pressure classes. The weight table is calculated by multiplying the volume of the hollow cylinder by the density of the pipe. The table is prepared considering the expansion properties of the pipes during the production phase due to heat treatment. This table displays the weight values encountered for Design Group Elastica Pipes in different diameters and pressure classes. For detailed information and other diameters, you can contact our company.',
            },
            {
              title: 'Technical Features of Elastica Pipe',
              description:
                'Design Group Elastica Pipes stand out with their high temperature and pressure resistance. Here are the technical features of Elastica Pipes: <ul> <li><b>Operating Temperature</b>: Continuous 95°C, momentary 120°C temperature resistance.</li> <li><b>Operating Pressure</b>: 11 bar pressure resistance.</li> <li><b>Material</b>: Specially formulated PE-RT (Polyethylene of Raised Temperature Resistance) material.</li> <li><b>Easy Installation</b>: Easy installation even in cold weather without heating.</li> <li><b>Durability</b>: High temperature and pressure resistance, superior resistance against breaking and cracking in cold weather.</li> <li><b>Low Friction Resistance</b>: Efficient system performance due to low friction resistance.</li> <li><b>Oxygen Barrier</b>: Oxygen-barrier model completely prevents corrosion.</li> <li><b>Self-Repairing</b>: Quickly returns to its original state after expansions during installation.</li> <li><b>Economic</b>: More economical and long-lasting compared to equivalent PEX-A pipes.</li> </ul> Elastica Pipes can be safely used in underfloor and radiator systems. With these superior technical features, Elastica Pipes stand out as the best solution. Achieve maximum safety and efficiency in your installations with Design Group Elastica Pipes.',
            },
            {
              title: 'Elastica Pipe <b>Fittings</b>',
              description:
                'Various fittings are available for Design Group Elastica Pipes. These fittings facilitate the installation of the pipes and enhance the efficiency of the systems. Here are some of the fittings used for Elastica Pipes: <ul> <li><b>Elbows</b>: Used for direction changes in the pipeline and provide flexibility during installation.</li> <li><b>Tee Pieces</b>: Allow the branching of pipe lines and direct the flow of water in various directions.</li> <li><b>Sleeves</b>: Connect two pieces of pipe and provide a leak-proof connection.</li> <li><b>Flanges</b>: Create secure connections with metal pipe connections and other system components.</li> <li><b>Blind Plug</b>: Caps pipe ends to stop the flow of water and secure the line.</li> <li><b>Reducers</b>: Enable the connection of pipes of different diameters.</li> <li><b>Saddle</b>: Supports and secures the pipeline at various points.</li> </ul> These fittings facilitate the integration of Design Group Elastica Pipes into your systems and ensure long-lasting, secure plumbing.',
            },
            {
              title: 'Elastica Pipe <b>Joining Methods</b>',
              description:
                'Design Group Elastica Pipes offer secure and robust connections with various joining methods. Here are the main joining methods used for Elastica Pipes: <ul> <li><b>Coupling Joining</b>: Mechanical coupling parts are used to easily join pipes. This method provides a quick and reliable installation option.</li> <li><b>Sleeve Joining</b>: A sleeve is used when joining two pipe pieces. This method creates a leak-proof and robust connection.</li> <li><b>Flange Connection</b>: Flanges are used for connecting with metal pipes or other system components. Flange connections offer high-pressure resistance and security.</li> <li><b>Welding Methods</b>: For joining PE-RT pipes, methods like butt welding and electrofusion welding are used. These methods provide high pressure and temperature resistance.</li> </ul> These joining methods ensure the safe and long-lasting use of Design Group Elastica Pipes in various applications. Choose the most suitable joining method for your installation needs to achieve maximum efficiency.',
            },
            {
              title: 'Elastica Pipe Welding Method: <b>Electrofusion Welding</b>',
              description:
                'The <b>electrofusion welding</b> method provides a reliable and robust method for joining Design Group Elastica Pipes. Electrofusion welding is performed by heating the resistance wires inside the pipe and fitting components with electrical energy. This process causes the surfaces of the pipes to melt and join together. <b>Easy installation</b> is facilitated by placing electrofusion fittings on the ends of the pipes and easily joining them with a welding machine. It creates a robust and leak-proof connection, ensuring the plumbing is long-lasting and reliable. Pipes joined by electrofusion are resistant to high pressures and external impacts like earthquakes. This is especially important in critical infrastructure projects. Electrofusion welding offers high safety and efficiency in the use of Design Group Elastica Pipes and is particularly preferred in projects requiring long life and reliability.',
            },
            {
              title: 'Elastica Pipe Welding Method: <b>Butt Welding</b>',
              description:
                '<b>Butt Welding</b> is one of the most common methods used for joining Elastica Pipe and fittings. Using a butt welding machine, the ends of the pipes to be welded are shaved and then pushed towards each other under a certain heat and pressure. This method ensures that Elastica Pipes are joined safely and robustly. Butt welding can be performed on Elastica Pipes up to a diameter of 110 mm.',
            },
            {
              title: 'Elastica Pipe <b>Price List</b>',
              description:
                'Design Group Elastica Pipes reach you with high quality and at an affordable price. Elastica Pipes, with a wide range of diameters, low cost, ease of transport, and teamwork during the production process, offer you the most suitable product. Take advantage of the benefits of Elastica Pipes and access the 2024 Elastica Pipe Price List by contacting us. For detailed information about our Elastica Pipes, you can call our line at 0212 886 57 41.',
            },
          ],
          faqs: [
            {
              question: 'What material are Elastica Pipes made from?',
              answer:
                'Elastica Pipes are manufactured from high-quality polyethylene material. They are produced using 100% pure and original raw material.',
            },
            {
              question: 'What are the uses of Elastica Pipes?',
              answer:
                'Elastica Pipes can be used in underfloor heating systems, hot and cold water lines, chemical industry lines, wastewater and drainage systems, industrial applications, and underground water drainage systems.',
            },
            {
              question: 'What diameters and pressure classes are Elastica Pipes available in?',
              answer:
                'Elastica Pipes are available in various diameters from 16 mm to 110 mm and in different pressure classes.',
            },
            {
              question: 'What are the Joining Methods for Elastica Pipes?',
              answer:
                'Elastica Pipes can be joined using electrofusion (EF) welding, butt welding, and coupling joining methods.',
            },
            {
              question: 'Are Elastica Pipes chemically resistant?',
              answer:
                'Yes, Elastica Pipes provide high resistance against salty water, corrosive acids, bases, and other chemicals.',
            },
            {
              question: 'What are the advantages of Elastica Pipes?',
              answer:
                'Elastica Pipes are lightweight, flexible, and durable. They show high resistance against rusting and are long-lasting. Moreover, they require minimal heavy equipment during transport and installation.',
            },
            {
              question: 'What is the lifespan of Elastica Pipes?',
              answer:
                'Elastica Pipes, due to high-quality materials and manufacturing techniques, are long-lasting and can be reliably used in your projects.',
            },
            {
              question: 'How can I access the price list for Elastica Pipes?',
              answer:
                'You can obtain information about the 2024 Price List for Elastica Pipes by calling our line at 0212 886 57 41.',
            },
            {
              question: 'What are the technical features of Elastica Pipes?',
              answer:
                'Elastica Pipes are produced with a wide diameter range, high pressure resistance, and smooth internal and external surface features. For more information, you can refer to our product catalog.',
            },
            {
              question: 'How can I obtain Elastica Pipes?',
              answer:
                'You can obtain Elastica Pipes from authorized sellers of Design Group or by contacting Design Group directly.',
            },
          ],
          fittings: [],
        },
        background: '',
      },

      {
        title: 'Triplextra Fireproof Silent Pipe Systems',
        description:
          'Triplextra Fireproof Silent Pipe Systems are highly durable and long-lasting pipe systems installed for the disposal of used water both indoors and outdoors.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical:
            '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/vertical.jpg',
          horizontal:
            '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/en/horizontal.png',
          PLP: '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/en/PLP.png',
          bgImage: '',
        },
        image:
          '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/TRİPLEX ATIK SU BORUSU.png',
        link: '/en/urunler/bina-ici-boru-sistemleri/triplex-pipe',
        highlights: [
          {
            title: 'Unbreakable Structure',
            icon: '/icons/durable.png',
          },
          {
            title: 'High Sealing',
            icon: '/icons/seal.png',
          },
          {
            title: 'Easy Installation',
            icon: '/icons/easy-installation.png',
          },
        ],
        productDetails: {
          title: 'Triplex Wastewater Pipes',
          description:
            'Triplex Wastewater Pipes are laid for the disposal of used water indoors and outdoors, made from polyolefin group raw materials. They provide leak-proof performance with a special seal and locking ring, are resistant to breakage, and offer easy installation due to their lightweight structure.',
          features: [
            {
              title: 'High Durability',
              icon: '/icons/durability.png',
              alt: 'Durability',
              description:
                'Due to the polyolefin raw material, these pipes do not break like alternative products and offer high impact resistance.',
            },
            {
              title: 'High Sealing',
              icon: '/icons/seal.png',
              alt: 'Seal',
              description: 'Provides sealing through a double-lipped seal and locking ring.',
            },
            {
              title: 'Easy Installation',
              icon: '/icons/easy-installation.png',
              alt: 'Easy Installation',
              description:
                'Easily installed due to its lightweight structure and a locking ring that prevents the seal from dislodging during installation.',
            },
            {
              title: 'Chemical Resistance',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description: 'Shows high resistance to chemicals.',
            },
            {
              title: 'Sound Insulation',
              icon: '/icons/soundproof.png',
              alt: 'Soundproof',
              description:
                "Produces much less noise compared to rigid pipes due to the material's properties.",
            },
            {
              title: 'Long Lifespan',
              icon: '/icons/long-lasting.png',
              alt: 'Long Lasting',
              description: 'Offers a guaranteed lifespan of 50 years, does not corrode or rust.',
            },
          ],
          images: [
            {
              image:
                '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/TRİPLEX ATIK SU BORUSU GRUP.png',
              alt: 'Triplex Wastewater Pipe',
              description: 'Triplex Wastewater Pipe',
            },
            {
              image:
                '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/TRİPLEX ATIK SU BORUSU.png',
              alt: 'Triplex Wastewater Pipe',
              description: 'Triplex Wastewater Pipe',
            },
            {
              image:
                '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/triplex-pipe-3.png',
              alt: 'Triplex Wastewater Pipe',
              description: 'Triplex Wastewater Pipe',
            },
          ],
          headers: [
            {
              title: '<b>Triplex Wastewater Pipe</b> and Accessories',
              description:
                'Design Group Triplex Wastewater Pipes are manufactured in diameters ranging from 50 mm to 200 mm and various pressure classes, offering ideal solutions for indoor and outdoor wastewater disposal. Their long-lasting and durable structure will make them indispensable for your projects. For the Triplex Wastewater Pipes <b>Price List</b>, you can obtain information by calling our line at <b>0212 886 57 41</b>.',
            },
            {
              title: 'Advantages of Triplex Wastewater Pipe',
              description:
                'Design Group Triplex Wastewater Pipes are lightweight, flexible, and sturdy, making installation easy. They are resistant to high temperatures and pressures. They do not rust and offer high resistance against chemicals. They provide superior protection against salty water, sanitary sewage wastewater, corrosive acids, bases, and salts. These <b>features</b> ensure long-lasting and reliable performance.',
            },
            {
              title: 'Where is Triplex Wastewater Pipe Used?',
              description:
                'Design Group Triplex Wastewater Pipes, with their superior performance and quality, are the preferred product in prestigious projects. They can be safely used in indoor and outdoor wastewater discharge, rainwater drainage systems, industrial applications, and underground water drainage systems. Triplex Wastewater Pipes offer reliable and long-lasting solutions in your projects. For the Triplex Wastewater Pipes <b>Price List</b>, please contact us.',
            },
            {
              title: 'Triplex Wastewater Pipe <b>Weight Table</b>',
              description:
                "Design Group Triplex Wastewater Pipes' weight calculation is performed by multiplying the volume of the hollow cylinder by the density of the pipe. Triplex Wastewater Pipes show expansion properties due to heat treatment during the production phase. Therefore, tolerance values should be considered while preparing the size table of Triplex Wastewater Pipes.\n\n<b>Weight Table</b> Example\n50 mm: 0.60 kg/m\n75 mm: 0.90 kg/m\n100 mm: 1.20 kg/m\n125 mm: 1.50 kg/m\n150 mm: 1.80 kg/m\n200 mm: 2.20 kg/m",
            },
            {
              title: 'Technical Features of Triplex Wastewater Pipe',
              description:
                'At Design Group, we continuously monitor and research developments in our quality laboratories. Our Triplex Wastewater Pipes are produced in the diameter range of 50 mm to 200 mm with high technology. Due to the properties of polyolefin, it is one of the most suitable alternatives for pressurized water systems. It is used in many areas such as underground and above-ground pressurized water network lines, marine discharge projects, and industrial applications.\n\nTriplex Wastewater Pipes are easier to process, install, and offer cost savings compared to rigid concrete pipes. Structurally designed to withstand impacts and cold weather conditions. Long pipes for marine applications can be assembled on the shore and then positioned in place.',
            },
            {
              title: 'Triplex Wastewater Pipe <b>Accessories</b>',
              description:
                'Design Group Triplex Wastewater Pipe <b>accessories</b> are produced in superior quality and are individually checked before shipment. Our accessories, which are easy to apply and have an ergonomic design, are at your service with high quality and reasonable prices. Triplex Wastewater Pipe <b>accessories</b> can be safely used in pressurized water systems and other industrial applications.\n\n- Triplex Wastewater Pipe <b>accessories</b>\n- Triplex Wastewater Pipe Equal Tee\n- Triplex Wastewater Pipe Reduction\n- Triplex Wastewater Pipe Saddle\n- Triplex Wastewater Pipe Elbows\n- Triplex Wastewater Pipe Unequal Tee\n- Triplex Wastewater Pipe Sleeve\n- Triplex Wastewater Pipe Blind Plug\n- Triplex Wastewater Pipe Flange Adapter\nThese <b>accessories</b> ensure that your Triplex Wastewater Pipe systems are safely and durably connected.',
            },
            {
              title: 'Joining Methods for Triplex Wastewater Pipe',
              description:
                'Design Group Triplex Wastewater Pipes and accessories are connected by fusion or mechanical accessories. Pipes made of materials other than polyolefin can be connected with external clamp accessories, flanges, or other appropriate transition adapters. Connection accessories make installation easier according to the location.\n\n<b>Joining Methods</b>\n- Electrofusion (EF) Welding: The ends of the pipe and fitting are melted together using electric energy.\n- Butt Welding: The ends of the pipes are melted together at high temperatures.\n- Coupling Joining: Pipes are joined using mechanical couplings.',
            },
            {
              title: 'Welding Method for Triplex Wastewater Pipe: <b>Electrofusion Welding</b>',
              description:
                '<b>Electrofusion Welding</b> is performed by heating the resistance wires inside the fusion fitting. Triplex Wastewater Pipes are placed inside the electrofusion fittings, and the ends of the welding machine are connected to the sockets on the fitting, heated by electric current.\n\nThis method securely and robustly joins Triplex Wastewater Pipes. <b>Electrofusion Welding</b> can be performed on Triplex Wastewater Pipes from a diameter of 50 mm up to 200 mm.',
            },
            {
              title: 'Welding Method for Triplex Wastewater Pipe: <b>Butt Welding</b>',
              description:
                '<b>Butt Welding</b> is one of the most common methods used for joining Triplex Wastewater Pipe and fittings. Using a butt welding machine, the ends of the pipes to be welded are shaved and then pushed towards each other under a certain heat and pressure. This method ensures that Triplex Wastewater Pipes are joined safely and robustly. Butt welding can be performed on Triplex Wastewater Pipes up to a diameter of 200 mm.',
            },
            {
              title: 'Triplex Wastewater Pipe <b>Price List</b>',
              description:
                'Design Group Triplex Wastewater Pipes reach you with high quality and at an affordable price. Triplex Wastewater Pipes, with a wide range of diameters, low cost, ease of transport, and teamwork during the production process, offer you the most suitable product. Take advantage of the benefits of Triplex Wastewater Pipes and access the 2024 Triplex Wastewater Pipe Price List by contacting us.\n\nFor detailed information about our Triplex Wastewater Pipes, you can call our line at 0212 886 57 41.',
            },
          ],
          faqs: [
            {
              question: 'What material are Triplex Wastewater Pipes made from?',
              answer:
                'Triplex Wastewater Pipes are manufactured from polyolefin group raw materials. This material has superior properties compared to PVC and prevents issues like breakage and leakage.',
            },
            {
              question: 'What are the uses of Triplex Wastewater Pipes?',
              answer:
                'Triplex Wastewater Pipes can be used in indoor and outdoor wastewater discharge, rainwater drainage systems, industrial applications, and underground water drainage systems.',
            },
            {
              question:
                'What diameters and pressure classes are Triplex Wastewater Pipes available in?',
              answer:
                'Triplex Wastewater Pipes are available in various diameters from 50 mm to 200 mm and in different pressure classes.',
            },
            {
              question: 'What are the Joining Methods for Triplex Wastewater Pipes?',
              answer:
                'Triplex Wastewater Pipes can be joined using electrofusion (EF) welding, butt welding, and coupling joining methods.',
            },
            {
              question: 'Are Triplex Wastewater Pipes chemically resistant?',
              answer:
                'Yes, Triplex Wastewater Pipes provide high resistance against salty water, corrosive acids, bases, and other chemicals.',
            },
            {
              question: 'What are the advantages of Triplex Wastewater Pipes?',
              answer:
                'Triplex Wastewater Pipes are lightweight, flexible, and durable. They show high resistance against rusting and are long-lasting. Moreover, they require minimal heavy equipment during transport and installation.',
            },
            {
              question: 'What is the lifespan of Triplex Wastewater Pipes?',
              answer:
                'Triplex Wastewater Pipes, due to high-quality materials and manufacturing techniques, are long-lasting and can be reliably used in your projects.',
            },
            {
              question: 'How can I access the price list for Triplex Wastewater Pipes?',
              answer:
                'You can obtain information about the 2024 Price List for Triplex Wastewater Pipes by calling our line at 0212 886 57 41.',
            },
            {
              question: 'What are the technical features of Triplex Wastewater Pipes?',
              answer:
                'Triplex Wastewater Pipes are produced with a wide diameter range, high pressure resistance, and smooth internal and external surface features. For more information, you can refer to our product catalog.',
            },
            {
              question: 'How can I obtain Triplex Wastewater Pipes?',
              answer:
                'You can obtain Triplex Wastewater Pipes from authorized sellers of Design Group or by contacting Design Group directly.',
            },
          ],
          fittings: [],
        },
        background: '',
      },

      {
        title: 'PPR Pipe',
        description:
          'PPR pipes and fittings are made from Polypropylene Random Copolymer material, which has a low melt flow index, high molecular weight, and high flexibility.',
        featuredProduct: false,
        logo: '',
        isNewTech: false,
        banner: {
          vertical: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/en/horizontal.png',
          PLP: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/en/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek.png',
        link: '/en/urunler/bina-ici-boru-sistemleri/ppr-boru',
        highlights: [
          {
            title: 'High Durability',
            icon: '/icons/high-durability.png',
          },
          {
            title: 'Easy Welding',
            icon: '/icons/easy-welding.png',
          },
          {
            title: 'Long Lifespan',
            icon: '/icons/long-lasting.png',
          },
        ],
        productDetails: {
          title: 'PPR Pipe',
          description:
            'PPR Pipes are manufactured from Polypropylene Random Copolymer material, which has a low melt flow index, high molecular weight, and high flexibility. They can be used in hot and cold water systems and are developed as an alternative to galvanized pipes with a high weldability. They are produced in diameters ranging from Ø20-125 mm.',
          features: [
            {
              title: 'High Durability',
              icon: '/icons/durability.png',
              alt: 'High Durability',
              description:
                'Resistant up to PN25 bar at 20 °C and can be used at temperatures up to 95 °C.',
            },
            {
              title: 'Easy Welding',
              icon: '/icons/welding.png',
              alt: 'Easy Welding',
              description: 'Can be easily welded and quickly laid out.',
            },
            {
              title: 'Long Lifespan',
              icon: '/icons/long-lasting.png',
              alt: 'Long Lasting',
              description: 'Comes with a 50-year lifespan guarantee.',
            },
            {
              title: 'Corrosion Resistant',
              icon: '/icons/corrosion.png',
              alt: 'Corrosion Resistant',
              description:
                'Does not corrode and does not narrow in diameter due to reaction with minerals.',
            },
            {
              title: 'Lightweight and Portable',
              icon: '/icons/lightweight.png',
              alt: 'Lightweight',
              description:
                'Weighs one eighth the weight of metal, can be transported without exhausting workers.',
            },
            {
              title: 'Rustproof',
              icon: '/icons/rustproof.png',
              alt: 'Rustproof',
              description: 'Does not rust and does not contaminate drinking water.',
            },
          ],
          images: [
            {
              image:
                '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek.png',
              alt: 'PPR Pipe',
              description: 'PPR Pipe',
            },
            {
              image:
                '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek-2.png',
              alt: 'PPR Pipe',
              description: 'PPR Pipe',
            },
            {
              image:
                '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek-3.png',
              alt: 'PPR Pipe',
              description: 'PPR Pipe',
            },
          ],
          headers: [
            {
              title: '<b>PPR Pipe</b> and Accessories',
              description:
                'Design Group PPR Pipes are manufactured in diameters ranging from 20 mm to 125 mm and various pressure classes, offering ideal solutions for hot and cold water installations. Their long-lasting and durable structure will make them indispensable for your projects. For the PPR Pipes <b>Price List</b>, you can obtain information by calling our line at <b>0212 886 57 41</b>.',
              image:
                '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek.png',
              alt: 'PPR Pipe',
            },
            {
              title: 'Advantages of PPR Pipe',
              description:
                'Design Group PPR Pipes are lightweight, flexible, and sturdy, making installation easy. They are resistant to high temperatures and pressures. They do not rust and offer high resistance against chemicals. They provide superior protection against salty water, sanitary sewage wastewater, corrosive acids, bases, and salts. These <b>features</b> ensure long-lasting and reliable performance.',
            },
            {
              title: 'Where is PPR Pipe Used?',
              description:
                'Design Group PPR Pipes, with their superior performance and quality, are the preferred product in prestigious projects. They can be safely used in hot and cold water installations, drinking water systems, chemical industry lines, and industrial applications. PPR Pipes offer reliable and long-lasting solutions in your projects. For the PPR Pipes <b>Price List</b>, please contact us.',
            },
            {
              title: 'PPR Pipe <b>Weight Table</b>',
              description:
                "Design Group PPR Pipes' weight calculation is performed by multiplying the volume of the hollow cylinder by the density of the pipe. PPR Pipes show expansion properties due to heat treatment during the production phase. Therefore, tolerance values should be considered while preparing the size table of PPR Pipes.\n\n<b>Weight Table</b> Example\n20 mm: 0.10 kg/m\n25 mm: 0.15 kg/m\n32 mm: 0.20 kg/m\n40 mm: 0.25 kg/m\n50 mm: 0.35 kg/m\n63 mm: 0.45 kg/m",
            },
            {
              title: 'Technical Features of PPR Pipe',
              description:
                'At Design Group, we continuously monitor and research developments in our quality laboratories. Our PPR Pipes are produced in the diameter range of 20 mm to 125 mm with high technology. Due to the properties of polypropylene, it is one of the most suitable alternatives for pressurized water systems. It is used in many areas such as underground and above-ground pressurized water network lines, marine discharge projects, and industrial applications.\n\nPPR Pipes are easier to process, install, and offer cost savings compared to rigid concrete pipes. Structurally designed to withstand impacts and cold weather conditions. Long pipes for marine applications can be assembled on the shore and then positioned in place.',
            },
            {
              title: 'PPR Pipe <b>Accessories</b>',
              description:
                'Design Group PPR Pipe <b>accessories</b> are produced in superior quality and are individually checked before shipment. Our accessories, which are easy to apply and have an ergonomic design, are at your service with high quality and reasonable prices. PPR Pipe <b>accessories</b> can be safely used in pressurized water systems and other industrial applications.\n\n- PPR Pipe <b>accessories</b>\n- PPR Pipe Equal Tee\n- PPR Pipe Reduction\n- PPR Pipe Saddle\n- PPR Pipe Elbows\n- PPR Pipe Unequal Tee\n- PPR Pipe Sleeve\n- PPR Pipe Blind Plug\n- PPR Pipe Flange Adapter\nThese <b>accessories</b> ensure that your PPR Pipe systems are safely and durably connected.',
            },
            {
              title: 'Joining Methods for PPR Pipe',
              description:
                'Design Group PPR Pipes and accessories are connected by fusion or mechanical accessories. Pipes made of materials other than polypropylene can be connected with external clamp accessories, flanges, or other appropriate transition adapters. Connection accessories make installation easier according to the location.\n\n<b>Joining Methods</b>\n- Electrofusion (EF) Welding: The ends of the pipe and fitting are melted together using electric energy.\n- Butt Welding: The ends of the pipes are melted together at high temperatures.\n- Coupling Joining: Pipes are joined using mechanical couplings.',
            },
            {
              title: 'Welding Method for PPR Pipe: <b>Electrofusion Welding</b>',
              description:
                '<b>Electrofusion Welding</b> is performed by heating the resistance wires inside the fusion fitting. PPR Pipes are placed inside the electrofusion fittings, and the ends of the welding machine are connected to the sockets on the fitting, heated by electric current.\n\nThis method securely and robustly joins PPR Pipes. <b>Electrofusion Welding</b> can be performed on PPR Pipes from a diameter of 20 mm up to 125 mm.',
            },
            {
              title: 'Welding Method for PPR Pipe: <b>Butt Welding</b>',
              description:
                '<b>Butt Welding</b> is one of the most common methods used for joining PPR Pipe and fittings. Using a butt welding machine, the ends of the pipes to be welded are shaved and then pushed towards each other under a certain heat and pressure. This method ensures that PPR Pipes are joined safely and robustly. Butt welding can be performed on PPR Pipes up to a diameter of 125 mm.',
            },
            {
              title: 'PPR Pipe <b>Price List</b>',
              description:
                'Design Group PPR Pipes reach you with high quality and at an affordable price. PPR Pipes, with a wide range of diameters, low cost, ease of transport, and teamwork during the production process, offer you the most suitable product. Take advantage of the benefits of PPR Pipes and access the 2024 PPR Pipe Price List by contacting us.\n\nFor detailed information about our PPR Pipes, you can call our line at 0212 886 57 41.',
            },
          ],
          faqs: [
            {
              question: 'What material are PPR Pipes made from?',
              answer:
                'PPR Pipes are manufactured from Polypropylene Random Copolymer, which has a low melt flow index, high molecular weight, and high flexibility.',
            },
            {
              question: 'What are the uses of PPR Pipes?',
              answer:
                'PPR Pipes can be used in hot and cold water installations, drinking water systems, chemical industry lines, and industrial applications.',
            },
            {
              question: 'What diameters and pressure classes are PPR Pipes available in?',
              answer:
                'PPR Pipes are available in various diameters from 20 mm to 125 mm and in different pressure classes.',
            },
            {
              question: 'What are the Joining Methods for PPR Pipes?',
              answer:
                'PPR Pipes can be joined using electrofusion (EF) welding, butt welding, and coupling joining methods.',
            },
            {
              question: 'Are PPR Pipes chemically resistant?',
              answer:
                'Yes, PPR Pipes provide high resistance against salty water, corrosive acids, bases, and other chemicals.',
            },
            {
              question: 'What are the advantages of PPR Pipes?',
              answer:
                'PPR Pipes are lightweight, flexible, and durable. They show high resistance against rusting and are long-lasting. Moreover, they require minimal heavy equipment during transport and installation.',
            },
            {
              question: 'What is the lifespan of PPR Pipes?',
              answer:
                'PPR Pipes, due to high-quality materials and manufacturing techniques, are long-lasting and can be reliably used in your projects.',
            },
            {
              question: 'How can I access the price list for PPR Pipes?',
              answer:
                'You can obtain information about the 2024 Price List for PPR Pipes by calling our line at 0212 886 57 41.',
            },
            {
              question: 'What are the technical features of PPR Pipes?',
              answer:
                'PPR Pipes are produced with a wide diameter range, high pressure resistance, and smooth internal and external surface features. For more information, you can refer to our product catalog.',
            },
            {
              question: 'How can I obtain PPR Pipes?',
              answer:
                'You can obtain PPR Pipes from authorized sellers of Design Group or by contacting Design Group directly.',
            },
          ],
          fittings: [],
        },
        background: '',
      },
    ],

    infrastructureProducts: [
      {
        title: 'SoftPower Pipe',
        description:
          'SoftPower Pipe, made from PE63 raw material, offers durability and long life with high oxidation resistance, flexibility, and easy installation.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/soft-power-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/soft-power-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/soft-power-ek/banner/tr/horizontal.png',
          PLP: '/productImages/üst yapı borular/soft-power-ek/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
        link: '/en/urunler/bina-ici-boru-sistemleri/softpower-boru',
        highlights: [
          { title: 'Impact Resistant', icon: '/icons/durable.png' },
          { title: 'Flexible', icon: '/icons/flexible.png' },
          { title: 'Cost Saving', icon: '/icons/save-time.png' },
        ],
        productDetails: {
          title: 'SoftPower Pipe',
          description:
            'SoftPower Pipe stands out with its high oxidation resistance, flexibility, and easy installation. Made from PE63 raw material, it offers high bending resistance, UV resistance, and long-lasting performance. It is safely used in drinking water and irrigation systems.',
          features: [
            {
              title: 'Advanced Production Technology',
              icon: '/icons/high-tech (1).png',
              alt: 'High Technology',
              description:
                'Design Group manufactures Soft Power pipes from start to finish with advanced technology infrastructure.',
            },
            {
              title: 'Durable and Reliable',
              icon: '/icons/reliability.png',
              alt: 'Reliability',
              description:
                'Soft Power pipes are highly durable and long-lasting, making them reliable for your projects.',
            },
            {
              title: 'High-Quality Raw Material',
              icon: '/icons/purity.png',
              alt: 'Purity',
              description:
                'Soft Power pipes are manufactured using 100% pure and original raw materials, ensuring the highest quality.',
            },
            {
              title: 'Accredited Test Laboratory',
              icon: '/icons/test.png',
              alt: 'test',
              description:
                "Design Group's accredited test laboratory offers impartial and reliable testing services with its experienced engineering staff.",
            },
            {
              title: 'Custom Solutions for Projects',
              icon: '/icons/solution.png',
              alt: 'Solution',
              description:
                'Soft Power pipes provide custom solutions for your projects, supporting you at every stage of the production process.',
            },
            {
              title: 'High Quality at an Economical Price',
              icon: '/icons/reward.png',
              alt: 'reward',
              description:
                'Soft Power pipes will become indispensable for your projects with their high quality and affordable price. Contact us for more information.',
            },
          ],
          images: [
            {
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
              alt: 'SoftPower Pipe',
              description: 'SoftPower Pipe',
            },
            {
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 3.png',
              alt: 'SoftPower Pipe',
              description: 'SoftPower Pipe',
            },
            {
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 4.png',
              alt: 'SoftPower Pipe',
              description: 'SoftPower Pipe',
            },
          ],
          headers: [
            {
              title: '<b>Soft Power Pipe</b> and Fittings',
              description:
                'Design Group Soft Power pipes are produced in diameters ranging from 20 mm to 1600 mm and various pressure classes, offering ideal solutions for agricultural irrigation, water networks, wastewater lines, and industrial applications. Their long-lasting and durable structure will make them essential for your projects. For the Soft Power Pipe <b>Price List</b>, you can obtain information by calling our line at <b>0212 886 57 41</b>.',
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
              alt: 'SoftPower Pipe',
            },
            {
              title: 'Advantages of Soft Power Pipe',
              description:
                'Design Group Soft Power pipes have a smooth inner and outer surface, are lightweight, flexible, and sturdy. They require minimal heavy equipment during transportation and installation and can be easily applied in all field conditions, even in harsh environments. Soft Power pipes show high resistance to UV rays and provide excellent durability against chemicals. They offer superior protection against salty water, sanitary sewage wastewater, corrosive acids, bases, and salts. These <b>features</b> ensure long-lasting and reliable performance, never letting you down in your projects.',
            },
            {
              title: 'Where is Soft Power Pipe Used?',
              description:
                'Design Group Soft Power pipes, with their superior performance and quality, are the preferred product in prestigious projects. They can be safely used in water networks, agricultural irrigation systems, wastewater systems, and industrial applications. Soft Power pipes offer reliable and long-lasting solutions in your projects. For the Soft Power Pipe <b>Price List</b>, please contact us.',
            },
            {
              title: 'Soft Power Pipe <b>Weight Table</b>',
              description:
                'SoftPower Pipe is known for its superior durability and flexibility. The weights of the pipes produced specifically for each project vary according to their diameter and wall thickness. For detailed weight information, please contact Design Group.',
            },
            {
              title: 'Technical Features of Soft Power Pipe',
              description:
                "SoftPower Pipe is an innovative piping system that offers high oxidation resistance, flexibility, and easy installation. Made from PE63 raw material, these pipes provide high pressure resistance and long-lasting use. Resistant to the sun's UV rays, SoftPower Pipe performs excellently in various applications such as drinking water and irrigation systems. It has high environmental crack resistance and does not crack when bent, eliminating the need for additional fittings. It can be safely used at 20°C for 50 years.",
            },
            {
              title: 'Soft Power <b>Fittings</b>',
              description:
                'SoftPower Pipe comes with various fittings, making assembly and connection processes easy. These high-quality fittings enhance the durability and performance of the pipe. Below is a list of available fittings for SoftPower Pipe: <b>Equal Tee:</b> Allows pipes to split into three directions, connects same diameters. <b>Reduction:</b> Connects pipes of different diameters, serves as a reduction function. <b>Saddle:</b> Sits on top of pipes to secure and change direction. <b>Elbows:</b> Allows pipes to change direction at specific angles, available in 90° and 45° angles. <b>Inegal Tee:</b> Allows pipes of different diameters to split into three directions. <b>Sleeve:</b> Connects two pipes end-to-end, ensures leak-proofing. <b>Blind Plug:</b> Caps pipe ends, terminating the system. <b>Flange Adapter:</b> Facilitates the connection of pipes to flanges, creating a strong and leak-proof connection. These fittings enhance the flexibility and durability of the SoftPower Pipe system while simplifying assembly and maintenance.',
            },
            {
              title: 'Soft Power Pipe <b>Joining Methods</b>',
              description:
                "SoftPower Pipe offers easy and secure installation with various joining methods. Below are the main joining methods used in the SoftPower Pipe system: <b>Easy Installation with Coupling Fittings:</b> SoftPower Pipe is suitable for installation with coupling-style mechanical fittings. This method ensures quick and secure joining of pipes and is especially ideal for flexible and easily shaped pipes. <b>Bending Resistance:</b> SoftPower Pipe does not crack when bent and maintains its pressure resistance features. This feature eliminates the need for additional fittings and simplifies the installation process. SoftPower Pipe facilitates installation and joining processes, speeding up the assembly process and reducing labor costs. Its high bending resistance and use of coupling fittings guarantee the pipe's robustness and longevity.",
            },
            {
              title: 'Soft Power Welding Method: <b>Butt Welding</b>',
              description:
                '<b>Butt Welding</b>, one of the most common methods used in joining Soft Power pipes and fittings. Using a butt welding machine, the ends of the pipes to be welded are shaved and then pushed towards each other under a certain heat with pressure. This method ensures that Soft Power pipes are joined securely and robustly. The butt welding method can weld Soft Power pipes up to 1600 mm in diameter.',
            },
            {
              title: 'Soft Power Pipe <b>Price List</b>',
              description:
                "SoftPower Pipe stands out for its high quality and durability. The price list varies based on factors such as pipe diameter, wall thickness, and length. SoftPower Pipe's competitive prices provide a cost-benefit advantage to its users with its long-lasting performance and high durability. For detailed pricing information and project-specific quotes, please contact Design Group. SoftPower Pipe, with its high performance and affordable prices, is a reliable product for your projects.",
            },
          ],
          faqs: [
            {
              question: 'What material are Soft Power pipes made from?',
              answer:
                'Soft Power Pipes are manufactured from PE63 raw material developed by the Design Technical Pipe and Components Inc. R&D team. This material offers high pressure resistance and long-lasting use. It is much more durable than the commonly used LDPE raw material in soft PE pipes on the market.',
            },
            {
              question: 'What are the uses of Soft Power pipes?',
              answer:
                'Soft Power Pipes are used in drinking water installations, drinking water lines, agricultural irrigation systems, greenhouse irrigation systems, park and garden landscape irrigation systems, and other suitable drinking water applications.',
            },
            {
              question: 'What diameters and pressure classes are Soft Power pipes available in?',
              answer:
                'Soft Power Pipes are available in various diameters and pressure classes. Products can be produced in different diameters and pressure classes specific to the project.',
            },
            {
              question: 'What are the Joining Methods for Soft Power pipes?',
              answer:
                'Soft Power Pipes are installed using coupling-style mechanical joining parts. This method ensures quick and secure joining of pipes.',
            },
            {
              question: 'Are Soft Power pipes chemically resistant?',
              answer:
                'Yes, Soft Power Pipes have high chemical resistance. They offer long-lasting and safe use with environmental crack resistance and oxidation resistance.',
            },
            {
              question: 'What are the advantages of Soft Power pipes?',
              answer:
                "Soft Power Pipes offer advantages such as high oxidation resistance, flexibility, easy installation, high bending resistance, long-lasting use, and resistance to the sun's UV rays.",
            },
            {
              question: 'What is the lifespan of Soft Power pipes?',
              answer:
                'Soft Power Pipes can be used safely at designed pressure values at 20°C for 50 years. The 50-year lifespan resistance is measured with an 80°C 1000-hour pressure test.',
            },
            {
              question: 'How can I access the price list for Soft Power pipes?',
              answer:
                'For a detailed price list and project-specific price quotes for Soft Power Pipes, please contact Design Group.',
            },
            {
              question: 'What are the technical features of Soft Power pipes?',
              answer:
                'Soft Power Pipes have technical features such as high oxidation resistance, flexibility, easy installation, high bending resistance, resistance to UV rays, and environmental crack resistance.',
            },
            {
              question: 'How can I obtain Soft Power pipes?',
              answer:
                'You can obtain Soft Power Pipes from authorized sellers of Design Group or by contacting Design Group directly.',
            },
          ],
          fittings: [],
        },
        background: '',
      },

      {
        title: 'RTP Pipe',
        description:
          'RTP (Reinforced Thermoplastic Pipe) pipes are used for the transportation of water, gas, oil, etc., thanks to their high-pressure resistance. With its strong composite structure, it withstands high pressures like steel pipes while providing all the advantages of plastic pipes with its thermoplastic material.',
        featuredProduct: false,
        logo: '',
        isNewTech: true,
        banner: {
          vertical: '/productImages/alt yapı boruları/RTP BORU/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/RTP BORU/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/RTP BORU/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
        link: '/en/urunler/altyapi-boru-sistemleri/rtp-boru',
        highlights: [
          {
            title: 'High Pressure Resistance',
            icon: '/icons/high-pressure.png',
          },
          {
            title: 'Flexibility',
            icon: '/icons/flexible.png',
          },
          {
            title: 'Long Life',
            icon: '/icons/durable.png',
          },
        ],
        productDetails: {
          title: 'RTP Pipe',
          description:
            'RTP Pipes have a three-layer hybrid structure. The inner and outer layers of the pipe are thermoplastic, while the middle layer is composed of high-strength composite material. The thermoplastic layers can be designed in different materials like HDPE, PP, PE-RT, etc., depending on project requirements. Similarly, the continuous fiber reinforcement layer in the middle layer can vary according to project requirements, including materials like glass fiber, aramid, carbon fiber, etc.',
          features: [
            {
              title: 'High Durability',
              icon: '/icons/durability.png',
              alt: 'Durability',
              description:
                'RTP Pipes withstand high pressures like steel pipes while providing all the advantages of plastic pipes with their thermoplastic material.',
            },
            {
              title: 'Easy Installation',
              icon: '/icons/easy-installation.png',
              alt: 'Easy Installation',
              description:
                'Thanks to its flexible structure, it can be easily installed and shaped, reducing labor costs.',
            },
            {
              title: 'Chemical Resistance',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'RTP Pipes are highly resistant to chemical substances and provide protection against corrosion.',
            },
            {
              title: 'Wide Range of Applications',
              icon: '/icons/application.png',
              alt: 'Application',
              description:
                'RTP Pipes can be used in many areas, including high-pressure water lines, natural gas transmission and distribution lines, oil transmission lines, geothermal water transmission lines, and offshore applications.',
            },
            {
              title: 'Economical and Reliable',
              icon: '/icons/economical.png',
              alt: 'Economical',
              description:
                'RTP Pipes provide cost savings in your projects with their economical price and long-lasting structure.',
            },
            {
              title: 'Eco-Friendly',
              icon: '/icons/eco-friendly.png',
              alt: 'Eco-Friendly',
              description:
                'RTP Pipes are environmentally friendly products suitable for recycling.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
              alt: 'RTP Pipe',
              description: 'RTP Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
              alt: 'RTP Pipe',
              description: 'RTP Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
              alt: 'RTP Pipe',
              description: 'RTP Pipe',
            },
          ],
          headers: [
            {
              title: '<b>RTP Pipe</b> and Fittings',
              description:
                'RTP Pipes are produced with high-pressure resistance and superior composite structure in diameters ranging from 90 mm to 1200 mm and in various pressure classes. RTP Pipes offer reliable solutions for transporting fluids such as water, gas, and oil. You can check our product catalog on our website for the RTP Pipe <b>Price List</b>.',
              image: '/productImages/altyapi/rtp-boru/rtp-boru.png',
              alt: 'RTP Pipe',
            },
            {
              title: 'RTP Pipe <b>Advantages</b>',
              description:
                'RTP Pipes withstand high pressures like steel pipes while providing all the advantages of plastic pipes with their thermoplastic material. With these features, RTP Pipes provide long-lasting and reliable performance.',
            },
            {
              title: 'Where is RTP Pipe <b>Used?</b>',
              description:
                'RTP Pipes can be safely used in many areas such as water, gas, and oil transportation, geothermal water transmission lines, and offshore applications with their high performance and quality. RTP Pipes offer reliable and long-lasting solutions for your projects. You can check our product catalog on our website for the RTP Pipe <b>Price List</b>.',
            },
            {
              title: 'RTP Pipe <b>Weight Table</b>',
              description:
                'RTP Pipes are produced in various weights with different diameters and pressure classes. The weight table is calculated by multiplying the hollow cylinder volume and the density of the pipe. The table is prepared considering the expansion feature as the pipes are subjected to thermal processing during production. This table shows the weight values encountered in RTP Pipes in different diameters and pressure classes. For detailed information and other diameters, please contact our company.',
            },
            {
              title: 'RTP Pipe Technical <b>Specifications</b>',
              description:
                'RTP Pipes withstand high pressures like steel pipes while providing all the advantages of plastic pipes with their thermoplastic material. Thanks to its three-layer hybrid structure, it provides high-temperature resistance, chemical resistance, and environmental durability. The technical specifications are:\n<ul><li><b>Operating Temperature</b>: Continuous 60°C, instantaneous 80°C temperature resistance.</li><li><b>Operating Pressure</b>: 200 bar pressure resistance.</li><li><b>Material</b>: Specially formulated thermoplastic materials such as HDPE, PP, PE-RT.</li><li><b>Easy Installation</b>: Easy installation with its flexible structure.</li><li><b>Durability</b>: High-temperature and pressure resistance, superior resistance to environmental effects.</li><li><b>Low Friction Resistance</b>: Low friction resistance for efficient installation performance.</li></ul>',
            },
            {
              title: 'RTP Pipe <b>Fittings</b>',
              description:
                'Various fittings are available for RTP Pipes. These fittings facilitate the installation of the pipes and increase the efficiency of the systems. Fittings can be selected according to the needs of your projects and used in harmony with the pipes.',
            },
            {
              title: 'RTP Pipe <b>Joining Methods</b>',
              description:
                'Different types of joining methods are preferred in the joining of RTP Pipes. These methods are:\n<ul><li><b>EF (Electrofusion) Joining</b>: < 40 Bar</li><li><b>EF + Butt Welding Joining</b>: < 80 Bar</li><li><b>Mechanical Joining</b>: < 200 Bar</li></ul>',
            },
            {
              title: 'RTP Pipe Welding Method: <b>Electrofusion Welding</b>',
              description:
                'The electrofusion welding method offers a reliable and robust method for joining RTP Pipes. Electrofusion welding is performed by heating the resistance wires inside the pipe and fittings with electrical energy. This process ensures the melting and joining of pipe surfaces. Electrofusion fittings, which provide easy installation, are placed on the pipe ends and easily joined with the welding machine. It creates a strong and leak-proof connection, which ensures the long-lasting and reliable operation of the installation.',
            },
            {
              title: 'RTP Pipe Welding Method: <b>Butt Welding</b>',
              description:
                'Butt Welding is one of the most common methods used for joining RTP Pipe and fittings. Using a butt welding machine, the ends of the pipes to be welded are trimmed and then pushed together under a certain temperature and pressure to join them. This method ensures the safe and robust joining of RTP Pipes. With the butt welding method, RTP Pipes up to 1200 mm in diameter can be welded.',
            },
            {
              title: 'RTP Pipe <b>Price List</b>',
              description:
                'RTP Pipes are delivered to you with high quality and affordable price. RTP Pipes offer you the most suitable product with a wide range of diameters, low cost, easy transportation, and teamwork in the production process. To take advantage of RTP Pipe benefits and access the 2024 RTP Pipe Price List, please check our product catalog on our website.',
            },
          ],
          faqs: [
            {
              question: 'What materials are RTP Pipes made of?',
              answer:
                'RTP Pipes are made of a combination of polyethylene and aluminum layers. These materials help the pipes provide high pressure resistance and flexibility.',
            },
            {
              question: 'What are the usage areas of RTP Pipes?',
              answer:
                'RTP Pipes can be used in industrial facilities, infrastructure projects, water distribution systems, and other high-pressure applications.',
            },
            {
              question: 'What sizes and pressure classes are available for RTP Pipes?',
              answer:
                'RTP Pipes are manufactured in various sizes ranging from 20 mm to 1600 mm and in different pressure classes.',
            },
            {
              question: 'What are the joining methods for RTP Pipes?',
              answer:
                'RTP Pipes can be joined using electrofusion (EF) welding, butt welding, and coupling methods.',
            },
            {
              question: 'Are RTP Pipes resistant to chemicals?',
              answer:
                'Yes, RTP Pipes provide high resistance to saltwater, corrosive acids, bases, and other chemicals.',
            },
            {
              question: 'What are the advantages of RTP Pipes?',
              answer:
                'RTP Pipes are lightweight, flexible, and durable. They show high resistance to rust and have a long service life. Additionally, they require minimal heavy equipment during transport and installation.',
            },
            {
              question: 'What is the lifespan of RTP Pipes?',
              answer:
                'RTP Pipes are long-lasting and can be used safely in your projects due to high-quality materials and production techniques.',
            },
            {
              question: 'How can I access the price list for RTP Pipes?',
              answer: 'You can obtain the 2024 RTP Pipe Price List by calling 0212 886 57 41.',
            },
            {
              question: 'What are the technical specifications of RTP Pipes?',
              answer:
                'RTP Pipes are manufactured with a wide range of diameters, high-pressure resistance, and smooth inner and outer surface features. For more information, please refer to our product catalog.',
            },
            {
              question: 'How can I obtain RTP Pipes?',
              answer:
                'You can obtain RTP Pipes from authorized dealers of Dizayn Group or directly by contacting us.',
            },
          ],
          fittings: [
            {
              title: 'RTP Equal Tee',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 1.png',
              alt: 'RTP Equal Tee',
              category: 'Fittings',
            },
            {
              title: 'RTP Reduction',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 2.png',
              alt: 'RTP Reduction',
              category: 'Fittings',
            },
            {
              title: 'RTP Saddle',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 3.png',
              alt: 'RTP Saddle',
              category: 'Fittings',
            },
            {
              title: 'RTP Elbows',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 1.png',
              alt: 'RTP Elbows',
              category: 'Fittings',
            },
            {
              title: 'RTP Unequal Tee',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 2.png',
              alt: 'RTP Unequal Tee',
              category: 'Fittings',
            },
            {
              title: 'RTP Coupling',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 3.png',
              alt: 'RTP Coupling',
              category: 'Fittings',
            },
            {
              title: 'RTP End Cap',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 1.png',
              alt: 'RTP End Cap',
              category: 'Fittings',
            },
            {
              title: 'RTP Flange Adapter',
              image: '/productImages/alt yapı boruları/RTP PIPE/RTP BORU 2.png',
              alt: 'RTP Flange Adapter',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Telecom Pipes',
        description:
          'Cable Conduit Pipes are used in rapidly developing communication and data transmission piping systems. They are offered in different options from single to triple according to demand and specifications. With fittings that have eye splitters and complementary elements, they provide a complete system.',
        featuredProduct: false,
        logo: '',
        isNewTech: true,
        banner: {
          vertical: '/productImages/alt yapı boruları/TELEKOM/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/TELEKOM/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/TELEKOM/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/TELEKOM/TELEKOM BORU 1.png',
        link: '/en/urunler/altyapi-boru-sistemleri/telekom-boru',
        highlights: [
          {
            title: 'High Durability',
            icon: '/icons/durable.png',
          },
          {
            title: 'Flexible',
            icon: '/icons/flexible.png',
          },
          {
            title: 'Easy Installation',
            icon: '/icons/easy-installation.png',
          },
        ],
        productDetails: {
          title: 'Telecom Pipes',
          description:
            'Telecom Pipes are cable conduit pipes made from polyethylene and polypropylene materials, offering high durability and long life. Available in color options including orange, black, and blue, they are produced in different sizes and pressure classes.',
          features: [
            {
              title: 'Strong and Durable',
              icon: '/icons/durable.png',
              alt: 'Strong and Durable',
              description:
                'Telecom Pipes are resistant to harsh environmental conditions, providing trouble-free service for many years.',
            },
            {
              title: 'Flexible Structure',
              icon: '/icons/flexible.png',
              alt: 'Flexible Structure',
              description:
                'Their flexible structures allow them to be easily laid and securely carry telecommunications cables.',
            },
            {
              title: 'High-Quality Material',
              icon: '/icons/purity.png',
              alt: 'Purity',
              description:
                'Telecom Pipes are produced using 100% pure and original material, ensuring the highest quality.',
            },
            {
              title: 'Accredited Test Laboratory',
              icon: '/icons/test.png',
              alt: 'test',
              description:
                "Dizayn Group's accredited test laboratory offers impartial and reliable test services with its experienced engineering team.",
            },
            {
              title: 'Project-Specific Solutions',
              icon: '/icons/solution.png',
              alt: 'Solution',
              description:
                'Telecom Pipes offer project-specific solutions and support you at every stage of the production process.',
            },
            {
              title: 'High Quality and Economical Price',
              icon: '/icons/reward.png',
              alt: 'reward',
              description:
                'Telecom Pipes will be indispensable for your projects with their high quality and affordable price advantage. Contact us for detailed information.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/TELEKOM/telekom-boru.png',
              alt: 'Telecom Pipes',
              description: 'Telecom Pipes',
            },
            {
              image: '/productImages/alt yapı boruları/TELEKOM/TELEKOM BORU 2.png',
              alt: 'Telecom Pipes',
              description: 'Telecom Pipes',
            },
            {
              image: '/productImages/alt yapı boruları/TELEKOM/TELEKOM BORU 3.png',
              alt: 'Telecom Pipes',
              description: 'Telecom Pipes',
            },
          ],
          headers: [
            {
              title: '<b>Telecom Pipes</b> and Fittings',
              description:
                'Telecom Pipes are cable conduit pipes with high durability and long life, produced in various sizes and color options. You can check our product catalog on our website for the Telecom Pipe <b>Price List</b>. These pipes are made of polyethylene and polypropylene materials and are resistant to all kinds of environmental conditions.',
              image: '/productImages/alt yapı boruları/TELEKOM/telekom-boru-1.png',
              alt: 'Telecom Pipes',
            },
            {
              title: 'Telecom Pipe <b>Advantages</b>',
              description:
                'Telecom Pipes offer many advantages such as high durability, flexibility, chemical resistance, and long life. With these features, they provide reliable and long-lasting solutions for your projects. Additionally, their lightweight structures offer ease of transport and installation.',
            },
            {
              title: 'Where is Telecom Pipe <b>Used?</b>',
              description:
                'Telecom Pipes are used in communication and data transmission piping systems, especially for cable protection, with their high performance and quality. They can be safely used in underground and above-ground applications.',
            },
            {
              title: 'Telecom Pipe Technical <b>Specifications</b>',
              description:
                'Telecom Pipes have technical features such as high durability, flexibility, chemical resistance, and long life. For detailed information, you can examine our product catalog. These pipes are produced in various sizes and pressure classes and provide superior performance under all kinds of challenging conditions.',
            },
            {
              title: 'Telecom Pipe <b>Fittings</b>',
              description:
                'Various fittings are available for Telecom Pipes. These fittings facilitate the installation of the pipes and increase the efficiency of the systems. Fittings can be selected according to the needs of your projects and used in harmony with the pipes.',
            },
            {
              title: 'Telecom Pipe <b>Joining Methods</b>',
              description:
                'Sealed systems and electrofusion welding methods are used in the joining of Telecom Pipes. These methods ensure that the pipes are joined securely and leak-free. The most suitable joining method should be selected according to the project requirements.',
            },
            {
              title: 'Telecom Pipe Welding Method: <b>Electrofusion Welding</b>',
              description:
                'The electrofusion welding method offers a reliable and robust method for joining Telecom Pipes. Electrofusion welding is performed by heating the resistance wires inside the pipe and fittings with electrical energy. Electrofusion fittings, which offer easy installation, are placed on the pipe ends and easily joined with the welding machine. It creates a strong and leak-proof connection, ensuring the installation is long-lasting and reliable.',
            },
            {
              title: 'Telecom Pipe <b>Price List</b>',
              description:
                'Telecom Pipes are delivered to you with high quality and affordable price. Telecom Pipes offer you the most suitable product with a wide range of diameters, low cost, easy transportation, and teamwork in the production process. To take advantage of Telecom Pipe benefits and access the 2024 Telecom Pipe Price List, please check our product catalog on our website.',
            },
          ],
          faqs: [
            {
              question: 'What is the material of Telecom Pipes?',
              answer:
                'Telecom Pipes are made from high-quality polyethylene (PE) and polypropylene (PP) materials. These materials provide high durability and long life for the pipes.',
            },
            {
              question: 'What are the usage areas of Telecom Pipes?',
              answer:
                'Telecom Pipes are used in communication and data transmission piping systems, especially for cable protection. They can be safely used in underground and above-ground applications, data communication lines, and fiber optic cable protection.',
            },
            {
              question: 'What are the advantages of Telecom Pipes?',
              answer:
                'Telecom Pipes offer many advantages such as high durability, flexibility, chemical resistance, and long life. Their flexible structure is unaffected by seismic movements of the ground, and they show high resistance to chemical substances.',
            },
            {
              question: 'What is the lifespan of Telecom Pipes?',
              answer:
                'Telecom Pipes have a minimum lifespan of 50 years, maintaining their initial performance. They are long-lasting due to high-quality materials and production techniques and can be used safely in your projects.',
            },
            {
              question: 'What are the joining methods for Telecom Pipes?',
              answer:
                'Sealed systems and electrofusion welding methods are used in the joining of Telecom Pipes. Sealed systems offer fast and easy installation, while electrofusion welding methods provide strong and leak-proof connections.',
            },
            {
              question: 'Are Telecom Pipes resistant to chemicals?',
              answer:
                'Yes, Telecom Pipes provide high resistance to chemical substances. The polyethylene material increases the chemical resistance of the pipes and provides protection against corrosion.',
            },
            {
              question: 'How can I obtain Telecom Pipes?',
              answer:
                'You can obtain Telecom Pipes from authorized dealers of Dizayn Group or directly by contacting us. For more information and orders about our products, you can visit our website.',
            },
            {
              question: 'What are the technical specifications of Telecom Pipes?',
              answer:
                'Telecom Pipes have technical features such as high durability, flexibility, chemical resistance, and long life. They are produced in various sizes and pressure classes and provide superior performance under all kinds of challenging conditions.',
            },
            {
              question: 'How is the installation of Telecom Pipes carried out?',
              answer:
                'The installation of Telecom Pipes is carried out using sealed systems and electrofusion welding methods. Both methods ensure that the pipes are joined securely and leak-free. During installation, it should be ensured that the pipes and fittings are clean and dry.',
            },
            {
              question: 'How can I access the price list for Telecom Pipes?',
              answer:
                'You can check our product catalog on our website for the 2024 Telecom Pipe Price List. For detailed information and other sizes, you can contact our company.',
            },
          ],
          fittings: [
            {
              title: 'Telecom Equal Tee',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 1.png',
              alt: 'Telecom Equal Tee',
              category: 'Fittings',
            },
            {
              title: 'Telecom Reduction',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 2.png',
              alt: 'Telecom Reduction',
              category: 'Fittings',
            },
            {
              title: 'Telecom Saddle',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 3.png',
              alt: 'Telecom Saddle',
              category: 'Fittings',
            },
            {
              title: 'Telecom Elbows',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 1.png',
              alt: 'Telecom Elbows',
              category: 'Fittings',
            },
            {
              title: 'Telecom Unequal Tee',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 2.png',
              alt: 'Telecom Unequal Tee',
              category: 'Fittings',
            },
            {
              title: 'Telecom Coupling',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 3.png',
              alt: 'Telecom Coupling',
              category: 'Fittings',
            },
            {
              title: 'Telecom End Cap',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 1.png',
              alt: 'Telecom End Cap',
              category: 'Fittings',
            },
            {
              title: 'Telecom Flange Adapter',
              image: '/productImages/telekom/TELEKOM/TELEKOM BORU 2.png',
              alt: 'Telecom Flange Adapter',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Dizayn Pe 100',
        description:
          'RTP Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/en/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'Dizayn Pe 100 Şebeke Boru ve Ek Parçaları',
          description:
            'ELITEPIPE, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
          features: [
            {
              title: 'İleri Üretim Teknolojisi',
              icon: '/icons/high-tech (1).png',
              alt: 'High Technology',
              description:
                'Dizayn Grup, Soft Power borularını üretim sürecinin başından sonuna kadar ileri teknoloji altyapısı ile üretmektedir.',
            },
            {
              title: 'Dayanıklı ve Güvenilir',
              icon: '/icons/reliability.png',
              alt: 'Reliability',
              description:
                'Soft Power boruları, üstün dayanıklılığı ve uzun ömürlü yapısıyla projelerinizde güvenle kullanabileceğiniz bir üründür.',
            },
            {
              title: 'Üstün Özellikli Hammadde ',
              icon: '/icons/purity.png',
              alt: 'Purity',
              description:
                'Soft Power boruları, %100 saf ve orijinal hammadde kullanılarak üretilir, bu da en yüksek kaliteyi garanti eder.',
            },
            {
              title: 'Akredite Test Laboratuvarı',
              icon: '/icons/test.png',
              alt: 'test',
              description:
                'Dizayn Grup’un akredite test laboratuvarı, deneyimli mühendis kadrosu ile tarafsız ve güvenilir test hizmeti sunar.',
            },
            {
              title: 'Projeye Özel Çözümler',
              icon: '/icons/solution.png',
              alt: 'Solution',
              description:
                'Soft Power borular, projelerinize özel çözümler sunarak üretim sürecinin her aşamasında yanınızda olur.',
            },
          ],
          images: [
            {
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
              alt: 'SoftPower Boru',
              description: 'SoftPower Boru',
            },
            {
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 3.png',
              alt: 'SoftPower Boru',
              description: 'SoftPower Boru',
            },
            {
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 4.png',
              alt: 'SoftPower Boru',
              description: 'SoftPower Boru',
            },
          ],
          headers: [
            {
              title: '<b>Soft Power Boru</b> ve Ek Parçaları',
              description:
                'Dizayn Grup Soft Power boruları, performansı ve yüksek kalitesi ile 20 mm - 1600 mm arası çaplarda ve çeşitli basınç sınıflarında üretilmektedir. Soft Power boruları, tarımsal sulama, su şebekeleri, atık su hatları ve endüstriyel uygulamalar için ideal çözümler sunar. Uzun ömürlü ve dayanıklı yapısıyla projelerinizin vazgeçilmezi olacak. Soft Power Boru <b>Fiyat Listesi</b> için <b> 0212 886 57 41 </b> numaralı hattımızı arayarak bilgi sahibi olabilirsiniz.',
              image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
              alt: 'SoftPower Boru',
            },
            {
              title: 'Soft Power Boru <b>Avantajları</b>',
              description: `Dizayn Grup Soft Power boruları, pürüzsüz iç ve dış yüzeyi ile hafif, esnek ve sağlam bir yapıya sahiptir. Taşıma ve kurulum sırasında minimum ağır ekipman gerektirir ve tüm saha koşullarında, zorlu çevre koşullarında bile kolayca uygulanabilir.
  
              Soft Power boruları, paslanmaya karşı yüksek direnç gösterir ve kimyasallara karşı mükemmel dayanıklılık sağlar. Tuzlu su, sıhhi kanalizasyon atık suyu, korozif asitler, bazlar ve tuzlar gibi maddelere karşı üstün koruma sunar. Bu <b>Özellikleri</b> ile Soft Power boruları, uzun ömürlü ve güvenilir performans sağlar, projelerinizde sizi asla yarı yolda bırakmaz.`,
            },
            {
              title: 'Soft Power Boru <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn Grup Soft Power boruları, üstün performansı ve kalitesi ile prestijli projelerde tercih edilen bir üründür. Su şebekeleri, tarımsal sulama sistemleri, atık su ve drenaj sistemleri, endüstriyel uygulamalar ve yeraltı su drenaj sistemlerinde güvenle kullanılabilir. Soft Power boruları, projelerinizde güvenilir ve uzun ömürlü çözümler sunar. Soft Power Boru <b>Fiyat Listesi</b> için bizimle iletişime geçiniz.',
            },
            {
              title: 'Soft Power Boru <b>Ağırlık Tablosu</b>',
              description: `Dizayn Grup Soft Power borularının ağırlık hesaplaması, içi boş silindir hacmi ve borunun yoğunluğu çarpılarak yapılır. Soft Power boruları üretim aşamasında ısıl işlem gördüğü için genleşme özelliği gösterir. Bu nedenle, Soft Power borularının ölçü tablosu hazırlanırken tolerans değerleri dikkate alınmalıdır.
  
              <b>Ağırlık Tablosu</b> Örneği
              20 mm: 0.15 kg/m
              25 mm: 0.24 kg/m
              32 mm: 0.39 kg/m
              40 mm: 0.61 kg/m
              50 mm: 0.96 kg/m
              63 mm: 1.51 kg/m`,
            },
            {
              title: 'Soft Power Boru Teknik <b>Özellikleri</b>',
              description: `Dizayn Grup olarak kalite laboratuvarlarımızda sürekli gelişmeleri izleyip araştırmalar yapmaktayız. Soft Power borularımız, 20 mm - 1600 mm çap aralığında ve yüksek teknoloji ile üretilmektedir. Polietilenin <b>Özellikleri</b> sayesinde, basınçlı su sistemlerinde kullanıma en uygun alternatiflerden biridir. Yeraltı ve yerüstü basınçlı su şebeke hatları, deniz deşarj projeleri ve endüstriyel uygulamalar gibi birçok alanda kullanılmaktadır.
  
              Soft Power boruları, sert beton borulara göre daha kolay işlenir, monte edilir ve maliyet tasarrufu sağlar. Yapısal olarak darbelere ve soğuk hava koşullarına dayanacak şekilde tasarlanmıştır. Deniz uygulamalarında uzun boylarda borular kıyıda monte edilip daha sonra yerine oturtulabilir.`,
            },
            {
              title: 'Soft Power <b>Ek Parçaları</b>',
              description: `Dizayn Grup Soft Power <b>Ek Parçaları</b> üstün kalitede üretilip tek tek kontrol edilerek sevk edilmektedir. Uygulama kolaylığı ve ergonomik tasarıma sahip ek parçalarımız, yüksek kalite ve uygun fiyat ekseninde siz değerli müşterilerimizin hizmetindedir. Soft Power <b>Ek Parçaları</b>, basınçlı su sistemleri ve diğer endüstriyel uygulamalarda güvenle kullanılabilir.
              
              - Soft Power <b>Ek Parçaları</b>
              - Soft Power Eşit Te
              - Soft Power Redüksiyon
              - Soft Power Semer
              - Soft Power Dirsekler
              - Soft Power İnegal Te
              - Soft Power Manşon
              - Soft Power Körtapa
              - Soft Power Flanş Adaptörü
              Bu <b>Ek Parçaları</b>, Soft Power boru sistemlerinizin güvenli ve dayanıklı bir şekilde birleştirilmesini sağlar.
              `,
            },
            {
              title: 'Soft Power Boru <b>Birleştirme Yöntemleri</b>',
              description: `
              Dizayn Grup Soft Power boruları ve ek parçaları birbirlerine eritilerek veya mekanik ek parçalar ile bağlanırlar. Polietilen dışında diğer malzemelerden yapılan borulara dıştan sıkmalı ek parçalar, flanşlar veya amaca uygun yapılmış diğer geçiş adaptörleri ile bağlanabilirler. Bağlantı ek parçaları kullanılacak yerlere göre kolaylık sağlamaktadır.
  
              <b>Birleştirme Yöntemleri</b>
              - Elektrofüzyon (EF) Kaynağı: Elektrik enerjisi ile boru ve ek parça uçları eritilerek birleştirilir.
              - Alın Kaynağı: Boru uçlarının yüksek sıcaklıkta eritilerek birleştirilmesi.
              - Kaplin ile Birleştirme: Mekanik kaplin kullanılarak boru uçlarının birleştirilmesi.`,
            },
            {
              title: 'Soft Power Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description: `<b>Elektrofüzyon Kaynak</b> yönteminde, kaynak işlemi füzyon ek parçanın iç kısmındaki ısıtma rezistansları ile gerçekleştirilir. Soft Power borular, elektrofüzyon ek parçalarının içine yerleştirilir ve kaynak makinesinin uçları ek parçanın üzerindeki soketlere bağlanarak elektrik akımı ile ısıtılır.
  
              Bu yöntemle, Soft Power borular güvenli ve sağlam bir şekilde birleştirilmiş olur. <b>Elektrofüzyon Kaynak</b> metodu ile 20 mm çaptan 1600 mm çapa kadar olan Soft Power borular kaynatılabilir.`,
            },
            {
              title: 'Soft Power Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description: `<b>Alın Kaynak</b>, Soft Power boru ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. <b>Alın Kaynak</b> makinesi kullanılarak, kaynatılacak olan boruların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, Soft Power boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 1600 mm çapa kadar olan Soft Power borular kaynatılabilir.`,
            },
            {
              title: 'Soft Power Boru <b>Fiyat Listesi</b>',
              description: `Dizayn Grup Soft Power boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Soft Power borular, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Soft Power boru avantajlarından yararlanmak ve 2024 Soft Power Boru Fiyat Listesine ulaşmak için bizimle iletişime geçiniz.
  
              Soft Power borularımız hakkında detaylı bilgi almak için 0212 886 57 41 numaralı hattımızı arayabilirsiniz.`,
            },
          ],
          faqs: [
            {
              question: 'Soft Power borular hangi malzemeden üretilir?',
              answer:
                'Soft Power boruları, yüksek kaliteli polietilen malzemeden üretilmektedir. %100 saf ve orijinal hammadde kullanılarak üretilir.',
            },
            {
              question: 'Soft Power boruların kullanım alanları nelerdir?',
              answer:
                'Soft Power boruları, su şebekeleri, tarımsal sulama sistemleri, atık su ve drenaj sistemleri, endüstriyel uygulamalar ve yeraltı su drenaj sistemlerinde kullanılabilir.',
            },
            {
              question: 'Soft Power borular hangi çap ve basınç sınıflarında mevcuttur?',
              answer:
                "Soft Power boruları, 20 mm'den 1600 mm'ye kadar çeşitli çaplarda ve farklı basınç sınıflarında üretilmektedir.",
            },
            {
              question: 'Soft Power boruların Birleştirme Yöntemleri nelerdir?',
              answer:
                'Soft Power boruları elektrofüzyon (EF) kaynağı, alın kaynağı ve kapBirleştirme Yöntemleri ile birleştirilebilir.',
            },
            {
              question: 'Soft Power boruları kimyasallara karşı dayanıklı mı?',
              answer:
                'Evet, Soft Power boruları tuzlu su, korozif asitler, bazlar ve diğer kimyasallara karşı yüksek direnç sağlar.',
            },
            {
              question: 'Soft Power boruların Avantajları nelerdir?',
              answer:
                'Soft Power boruları hafif, esnek ve dayanıklıdır. Paslanmaya karşı yüksek direnç gösterir ve uzun ömürlüdür. Ayrıca, taşıma ve kurulum sırasında minimum ağır ekipman gerektirir.',
            },
            {
              question: 'Soft Power boruların ömrü ne kadar?',
              answer:
                'Soft Power boruları, yüksek kaliteli malzemeler ve üretim teknikleri sayesinde uzun ömürlüdür ve projelerinizde güvenle kullanılabilir.',
            },
            {
              question: 'Soft Power boruların fiyat listesine nasıl ulaşabilirim?',
              answer:
                'Soft Power boruların 2024 Fiyat Listesi için 0212 886 57 41 numaralı hattımızı arayarak bilgi alabilirsiniz.',
            },
            {
              question: 'Soft Power boruların teknik Özellikleri nelerdir?',
              answer:
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için Fiyat Listesini bakabilirsiniz.',
            },
            {
              question: 'Soft Power boruları nasıl temin edebilirim?',
              answer:
                "Soft Power borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
            },
          ],
          fittings: [],
        },
        logo: '',
        banner: {
          vertical: '',
          horizontal: '',
          bgImage: undefined,
          PLP: '',
        },
        background: '',
      },

      {
        title: 'Corrugated Pipe',
        description: 'Corrugated Pipes offer high durability and long life in sewage systems.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/Koruge/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/Koruge/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/Koruge/banner/tr/horizontal.jpg',
          PLP: '/productImages/alt yapı boruları/Koruge/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Koruge/Koruge BORU.png',
        link: '/en/urunler/altyapi-boru-sistemleri/koruge-boru',
        highlights: [
          {
            title: 'High Durability',
            icon: '/icons/durable.png',
          },
          {
            title: 'Long Life',
            icon: '/icons/long-lasting.png',
          },
          {
            title: 'Easy Installation',
            icon: '/icons/easy-installation.png',
          },
        ],
        productDetails: {
          title: 'Dizayn Corrugated Pipe',
          description:
            'Corrugated Pipes are produced by two different manufacturing methods: Extruded and spiral methods. The inner and outer layers of these pipes are made of polyethylene and polypropylene materials. The inner layer has a smooth structure that carries the fluid, while the outer layer with ribs increases the strength.',
          features: [
            {
              title: 'High Corrosion Resistance',
              icon: '/icons/corrosion.png',
              alt: 'Corrosion Resistance',
              description:
                'Corrugated Pipes show high resistance to corrosion, providing long-lasting use.',
            },
            {
              title: 'Chemical Resistance',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'Corrugated Pipes are resistant to various chemicals and are unaffected by abrasion and chemical effects.',
            },
            {
              title: 'Lightweight and Flexible Structure',
              icon: '/icons/lightweight.png',
              alt: 'Lightweight',
              description:
                'With their lightweight and flexible structure, Corrugated Pipes can be easily transported and installed.',
            },
            {
              title: 'Leak Proof Guarantee',
              icon: '/icons/seal.png',
              alt: 'Leak Proof',
              description:
                'Corrugated Pipes prevent contamination of groundwater and soil with their leak-proof structure.',
            },
            {
              title: 'High Ring Stiffness',
              icon: '/icons/high-ring-stiffness.png',
              alt: 'High Ring Stiffness',
              description:
                'Thanks to its high ring stiffness, it does not deform and maintains its durability even under heavy loads.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 1.png',
              alt: 'Dizayn Corrugated Pipe',
              description: 'Dizayn Corrugated Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 3.png',
              alt: 'Dizayn Corrugated Pipe',
              description: 'Dizayn Corrugated Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 4.png',
              alt: 'Dizayn Corrugated Pipe',
              description: 'Dizayn Corrugated Pipe',
            },
          ],
          headers: [
            {
              title: '<b>Corrugated Pipe</b> and Fittings',
              description:
                'Corrugated Pipes are produced as extruded pipes up to 450 mm diameter and spiral pipes over 500 mm with high durability and long-life features. They offer reliable solutions in sewerage, rainwater, and drainage systems. For detailed information and price list, please visit our website.',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU.png',
              alt: 'Corrugated Pipe',
            },
            {
              title: 'Corrugated Pipe <b>Advantages</b>',
              description:
                'Corrugated Pipes stand out with features such as high corrosion resistance, chemical resistance, lightness, and flexibility. These pipes offer long-lasting use and can be safely used in various application areas.',
            },
            {
              title: 'Corrugated Pipe <b>Usage Areas</b>',
              description:
                'Corrugated Pipes are widely used in sewerage, rainwater and drainage systems, industrial wastewater lines, agricultural irrigation systems, and infrastructure projects.',
            },
            {
              title: 'Corrugated Pipe <b>Technical Specifications</b>',
              description:
                'Corrugated Pipes provide high strength and durability with their double-layer structure. Extruded pipes are produced up to Ø450 mm in diameter, and spiral pipes are produced in diameters of Ø500 mm and above. Both types of pipes have high ring stiffness and are resistant to various chemicals.',
            },
          ],
          faqs: [
            {
              question: 'What materials are Corrugated Pipes made from?',
              answer:
                'Corrugated Pipes are made from Polyethylene (PE) and Polypropylene (PP) materials. At the same wall thickness, PP provides higher ring stiffness.',
            },
            {
              question: 'What are the usage areas of Corrugated Pipes?',
              answer:
                'Corrugated Pipes are used in sewerage systems, rainwater and drainage lines, industrial wastewater lines, and agricultural irrigation systems.',
            },
            {
              question: 'What is the lifespan of Corrugated Pipes?',
              answer:
                'Corrugated Pipes offer a 50-year lifespan guarantee with corrosion and chemical resistance.',
            },
            {
              question: 'How are Corrugated Pipes joined?',
              answer:
                'Corrugated Pipes are joined with fittings. Extruded pipes are joined with injection fittings, while spiral pipes are joined with socket and spigot ends. The electrofusion method can also be used.',
            },
            {
              question: 'What are the advantages of Corrugated Pipes?',
              answer:
                'Corrugated Pipes have advantages such as high durability, chemical resistance, lightness, flexibility, and easy installation. They are also resistant to environmental effects and long-lasting.',
            },
            {
              question: 'Which standards are Corrugated Pipes compliant with?',
              answer:
                'Corrugated Pipes are produced in compliance with TS EN 13476, TS 12132, DIN 16961, and EN155 standards.',
            },
            {
              question: 'What color are Corrugated Pipes?',
              answer:
                'Corrugated Pipes are generally produced in black color. The inner layer can be different colors according to the project.',
            },
            {
              question: 'What is the pressure resistance of Corrugated Pipes?',
              answer:
                'Corrugated Pipes are normally used under 0.5 bar pressure, but when joined using the electrofusion method, they can withstand pressures up to 4 bar.',
            },
            {
              question: 'What is the diameter range of Corrugated Pipes?',
              answer:
                'Corrugated Pipes can be produced in diameters ranging from Ø50 mm to Ø8000 mm.',
            },
            {
              question: 'How can Corrugated Pipes be obtained?',
              answer:
                'Corrugated Pipes can be obtained from authorized dealers of Dizayn Group or by directly contacting our company.',
            },
          ],
          fittings: [
            {
              title: 'Corrugated Equal Tee',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 1.png',
              alt: 'Corrugated Equal Tee',
              category: 'Fittings',
            },
            {
              title: 'Corrugated Reduction',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 2.png',
              alt: 'Corrugated Reduction',
              category: 'Fittings',
            },
            {
              title: 'Corrugated Saddle',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 3.png',
              alt: 'Corrugated Saddle',
              category: 'Fittings',
            },
            {
              title: 'Corrugated Elbows',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 1.png',
              alt: 'Corrugated Elbows',
              category: 'Fittings',
            },
            {
              title: 'Corrugated Unequal Tee',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 2.png',
              alt: 'Corrugated Unequal Tee',
              category: 'Fittings',
            },
            {
              title: 'Corrugated Coupling',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 3.png',
              alt: 'Corrugated Coupling',
              category: 'Fittings',
            },
            {
              title: 'Corrugated End Cap',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 1.png',
              alt: 'Corrugated End Cap',
              category: 'Fittings',
            },
            {
              title: 'Corrugated Flange Adapter',
              image: '/productImages/alt yapı boruları/Koruge/Koruge BORU 2.png',
              alt: 'Corrugated Flange Adapter',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Dizayn Corrugated Spiral Pipe',
        description:
          'Corrugated spiral pipes have a double-layer structure consisting of inner and outer layers. The inner layer is a smooth-surfaced pipe that carries the fluid, while the outer layer is ribbed. They are made from polyethylene and polypropylene materials.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/KorugeSarmal/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/KorugeSarmal/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/KorugeSarmal/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/KorugeSarmal/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/KorugeSarmal/koruge-sarmal-2.png',
        link: '/en/urunler/altyapi-boru-sistemleri/koruge-sarmal-boru',
        highlights: [
          {
            title: 'High Durability',
            icon: '/icons/durable.png',
          },
          {
            title: 'Long Life',
            icon: '/icons/long-lasting.png',
          },
          {
            title: 'Easy Installation',
            icon: '/icons/easy-installation.png',
          },
        ],
        productDetails: {
          title: 'Corrugated Spiral Pipe',
          description:
            'Sewer pipes are produced from polypropylene and polyethylene raw materials within the polyolefin group. Extruded corrugated pipes up to Ø450 mm in diameter can be made from polyethylene and polypropylene raw materials, while spiral corrugated pipes are made from polyethylene. Spiral method is used for pipes with diameters of Ø500 mm and above. Dizayn Group has the technology to produce corrugated spiral pipes up to 8,000 mm in diameter.',
          features: [
            {
              title: 'High Durability',
              icon: '/icons/durability.png',
              alt: 'Durability',
              description:
                'Corrugated spiral pipes have high corrosion resistance due to being made from polyethylene and polypropylene.',
            },
            {
              title: 'Easy Installation',
              icon: '/icons/easy-installation.png',
              alt: 'Easy Installation',
              description: 'Easily installable and transportable due to its lightweight structure.',
            },
            {
              title: 'Chemical Resistance',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'Corrugated spiral pipes show high resistance to chemical substances and provide protection against corrosion.',
            },
            {
              title: 'Wide Application Range',
              icon: '/icons/application.png',
              alt: 'Application',
              description:
                'Corrugated spiral pipes can be used in sewer, stormwater, drainage, and many other infrastructure applications.',
            },
            {
              title: 'Economic and Reliable',
              icon: '/icons/economical.png',
              alt: 'Economical',
              description:
                'Corrugated spiral pipes offer cost savings in your projects with their economical price and long-lasting structure.',
            },
            {
              title: 'Eco-Friendly',
              icon: '/icons/eco-friendly.png',
              alt: 'Eco-Friendly',
              description: 'Corrugated spiral pipes are eco-friendly products with recyclability.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/KorugeSarmal/koruge-sarmal-2.png',
              alt: 'Dizayn Corrugated Spiral Pipe',
              description: 'Dizayn Corrugated Spiral Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/KorugeSarmal/KorugeSarmal BORU 3.png',
              alt: 'Dizayn Corrugated Spiral Pipe',
              description: 'Dizayn Corrugated Spiral Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/KorugeSarmal/KorugeSarmal BORU 4.png',
              alt: 'Dizayn Corrugated Spiral Pipe',
              description: 'Dizayn Corrugated Spiral Pipe',
            },
          ],
          headers: [
            {
              title: '<b>Corrugated Spiral Pipe</b> and Fittings',
              description:
                'Corrugated spiral pipes are safely used in infrastructure projects with high corrosion resistance and long-lasting structure. Extruded corrugated pipes produced up to Ø450 mm in diameter are joined with fittings, while spiral corrugated pipes with diameters of Ø500 mm and above have socket and spigot ends. Corrugated spiral pipes produced in different diameters and pressure classes have a wide range of applications.',
            },
            {
              title: 'Corrugated Spiral Pipe <b>Advantages</b>',
              description:
                'Corrugated spiral pipes provide a reliable solution in infrastructure projects with high corrosion resistance, chemical resistance, and long-lasting structure. Their flexible structure is not affected by ground movements and offers easy installation. Their lightweight structure reduces transportation and labor costs.',
            },
            {
              title: 'Corrugated Spiral Pipe <b>Usage Areas</b>',
              description:
                'Corrugated spiral pipes can be used in many infrastructure projects such as sewer, stormwater, drainage, wastewater, and industrial applications. Corrugated spiral pipes produced in different diameters and pressure classes provide flexible and durable solutions that can be used safely in your projects.',
            },
            {
              title: 'Corrugated Spiral Pipe <b>Technical Specifications</b>',
              description:
                'Corrugated spiral pipes provide high strength and flexibility thanks to their double-layer structure. The inner and outer layers made of thermoplastic materials are resistant to chemical and mechanical effects. Technical specifications are as follows:\n<ul><li><b>Diameter Range:</b> 450 mm - 8000 mm</li><li><b>Ring Stiffness:</b> High</li><li><b>Material:</b> Polyethylene (PE) and Polypropylene (PP)</li><li><b>Easy Installation:</b> Gasketed, electrofusion, and extruder welding methods</li><li><b>Durability:</b> High chemical and mechanical resistance</li></ul>',
            },
            {
              title: 'Corrugated Spiral Pipe <b>Joining Methods</b>',
              description:
                'Different methods are used for joining corrugated spiral pipes:\n<ul><li><b>Gasketed Joint:</b> Used for pipes up to Ø450 mm in diameter</li><li><b>Extruder Welding:</b> Provides high strength and leak-tightness</li><li><b>Electrofusion Welding:</b> Resistant up to 4 bar pressure and provides high leak-tightness</li></ul>',
            },
            {
              title: 'Corrugated Spiral Pipe <b>Price List</b>',
              description:
                'Corrugated spiral pipes offer cost advantages in your projects with their high quality and reasonable prices. To access the price list and get detailed information about pipes produced in different diameters and pressure classes, please visit our website.',
            },
          ],
          faqs: [
            {
              question: 'What is the raw material of corrugated spiral pipes?',
              answer:
                'Corrugated spiral pipes are made from polyethylene (PE) and polypropylene (PP) raw materials. These materials offer high corrosion resistance and long life.',
            },
            {
              question: 'What are the advantages of corrugated spiral pipes?',
              answer:
                'Corrugated spiral pipes offer a reliable solution in infrastructure projects with high corrosion resistance, chemical resistance, long-lasting structure, and flexibility. Their lightweight structure provides easy installation and transportation.',
            },
            {
              question: 'What are the usage areas of corrugated spiral pipes?',
              answer:
                'Corrugated spiral pipes can be used in many infrastructure projects such as sewer, stormwater, drainage, wastewater, and industrial applications.',
            },
            {
              question: 'How are corrugated spiral pipes joined?',
              answer:
                'Corrugated spiral pipes are joined by gasketed methods up to Ø450 mm in diameter. Extruder welding and electrofusion welding methods are used for larger diameters.',
            },
            {
              question: 'What is the lifespan of corrugated spiral pipes?',
              answer:
                'Corrugated spiral pipes are sold with a 50-year lifespan guarantee and can be used for 100 years against external effects.',
            },
            {
              question: 'What are the technical specifications of corrugated spiral pipes?',
              answer:
                'Corrugated spiral pipes offer high strength and flexibility thanks to their double-layer structure. Technical features include high chemical and mechanical resistance, easy installation, and low weight.',
            },
            {
              question: 'What is the production diameter range of corrugated spiral pipes?',
              answer:
                'Corrugated spiral pipes are produced in diameters ranging from 450 mm to 8000 mm.',
            },
            {
              question: 'Are corrugated spiral pipes environmentally friendly?',
              answer:
                'Yes, corrugated spiral pipes are eco-friendly products due to their recyclability.',
            },
          ],
          fittings: [],
        },
        background: '',
      },

      {
        title: 'Dizayn PE 80 Natural Gas Pipe',
        description:
          'Dizayn PE 80 Natural Gas Pipes and Fittings offer reliable and durable solutions for natural gas lines. Made from polyethylene material, these pipes are lightweight, flexible, and impact-resistant, making them safe for use in natural gas systems.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/PE 80/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/PE 80/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/PE 80/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/PE 80/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU.png',
        link: '/en/urunler/altyapi-boru-sistemleri/pe-80-dogalgaz-boru',
        highlights: [
          {
            title: 'High Pressure Resistance',
            icon: '/icons/high-pressure.png',
          },
          {
            title: 'Flexible and Lightweight',
            icon: '/icons/flexible.png',
          },
          {
            title: 'Chemical Resistance',
            icon: '/icons/chemical-resistant.png',
          },
        ],
        productDetails: {
          title: 'Dizayn PE 80 Natural Gas Pipe',
          description:
            'Dizayn PE 80 natural gas pipes are manufactured using high-quality PE80 material. These pipes can be safely used in natural gas lines with their high pressure resistance and flexible structure. PE80 natural gas pipes provide ease of installation and laying with their lightweight and durable structure.',
          features: [
            {
              title: 'Elastic Structure',
              icon: '/icons/flexible.png',
              alt: 'Flexible',
              description:
                'Dizayn PE 80 Natural Gas Pipes do not get damaged during natural disasters like earthquakes due to their elastic structure and are used reliably.',
            },
            {
              title: 'High Chemical Resistance',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistant',
              description: 'These pipes show high resistance to chemicals and do not corrode.',
            },
            {
              title: 'Lightweight and Easy Installation',
              icon: '/icons/lightweight.png',
              alt: 'Lightweight',
              description:
                'Their lightweight structure provides ease of transportation and installation, reducing labor costs.',
            },
            {
              title: 'Long Life',
              icon: '/icons/long-lasting.png',
              alt: 'Long-lasting',
              description:
                'Dizayn PE 80 Natural Gas Pipes offer a service life of at least 50 years.',
            },
            {
              title: 'Electrofusion Welding',
              icon: '/icons/welding.png',
              alt: 'Electrofusion',
              description:
                'They are joined by electrofusion welding, the safest welding method, minimizing the risk of gas leakage.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'Dizayn PE 80 Natural Gas Pipe',
              description: 'Dizayn PE 80 Natural Gas Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'Dizayn PE 80 Natural Gas Pipe',
              description: 'Dizayn PE 80 Natural Gas Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 4.png',
              alt: 'Dizayn PE 80 Natural Gas Pipe',
              description: 'Dizayn PE 80 Natural Gas Pipe',
            },
          ],
          headers: [
            {
              title: '<b>Dizayn PE 80 Natural Gas Pipe</b> and Fittings',
              description:
                'Dizayn PE 80 natural gas pipes offer reliable and durable solutions in natural gas lines. Thanks to the use of PE80 material, they provide high pressure resistance, flexibility, and long-lasting use. For detailed information and price list, please visit our website.',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 1.jpg',
              alt: 'Dizayn PE 80 Natural Gas Pipe',
            },
            {
              title: 'Dizayn PE 80 Natural Gas Pipe <b>Advantages</b>',
              description:
                'Dizayn PE 80 natural gas pipes offer safe and long-lasting solutions for natural gas lines with features such as high pressure resistance, flexibility, and chemical resistance. Thanks to the use of PE80 material, these pipes can be used in various applications.',
            },
            {
              title: 'Dizayn PE 80 Natural Gas Pipe <b>Usage Areas</b>',
              description:
                'Dizayn PE 80 natural gas pipes can be safely used in natural gas lines, indoor natural gas systems, and other natural gas transmission lines. These pipes offer a wide range of applications with high performance and durability.',
            },
            {
              title: 'Dizayn PE 80 Natural Gas Pipe <b>Weight Table</b>',
              description:
                'Dizayn PE 80 natural gas pipes are produced in various weights in different diameter and pressure classes. The weight table is calculated by multiplying the hollow cylinder volume of the pipes by their density. The table is prepared considering the expansion feature, as the pipes undergo thermal processing during production. For detailed information and other diameters, please contact our company.',
            },
            {
              title: 'Dizayn PE 80 Natural Gas Pipe Technical <b>Specifications</b>',
              description:
                'Dizayn PE 80 natural gas pipes offer safe and long-lasting solutions for natural gas lines with features such as high pressure resistance, flexibility, and chemical resistance. Technical specifications are as follows:\n<ul><li><b>Operating Temperature</b>: Continuous 60°C, instant 80°C temperature resistance.</li><li><b>Operating Pressure</b>: 4 bar pressure resistance.</li><li><b>Material</b>: Specially formulated PE80 material.</li><li><b>Easy Installation</b>: Easy installation opportunity due to its flexible structure.</li><li><b>Durability</b>: High temperature and pressure resistance, superior resistance to environmental effects.</li><li><b>Low Friction Resistance</b>: Low friction resistance for efficient plumbing performance.</li></ul>',
            },
            {
              title: 'Dizayn PE 80 Natural Gas Pipe <b>Fittings</b>',
              description:
                'Various fittings are available for Dizayn PE 80 natural gas pipes. These fittings facilitate the installation of pipes and increase the efficiency of the systems. Fittings can be selected according to the needs of your projects and used in harmony with the pipes.',
            },
            {
              title: 'Dizayn PE 80 Natural Gas Pipe <b>Joining Methods</b>',
              description:
                'Different types of joining methods are preferred in the joining of Dizayn PE 80 natural gas pipes. These methods are:\n<ul><li><b>Electrofusion Joining</b>: This method ensures safe and strong joining of natural gas pipes. Electrofusion fittings are placed on the ends of the pipes and easily joined with a welding machine. It creates a strong and leak-proof connection.</li></ul>',
            },
            {
              title: 'Dizayn PE 80 Natural Gas Pipe <b>Welding Method: Electrofusion</b>',
              description:
                'The electrofusion welding method is a reliable and strong method used in the joining of Dizayn PE 80 natural gas pipes. Electrofusion welding is carried out by heating the resistance wires located inside the pipe and fittings with electrical energy. This process allows the pipe surfaces to melt and join. Electrofusion fittings, which offer easy installation opportunities, are placed on the ends of the pipes and easily joined with a welding machine. It creates a strong and leak-proof connection.',
            },
            {
              title: 'Dizayn PE 80 Natural Gas Pipe <b>Price List</b>',
              description:
                'Dizayn PE 80 natural gas pipes reach you with high quality and affordable prices. Dizayn PE 80 natural gas pipes offer the most suitable product for you with wide diameter options, low cost, easy transportation, and teamwork in the production process. To take advantage of the Dizayn PE 80 natural gas pipe benefits and access the 2024 Dizayn PE 80 Natural Gas Pipe Price List, please visit our website.',
            },
          ],
          faqs: [
            {
              question: 'In which pressure lines can Dizayn PE 80 natural gas pipes be used?',
              answer:
                'Dizayn PE 80 natural gas pipes can be safely used in 4 bar pressure parts of natural gas lines. These pipes offer safe and long-lasting solutions in natural gas lines with their high pressure resistance and flexible structure.',
            },
            {
              question: 'Why are they yellow?',
              answer:
                'The yellow color of natural gas pipes is mandatory according to standards. The yellow color ensures that natural gas lines can be easily distinguished from drinking water lines.',
            },
            {
              question: 'Can PE 80 natural gas pipes be used in water lines?',
              answer:
                'Yes, PE 80 natural gas pipes can also be used in water lines. These pipes are resistant up to 10 bar pressure in water lines and can be safely used in drinking water lines.',
            },
            {
              question: 'How are PE 80 natural gas pipes joined?',
              answer:
                'PE 80 natural gas pipes are joined with electrofusion fittings. The electrofusion welding method ensures that pipes are joined safely and securely.',
            },
            {
              question: 'What are the advantages of PE 80 natural gas pipes?',
              answer:
                'PE 80 natural gas pipes have advantages such as high pressure resistance, flexibility, chemical resistance, lightweight, and easy installation. These features provide safe and long-lasting solutions in natural gas lines.',
            },
            {
              question: 'What is the service life of PE 80 natural gas pipes?',
              answer:
                'The service life of PE 80 natural gas pipes is 50 years. Thanks to high-quality materials and production techniques, these pipes offer long-lasting and safe solutions.',
            },
            {
              question: 'How can I access the price list for PE 80 natural gas pipes?',
              answer:
                'For the 2024 Price List of PE 80 natural gas pipes, please check the product catalog on our website.',
            },
            {
              question: 'Are PE 80 natural gas pipes resistant to chemicals?',
              answer:
                'Yes, PE 80 natural gas pipes provide high resistance to chemical substances and offer protection against corrosion.',
            },
            {
              question: 'What are the technical specifications of PE 80 natural gas pipes?',
              answer:
                'PE 80 natural gas pipes have technical features such as high pressure resistance, flexibility, chemical resistance, and long life. For detailed technical specifications, please check the product catalog on our website.',
            },
            {
              question: 'How can I obtain PE 80 natural gas pipes?',
              answer:
                'You can obtain PE 80 natural gas pipes from authorized distributors of Dizayn Group or by contacting us directly.',
            },
          ],
          fittings: [
            {
              title: 'PE 80 Equal Tee',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'PE 80 Equal Tee',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Reducer',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'PE 80 Reducer',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Saddle',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 4.png',
              alt: 'PE 80 Saddle',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Elbows',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'PE 80 Elbows',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Reducing Tee',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'PE 80 Reducing Tee',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Coupler',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 4.png',
              alt: 'PE 80 Coupler',
              category: 'Fittings',
            },
            {
              title: 'PE 80 End Cap',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 2.png',
              alt: 'PE 80 End Cap',
              category: 'Fittings',
            },
            {
              title: 'PE 80 Flange Adapter',
              image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU 3.png',
              alt: 'PE 80 Flange Adapter',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Dizayn Geothermal Pipe',
        description:
          'Dizayn Geothermal Pipes are composite pipes that prevent heat transfer of hot and cold fluids.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/Jeotermal/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/Jeotermal/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/Jeotermal/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/Jeotermal/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU.png',
        link: '/en/urunler/altyapi-boru-sistemleri/jeotermal-boru',
        highlights: [
          {
            title: 'High Heat Resistance',
            icon: '/icons/high-temperature.png',
          },
          {
            title: 'Corrosion Resistant',
            icon: '/icons/corrosion.png',
          },
          {
            title: 'Long Life',
            icon: '/icons/long-lasting.png',
          },
        ],
        productDetails: {
          title: 'Dizayn Geothermal Pipe',
          description:
            'These are pipes manufactured to prevent heat transfer of hot or cold fluids. Since the pipe is made of different material layers, it falls into the composite pipe category. Geothermal pipes are three-layered. The inner carrier pipe is made of Polyurethane (PUR) as an insulating material and Polyethylene (PE) as an outer protective sheath. The material of the carrier pipe can vary according to the operating temperatures. Polypropylene Random (PPr) pipe is used at 70°C and below, while steel pipe is used at 140°C and below. It has eliminated the disadvantages of fiberglass insulated pipes thanks to the technical and cost advantages it offers.',
          features: [
            {
              title: 'High Corrosion Resistance',
              icon: '/icons/corrosion.png',
              alt: 'Corrosion Resistance',
              description:
                'Provides high corrosion resistance with polyethylene sheath pipe and is long-lasting in humid environments.',
            },
            {
              title: 'Long Life',
              icon: '/icons/durable.png',
              alt: 'Durability',
              description:
                'Geothermal pipes are produced using high-quality polyurethane, which offers at least 30 years of insulation life against external influences.',
            },
            {
              title: 'High Heat Resistance',
              icon: '/icons/heat-proof.png',
              alt: 'Heat Resistance',
              description:
                'Carrier pipes that can be used at temperatures up to 140°C are ideal for various high-temperature applications.',
            },
            {
              title: 'Low Thermal Conductivity',
              icon: '/icons/low-temperature.png',
              alt: 'Low Thermal Conductivity',
              description:
                'PUR insulation material provides high energy efficiency with low thermal conductivity.',
            },
            {
              title: 'Earthquake Resistance',
              icon: '/icons/earthquake-resistant.png',
              alt: 'Earthquake Resistance',
              description:
                'Thanks to its flexible structure, geothermal pipes are not affected by ground movements such as earthquakes and offer safe performance.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/JEOTERMAL/JEOTERMAL.png',
              alt: 'Dizayn Geothermal Pipe',
              description: 'Dizayn Geothermal Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 3.png',
              alt: 'Dizayn Geothermal Pipe',
              description: 'Dizayn Geothermal Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 4.png',
              alt: 'Dizayn Geothermal Pipe',
              description: 'Dizayn Geothermal Pipe',
            },
          ],
          headers: [
            {
              title: '<b>Geothermal Pipe</b> and Fittings',
              description:
                'Geothermal pipes offer high heat resistance and long life with their three-layer composite structure. These pipes, which can be used up to 140°C, provide ideal solutions in district heating and geothermal energy applications.',
            },
            {
              title: 'Geothermal Pipe <b>Advantages</b>',
              description:
                'Geothermal pipes provide long-lasting and reliable performance with features such as high corrosion resistance, low thermal conductivity, and high temperature resistance.',
            },
            {
              title: 'Where are Geothermal Pipes <b>Used?</b>',
              description:
                'Geothermal pipes can be safely used in district heating, geothermal energy applications, and cogeneration systems.',
            },
            {
              title: 'Geothermal Pipe <b>Technical Specifications</b>',
              description:
                'Geothermal pipes provide high durability and low thermal conductivity with their three-layer composite structure. Technical specifications are as follows:\n<ul><li><b>Operating Temperature</b>: Temperature resistance up to 140°C.</li><li><b>Insulation Material</b>: Polyurethane (PUR).</li><li><b>Sheath Material</b>: Polyethylene (PE).</li></ul>',
            },
            {
              title: 'Geothermal Pipe <b>Installation and Application</b>',
              description:
                'Points to consider in the installation of geothermal pipes and application methods. You can maximize the performance of the pipes with the correct installation techniques.',
            },
            {
              title: 'Geothermal Pipe <b>Price List</b>',
              description:
                'For the 2024 Price List of geothermal pipes, please check the product catalog on our website. It offers economical solutions in your projects with a wide range of diameter options and affordable prices.',
            },
          ],
          faqs: [
            {
              question: 'What temperatures can geothermal pipes be used at?',
              answer: 'Geothermal pipes can be safely used at temperatures up to 140°C.',
            },
            {
              question: 'Can geothermal pipes be used at temperatures above 140°C?',
              answer:
                'Yes, it can be used with the rock wool-PUR combination for temperatures above 140°C.',
            },
            {
              question: 'Can geothermal pipes be used for steam transport?',
              answer: 'Yes, geothermal pipes with steel interiors can be used for steam transport.',
            },
            {
              question: 'Can geothermal pipes be used in cold water lines?',
              answer:
                'Yes, pre-insulated pipes can also be used in cold water lines. Chilled fluid can be transported without warming in chillers.',
            },
            {
              question: 'Are compensators used in geothermal pipes?',
              answer:
                'When the pre-insulated laying technique is applied, there is no need for compensators thanks to soil friction forces.',
            },
            {
              question: 'What is the corona process? Is it necessary?',
              answer:
                'The corona process ensures that PUR chemically reacts and bonds with both steel and PE. If corona is not performed, compensators must be used.',
            },
            {
              question: 'Is it necessary to open a gallery?',
              answer:
                'Since geothermal pipes are buried directly in the ground, there is no need to open a gallery. If opened, elongation should be considered.',
            },
          ],
          fittings: [
            {
              title: 'Geothermal Equal Tee',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 2.png',
              alt: 'Geothermal Equal Tee',
              category: 'Fittings',
            },
            {
              title: 'Geothermal Reducer',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 3.png',
              alt: 'Geothermal Reducer',
              category: 'Fittings',
            },
            {
              title: 'Geothermal Saddle',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 4.png',
              alt: 'Geothermal Saddle',
              category: 'Fittings',
            },
            {
              title: 'Geothermal Elbows',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 2.png',
              alt: 'Geothermal Elbows',
              category: 'Fittings',
            },
            {
              title: 'Geothermal Reducing Tee',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 3.png',
              alt: 'Geothermal Reducing Tee',
              category: 'Fittings',
            },
            {
              title: 'Geothermal Coupler',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 4.png',
              alt: 'Geothermal Coupler',
              category: 'Fittings',
            },
            {
              title: 'Geothermal End Cap',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 2.png',
              alt: 'Geothermal End Cap',
              category: 'Fittings',
            },
            {
              title: 'Geothermal Flange Adapter',
              image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU 3.png',
              alt: 'Geothermal Flange Adapter',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Dizayn Marine Discharge Pipes',
        description:
          'Dizayn Marine Discharge Pipes are designed for the safe and efficient discharge of wastewater in seas, lakes, and rivers.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/Deniz Desarj/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/Deniz Desarj/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/Deniz Desarj/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/Deniz Desarj/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU.png',
        link: '/en/urunler/altyapi-boru-sistemleri/deniz-desarj-boru',
        highlights: [
          {
            title: 'High Durability',
            icon: '/icons/durable.png',
          },
          {
            title: 'Corrosion Resistance',
            icon: '/icons/corrosion.png',
          },
          {
            title: 'Long Life',
            icon: '/icons/long-lasting.png',
          },
        ],
        productDetails: {
          title: 'Dizayn Marine Discharge Pipes',
          description:
            'Dizayn Marine Discharge Pipes are designed for the safe and efficient discharge of wastewater in seas, lakes, and rivers. These pipes offer high resistance to corrosion and abrasion and can be used safely in various water passage projects. Thanks to their flexible structure, the pipes are resistant to harsh environmental conditions and ground movements.',
          features: [
            {
              title: 'Chemical Resistance',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistance',
              description:
                'Marine Discharge Pipes provide long-term protection against sea salt and other chemicals thanks to the high chemical resistance of polyethylene.',
            },
            {
              title: 'Long Lifetime',
              icon: '/icons/long-lifetime.png',
              alt: 'Long Lifetime',
              description:
                'These pipes offer long-lasting and reliable use with a minimum service life of 50 years.',
            },
            {
              title: 'Hydraulic Smoothness',
              icon: '/icons/hydraulic-smooth.png',
              alt: 'Hydraulic Smoothness',
              description:
                'Thanks to its hydraulic smoothness, it allows fluids to be transported at higher flow rates and reduces project costs.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 2.png',
              alt: 'Dizayn Marine Discharge Pipe',
              description: 'Dizayn Marine Discharge Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 3.png',
              alt: 'Dizayn Marine Discharge Pipe',
              description: 'Dizayn Marine Discharge Pipe',
            },
            {
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 4.png',
              alt: 'Dizayn Marine Discharge Pipe',
              description: 'Dizayn Marine Discharge Pipe',
            },
          ],

          headers: [
            {
              title: '<b>Dizayn Marine Discharge Pipes</b> and Advantages',
              description:
                'Dizayn Marine Discharge Pipes are high-strength pipes used for the safe discharge of wastewater in the sea without harming the environment. These pipes, made of polyethylene material, are resistant to sea salt and offer a service life of at least 50 years. Thanks to their hydraulic smoothness, they allow fluids to be transported at higher flow rates and reduce the risk of clogging.',
              alt: 'Dizayn Marine Discharge Pipes',
            },
            {
              title: 'Dizayn Marine Discharge Pipes <b>Production Features</b>',
              description:
                'Marine Discharge Pipes are produced using the mandrel method on large cylinders. Polyethylene strips are drawn on the extruder machine and wrapped around the mandrel to form the pipe. These pipes are produced in different forms suitable for butt welding, extruder welding, and electrofusion welding. The advanced technology and high-quality raw materials used in the production process guarantee the high performance and durability of the pipes.',
            },
            {
              title: 'Dizayn Marine Discharge Pipes <b>Chemical Resistance</b>',
              description:
                'Marine Discharge Pipes show high resistance to sea salt and various chemicals thanks to the polyethylene raw material. This feature ensures that the pipes are long-lasting and remain resistant to environmental conditions. Thanks to its chemical resistance, the pipes maintain their performance even when in contact with seawater, salt water, and other aggressive substances.',
            },
            {
              title: 'Dizayn Marine Discharge Pipes <b>Long Life and Durability</b>',
              description:
                'Marine Discharge Pipes offer a minimum service life of 50 years. The natural durability and chemical resistance of polyethylene ensure that the pipes provide reliable service for a long time. This long life reduces the maintenance and replacement costs of the pipes, providing economic advantages.',
            },
            {
              title: 'Dizayn Marine Discharge Pipes <b>Hydraulic Smoothness</b>',
              description:
                'Marine Discharge Pipes allow fluids to be transported at higher flow rates thanks to their hydraulic smoothness. This feature enables fluids to be transported more efficiently by creating minimum friction and energy loss on the inner surface of the pipe. Hydraulic smoothness reduces the risk of clogging and offers long-term efficient use of the pipes.',
            },
            {
              title: 'Dizayn Marine Discharge Pipes <b>Easy Application and Installation</b>',
              description:
                'Marine Discharge Pipes can be easily laid thanks to their lightweight and flexible structure. Pipes can float on the water due to their low density and can be easily directed when placed under the sea. They are fixed to the seabed using concrete weights. In this way, the installation of the pipes can be carried out quickly and effectively.',
            },
            {
              title:
                'Dizayn Marine Discharge Pipes <b>Environmental Protection and Sustainability</b>',
              description:
                'Marine Discharge Pipes offer an environmentally friendly solution. By transporting pre-treated sewage to ocean currents, it ensures that the water is naturally purified. This method enables wastewater to be disposed of safely without harming the marine ecosystem. In addition, the long-lasting and durable structure of the pipes reduces the environmental footprint.',
            },
            {
              title:
                'Dizayn Marine Discharge Pipes <b>Earthquake and Ground Movement Resistance</b>',
              description:
                'Marine Discharge Pipes show high resistance to earthquakes and ground movements thanks to the flexible structure of polyethylene. Pipes flex during ground movements, minimizing the risk of breakage and damage. This feature ensures that the pipes provide safe and uninterrupted service for a long time.',
            },
          ],
          faqs: [
            {
              question: 'What is the raw material of Marine Discharge Pipes?',
              answer: 'Marine Discharge Pipes are made of polyethylene (PE) raw material.',
            },
            {
              question: 'How long is the service life of Marine Discharge Pipes?',
              answer:
                'Marine Discharge Pipes offer a minimum service life of 50 years under 0.5 bar pressure.',
            },
            {
              question: 'How is the chemical resistance of Marine Discharge Pipes?',
              answer:
                'Marine Discharge Pipes are resistant to sea salt and other chemicals thanks to the high chemical resistance of polyethylene.',
            },
            {
              question: 'How are Marine Discharge Pipes installed?',
              answer:
                'Marine Discharge Pipes can float on the water due to their low density when laid under the sea. They are fixed to the seabed using concrete weights and connected with flanges.',
            },
            {
              question: 'Are Marine Discharge Pipes resistant to earthquakes and ground movements?',
              answer:
                'Yes, Marine Discharge Pipes show high resistance to earthquakes and ground movements thanks to the flexible structure of polyethylene.',
            },
          ],
          fittings: [
            {
              title: 'Marine Discharge Equal Tee',
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 2.png',
              alt: 'Marine Discharge Equal Tee',
              category: 'Fittings',
            },
            {
              title: 'Marine Discharge Reducer',
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 3.png',
              alt: 'Marine Discharge Reducer',
              category: 'Fittings',
            },
            {
              title: 'Marine Discharge Saddle',
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 4.png',
              alt: 'Marine Discharge Saddle',
              category: 'Fittings',
            },
            {
              title: 'Marine Discharge Elbows',
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 2.png',
              alt: 'Marine Discharge Elbows',
              category: 'Fittings',
            },
            {
              title: 'Marine Discharge Unequal Tee',
              image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU 3.png',
              alt: 'Marine Discharge Unequal Tee',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },

      {
        title: 'Dizayn Chemical Tanks',
        description:
          'Dizayn Chemical Tanks are designed for the safe and efficient storage of corrosive chemicals.',
        featuredProduct: false,
        logo: '/productImages/alt yapı boruları/kimyasal-tanklar/logo.png',
        banner: {
          vertical: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/vertical.jpg',
          horizontal: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/tr/horizontal.png',
          PLP: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/tr/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/kimyasal-tanklar/kimyasal-tanklar.png',
        link: '/en/urunler/altyapi-boru-sistemleri/kimyasal-tanklar',
        highlights: [
          {
            title: 'High Chemical Resistance',
            icon: '/icons/chemical-resistant.png',
          },
          {
            title: 'Lightweight and Durable',
            icon: '/icons/lightweight.png',
          },
          {
            title: 'Recyclable',
            icon: '/icons/recyclable.png',
          },
        ],
        productDetails: {
          title: 'Dizayn Chemical Tanks',
          description:
            'Dizayn Chemical Tanks can be used to store corrosive substances such as acids, bases, and salts. Thanks to polyethylene raw material, they offer high chemical resistance and provide hygienic solutions for storing water and liquid food. They can be produced in volumes ranging from 1-50 m³, with diameters from Ø900 mm to Ø3600 mm.',
          features: [
            {
              title: 'High Chemical Resistance',
              icon: '/icons/chemical-resistant.png',
              alt: 'Chemical Resistant',
              description:
                'They are resistant to corrosive substances thanks to the high chemical resistance of polyethylene.',
            },
            {
              title: 'Lightweight and Durable',
              icon: '/icons/lightweight.png',
              alt: 'Lightweight',
              description:
                'It is lightweight because its density is 1/8 compared to metal products and reduces transportation costs.',
            },
            {
              title: 'Hygienic and Safe',
              icon: '/icons/bacteria.png',
              alt: 'Hygienic',
              description:
                'It provides safe storage of water and liquid food thanks to its hygienic properties.',
            },
            {
              title: 'Environmentally Friendly and Recyclable',
              icon: '/icons/recyclable.png',
              alt: 'Recyclable',
              description:
                'It is environmentally friendly and recyclable, and does not pollute the soil and water.',
            },
            {
              title: 'Flexible and Durable',
              icon: '/icons/flexible.png',
              alt: 'Flexible',
              description:
                'It is not affected by ground tremors such as earthquakes and absorbs vibrations with its flexible structure.',
            },
          ],
          images: [
            {
              image: '/productImages/alt yapı boruları/kimyasal-tanklar/tank.png',
              alt: 'Dizayn Chemical Tank',
              description: 'Dizayn Chemical Tank',
            },
            {
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Dizayn Chemical Tank',
              description: 'Dizayn Chemical Tank',
            },
            {
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Dizayn Chemical Tank',
              description: 'Dizayn Chemical Tank',
            },
          ],
          headers: [
            {
              title: '<b>Dizayn Chemical Tanks</b> and Accessories',
              description:
                'Dizayn Chemical Tanks are used for the storage of corrosive substances such as acids, bases, and salts. Thanks to the high chemical resistance of polyethylene, they offer long-lasting and reliable solutions. For the Dizayn Chemical Tanks <b>Price List</b>, you can call our number <b>0212 886 57 41</b> for more information.',
              alt: 'Dizayn Chemical Tanks',
            },
            {
              title: 'Dizayn Chemical Tanks <b>Advantages</b>',
              description:
                'Dizayn Chemical Tanks stand out with their high chemical resistance, lightweight, and durability. These features ensure the safe storage of corrosive substances such as acids, bases, and salts.',
            },
            {
              title: 'Dizayn Chemical Tanks <b>Applications</b>',
              description:
                'Dizayn Chemical Tanks are used for the storage of not only corrosive substances but also water and liquid foods. Thanks to their chemical resistance, they can be used safely in industrial facilities and various storage areas.',
            },
            {
              title: 'Dizayn Chemical Tanks <b>Weight Chart</b>',
              description:
                'The weight of Dizayn Chemical Tanks is calculated by multiplying the volume of the hollow cylinder and the density of the tank. The weight chart should take tolerance values into account.',
            },
            {
              title: 'Dizayn Chemical Tanks <b>Technical Specifications</b>',
              description:
                'Dizayn Chemical Tanks are made of polyethylene material and offer high chemical resistance. These tanks can be produced in various volumes and diameters and are ideal for storing corrosive substances. Thanks to their high flexibility, they can be used safely under challenging environmental conditions.',
            },
            {
              title: 'Dizayn Chemical Tanks <b>Accessories</b>',
              description:
                'Dizayn Chemical Tank accessories are produced with high quality and are shipped after individual inspection. Our accessories with ease of application and ergonomic design are at the service of our valued customers on the axis of high quality and reasonable price. Chemical Tank accessories can be used safely in industrial projects.\n\n- Chemical Tank Accessories\n- Chemical Tank Equal Tee\n- Chemical Tank Reducer\n- Chemical Tank Saddle\n- Chemical Tank Elbows\n- Chemical Tank Unequal Tee\n- Chemical Tank Coupling\n- Chemical Tank End Cap\n- Chemical Tank Flange Adapter\nThese accessories ensure the safe and durable connection of your chemical tank systems.',
            },
            {
              title: 'Dizayn Chemical Tanks <b>Joining Methods</b>',
              description:
                'Dizayn Chemical Tanks and accessories are connected by fusion or mechanical fittings. Tanks made of materials other than polyethylene can be connected with external clamp fittings, flanges, or other purpose-made transition adapters. Connection fittings facilitate use depending on the places to be used.\n\n<b>Joining Methods</b>\n- Electrofusion (EF) Welding: The tank and fitting ends are fused together by melting with electrical energy.\n- Butt Welding: The ends of the tank are melted at high temperature and joined together.\n- Coupling Connection: The ends of the tank are joined using mechanical couplings.',
            },
            {
              title: 'Dizayn Chemical Tanks Welding Method: <b>Electrofusion Welding</b>',
              description:
                'In the Electrofusion Welding method, the welding process is carried out with heating resistors inside the fusion fitting. Chemical Tanks are placed inside electrofusion fittings, and the ends of the welding machine are connected to the sockets on the fitting and heated with electric current. With this method, Chemical Tanks are securely and solidly joined. Chemical Tanks from 20 mm to 3600 mm in diameter can be welded with the Electrofusion Welding method.',
            },
            {
              title: 'Dizayn Chemical Tanks Welding Method: <b>Butt Welding</b>',
              description:
                'Butt Welding is one of the most common methods used to join Chemical Tanks and accessories. Using a butt welding machine, the ends of the tanks to be welded are shaved, and both ends are pushed together under a certain temperature and pressure to form a joint. This method ensures the safe and solid joining of Chemical Tanks. Chemical Tanks up to 3600 mm in diameter can be welded using the butt welding method.',
            },
            {
              title: 'Dizayn Chemical Tanks <b>Price List</b>',
              description:
                'Dizayn Chemical Tanks reach you with high quality and reasonable prices. Chemical Tanks offer the most suitable product for you with wide volume options, low cost, ease of transport, and teamwork in the production process. To take advantage of Chemical Tank benefits and access the 2024 Chemical Tank Price List, please contact us. For detailed information about our Chemical Tanks, please call our number 0212 886 57 41.',
            },
          ],
          faqs: [
            {
              question: 'What temperature fluids can Dizayn Chemical Tanks be used for?',
              answer:
                'Dizayn Chemical Tanks can be used at high temperatures depending on the type of chemical and usage conditions.',
            },
            {
              question: 'Are Dizayn Chemical Tanks resistant to corrosion?',
              answer:
                'Yes, Dizayn Chemical Tanks show high resistance to corrosion thanks to their polyethylene material.',
            },
            {
              question: 'What chemicals are Dizayn Chemical Tanks suitable for storing?',
              answer:
                'Dizayn Chemical Tanks are suitable for safely storing corrosive substances such as acids, bases, and salts. The chemical resistance chart shows the usability levels.',
            },
            {
              question: 'Are Dizayn Chemical Tanks hygienic?',
              answer:
                'Yes, Dizayn Chemical Tanks have hygienic features and can be used for storing water and liquid foods.',
            },
            {
              question: 'How are Dizayn Chemical Tanks joined?',
              answer:
                'Dizayn Chemical Tanks are joined by electrofusion, butt welding, and mechanical couplings.',
            },
            {
              question: 'How durable are Dizayn Chemical Tanks?',
              answer:
                'Dizayn Chemical Tanks offer a service life of at least 50 years and can be used safely in long-term projects.',
            },
            {
              question: 'Are Dizayn Chemical Tanks lightweight?',
              answer:
                'Yes, Dizayn Chemical Tanks offer easy transport and installation thanks to their lightweight structure.',
            },
            {
              question: 'Are Dizayn Chemical Tanks recyclable?',
              answer: 'Yes, Dizayn Chemical Tanks are environmentally friendly and recyclable.',
            },
            {
              question: 'Do Dizayn Chemical Tanks require compensators?',
              answer:
                'Dizayn Chemical Tanks generally do not require the use of compensators thanks to their flexible structure.',
            },
            {
              question: 'Are Dizayn Chemical Tanks in compliance with international standards?',
              answer:
                'Yes, Dizayn Chemical Tanks are manufactured in accordance with international standards and have certifications.',
            },
          ],
          fittings: [
            {
              title: 'Chemical Tank Equal Tee',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Chemical Tank Equal Tee',
              category: 'Fittings',
            },
            {
              title: 'Chemical Tank Reducer',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Chemical Tank Reducer',
              category: 'Fittings',
            },
            {
              title: 'Chemical Tank Saddle',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-1.png',
              alt: 'Chemical Tank Saddle',
              category: 'Fittings',
            },
            {
              title: 'Chemical Tank Elbows',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Chemical Tank Elbows',
              category: 'Fittings',
            },
            {
              title: 'Chemical Tank Unequal Tee',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Chemical Tank Unequal Tee',
              category: 'Fittings',
            },
            {
              title: 'Chemical Tank Coupling',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-1.png',
              alt: 'Chemical Tank Coupling',
              category: 'Fittings',
            },
            {
              title: 'Chemical Tank End Cap',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-2.png',
              alt: 'Chemical Tank End Cap',
              category: 'Fittings',
            },
            {
              title: 'Chemical Tank Flange Adapter',
              image: '/productImages/kimyasal-tanklar/kimyasal-tanklar-3.png',
              alt: 'Chemical Tank Flange Adapter',
              category: 'Fittings',
            },
          ],
        },
        background: '',
      },
    ],
  },
};
