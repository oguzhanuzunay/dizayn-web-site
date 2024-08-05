import { dealerListParam } from '@/types';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const DealerCard = ({ id, name, phone, address, email, mapsLink, cityId }: dealerListParam) => {
  const t = useTranslations('DealerCard');

  return (
    <div
      key={id}
      className="m-3 flex w-72 flex-col items-start justify-center gap-1 rounded-lg bg-gray-100
      p-3 max-xl:w-80 max-lg:w-72 max-md:w-80 max-sm:w-11/12
      "
    >
      <h3 className="font-bold">{name}</h3>
      <p>{address}</p>
      <div className="flex gap-2">
        <Image
          className="invert"
          src="/icons/phone-call.png"
          alt="phone icon"
          width={23}
          height={20}
        />
        {phone}
      </div>
      <p>{email}</p>
      {mapsLink && (
        <a
          href={mapsLink}
          target="_blank"
          className="text-blue-500"
          rel="noreferrer"
        >
          {t('seeOnMap')}
        </a>
      )}
    </div>
  );
};

export default DealerCard;
