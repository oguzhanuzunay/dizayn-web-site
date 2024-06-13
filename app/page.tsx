import Hero from '@/components/Carousel/HeroSlider';
import CountUpComp from '@/components/CountUpComp';
import MapComponent from '@/components/MapComponent/MapComponent';
import NewTechPipes from '@/components/NewTechPipes';

export default function Home() {
  return (
    <main>
      <Hero />
      <NewTechPipes />
      <CountUpComp />
      <MapComponent show={false} />
    </main>
  );
}
