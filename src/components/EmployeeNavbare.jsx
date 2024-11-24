import React, { useState } from "react";
import { FaBell, FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logoutUser } from "../Store/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/download.png";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLogout = async () => {
    const resultAction = await dispatch(logoutUser());
    if (logoutUser.fulfilled.match(resultAction)) {
      navigate("/login");
    }
    setIsProfileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Sidebar Toggle and Logo */}
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 text-[#264667]">
          <FaBars className="w-6 h-6" />
        </button>
        <h1 className="hidden md:block text-2xl font-bold text-[#264667]">
        <img src={logo} alt="AQS Logo" className= "w-10 h-10  mr-2  mx-auto"/>
        </h1>
      </div>

      {/* Search Bar */}
      <div className="relative hidden md:block flex-grow mx-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search"
          className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#264667] shadow-sm"
        />
        <FaSearch className="absolute top-2.5 right-3 text-gray-500" />
      </div>

      {/* Notification and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="relative">
          <FaBell className="w-6 h-6 text-[#264667]" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <FaUserCircle className="w-8 h-8 text-[#264667]" />
            <span className="hidden sm:block text-sm font-semibold text-[#264667]">
              {currentUser.user_data?.email || "User"}
            </span>
          </button>
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
              <ul className="py-1 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
