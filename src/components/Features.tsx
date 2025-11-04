import { CheckCircleIcon, StarIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const Features = () => {
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center bg-white">
      <h2 className="text-5xl font-bold mb-12 text-gray-800">Core Free Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex items-center">
          <CheckCircleIcon className="h-12 w-12 text-green-500 mr-4" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Unlimited Projects & Users</h3>
            <p className="text-gray-600">Collaborate with your team without any limits.</p>
          </div>
        </div>
        <div className="flex items-center">
          <StarIcon className="h-12 w-12 text-yellow-500 mr-4" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Core PM Tools</h3>
            <p className="text-gray-600">Tasks, discussions, files, and more.</p>
          </div>
        </div>
        <div className="flex items-center">
          <ShieldCheckIcon className="h-12 w-12 text-blue-500 mr-4" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800">100MB Storage</h3>
            <p className="text-gray-600">Store your essential project files.</p>
          </div>
        </div>
        <div className="flex items-center">
          <CurrencyDollarIcon className="h-12 w-12 text-purple-500 mr-4" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Basic Reporting</h3>
            <p className="text-gray-600">Track your project&apos;s progress.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
