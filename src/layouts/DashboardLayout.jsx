import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // HOD Sidebar
import EmployeeSidebar from "../components/EmployeeSidebare"; // Employee Sidebar
import Navbar from "../components/Navbar"; // General Navbar
import EmployeeNavbar from "../components/EmployeeNavbare"; // Employee Navbar
import Footer from "../components/Footer";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userRole, setUserRole] = useState(null); // Tracks the user role
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Redirect to login if no token is available
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Determine user role from local storage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));

    if (userData?.employee_name && userData.employee_name.trim() !== "") {
      setUserRole("employee");
    } else if (userData?.hod_name && userData.hod_name.trim() !== "") {
      setUserRole("hod");
    } else {
      setUserRole(null); // No valid user role
    }
  }, []);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      <div className="flex h-full">
        {/* Conditionally render sidebars based on user role */}
        {userRole === "employee" && (
          <EmployeeSidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        )}
        {userRole === "hod" && (
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}

        {/* Main Content Area */}
        <div
          className={`flex-grow flex flex-col transition-all duration-300 ${
            isSidebarOpen ? "md:ml-64" : "ml-16"
          }`}
        >
          {/* Conditionally render navbars based on user role */}
          {userRole === "employee" && (
            <EmployeeNavbar toggleSidebar={toggleSidebar} />
          )}
          {userRole === "hod" && <Navbar toggleSidebar={toggleSidebar} />}

          {/* Main Content */}
          <main className="flex-grow p-4 overflow-hidden max-w-full">
            <div className="w-full h-full max-w-full overflow-x-scroll">
              <Outlet />
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
