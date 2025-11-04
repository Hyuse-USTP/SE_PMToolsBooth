import Hero from '../components/Hero';
import Features from '../components/Features';
import Comparison from '../components/Comparison';
import FreeVersion from '../components/FreeVersion';
import Benefits from '../components/Benefits';

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <Features />
      <Comparison />
      <FreeVersion />
      <Benefits />
    </main>
  );
}
