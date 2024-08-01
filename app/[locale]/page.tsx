import Hero from '@/components/Carousel/HeroSlider';
import CountUpComp from '@/components/CountUpComp';
import MapComponent from '@/components/MapComponent/MapComponent';
import NewTechPipes from '@/components/NewTechPipes';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main>
      <Hero />
      <h1>{t('title')}</h1>;
      <NewTechPipes />
      <CountUpComp />
      <MapComponent show={false} />
    </main>
  );
}
