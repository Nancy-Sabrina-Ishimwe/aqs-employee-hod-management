import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Employeetodo from './Employeetodo';
import Employeeinprogress from './Employeeinprogress';
import Employeedone from './Employeedone';
import Employeeoverdue from './Employeeoverdue';

const EmployeeDashboard = () => {
  const projectData = useSelector((state) => state.projects);
  const [showTodo, setShowTodo] = useState(false);
  const [showInProgress, setShowInProgress] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const [showOverdue, setShowOverdue] = useState(false);

  const handleTodoClick = () => {
    console.log("To Do button clicked");
    setShowTodo(true);
    setShowInProgress(false);
    setShowDone(false);
    setShowOverdue(false);
  };

  const handleInProgressClick = () => {
    console.log("In Progress button clicked");
    setShowInProgress(true);
    setShowTodo(false);
    setShowDone(false);
    setShowOverdue(false);
  };

  const handleDoneClick = () => {
    console.log("Done button clicked");
    setShowDone(true);
    setShowTodo(false);
    setShowInProgress(false);
    setShowOverdue(false);
  };

  const handleOverdueClick = () => {
    console.log("Overdue button clicked");
    setShowOverdue(true);
    setShowTodo(false);
    setShowInProgress(false);
    setShowDone(false);
  };

  const handleBackToDashboard = () => {
    console.log("Back to Dashboard clicked");
    setShowTodo(false);
    setShowInProgress(false);
    setShowDone(false);
    setShowOverdue(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {showTodo ? (
        <div>
          <Employeetodo />
          <button 
            onClick={handleBackToDashboard} 
            className="mt-4 bg-gray-300 p-2 rounded-md text-gray-700 hover:bg-gray-400"
          >
            Back to Dashboard
          </button>
        </div>
      ) : showInProgress ? (
        <div>
          <Employeeinprogress />
          <button 
            onClick={handleBackToDashboard} 
            className="mt-4 bg-gray-300 p-2 rounded-md text-gray-700 hover:bg-gray-400"
          >
            Back to Dashboard
          </button>
        </div>
      ) : showDone ? (
        <div>
          <Employeedone />
          <button 
            onClick={handleBackToDashboard} 
            className="mt-4 bg-gray-300 p-2 rounded-md text-gray-700 hover:bg-gray-400"
          >
            Back to Dashboard
          </button>
        </div>
      ) : showOverdue ? (
        <div>
          <Employeeoverdue />
          <button 
            onClick={handleBackToDashboard} 
            className="mt-4 bg-gray-300 p-2 rounded-md text-gray-700 hover:bg-gray-400"
          >
            Back to Dashboard
          </button>
        </div>
      ) : (
        <div>
          {/* Main Dashboard */}
          <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md md:w-1/2">
              <p className="text-gray-500 text-sm">9:00 am</p>
              <h1 className="text-2xl font-bold text-orange-500 mb-4 leading-relaxed">Good Morning</h1>
              <p className="text-gray-700 mt-2">
                Welcome back to the board! Here comes your daily tasks and ongoing projects to be done.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md md:w-1/2">
              <h1 className="text-2xl font-bold text-orange-500 mb-4 leading-relaxed">Notifications</h1>
              <p className="text-gray-700 mt-2">
                Well done, but there are some projects which need to be done very soon. Try your best to meet the deadline.
              </p>
            </div>
          </div>

          {/* Project Status Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div 
              className="bg-[#264667] text-white p-4 rounded-lg shadow-md cursor-pointer"
              onClick={handleTodoClick}
            >
              <h2 className="text-xl font-semibold">To do</h2>
            </div>
            <div 
              className="bg-[#4b749d] text-white p-4 rounded-lg shadow-md cursor-pointer"
              onClick={handleInProgressClick}
            >
              <h2 className="text-xl font-semibold">In Progress</h2>
            </div>
            <div 
              className="bg-[#D4762C] text-white p-4 rounded-lg shadow-md cursor-pointer"
              onClick={handleDoneClick}
            >
              <h2 className="text-xl font-semibold">Done</h2>
            </div>
            <div 
              className="bg-red-600 text-white p-4 rounded-lg shadow-md cursor-pointer"
              onClick={handleOverdueClick}
            >
              <h2 className="text-xl font-semibold">Overdue</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
