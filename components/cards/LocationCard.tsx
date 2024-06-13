import { contactInfoParams } from '@/types';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import './styles.css';

const LocationCard = (locationInfo: contactInfoParams) => {
  const { position, contact, id } = { ...locationInfo };

  return (
    <div className={`flex w-full max-sm:!flex-col  ${id % 2 === 0 ? 'flex-row-reverse' : ''}`}>
      <div className="flex w-full items-center justify-center gap-0 border-2 border-dashed border-gray-200 max-sm:h-[300px]">
        <APIProvider apiKey={'AIzaSyDfbzhTTYtd7LU3xuiD-XKoe1P1Ib-I80c'}>
          <Map
            defaultCenter={position}
            defaultZoom={10}
          >
            <Marker position={position} />
          </Map>
        </APIProvider>
      </div>
      <div
        className="
   col-span-1 flex h-full w-2/4 flex-col items-start justify-center gap-0 border-2 border-dashed border-gray-200 p-4 max-lg:h-full max-md:w-full max-sm:w-full"
      >
        <div className="flex flex-col items-baseline justify-center gap-0">
          <div className="flex flex-col items-baseline justify-center gap-0">
            <h2 className="font-spaceGrotesk text-2xl font-semibold text-gray-900">
              {contact.title}
            </h2>
            <p className="font-spaceGrotesk text-base font-normal text-gray-900">
              İletişim bilgilerimiz
            </p>
          </div>
          <div className="flex flex-col items-baseline justify-center gap-0">
            <div className="flex flex-col items-baseline justify-center gap-0">
              <h3 className="font-spaceGrotesk text-lg font-semibold text-gray-900">Adres: </h3>
              <p className="font-spaceGrotesk text-base font-normal text-gray-900">
                {contact.address}
              </p>
            </div>
            <div className="flex flex-col items-baseline justify-center gap-0">
              <h3 className="font-spaceGrotesk text-lg font-semibold text-gray-900">Telefon</h3>
              <p className="font-spaceGrotesk text-base font-normal text-gray-900">
                {contact.phone}
              </p>
            </div>
            <div className="flex flex-col items-baseline justify-center gap-0">
              <h3 className="font-spaceGrotesk text-lg font-semibold text-gray-900">E-Posta</h3>
              <p className="font-spaceGrotesk text-base font-normal text-gray-900">
                {contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
