import React from 'react';

const ProgressBar = ({ progress, status }) => {
  // Determine the color based on the progress status
  const getProgressColor = () => {
    if (status === 'Completed') return 'bg-green-500';
    if (status === 'In Progress') return 'bg-blue-500';
    if (status === 'Overdue') return 'bg-red-500';
    return 'bg-gray-300'; // Default color if no status is provided
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className={`${getProgressColor()} h-4 rounded-full`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
