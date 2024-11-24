import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCalendar, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt, FaUsers, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/images/download.png";
import { useSelector } from "react-redux";
import { selectPosition } from "../Store/Auth/AuthSlice";

function Sidebar({ isOpen, toggleSidebar }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; 
  });
  const location = useLocation();
const position = useSelector(selectPosition);
console.log(position);
  
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const menuItems = [
    { path: "/dashboard", icon: FaHome, label: "Dashboard" },
    { path: "/dashboard/employee", icon: FaUsers, label: "Employee" },
    { path: "/dashboard/projects", icon: FaPoll, label: "Projects" },
    { path: "/dashboard/messages", icon: FaRegEnvelope, label: "Messages" },
    { path: "/dashboard/schedule", icon: FaCalendar, label: "Schedule" },
    { path: "/dashboard/reports", icon: FaRegFileAlt, label: "Reports" },
  ];

  const employeeItems = [
    { path: "/dashboard/employeeDash", icon: FaHome, label: "Dashboard" },
    { path: "/dashboard/employeeproject", icon: FaUsers, label: "Empnot" },
    { path: "/dashboard/projects", icon: FaPoll, label: "Projects" },
  
  ];
  const itemsToRender = position === "Employee" ? employeeItems : menuItems;

  return (
    <div className={`bg-[#264667] dark:bg-gray-800 transition-all duration-300 ${isOpen ? "w-64" : "w-16"} h-full fixed left-0 top-0 z-50`}>
      <div className="flex flex-col h-full">
        
        <div className="flex items-center justify-between p-4">
          <img src={logo} alt="AQS Logo" className={`w-10 h-10 ${isOpen ? "mr-2" : "mx-auto"}`} />
          {isOpen && <h1 className="text-xl text-white font-semibold">HOD DASHBOARD</h1>}
        </div>

        <nav className="flex-1 overflow-y-auto py-4 remove-scrollbar">
          <ul className="space-y-2">
            {itemsToRender.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200 ${
                    location.pathname === item.path ? "bg-blue-500" : ""
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  {isOpen && <span className="ml-4">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4">
          
          <div className={`flex items-center ${isOpen ? "justify-between" : "justify-center"} text-white`}>
            {isOpen && <span className="mr-4">Dark Mode</span>}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-[#F48242] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#F48242] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F48242]"></div>
            </label>
          </div>

          
          <button
            className={`flex items-center w-full px-4 py-2 text-white bg-transparent border border-white rounded-md hover:bg-gray-800 transition duration-200 ${
              isOpen ? "justify-start" : "justify-center"
            } mt-4`}
          >
            <FaSignOutAlt className="w-5 h-5" />
            {isOpen && <span className="ml-2">Sign Out</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
