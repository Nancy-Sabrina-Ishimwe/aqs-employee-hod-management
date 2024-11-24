const ActionsSection = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Actions</h2>
        
        <div className="flex space-x-4 mb-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Assign to a Member</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Assign to the Team</button>
        </div>
  
        {/* Task Management */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
            <span>Task 1</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Assign Task</button>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
            <span>Task 2</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Assign Task</button>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
            <span>Task 3</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Assign Task</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ActionsSection;
  