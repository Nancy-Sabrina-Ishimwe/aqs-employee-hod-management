import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SplashPage from "./pages/SplashPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import VerifyCode from "./pages/VerifyCode";
import CreateNewPassword from "./pages/PasswordSetup";
import Createemailemployee from "./pages/createemailemployee";
import Addmember from "./pages/Addmember";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import DashboardLayout from "./layouts/DashboardLayout";
import Projects from "./pages/Projects";
import Messages from "./pages/Messages";
import Schedule from "./pages/Schedule";
import Reports from "./pages/Reports";
import ProtectedRoute from "./ProtectedRoute";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ChangePasswordEmp from "./pages/Changepaswordemp";
import Employeenotification from "./pages/Employeenotification";
import Employeetodo from "./pages/Employeetodo"; // <-- Add this import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/verifyCode" element={<VerifyCode />} />
        <Route path="/createNewPassword" element={<CreateNewPassword />} />
        <Route path="/change-password" element={<ChangePasswordEmp />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/employee" element={<Employee />} />
          <Route path="/dashboard/projects" element={<Projects />} />
          <Route path="/dashboard/messages" element={<Messages />} />
          <Route path="/dashboard/schedule" element={<Schedule />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route
            path="/dashboard/createemailemployee"
            element={<Createemailemployee />}
          />
          <Route path="/dashboard/addmember" element={<Addmember />} />
          <Route path="/dashboard/employeeDash" element={<EmployeeDashboard />} />
          <Route path="/dashboard/notification" element={<Employeenotification />} />
          <Route path="/dashboard/employeetodo" element={<Employeetodo />} /> {/* Add Employeetodo route */}
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
