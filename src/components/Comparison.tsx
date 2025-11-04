const Comparison = () => {
  const features = [
    { name: 'Projects', free: 'Unlimited', pro: 'Unlimited' },
    { name: 'Users', free: 'Unlimited', pro: 'Unlimited' },
    { name: 'File Upload Limit', free: '10MB', pro: '25MB' },
    { name: 'Cloud Storage Integrations', free: 'No', pro: 'Yes' },
    { name: 'Gantt Chart', free: 'No', pro: 'Yes' },
    { name: 'Custom Fields', free: 'No', pro: 'Yes' },
    { name: 'Recurring Events', free: 'No', pro: 'Yes' },
    { name: 'Email-In Functionality', free: 'No', pro: 'Yes' },
    { name: 'Customer Support', free: 'Basic', pro: 'Premium' },
  ];

  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center bg-gray-800 text-white p-8">
      <h2 className="text-5xl font-bold mb-12">Free vs. Pro</h2>
      <div className="w-full max-w-4xl bg-gray-700 p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-3 gap-4 mb-4 text-lg font-bold">
          <div>Feature</div>
          <div className="text-center">Free Plan</div>
          <div className="text-center">Pro Plan</div>
        </div>
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 items-center py-2 border-t border-gray-600">
            <div>{feature.name}</div>
            <div className="text-center">
              {feature.free === 'Yes' ? (
                <span className="text-green-400">&#10003;</span>
              ) : feature.free === 'No' ? (
                <span className="text-red-400">&#10007;</span>
              ) : (
                feature.free
              )}
            </div>
            <div className="text-center">
              {feature.pro === 'Yes' ? (
                <span className="text-green-400">&#10003;</span>
              ) : feature.pro === 'No' ? (
                <span className="text-red-400">&#10007;</span>
              ) : (
                feature.pro
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comparison;
