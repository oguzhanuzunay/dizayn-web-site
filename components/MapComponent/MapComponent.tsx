'use client';
import { dealerList } from '@/constants';
import { scrollToHash } from '@/lib/utils';
import { useState } from 'react';
import TurkeyMap from 'turkey-map-react';
import DealerCard from '../cards/DealerCard';
import './MapComponent.css';

const MapComponent = () => {
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
      return null; // Add a default return statement
    });
  };

  return (
    <div>
      <h2 className="text-2xl">Map Component</h2>
      <TurkeyMap
        onClick={({ plateNumber, name }) => handleCityClick(plateNumber)}
        hoverable
        showTooltip
        cityWrapper={renderCity}
      />

      {!!renderDealerList() && (
        <div
          id="dealerLists"
          className="flex flex-row items-center justify-around gap-5 p-5 max-sm:flex-col"
        >
          {renderDealerList()}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
