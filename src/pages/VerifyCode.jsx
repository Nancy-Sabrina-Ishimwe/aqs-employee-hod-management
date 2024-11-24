import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function VerifyCode() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [submitted, setSubmitted] = useState(false);
  const [mdError, setMdError] = useState({});
  const navigate = useNavigate();

  const handleValidation = () => {
    let validationErrors = {};

    if (code.includes("")) {
      validationErrors.code = "All fields must be filled with a digit";
    }

    setMdError(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (handleValidation()) {
      const verificationCode = code.join("");
      console.log("Verification code submitted:", verificationCode);
      navigate("/createNewPassword"); 
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Automatically focus next input if a digit is entered
      if (value && index < 5) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Verify Your Account
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please enter the 6-digit verification code we sent to your email.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-2">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              />
            ))}
          </div>
          {submitted && mdError.code && (
            <p className="text-red-500 text-sm mt-2 text-center">
              {mdError.code}
            </p>
          )}
          <Button text="Verify" />
        </form>
      </div>
    </div>
  );
}

export default VerifyCode;
