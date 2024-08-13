import Image from 'next/image';

const WhatsApp = () => {
  const phoneNumber = '905548964789';

  const handleClick = async () => {
    // Check if WhatApp installed, if yes open whatsapp else open whatsapp web

    if (navigator.userAgent.includes('WhatsApp')) {
      // WhatsApp is installed
      window.open(`whatsapp://send?phone=${phoneNumber}`, '_blank');
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
    }
  };

  return (
    <>
      <div
        className="fixed bottom-10 right-4 z-30 flex w-max
          cursor-pointer flex-row items-center justify-center rounded-full bg-green-600 p-2 md:right-8"
        onClick={handleClick}
      >
        <Image
          src="/icons/socialMedia/whatsapp.png"
          width={32}
          height={32}
          alt="WhatsApp"
          className="pr-1"
        />
        <p>
          <span className="text-sm text-white"></span>
        </p>
      </div>
    </>
  );
};

export default WhatsApp;
