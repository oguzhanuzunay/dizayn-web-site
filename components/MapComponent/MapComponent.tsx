'use client';
import { dealerList, languageTexts } from '@/constants';
import { scrollToHash } from '@/lib/utils';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import TurkeyMap from 'turkey-map-react';
import DealerCard from '../cards/DealerCard';
import './MapComponent.css';

const MapComponent = ({ show }: { show: boolean }) => {
  const language = useLocale();
  const dealers = languageTexts[language]?.pages.dealers ?? {};
  const [selectedCity, setSelectedCity] = useState(0);

  const handleCityClick = (cityId: number) => {
    setSelectedCity(cityId);
    setTimeout(() => {
      scrollToHash('dealerLists');
    }, 250);
  };

  const renderCity = (cityComponent: any, cityData: any) => {
    const isDealerCity = dealerList.find((c) => c.cityId === cityData.plateNumber);
    cityComponent.props.key = cityData.id;
    cityComponent.props['data-is-dealer-city'] = !!isDealerCity;
    return cityComponent;
  };

  const renderDealerList = () => {
    return dealerList.map((dealer) => {
      if (dealer.cityId === selectedCity) {
        return (
          <DealerCard
            key={dealer.id}
            {...dealer}
          />
        );
      }
      return null;
    });
  };

  return (
    <div>
      <div className="">
        <TurkeyMap
          onClick={({ plateNumber, name }) => handleCityClick(plateNumber)}
          hoverable
          showTooltip
          cityWrapper={renderCity}
        />
        <div
          className={`absolute bottom-[50px] right-0 z-10 max-xl:max-w-36 max-lg:max-w-32 max-md:max-w-40 max-sm:max-w-24
          ${show ? '' : 'hidden'}`}
        >
          <a href={dealers.subPageLink}>
            <Image
              src={dealers.imgLink}
              alt={dealers.alt}
              width={150}
              height={150}
            />
            <p
              className={`font-quicksand text-lg max-md:text-tiny ${show ? ' max-lg:hidden ' : ''}`}
            >
              {dealers.text}
            </p>
          </a>
        </div>
      </div>

      {!!renderDealerList() && (
        <div
          id="dealerLists"
          className="flex flex-row flex-wrap items-center justify-center gap-5 p-5 max-sm:flex-col"
        >
          {renderDealerList()}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
