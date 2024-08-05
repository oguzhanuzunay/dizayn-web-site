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
          horizontal: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/horizontal.png',
          bgImage: '/productImages/üst yapı borular/elite-pipe-ve-ek/banner/bg-image.png',
          PLP: 'productImages/üst yapı borular/elite-pipe-ve-ek/banner/PLP.png',
        },
        image: '/productImages/üst yapı borular/elite-pipe-ve-ek/elitePipeBanner.png',
        background: 'bg-background-1',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
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
              icon: '/icons/money-bag.png',
              alt: 'money-bag.',
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
              image:
                '/productImages/üst yapı borular/elite-pipe-ve-ek/ELİTE PİPE COMPOZİT BORU GRUP.png',
              alt: 'ElitePipe',
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
<p>ElitePipe ve ek parçaları, su tesisatlarında, ısıtma sistemlerinde, temiz su ve mobil dağıtım hatlarında, güneş enerjisi sistemlerinde ve soğutma ve havalandırma sistemlerinde üstün performans gösterir. Bu parçalar, ElitePipe sisteminin verimli ve güvenli çalışmasını sağlayarak montaj kolaylığı ve düşük basınç kaybı sunar. Ayrıca, esnek ve kolay şekil alan yapıları sayesinde zaman ve maliyet tasarrufu sağlarlar.</p><p><b>Daha fazla detay ve bilgi için, ürün sayfasının en üst kısmında yer alan ürün kataloğuna bakabilirsiniz.</b></p>`,
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
  <p><b>Daha fazla detay ve bilgi için, ürün sayfasının en üst kısmında yer alan ürün kataloğuna bakabilirsiniz.</b></p>`,
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
  <p>ElitePipe boruları, geniş kullanım alanları ve üstün performans özellikleri ile tesisat projelerinizde güvenilir bir tercihtir. Daha fazla bilgi ve detay için, ürün kataloğumuzu inceleyebilirsiniz.</p>`,
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
  <p>ElitePipe borular, yüksek sıcaklık ve basınç dayanımı ile çeşitli çaplarda sunularak her türlü tesisat ihtiyacınıza cevap verir. Güncel çap ve basınç sınıfları bilgileri için ürün kataloğumuzu inceleyebilirsiniz.</p>`,
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
  <p><b>Güncel bilgiler ve detaylar için, ürün sayfasının en üst kısmında yer alan ürün kataloğunu inceleyebilirsiniz.</b></p>`,
            },
            {
              question: 'ElitePipe boruları kimyasallara karşı dayanıklı mı?',
              answer: `<h2>ElitePipe Boruları Kimyasallara Karşı Dayanıklı mı?</h2>
  <p>ElitePipe boruları, çeşitli kimyasallara karşı yüksek dayanıklılık sunar. Bu özellik, boruların uzun ömürlü olmasını ve zorlu çevre koşullarında bile güvenli bir şekilde kullanılmasını sağlar.</p>
  <p>ElitePipe boruları, yüzey aktif maddeler, alkoller, sabunlar ve boyalar gibi kimyasallara karşı mükemmel direnç gösterir. Bu kimyasal direnç, boruların iç ve dış gerilmelere maruz kaldığında bile deformasyona uğramasını engeller ve çatlama riskini minimize eder.</p>
  <p>ElitePipe'ın kimyasal dayanıklılığı, tesisat sistemlerinde güvenilir bir çözüm sunar ve çeşitli uygulamalarda üstün performans sağlar.</p>
  <p><b>Daha fazla bilgi ve detay için, ürün sayfasının en üst kısmında yer alan ürün kataloğunu inceleyebilirsiniz.</b></p>`,
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
  <p>ElitePipe boruları, geniş kullanım alanları ve üstün performans özellikleri ile tesisat projelerinizde güvenilir bir tercihtir. Daha fazla bilgi ve detay için, ürün sayfasının en üst kısmında yer alan ürün kataloğunu inceleyebilirsiniz.</p>`,
            },
            {
              question: 'ElitePipe boruların ömrü ne kadar?',
              answer: `  <h2>ElitePipe Boruların Ömrü Ne Kadar?</h2>
  <p>ElitePipe boruları, üstün malzeme kalitesi ve ileri teknoloji ile üretilmiştir. Bu nedenle, yüksek sıcaklık ve basınca karşı uzun ömürlü bir performans sergiler. ElitePipe boruları, 70°C'de 50 yıl ömür ve 11 bar basınç dayanımı ile sektörde öne çıkmaktadır.</p>
  <p>ElitePipe borularının uzun ömrü, su tesisatları, ısıtma sistemleri, temiz su hatları ve diğer uygulamalarda güvenilir bir çözüm sunar. Bu dayanıklılık, kullanıcıların uzun yıllar boyunca sorunsuz bir kullanım deneyimi yaşamasını sağlar.</p>
  <p><b>Daha fazla bilgi ve detay için, ürün sayfasının en üst kısmında yer alan ürün kataloğunu inceleyebilirsiniz.</b></p>
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
  <p>ElitePipe boruları, üstün malzeme kalitesi ve teknik özellikleri ile tesisat projelerinizde güvenilir ve uzun ömürlü çözümler sunar. Güncel teknik özellikler ve daha fazla bilgi için, ürün kataloğumuzu inceleyebilirsiniz.</p>`,
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
          horizontal: '/productImages/üst yapı borular/sterile-pipe/banner/horizontal.png',
          bgImage: '/productImages/üst yapı borular/sterile-pipe/banner/bg-image.png',
          PLP: '/productImages/üst yapı borular/sterile-pipe/banner/PLP.png',
        },
        image: '/productImages/üst yapı borular/sterile-pipe/sterilePipeBanner.png',
        background: 'bg-background-2',
        link: '/urunler/bina-ici-boru-sistemleri/sterilepipe',
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
                'Sterile Pipe boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'SoftPower Boru',
        description:
          'SoftPower Boru, yüksek oksidasyon dayanımı, esneklik ve kolay montaj imkanı sunan, PE63 hammaddesinden üretilmiş dayanıklı ve uzun ömürlü bir boru sistemidir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/soft-power-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/soft-power-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/soft-power-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/soft-power-ek/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
        link: '/urunler/bina-ici-boru-sistemleri/softpower-boru',
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
        title: 'Elastica Boru',
        description:
          'Elastica Boru, yüksek sıcaklık ve basınca dayanıklılığı, esnek yapısı ve montaj kolaylığı ile öne çıkan yenilikçi bir boru sistemidir. Hem yerden ısıtma sistemlerinde hem de radyatörlü tesisatlarda güvenle kullanılabilir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/mobil-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/mobil-boru-ve-ek/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages//üst yapı borular/mobil-boru-ve-ek/KILIFLI ELASTICA BORU.png',
        link: '/urunler/bina-ici-boru-sistemleri/elastica-boru',
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
                'Elastica Boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
            '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/banner/PLP.png',
          bgImage: '',
        },
        image:
          '/productImages/üst yapı borular/atık-su-nanotek-boru-ve-ek/üst yapı borular/atık-su-nanotek-boru-ve-ek.png',
        link: '/urunler/bina-ici-boru-sistemleri/nanotek-ve-nanotek-premium',
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
                'NanoTech Atık Su Boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Triplex Atık Su Boruları',
        description:
          'Triplex Atık Su Boruları, bina içi ve dışı kullanılmış suyun tahliyesi için döşenen, yüksek dayanıklılığa sahip ve uzun ömürlü bir boru sistemidir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/logo.png',
        isNewTech: true,
        banner: {
          vertical:
            '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/vertical.jpg',
          horizontal:
            '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/banner/PLP.png',
          bgImage: '',
        },
        image:
          '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/TRİPLEX ATIK SU BORUSU.png',
        link: '/urunler/bina-ici-boru-sistemleri/triplex-pipe',
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
              image:
                '/productImages/üst yapı borular/atık-su-sessiz-triblex-boru-ve-ek/triplex-pipe.png',
              alt: 'Triplex Atık Su Borusu',
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
                'Triplex Atık Su Boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
          horizontal: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/ppr-boru-ve-ek/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/ppr-boru-ve-ek/üst yapı borular/ppr-boru-ve-ek.png',
        link: '/urunler/bina-ici-boru-sistemleri/ppr-boru',
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
                'PPR Boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
          'SoftPower Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        featuredProduct: false,
        logo: '/productImages/üst yapı borular/soft-power-ek/logo.png',
        banner: {
          vertical: '/productImages/üst yapı borular/soft-power-ek/banner/vertical.jpg',
          horizontal: '/productImages/üst yapı borular/soft-power-ek/banner/horizontal.png',
          PLP: '/productImages/üst yapı borular/soft-power-ek/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
        link: '/urunler/bina-ici-boru-sistemleri/softpower-boru',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],
        productDetails: {
          title: 'SoftPower Boru',
          description:
            'Dizayn Grup boruları TS EN 13476-3 uluslararası standartlarına göre 100 mm ile 1000 mm anma çapları arasında muflu ya da manşonlu 800-2400 çapları arasında çelik takviyeli olarak üretilmektedir. Kuzeyboru Koruge boruları özel kalıpları ve yüksek kalitesi ile projelerinizin vazgeçilmezi olacak.',
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
                'Dizayn Grup Soft Power boruları, pürüzsüz iç ve dış yüzeyi ile hafif, esnek ve sağlam bir yapıya sahiptir. Taşıma ve kurulum sırasında minimum ağır ekipman gerektirir ve tüm saha koşullarında, zorlu çevre koşullarında bile kolayca uygulanabilir.\nSoft Power boruları, paslanmaya karşı yüksek direnç gösterir ve kimyasallara karşı mükemmel dayanıklılık sağlar. Tuzlu su, sıhhi kanalizasyon atık suyu, korozif asitler, bazlar ve tuzlar gibi maddelere karşı üstün koruma sunar. Bu <b>Özellikleri</b> ile Soft Power boruları, uzun ömürlü ve güvenilir performans sağlar, projelerinizde sizi asla yarı yolda bırakmaz.',
            },
            {
              title: 'Soft Power Boru <b>Nerelerde Kullanılır?</b>',
              description:
                'Dizayn Grup Soft Power boruları, üstün performansı ve kalitesi ile prestijli projelerde tercih edilen bir üründür. Su şebekeleri, tarımsal sulama sistemleri, atık su ve drenaj sistemleri, endüstriyel uygulamalar ve yeraltı su drenaj sistemlerinde güvenle kullanılabilir. Soft Power boruları, projelerinizde güvenilir ve uzun ömürlü çözümler sunar. Soft Power Boru <b>Fiyat Listesi</b> için bizimle iletişime geçiniz.',
            },
            {
              title: 'Soft Power Boru <b>Ağırlık Tablosu</b>',
              description:
                'Dizayn Grup Soft Power borularının ağırlık hesaplaması, içi boş silindir hacmi ve borunun yoğunluğu çarpılarak yapılır. Soft Power boruları üretim aşamasında ısıl işlem gördüğü için genleşme özelliği gösterir. Bu nedenle, Soft Power borularının ölçü tablosu hazırlanırken tolerans değerleri dikkate alınmalıdır.\n\n<b>Ağırlık Tablosu</b> Örneği\n20 mm: 0.15 kg/m\n25 mm: 0.24 kg/m\n32 mm: 0.39 kg/m\n40 mm: 0.61 kg/m\n50 mm: 0.96 kg/m\n63 mm: 1.51 kg/m',
            },
            {
              title: 'Soft Power Boru Teknik <b>Özellikleri</b>',
              description:
                'Dizayn Grup olarak kalite laboratuvarlarımızda sürekli gelişmeleri izleyip araştırmalar yapmaktayız. Soft Power borularımız, 20 mm - 1600 mm çap aralığında ve yüksek teknoloji ile üretilmektedir. Polietilenin <b>Özellikleri</b> sayesinde, basınçlı su sistemlerinde kullanıma en uygun alternatiflerden biridir. Yeraltı ve yerüstü basınçlı su şebeke hatları, deniz deşarj projeleri ve endüstriyel uygulamalar gibi birçok alanda kullanılmaktadır.\n\nSoft Power boruları, sert beton borulara göre daha kolay işlenir, monte edilir ve maliyet tasarrufu sağlar. Yapısal olarak darbelere ve soğuk hava koşullarına dayanacak şekilde tasarlanmıştır. Deniz uygulamalarında uzun boylarda borular kıyıda monte edilip daha sonra yerine oturtulabilir.',
            },
            {
              title: 'Soft Power <b>Ek Parçaları</b>',
              description:
                'Dizayn Grup Soft Power <b>Ek Parçaları</b> üstün kalitede üretilip tek tek kontrol edilerek sevk edilmektedir. Uygulama kolaylığı ve ergonomik tasarıma sahip ek parçalarımız, yüksek kalite ve uygun fiyat ekseninde siz değerli müşterilerimizin hizmetindedir. Soft Power <b>Ek Parçaları</b>, basınçlı su sistemleri ve diğer endüstriyel uygulamalarda güvenle kullanılabilir.\n\n- Soft Power <b>Ek Parçaları</b>\n- Soft Power Eşit Te\n- Soft Power Redüksiyon\n- Soft Power Semer\n- Soft Power Dirsekler\n- Soft Power İnegal Te\n- Soft Power Manşon\n- Soft Power Körtapa\n- Soft Power Flanş Adaptörü\nBu <b>Ek Parçaları</b>, Soft Power boru sistemlerinizin güvenli ve dayanıklı bir şekilde birleştirilmesini sağlar.',
            },
            {
              title: 'Soft Power Boru <b>Birleştirme Yöntemleri</b>',
              description:
                'Dizayn Grup Soft Power boruları ve ek parçaları birbirlerine eritilerek veya mekanik ek parçalar ile bağlanırlar. Polietilen dışında diğer malzemelerden yapılan borulara dıştan sıkmalı ek parçalar, flanşlar veya amaca uygun yapılmış diğer geçiş adaptörleri ile bağlanabilirler. Bağlantı ek parçaları kullanılacak yerlere göre kolaylık sağlamaktadır.\n\n<b>Birleştirme Yöntemleri</b>\n- Elektrofüzyon (EF) Kaynağı: Elektrik enerjisi ile boru ve ek parça uçları eritilerek birleştirilir.\n- Alın Kaynağı: Boru uçlarının yüksek sıcaklıkta eritilerek birleştirilmesi.\n- Kaplin ile Birleştirme: Mekanik kaplin kullanılarak boru uçlarının birleştirilmesi.',
            },
            {
              title: 'Soft Power Kaynak Yöntemi: <b>Elektrofüzyon Kaynak</b>',
              description:
                '<b>Elektrofüzyon Kaynak</b> yönteminde, kaynak işlemi füzyon ek parçanın iç kısmındaki ısıtma rezistansları ile gerçekleştirilir. Soft Power borular, elektrofüzyon ek parçalarının içine yerleştirilir ve kaynak makinesinin uçları ek parçanın üzerindeki soketlere bağlanarak elektrik akımı ile ısıtılır.\n\nBu yöntemle, Soft Power borular güvenli ve sağlam bir şekilde birleştirilmiş olur. <b>Elektrofüzyon Kaynak</b> metodu ile 20 mm çaptan 1600 mm çapa kadar olan Soft Power borular kaynatılabilir.',
            },
            {
              title: 'Soft Power Kaynak Yöntemi: <b>Alın Kaynak</b>',
              description:
                '<b>Alın Kaynak</b>, Soft Power boru ve ek parçalarının birleştirilmesinde kullanılan en yaygın yöntemlerden biridir. <b>Alın Kaynak</b> makinesi kullanılarak, kaynatılacak olan boruların uçları traşlanır ve her iki uç belirli bir ısı altında baskı ile birbirlerine doğru itilerek birleştirilir. Bu yöntem, Soft Power boruların güvenli ve sağlam bir şekilde birleştirilmesini sağlar. Alın kaynağı yöntemi ile 1600 mm çapa kadar olan Soft Power borular kaynatılabilir.',
            },
            {
              title: 'Soft Power Boru <b>Fiyat Listesi</b>',
              description:
                'Dizayn Grup Soft Power boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Soft Power borular, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Soft Power boru avantajlarından yararlanmak ve 2024 Soft Power Boru Fiyat Listesine ulaşmak için bizimle iletişime geçiniz.\n\nSoft Power borularımız hakkında detaylı bilgi almak için 0212 886 57 41 numaralı hattımızı arayabilirsiniz.',
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
                'Soft Power boruları elektrofüzyon (EF) kaynağı, alın kaynağı ve kaplin ile birleştirme yöntemleri ile birleştirilebilir.',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
            },
            {
              question: 'Soft Power boruları nasıl temin edebilirim?',
              answer:
                "Soft Power borularını Dizayn Grup'un yetkili satıcılarından veya doğrudan bizimle iletişime geçerek temin edebilirsiniz.",
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
          horizontal: '/productImages/alt yapı boruları/RTP BORU/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/RTP BORU/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/RTP BORU/RTP1.png',
        link: '/urunler/altyapi-boru-sistemleri/rtp-boru',
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
                'RTP Boruları, yüksek basınç dayanımı ve üstün kompozit yapısı ile 90 mm - 1200 mm arası çaplarda ve çeşitli basınç sınıflarında üretilmektedir. RTP Boruları, su, gaz, petrol gibi farklı akışkanların taşınmasında güvenilir çözümler sunar. RTP Boru <b>Fiyat Listesi</b> için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz.',
              image: '/productImages/altyapi/rtp-boru/rtp-boru.png',
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
                'RTP Boruları, yüksek performansı ve kalitesi ile su, gaz, petrol taşımacılığı, jeotermal su taşıma hatları ve offshore uygulamalar gibi birçok alanda güvenle kullanılabilir. RTP Boruları, projelerinizde güvenilir ve uzun ömürlü çözümler sunar. RTP Boru <b>Fiyat Listesi</b> için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz.',
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
                'RTP Boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. RTP Borular, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. RTP Boru avantajlarından yararlanmak ve 2024 RTP Boru Fiyat Listesine ulaşmak için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz.',
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
                'RTP Boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
          horizontal: '/productImages/alt yapı boruları/TELEKOM/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/TELEKOM/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/TELEKOM/TELEKOM BORU 1.png',
        link: '/urunler/altyapi-boru-sistemleri/telekom-boru',
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
                'Telekom Boruları, yüksek dayanıklılık ve uzun ömür sunan, çeşitli çap ve renk seçenekleriyle üretilen kablo muhafaza borularıdır. Telekom Boru <b>Fiyat Listesi</b> için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz. Bu borular, polietilen ve polipropilen hammaddelerden üretilmiştir ve her türlü çevresel koşullara dayanıklıdır.',
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
                'Telekom Boruları, yüksek dayanıklılık, esneklik, kimyasal dayanıklılık ve uzun ömür gibi teknik özelliklere sahiptir. Detaylı bilgi için ürün kataloğumuzu inceleyebilirsiniz. Bu borular, çeşitli çap ve basınç sınıflarında üretilmektedir ve her türlü zorlu koşulda üstün performans sunar.',
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
                'Telekom Boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Telekom Borular, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Telekom Boru avantajlarından yararlanmak ve 2024 Telekom Boru Fiyat Listesine ulaşmak için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz.',
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
                'Telekom Boruların 2024 Fiyat Listesi için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz. Detaylı bilgi ve diğer çaplar için firmamızla iletişime geçebilirsiniz.',
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
          horizontal: '/productImages/alt yapı boruları/Koruge/banner/horizontal.jpg',
          PLP: '/productImages/alt yapı boruları/Koruge/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Koruge/Koruge BORU.png',
        link: '/urunler/altyapi-boru-sistemleri/koruge-boru',
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
          horizontal: '/productImages/alt yapı boruları/KorugeSarmal/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/KorugeSarmal/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/KorugeSarmal/koruge-sarmal-2.png',
        link: '/urunler/altyapi-boru-sistemleri/koruge-sarmal-boru',
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
          horizontal: '/productImages/alt yapı boruları/PE 80/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/PE 80/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/PE 80/PE 80 BORU.png',
        link: '/urunler/altyapi-boru-sistemleri/pe-80-dogalgaz-boru',
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
                'Dizayn PE 80 doğalgaz boruları, yüksek kalitesi ve uygun fiyatı ile sizlere ulaşıyor. Dizayn PE 80 doğalgaz boruları, geniş çap seçenekleri, düşük maliyeti, taşıma kolaylığı ve üretim sürecindeki ekip çalışması ile size en uygun ürünü sunar. Dizayn PE 80 doğalgaz boru avantajlarından yararlanmak ve 2024 Dizayn PE 80 Doğalgaz Boru Fiyat Listesine ulaşmak için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz.',
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
                'PE 80 doğalgaz borularının 2024 Fiyat Listesi için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz.',
            },
            {
              question: 'PE 80 doğalgaz boruları kimyasallara karşı dayanıklı mıdır?',
              answer:
                'Evet, PE 80 doğalgaz boruları kimyasal maddelere karşı yüksek direnç sağlar ve korozyona karşı koruma sunar.',
            },
            {
              question: 'PE 80 doğalgaz borularının teknik özellikleri nelerdir?',
              answer:
                'PE 80 doğalgaz boruları, yüksek basınç dayanımı, esneklik, kimyasal direnç ve uzun ömür gibi teknik özelliklere sahiptir. Detaylı teknik özellikler için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz.',
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
          horizontal: '/productImages/alt yapı boruları/Jeotermal/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/Jeotermal/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Jeotermal/Jeotermal BORU.png',
        link: '/urunler/altyapi-boru-sistemleri/jeotermal-boru',
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
                'Jeotermal boruların 2024 Fiyat Listesi için internet sitemizde yer alan ürün kataloğumuzu inceleyebilirsiniz. Geniş çap seçenekleri ve uygun fiyatları ile projelerinizde ekonomik çözümler sunar.',
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
          horizontal: '/productImages/alt yapı boruları/Deniz Desarj/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/Deniz Desarj/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/Deniz Desarj/Deniz Desarj BORU.png',
        link: '/urunler/altyapi-boru-sistemleri/deniz-desarj-boru',
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
              icon: '/icons/long-lifetime.png',
              alt: 'Long Lifetime',
              description:
                'Bu borular, minimum 50 yıl servis ömrü ile uzun süreli ve güvenilir kullanım sunar.',
            },
            {
              title: 'Hidrolik Pürüzsüzlük',
              icon: '/icons/hydraulic-smooth.png',
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
              answer: 'Deniz Deşarj Boruları, 0,5 bar basınç altında minimum 50 yıl servis ömrü sunar.',
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
          horizontal: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/horizontal.png',
          PLP: '/productImages/alt yapı boruları/kimyasal-tanklar/banner/PLP.png',
          bgImage: '',
        },
        image: '/productImages/alt yapı boruları/kimyasal-tanklar/kimyasal-tanklar.png',
        link: '/urunler/altyapi-boru-sistemleri/kimyasal-tanklar',
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
              question: 'Dizayn Kimyasal Tanklar hangi sıcaklıktaki akışkanlara kadar kullanılabilir?',
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
          'ELITEPIPE, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        featuredProduct: true,
        image: '/productImages/üst yapı borular/ELİTE PİPE COMPOZİT BORU GRUP.png',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'ElitePipe',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Sterile Pipe',
        description:
          'SoftPower Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        featuredProduct: true,
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/urunler/bina-ici-boru-sistemleri/sterile-pipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'SoftPower Boru',
          description:
            'Dizayn Grup boruları TS EN 13476-3  uluslararası standartlarına göre 100 mm ile 1000 mm anma çapları arasında muflu ya da manşonlu 800- 2400 çapları arasında çelik takviyeli olarak üretilmektedir. Kuzeyboru Koruge boruları özel kalıpları ve yüksek kalitesi ile projelerinizin vazgeçilmezi olacak.',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'SoftPower Boru',
        description:
          'SoftPower Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        featuredProduct: false,
        image: '/productImages/üst yapı borular/soft-power-ek/SOFT POWER BORU 2.png',
        link: '/urunler/bina-ici-boru-sistemleri/softpower-boru',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'SoftPower Boru',
          description:
            'Dizayn Grup boruları TS EN 13476-3  uluslararası standartlarına göre 100 mm ile 1000 mm anma çapları arasında muflu ya da manşonlu 800- 2400 çapları arasında çelik takviyeli olarak üretilmektedir. Kuzeyboru Koruge boruları özel kalıpları ve yüksek kalitesi ile projelerinizin vazgeçilmezi olacak.',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'NanoTech Atık Su Borusu',
        description:
          'NanoTech Atık Su Borusu, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
        image:
          '/productImages/üst yapı borular/ATIK SU NANOTEK BORU VE EK PARÇALAR/NANOTEK ATIK SU BORU GRUP.png',
        link: '/urunler/bina-ici-boru-sistemleri//nanotech-boru',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'SoftPower Boru',
          description:
            'Dizayn Grup boruları TS EN 13476-3  uluslararası standartlarına göre 100 mm ile 1000 mm anma çapları arasında muflu ya da manşonlu 800- 2400 çapları arasında çelik takviyeli olarak üretilmektedir. Kuzeyboru Koruge boruları özel kalıpları ve yüksek kalitesi ile projelerinizin vazgeçilmezi olacak.',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Elastica',
        description:
          'Elastica, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
        image:
          '/productImages/üst yapı borular/MOBİL BORU VE EK PARALARI/KILIFLI ELASTICA BORU.png',
        link: '/urunler/bina-ici-boru-sistemleri//elastika',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'SoftPower Boru',
          description:
            'Dizayn Grup boruları TS EN 13476-3  uluslararası standartlarına göre 100 mm ile 1000 mm anma çapları arasında muflu ya da manşonlu 800- 2400 çapları arasında çelik takviyeli olarak üretilmektedir. Kuzeyboru Koruge boruları özel kalıpları ve yüksek kalitesi ile projelerinizin vazgeçilmezi olacak.',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'PPRC Boru',
        description:
          'SterilePipe, yüksek sıcaklıklara dayanıklı bir boru sistemidir ve birçok alanda kullanılmaktadır.',
        image:
          '/productImages/üst yapı borular/PPR BORU VE EK PARÇALAR BEYAZ/BEYAZ BORULAR/BEYAZ HI-TECH OKSİ PLUS KOMBİ TOPLU.png',
        link: '/urunler/bina-ici-boru-sistemleri/pprc-boru',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'SoftPower Boru',
          description:
            'Dizayn Grup boruları TS EN 13476-3  uluslararası standartlarına göre 100 mm ile 1000 mm anma çapları arasında muflu ya da manşonlu 800- 2400 çapları arasında çelik takviyeli olarak üretilmektedir. Kuzeyboru Koruge boruları özel kalıpları ve yüksek kalitesi ile projelerinizin vazgeçilmezi olacak.',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
    ],

    infrastructureProducts: [
      {
        title: 'Soft Power',
        description:
          'SoftPower Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        featuredProduct: true,
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'ElitePipe',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'RTP Boru',
        description:
          'RTP Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        featuredProduct: true,
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'ElitePipe',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Telekom Boruları',
        description:
          'RTP Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'ElitePipe',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Dizayn Pe 100',
        description:
          'RTP Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Dizayn Koruge',
        description:
          'RTP Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],
        productDetails: {
          title: 'Dizayn Koruge Boru ve Ek Parçaları',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Dizayn Koruge Sarmal Borular',
        description:
          'RTP Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'Dizayn Koruge Boru ve Ek Parçaları',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Dizayn PE 80',
        description:
          'RTP Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'Dizayn PE 80 Doğalgaz Boru ve Ek Parçaları',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Dizayn Jeotermal Boru',
        description:
          'RTP Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'Dizayn Jeotermal Boru ve Ek Parçaları',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Dizayn Deniz Deşarj Boruları',
        description:
          'RTP Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'Dizayn Deniz Deşarj Boruları',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
        title: 'Dizayn Kimyasal Tanklar',
        description:
          'RTP Boru, dayanıklı, esnek, kolay taşınan ve maliyet tasarrufu sağlayan yenilikçi bir boru sistemidir.',
        image: '/productImages/üst yapı borular/SterilePipe/Untitled 3 v15.png',
        link: '/urunler/bina-ici-boru-sistemleri/elitepipe',
        highlights: [
          { title: 'Darbeye Dayanıklı', icon: '/icons/durable.png' },
          { title: 'Esnek', icon: '/icons/flexible.png' },
          { title: 'Maliyet Tasarrufu', icon: '/icons/save-time.png' },
        ],

        productDetails: {
          title: 'Dizayn Kimyasal Tanklar',
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
                'Soft Power boruları geniş çap aralığı, yüksek basınç dayanımı ve pürüzsüz iç ve dış yüzey Özellikleri ile üretilmektedir. Daha fazla bilgi için ürün kataloğumuza bakabilirsiniz.',
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
    ],
  },
};
