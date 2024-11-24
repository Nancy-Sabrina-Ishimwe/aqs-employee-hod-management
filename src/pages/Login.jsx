import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaEye, FaEnvelope } from "react-icons/fa";
import groupImage from "../assets/images/Group.jfif";
import Button from "../components/Button";
import Google from "../assets/images/Vector.png";
import Facebook from "../assets/images/Logo facebook.png";
import {
  makeLogin,
  selectCurrentUser,
  selectLoginLoading,
  selectLoginError,
} from "../Store/Auth/AuthSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const loading = useSelector(selectLoginLoading);
  const loginError = useSelector(selectLoginError);

  useEffect(() => {
    if (user) {
      // navigate("/dashboard");
  
      if (!user.hod_name || user.hod_name.trim() === "") {
        navigate("/dashboard/employeeDash");
      } else {
        navigate("/dashboard");
      }
      
    }
    
  }, [user, navigate]);

  const handleValidation = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "Email cannot be empty";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email";
    }

    if (!password) {
      errors.password = "Password cannot be empty";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (handleValidation()) {
      dispatch(makeLogin({ email, password }));
    }
  };

  const clearError = (field) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return !user ? (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl w-full">
        <div className="w-[50vw] bg-[#264667] flex flex-col items-center justify-center text-white px-8">
          <img src={groupImage} alt="" className="filter brightness-75" />
          <div className="mt-4 space-y-4 text-center">
            <p className="text-lg font-bold">
              Welcome to Africa Quantitative Science
            </p>
            <p className="text-sm">
              This system is to help you in the management here at work.
              <br />
              Use your time well.
            </p>
          </div>
        </div>

        <div className="w-[50vw] bg-white flex items-center justify-center h-full flex-col p-2 shadow-md rounded-lg m-20">
          <div className="bg-white rounded-xlg p-6 border-black">
            <h2 className="text-3xl font-bold text-black-700">
              Welcome back 👋
            </h2>
            <p className="text-gray-600">Log in your account</p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="relative space-y-4">
                <div>
                  <FaEnvelope className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="What is your email?"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearError("email");
                    }}
                    className="mt-1 block w-80 px-9 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {submitted && errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <FaLock className="absolute left-3 top-1/3 transform text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      clearError("password");
                    }}
                    className="mt-1 block w-80 px-9 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <FaEye
                    className="absolute right-3 top-1/3 transform text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  {submitted && errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
                {loginError && (
                  <p className="text-red-500 text-sm mt-1">
                    {loginError.message}
                  </p>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <input
                      type="checkbox"
                      id="remember"
                      className="mr-2 leading-tight"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <Link to="/resetPassword" className="text-sm text-[#F48242]">
                    Forgot your password?
                  </Link>
                </div>

                <Button
                  text={loading ? "Logging in..." : "Login"}
                  disabled={loading}
                />
              </div>
            </form>
            <div className="flex items-center justify-center mt-4">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase mx-2">
                or
              </span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-3">
              <button className="w-20 px-4 py-2 flex items-center justify-center bg-[#FEF1F1] text-black rounded-md border-[1px] active:scale-[.98] active:duration-75 hover:scale-[1.01] transition-all ease-in-out">
                <img src={Google} alt="Google" className="w-5 h-5 mr-2" />
              </button>
              <button className="w-20 px-4 py-2 flex items-center justify-center bg-[#F3F6FB] text-white rounded-md active:scale-[.98] active:duration-75 hover:scale-[1.01] transition-all ease-in-out">
                <img src={Facebook} alt="Facebook" className="w-5 h-5 mr-2" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-black">
                Don't have an account yet?{" "}
                <Link to="/signup" className="text-[#F48242]">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Redirecting to dashboard...</p>
  );
}

export default Login;
