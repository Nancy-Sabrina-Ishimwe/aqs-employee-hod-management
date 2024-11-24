import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import addImage from "../assets/images/addhim.jfif"; // Make sure this image path is correct
import Btn from "../components/Btn"; // Assuming Btn is a button component in components folder
import { createEmployee } from "../Store/Data/EmployeeSlice";
import { selectCurrentUser } from "../Store/Auth/AuthSlice";

function ChangePasswordEmp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser); // get current user
  
  // State for the form fields
  const [employeeName, setEmployeeName] = useState("");
  const [defaultPassword, setDefaultPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let errors = {};

    if (!defaultPassword || defaultPassword.length < 8) {
      errors.defaultPassword = "Default password must be at least 8 characters";
    }

    if (!newPassword || newPassword.length < 8) {
      errors.newPassword = "New password must be at least 8 characters";
    }

    if (confirmPassword !== newPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const formData = {
        employeeName,
        defaultPassword,
        newPassword,
        confirmPassword,
        employee_id: currentUser.employee_id,
      };

      try {
        const resultAction = await dispatch(createEmployee(formData));
        if (createEmployee.fulfilled.match(resultAction)) {
          // Clear form fields on successful submission
          setEmployeeName("");
          setDefaultPassword("");
          setNewPassword("");
          setConfirmPassword("");
          setErrors({});

          // Redirect to login page after password change
          navigate("/login");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-md bg-white p-10 shadow-lg rounded-lg relative">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Change Your Password</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Input full name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            {errors.employeeName && <p className="text-red-500 text-sm">{errors.employeeName}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Default Password</label>
            <input
              type="password"
              value={defaultPassword}
              onChange={(e) => setDefaultPassword(e.target.value)}
              placeholder="Enter your current password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            {errors.defaultPassword && <p className="text-red-500 text-sm">{errors.defaultPassword}</p>}
          </div>

          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <Btn text="Submit" type="submit" className="w-full" />
        </form>

        <div className="absolute top-1/4 right-0 transform translate-x-10">
          <img src={addImage} alt="Illustration" className="h-40" />
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordEmp;
