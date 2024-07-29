'use client';
import MapComponent from '@/components/MapComponent/MapComponent';
import Header from '@/components/Header';

const Bayilerimiz = () => {
  return (
    <div>
      <Header text='Bayilerimiz' />
      <div>
        <MapComponent show={false} />
      </div>
    </div>
  );
};

export default Bayilerimiz;
