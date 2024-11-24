import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaChartBar,
  FaClipboardList,
  FaTasks,
  FaSignOutAlt,
} from "react-icons/fa";

function EmployeeSidebar() {
  const [darkMode, setDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  // Handle profile image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div
      className={`h-screen flex flex-col justify-between p-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#264667] text-white"
      }`}
    >
      {/* Profile Section */}
      <div>
        <div className="flex flex-col items-center mb-6">
          {/* Profile Image */}
          <div className="relative">
            <div
              className={`w-16 h-16 rounded-full overflow-hidden border-2 ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    darkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                >
                  <FaUserCircle
                    className={`text-4xl ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  />
                </div>
              )}
            </div>
            {/* File Input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
              title="Upload profile picture"
            />
          </div>
          <p className="mt-4 text-lg font-semibold">Name of Employee</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <Link
            to="/dashboard/employeeDash"
            className={`flex items-center gap-2 p-2 rounded-md transition ${
              darkMode
                ? "hover:bg-gray-800"
                : "hover:bg-blue-700 hover:text-white"
            }`}
          >
            <FaChartBar className="text-[#D4762C]" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/dashboard/employeetodo"
            className={`flex items-center gap-2 p-2 rounded-md transition ${
              darkMode
                ? "hover:bg-gray-800"
                : "hover:bg-blue-700 hover:text-white"
            }`}
          >
            <FaClipboardList className="text-orange-500" />
            <span>To-Do List</span>
          </Link>

          <Link
            to="/dashboard/employeeinprogress"
            className={`flex items-center gap-2 p-2 rounded-md transition ${
              darkMode
                ? "hover:bg-gray-800"
                : "hover:bg-blue-700 hover:text-white"
            }`}
          >
            <FaTasks className="text-[#D4762C]" />
            <span>In Progress</span>
          </Link>

          <Link
            to="/dashboard/employeedone"
            className={`flex items-center gap-2 p-2 rounded-md transition ${
              darkMode
                ? "hover:bg-gray-800"
                : "hover:bg-blue-700 hover:text-white"
            }`}
          >
            <FaTasks className=" text-[#D4762C]" />
            <span>Done</span>
          </Link>

          <Link
            to="/dashboard/employeeoverdue"
            className={`flex items-center gap-2 p-2 rounded-md transition ${
              darkMode
                ? "hover:bg-gray-800"
                : "hover:bg-blue-700 hover:text-white"
            }`}
          >
            <FaTasks className="text-[#D4762C]" />
            <span>Overdue</span>
          </Link>
        </nav>
      </div>

      {/* Footer Section */}
      <div>
        <Link
          to="/login"
          className={`flex items-center gap-2 p-2 rounded-md transition ${
            darkMode ? "hover:bg-gray-800" : "hover:bg-gray-300 "
          }`}
        >
          <FaSignOutAlt className="text-[#D4762C]" />
          <span>Sign out</span>
        </Link>

        <div className="flex items-center mt-6">
          <label
            htmlFor="darkMode"
            className="flex-1 text-sm font-medium cursor-pointer"
          >
            Dark mode
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="darkMode"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div
              className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-blue-300 ${
                darkMode ? "peer-checked:bg-orange-500" : "bg-gray-500 "
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition ${
                darkMode ? "peer-checked:bg-gray-700" : "peer-checked:bg-white"
              }`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSidebar;
