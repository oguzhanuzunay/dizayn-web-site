'use client';
import Hero from '@/components/Carousel/HeroSlider';
import CountUpComp from '@/components/CountUpComp';
import MapComponent from '@/components/MapComponent/MapComponent';
import NewTechPipes from '@/components/NewTechPipes';
import Popup, { PopupProps } from '@/components/PopUp/PopUp';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'ı kontrol et
    const isPopupClosed = localStorage.getItem('popupClosed');
    if (!isPopupClosed) {
      setIsPopupVisible(true);
    }
  }, []);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    localStorage.setItem('popupClosed', 'true');
  };
  return (
    <main>
      <section className="h-screen w-full">
        <Hero />
      </section>
      <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <NewTechPipes />
      </section>
      <CountUpComp />
      <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <MapComponent show={false} />
      </section>
      {isPopupVisible && (
        <Popup
          src="/pop-ups/popup-image.jpg" // Görsel URL'sini dışarıdan veriyoruz
          altText="Açıklayıcı Metin" // İsteğe bağlı
          onClose={handleClosePopup}
        />
      )}
    </main>
  );
}
