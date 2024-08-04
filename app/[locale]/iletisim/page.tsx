'use client';
import Header from '@/components/Header';
import LocationCard from '@/components/cards/LocationCard';
import { contactInfo } from '@/constants';
import { useLanguageContext } from '@/context/language';
import { SectionWrapper } from '@/hoc';
import { contactInfoParams } from '@/types';

const Contact = () => {
  const [language] = useLanguageContext();

  return (
    <div>
      <Header text="İletişim" />

      <div
        className="flex flex-col
        items-center justify-center
        "
      >
        {contactInfo[language].map((item: contactInfoParams, index) => (
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
