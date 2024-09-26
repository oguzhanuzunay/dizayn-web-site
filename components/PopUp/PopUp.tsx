import Image from 'next/image';
import React from 'react';

type PopupProps = {
  src: string;
  altText?: string; // Opsiyonel alt metin
  onClose: () => void; // Popup'ı kapatmak için bir callback fonksiyonu
};

const Popup: React.FC<PopupProps> = ({ src, altText = 'Image', onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-lg bg-white p-4">
        <Image
          src={src}
          alt={altText}
          className="max-h-full max-w-full object-contain"
          width={800}
          height={600}
        />
        <button
          className="absolute right-2 top-2 rounded-full bg-red-500 px-3 py-1 text-lg text-white"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Popup;
