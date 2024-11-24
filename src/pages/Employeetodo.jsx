import React from 'react';


function Employeetodo() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-64">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-purple-600">Ideas 💡</h2>
        <span className="text-gray-500 text-xs">5 items</span>
      </div>
      
      {/* Card Body */}
      <ul className="space-y-2">
        <li className="bg-gray-100 rounded-lg p-2 text-sm">
          <span className="text-gray-700">Desktop notifications</span>
          <div className="text-gray-400 text-xs">6 comments</div>
        </li>
        <li className="bg-gray-100 rounded-lg p-2 text-sm">
          <span className="text-gray-700">Responsive web app</span>
          <div className="text-gray-400 text-xs">8 comments</div>
        </li>
        <li className="bg-gray-100 rounded-lg p-2 text-sm">
          <span className="text-gray-700">Public Read/Write API</span>
          <div className="text-gray-400 text-xs">3 comments</div>
        </li>
        <li className="bg-gray-100 rounded-lg p-2 text-sm">
          <span className="text-gray-700">Team-based inboxes</span>
          <div className="text-gray-400 text-xs">4 comments</div>
        </li>
        <li className="bg-gray-100 rounded-lg p-2 text-sm">
          <span className="text-gray-700">Mac app</span>
          <div className="text-gray-400 text-xs">2 comments</div>
        </li>
      </ul>

      {/* Add Card Button */}
      <button className="mt-4 w-full bg-purple-100 text-purple-600 py-2 rounded-md text-sm hover:bg-purple-200">
        + Add a card
        
      </button>
    </div>
  );
}

export default Employeetodo;
