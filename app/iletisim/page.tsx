'use client';
import Header from '@/components/Header';
import { SectionWrapper } from '@/hoc';

const Contact = () => {

  return (
    <div>
      <Header text="İletişim" />

      <div
        className="grid grid-cols-4
        items-center justify-items-center gap-0
        max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
      >
        <div className="col-span-1 flex size-full flex-col items-center justify-center gap-0">
          
        </div>
        <div
          className="col-span-3
         flex size-full flex-col items-center justify-center gap-0 border-2 border-dashed border-gray-200 p-4"
        >
          <div className="flex flex-col items-center justify-center gap-0">
            <div className="flex flex-col items-center justify-center gap-0">
              <h2 className="font-spaceGrotesk text-2xl font-semibold text-gray-900">FABRİKA</h2>
              <p className="font-spaceGrotesk text-base font-normal text-gray-900">
                İletişim bilgilerimiz
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-0">
              <div className="flex flex-col items-center justify-center gap-0">
                <h3 className="font-spaceGrotesk text-lg font-semibold text-gray-900">Adres: </h3>
                <p className="font-spaceGrotesk text-base font-normal text-gray-900">
                  Kırımlı OSB Mehmetçik Blv. No:2 Aksaray|Merkez
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-0">
                <h3 className="font-spaceGrotesk text-lg font-semibold text-gray-900">Telefon</h3>
                <p className="font-spaceGrotesk text-base font-normal text-gray-900">444 65 38</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-0">
                <h3 className="font-spaceGrotesk text-lg font-semibold text-gray-900">E-Posta</h3>
                <p className="font-spaceGrotesk text-base font-normal text-gray-900">
                  satis@kuzeyboru.com.tr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(Contact, 'Contact');
