// EmployeeDoing.jsx
import React from 'react';

function Employeedone() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-64">
      
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-blue-600">Done 💪</h2>
        <span className="text-gray-500 text-xs">3 items</span>
      </div>
      
      
      <ul className="space-y-2">
        <li className="bg-gray-100 rounded-lg p-2 text-sm">
          <span className="text-gray-700">Mobile app - Android</span>
          <div className="text-gray-400 text-xs">8 comments</div>
        </li>
        <li className="bg-gray-100 rounded-lg p-2 text-sm">
          <span className="text-gray-700">Split pane inbox option</span>
          <div className="text-gray-400 text-xs">5 comments</div>
        </li>
        <li className="bg-gray-100 rounded-lg p-2 text-sm">
          <span className="text-gray-700">Credit card requirement removal</span>
          <div className="text-gray-400 text-xs">4 comments</div>
        </li>
      </ul>

      {/* Add Card Button */}
      <button className="mt-4 w-full bg-blue-100 text-blue-600 py-2 rounded-md text-sm hover:bg-blue-200">
        + Add a card
      </button>
    </div>
  );
}

export default Employeedone;
