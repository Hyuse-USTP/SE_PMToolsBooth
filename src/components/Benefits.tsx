import { CheckCircleIcon, StarIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const Benefits = () => {
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center bg-blue-500 text-white">
      <h2 className="text-5xl font-bold mb-12">Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex items-center">
          <CheckCircleIcon className="h-12 w-12 text-white mr-4" />
          <div>
            <h3 className="text-2xl font-bold">Centralized Collaboration</h3>
            <p>Keep everything in one place.</p>
          </div>
        </div>
        <div className="flex items-center">
          <StarIcon className="h-12 w-12 text-white mr-4" />
          <div>
            <h3 className="text-2xl font-bold">Improved Organization</h3>
            <p>Stay organized and on track.</p>
          </div>
        </div>
        <div className="flex items-center">
          <ShieldCheckIcon className="h-12 w-12 text-white mr-4" />
          <div>
            <h3 className="text-2xl font-bold">Enhanced Transparency</h3>
            <p>Gain a clear overview of your project&apos;s progress.</p>
          </div>
        </div>
        <div className="flex items-center">
          <CurrencyDollarIcon className="h-12 w-12 text-white mr-4" />
          <div>
            <h3 className="text-2xl font-bold">Increased Productivity</h3>
            <p>Focus on what you do best.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
