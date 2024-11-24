import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mdError, setMdError] = useState({});
  const navigate = useNavigate();

  const handleValidation = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "Email cannot be empty";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email";
    }

    setMdError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (handleValidation()) {
      console.log("Password reset email sent to:", email);
      navigate("/verifyCode");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full p-8">
        <h2 className="text-4xl font-medium text-gray-800 text-center mb-6">
          Reset Your Password
        </h2>
        <p className="text-gray-600 text-center text-sm mb-8">
         Please type the email to reset your password
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
         <div>
         <label htmlFor="email" className="block font-medium text-gray-700">
            Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="example email@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            {submitted && mdError.email && (
              <p className="text-red-500 text-sm mt-1">{mdError.email}</p>
            )}
          
          <Button text="Send" />
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
