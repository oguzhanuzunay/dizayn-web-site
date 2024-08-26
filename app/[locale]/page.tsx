import Hero from '@/components/Carousel/HeroSlider';
import CountUpComp from '@/components/CountUpComp';
import MapComponent from '@/components/MapComponent/MapComponent';
import NewTechPipes from '@/components/NewTechPipes';

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full">
        <Hero />
      </section>
      <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <NewTechPipes />
      </section>
      <CountUpComp />
      <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <MapComponent show={false} />
      </section>
    </main>
  );
}
