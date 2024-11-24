import React from 'react';

const Horizontal = () => {
  
  const completionRate = 30; // In percentage

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Project Completed Progress Bar</h2>
      
      <div>
        
        <div className="flex justify-between mb-2">
            
          <span className="text-sm font-medium text-gray-700">On time Completed rate</span>
          <span className="text-sm font-medium text-gray-700">{completionRate}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
