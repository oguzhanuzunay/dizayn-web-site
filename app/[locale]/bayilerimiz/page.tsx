import Header from '@/components/Header';
import MapComponent from '@/components/MapComponent/MapComponent';
import { useTranslations } from 'next-intl';

const Bayilerimiz = () => {
  const t = useTranslations('Bayilerimiz');

  return (
    <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div>
        <Header text={t('header')} />
        <div>
          <MapComponent show={false} />
        </div>
      </div>
    </section>
  );
};

export default Bayilerimiz;
