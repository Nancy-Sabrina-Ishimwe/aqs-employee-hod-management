const Addprojectform = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Project Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Project Description</label>
          <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
  
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-2">Project Category</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select Project Type</option>
              {/* Add more options */}
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Client</label>
            <input type="text" value="Health System" className="w-full p-2 border border-gray-300 rounded" readOnly />
          </div>
        </div>
      </div>
    );
  };
  
  export default Addprojectform;
  