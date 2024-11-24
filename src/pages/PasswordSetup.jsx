import React, { useState } from "react";
import groupImage from "../assets/images/Group.jfif";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FaEye } from "react-icons/fa";

function CreateNewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleValidation = () => {
    let validationErrors = {};

    if (!newPassword) {
      validationErrors.newPassword = "New password cannot be empty";
    } else if (newPassword.length < 6) {
      validationErrors.newPassword = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Confirm password cannot be empty";
    } else if (confirmPassword !== newPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (handleValidation()) {
      console.log("Password has been reset successfully");
      navigate('/login');
    }
  };

  const clearError = (field) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl w-full">
        <div className="w-[50vw] bg-[#264667] flex flex-col items-center justify-center text-white px-8">
          <img src={groupImage} alt="" className="filter brightness-75" />
          <div className="mt-4 space-y-4 text-center">
            <p className="text-lg font-medium">
              Welcome to Africa Quantitative Science
            </p>
            <p className="text-sm">Use your time well</p>
          </div>
        </div>

        <div className="w-[50vw] bg-white flex items-center justify-center h-full flex-col p-2 shadow-md rounded-lg m-20">
          <div className="bg-white rounded-xlg p-6 border-black">
            <h2 className="text-3xl font-mediumtext-black-700 mb-3">
              Create New Password
            </h2>
            <p className="text-gray-600 text-sm">Enter your new password below</p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="relative space-y-4">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    placeholder="Enter new password"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      clearError("newPassword");
                    }}
                    className="mt-1 block w-80 px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <FaEye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  {submitted && errors.newPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.newPassword}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm new password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                     clearError("confirmPassword");
                    }}
                    className="mt-1 block w-80 px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <FaEye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  {submitted && errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
          <Button text="Send" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword;
