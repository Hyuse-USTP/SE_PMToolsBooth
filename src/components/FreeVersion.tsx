import { CheckCircleIcon } from '@heroicons/react/24/outline';

const FreeVersion = () => {
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center bg-white">
      <h2 className="text-5xl font-bold mb-12 text-gray-800">What you can do with the Free Version</h2>
      <div className="max-w-2xl mx-auto">
        <ul className="list-disc list-inside text-xl text-gray-600">
          <li className="mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" /> Manage personal projects and tasks.</li>
          <li className="mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" /> Collaborate with a small team on a project.</li>
          <li className="mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" /> Plan an event or a trip.</li>
          <li className="mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" /> Track your personal goals and habits.</li>
          <li className="mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" /> Organize your studies and assignments.</li>
        </ul>
      </div>
    </section>
  );
};

export default FreeVersion;
