import Hero from '@/components/Carousel/HeroSlider';
import Certificates from '@/components/Certificates';
import CountUpComp from '@/components/CountUpComp';
import MapComponent from '@/components/MapComponent/MapComponent';
import NewTechPipes from '@/components/NewTechPipes';

export default function Home() {
  return (
    <main>
      <Hero />
      <NewTechPipes />
      <CountUpComp />
      <MapComponent />
      <Certificates />
    </main>
  );
}
