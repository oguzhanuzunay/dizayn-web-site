'use client';

import Popup from './PopUp';
import { useEffect, useState } from 'react';

const CondolencePopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // 3 saat = 3 * 60 * 60 * 1000 milisaniye
    const THREE_HOURS = 3 * 60 * 60 * 1000;

    // Sayfa yüklendiğinde localStorage'ı kontrol et
    const closedTimestamp = localStorage.getItem('condolencePopupClosedTimestamp');
    
    if (!closedTimestamp) {
      // Hiç kapatılmamışsa göster
      setIsPopupVisible(true);
    } else {
      // Kapatılmışsa, zaman damgasını kontrol et
      const closedTime = parseInt(closedTimestamp, 10);
      const currentTime = Date.now();
      const timeDifference = currentTime - closedTime;

      // 3 saat geçmişse tekrar göster
      if (timeDifference >= THREE_HOURS) {
        setIsPopupVisible(true);
      }
    }
  }, []);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    // Şu anki zamanı timestamp olarak kaydet
    const currentTimestamp = Date.now().toString();
    localStorage.setItem('condolencePopupClosedTimestamp', currentTimestamp);
  };

  if (!isPopupVisible) return null;

  return (
    <Popup
      src="/pop-ups/sehit_bassagligi_duyuru.png"
      altText="Taziye Mesajı"
      onClose={handleClosePopup}
    />
  );
};

export default CondolencePopup;

