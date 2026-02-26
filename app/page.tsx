import Hero from '@/components/sections/Hero';
import Education from '@/components/sections/Education';
import SpeciesShowcase from '@/components/sections/SpeciesShowcase';
import Conservation from '@/components/sections/Conservation';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Education />
      <SpeciesShowcase />
      <Conservation />
      <Footer />
    </div>
  );
}
