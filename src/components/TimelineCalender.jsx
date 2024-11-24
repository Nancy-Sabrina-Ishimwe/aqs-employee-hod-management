const TimelineCalendar = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {/* Timeline */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Timeline</h2>
          <p>Latest projects added</p>
          <div className="flex space-x-2 text-gray-500">
            <span>9/5/2024</span>
            <span>9/15/2024</span>
          </div>
          <div className="flex space-x-2 mt-4">
            {/* Add circular project status items here */}
            <span className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center">5</span>
            <span className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">4</span>
            {/* Repeat for more days */}
          </div>
        </div>
  
        {/* Calendar */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Calendar</h2>
          <div className="flex justify-center">
            <span className="bg-orange-500 w-8 h-8 rounded-full text-white flex items-center justify-center">9</span>
          </div>
          {/* Use a third-party calendar library if needed */}
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded">Add to Schedule</button>
        </div>
      </div>
    );
  };
  
  export default TimelineCalendar;
  