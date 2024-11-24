import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaPlus } from "react-icons/fa"; // Importing the plus icon from react-icons

const CalendarComponent = () => {
  const [tasks, setTasks] = useState([]); // To store tasks
  const [selectedDate, setSelectedDate] = useState(null); // The currently selected date

  // Function to add a task to the selected date
  const addTask = () => {
    if (!selectedDate) {
      alert("Please select a date to add a task.");
      return;
    }
    const taskTitle = prompt(`Enter task for ${selectedDate.toDateString()}`);
    if (taskTitle) {
      const newTask = {
        date: selectedDate.toDateString(),
        title: taskTitle,
      };
      setTasks([...tasks, newTask]);
    }
  };

  
  const handleDayClick = (value) => {
    setSelectedDate(value); 
  };

  
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const hasTask = tasks.some(
        (task) => task.date === date.toDateString()
      );
      return hasTask ? "bg-blue-200 text-blue-900 font-semibold rounded-full" : ""; 
    }
    return null;
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      <h2 className="text-xl font-semibold text-center mb-6 text-gray-700"><button className="border px-2 py-1 rounded">📅</button>Calendar</h2>

      
      <Calendar
        className="w-full h-full text-xs border-2 border-gray-200 rounded-lg p-2"
        tileClassName={tileClassName} 
        onClickDay={handleDayClick} 
        nextLabel="Next"
        prevLabel="Prev"
      />

      
      <div className="flex justify- mt-4">
        <button
          className="flex items-center bg-[#244865] text-white text-xs px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={addTask}
        >
          <FaPlus className="mr-2" /> Add Task
        </button>
      </div>

      {/* Legend Section */}
      <div className="mt-6 w-full flex flex-col items-center">
        <h3 className="font-semibold text-gray-700 mb-2">Activities Details</h3>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-200 rounded-full mr-2"></span>
            <span>Dates with Tasks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
