'use client';
import Header from '@/components/Header';
import MapComponent from '@/components/MapComponent/MapComponent';
import { useTranslations } from 'next-intl';

const Bayilerimiz = () => {
  const t = useTranslations('Bayilerimiz');

  return (
    <div>
      <Header text={t('header')} />
      <div>
        <MapComponent show={false} />
      </div>
    </div>
  );
};

export default Bayilerimiz;