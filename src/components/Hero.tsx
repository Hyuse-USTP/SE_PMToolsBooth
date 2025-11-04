import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center bg-blue-500 text-white">
      <h1 className="text-6xl font-bold mb-4">Freedcamp</h1>
      <p className="text-2xl mb-8">Your Ultimate Project Management Tool</p>
      <ArrowDownIcon className="h-12 w-12 animate-bounce" />
    </section>
  );
};

export default Hero;
