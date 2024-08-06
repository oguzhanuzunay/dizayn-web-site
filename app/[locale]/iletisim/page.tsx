import Header from '@/components/Header';
import LocationCard from '@/components/cards/LocationCard';
import { useTranslations } from 'next-intl';

type contactInfoParams = {
  id: number;
  position: { lat: number; lng: number };
  contact: {
    title: string;
    address: string;
    phone: string;
    fax: string;
    email: string;
  };
};

const Contact = () => {
  const t = useTranslations('Iletisim');

  const contactInfo: contactInfoParams[] = [
    {
      id: 1,
      position: { lat: 41.015137, lng: 28.671112 },
      contact: {
        title: t('contactInfo.istanbul.title'),
        address: `${t('contactInfo.istanbul.address')}`,
        phone: '+90 (212) 886 57 41',
        fax: '+90 (0212) 886 51 93',
        email: 'info@dizayngrup.com',
      },
    },
    {
      id: 2,
      position: { lat: 41.193067, lng: 27.858991 },
      contact: {
        title: t('contactInfo.tekirdag.title'),
        address: `${t('contactInfo.tekirdag.address')}`,
        phone: '+90 (282) 676 46 40',
        fax: '+90 (282) 676 46 45',
        email: 'info@dizayngrup.com',
      },
    },
  ];

  return (
    <div className={'relative z-0 mx-auto max-w-7xl px-6 sm:px-16'}>
      <Header text={t('header')} />

      <div
        className="flex flex-col
        items-center justify-center
        "
      >
        {contactInfo.map((item: contactInfoParams, index: any) => (
          <LocationCard
            key={index}
            contact={item.contact}
            position={item.position}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(Contact, 'Contact');
