import React from 'react';

const Resources = () => {
  // Array of resource data
  const resourcesData = [
    {
      title: 'Customer satisfaction',
      comment: "The product "
    },
    {
      title: ' resource title',
      comment: "The product "
    },
    {
      title: ' resource title',
      comment: "The product"
    },
    {
      title: 'resource title',
      comment: "The product"
    },
    // Add more resource data as needed
  ];

  return (
    <div className="mx-auto max-w-5xl grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-9 px-4 md:px-6">
      {resourcesData.map((resource, index) => (
        <div key={index} className="border rounded-lg flex-1 overflow-hidden bg-white">
          <div className="p-4 grid gap-2">
            <h4 className="text-sm font-semibold leading-none">{resource.title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{resource.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resources;

