import React, { useState } from 'react';
import { BiBook } from 'react-icons/bi'; // Importing notebook icon from react-icons

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [projectDescription, setProjectDescription] = useState('');
  const [tasks, setTasks] = useState([{ id: 1, task: 'Task 1', assignedTo: '' }]);
  const [expandedDates, setExpandedDates] = useState({});
  const [expandedLatestDates, setExpandedLatestDates] = useState({});
  const [currentRangeStart, setCurrentRangeStart] = useState(0);
  const [newTask, setNewTask] = useState(''); // State for new task input

  const timelineDates = ['9/5/2024', '9/6/2024', '9/7/2024', '9/8/2024', '9/9/2024', '9/10/2024'];
  const latestProjectDates = ['9/5/2024', '9/15/2024'];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, task: newTask, assignedTo: '' }]);
      setNewTask(''); // Reset the task input
    }
  };

  const handleAssignToChange = (taskId, value) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, assignedTo: value } : task
      )
    );
  };

  const handleToggleDate = (dateIndex) => {
    setExpandedDates((prev) => ({
      ...prev,
      [dateIndex]: !prev[dateIndex],
    }));
  };

  const handleToggleLatestDate = (dateIndex) => {
    setExpandedLatestDates((prev) => ({
      ...prev,
      [dateIndex]: !prev[dateIndex],
    }));
  };

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentRangeStart((prev) => Math.max(prev - 1, 0));
    } else if (direction === 'right') {
      setCurrentRangeStart((prev) => Math.min(prev + 1, timelineDates.length - 4));
    }
  };

  const visibleDates = timelineDates.slice(currentRangeStart, currentRangeStart + 4);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <div className="text-gray-600 mb-6 flex items-center">
        <button className="text-sm font-medium">&larr; Back to the Dashboard</button>
      </div>

      <main className="grid grid-cols-3 gap-6">
        <div className="col-span-1 p-6 rounded-md space-y-4">
          <h2 className="text-xl font-semibold mb-2">Add new project</h2>
          <input
            type="text"
            placeholder="Project Name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="space-y-2 relative">
            <div className="flex items-center space-x-2">
              <label className="block text-sm text-gray-600">Description</label>
              <span className="text-sm text-gray-500">or</span>
              <button className="text-blue-500 underline text-sm">Upload a file PDF/TXT</button>
            </div>
            <div className="relative">
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Project Description"
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
                rows={4}
              ></textarea>
              <div className="absolute top-2 right-2 flex space-x-1 items-center">
                <button className="px-1 py-0.5 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none text-xs">B</button>
                <button className="px-1 py-0.5 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none text-xs">I</button>
                <button className="px-1 py-0.5 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none text-xs">U</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-6">
          <div className="p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Category</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Project Category</label>
                <input
                  type="text"
                  placeholder="Select Category"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Client</label>
                <input
                  type="text"
                  placeholder="Select Project Type"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">Timeline</h2>
              <h2 className="text-md font-semibold mb-2">Latest projects added</h2>
              <div className="flex items-center justify-between mb-4">
                <button
                  className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400"
                  onClick={() => handleArrowClick('left')}
                >
                  &larr;
                </button>

                <div className="flex space-x-2">
                  {visibleDates.map((date, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full text-center ${
                        selectedDate.toLocaleDateString() === date ? 'bg-[#264667] text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                      onClick={() => handleDateChange(new Date(date))}
                    >
                      {new Date(date).getDate()}
                    </button>
                  ))}
                </div>

                <button
                  className="px-3 py-1 ml-3 bg-gray-300 rounded-full hover:bg-gray-400"
                  onClick={() => handleArrowClick('right')}
                >
                  &rarr;
                </button>
              </div>
              <h3 className="text-lg font-semibold mb-4">Previous Projects</h3>
              <div className="flex space-x-2 mb-4">
                {latestProjectDates.map((date, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-center ${
                      expandedLatestDates[index] ? 'bg-[#264667] text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                    onClick={() => handleToggleLatestDate(index)}
                  >
                    {expandedLatestDates[index] ? date : new Date(date).getDate()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Calendar</h2>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {Array.from({ length: 30 }).map((_, index) => (
                <button
                  key={index}
                  className={`p-2 text-center rounded-md ${
                    index === selectedDate.getDate() - 1 ? 'bg-[#264667] text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => handleDateChange(new Date(2024, 9, index + 1))}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 bg-[#264667] text-white rounded-md">Add to schedule</button>
          </div>
        </div>
      </main>

      <div className="grid grid-cols-1 mt-8">
        <div className="col-span-1 bg-white p-6 rounded-md shadow-md space-y-4">
          <h2 className="text-lg font-semibold mb-4">Actions</h2>
          <div className="relative inline-block">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Write task description"
              className="w-full p-2 border rounded-md mb-4"
            />
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-md flex items-center space-x-2 focus:outline-none hover:bg-gray-400"
              onClick={handleAddTask}
            >
              <span className="material-icons"></span>
              <span>Add New Task</span>
            </button>
          </div>

          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gray-200 p-3 rounded-full">
                  <span className="material-icons">assignment</span>
                </div>
                <div className="bg-gray-200 p-3 rounded-full">                   
                  <BiBook />
                </div>
                <span className="text-lg font-medium">{task.task}</span> 
              </div>

              <div className="flex items-center space-x-2">
                <select
                  className="p-2 border rounded-md bg-[#f7f3f0] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={task.assignedTo}
                  onChange={(e) => handleAssignToChange(task.id, e.target.value)}
                >
                  <option value="">Assign task to</option>
                  <option value="Team 1">Team 1</option>
                  <option value="Team 2">Team 2</option>
                </select>
              </div>

              <button className="bg-[#264667] text-white px-4 py-2 rounded-md ">Add</button>
            </div>
          ))}

          <button className="px-4 py-2 w-60 items-center bg-[#264667] text-white rounded-md mt-4 ml-80">Send and Save</button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
