// EmployeeSkipped.jsx
import React from 'react';

function Employeeoverdue() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-64">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-500">Overdue 🚫</h2>
        <span className="text-gray-500 text-xs">2 items</span>
      </div>
      
      {/* Card Body */}
      <ul className="space-y-2">
        <li className="bg-gray-100 rounded-lg p-2 text-sm">
          <span className="text-gray-700">Windows app support</span>
          <div className="text-gray-400 text-xs">3 comments</div>
        </li>
        <li className="bg-gray-100 rounded-lg p-2 text-sm">
          <span className="text-gray-700">Feature X development</span>
          <div className="text-gray-400 text-xs">4 comments</div>
        </li>
      </ul>

      {/* Add Card Button */}
      <button className="mt-4 w-full bg-gray-200 text-gray-600 py-2 rounded-md text-sm hover:bg-gray-300">
        + Add a card
      </button>
    </div>
  );
}

export default Employeeoverdue;
