import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaMoon,
  FaSearch,
  FaSignOutAlt,
  FaSun,
} from "react-icons/fa";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { FiAlignLeft } from "react-icons/fi";

const AdminHeader = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState({ name: "Alexa", email: "user@example.com" });
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogoutClick = () => {
    // Add logout logic here
    console.log("Logging out...");
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="px-4 py-3 flex items-center justify-between md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-2"
            alt="Justice App Logo"
          />
          <span className="text-lg font-semibold dark:text-white">
            Lzy Crazy
          </span>
        </Link>

        {/* Sidebar Toggle */}
        <FiAlignLeft
          onClick={toggleSidebar}
          className="text-[25px] text-gray-800 dark:text-white hover:text-blue-600 absolute left-[265px] cursor-pointer"
        />

        {/* Search Bar */}
        <form className="hidden md:block absolute left-[310px]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-64 md:w-96 p-3 border outline-none pl-10 text-sm rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search"
            />
          </div>
        </form>

        {/* Icons & Profile */}
        <div className="flex items-center space-x-4">
          {/* Fullscreen */}
          <button
            onClick={toggleFullScreen}
            className="p-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            {isFullScreen ? (
              <MdFullscreenExit className="text-2xl" />
            ) : (
              <MdFullscreen className="text-2xl" />
            )}
          </button>

          {/* Notification */}
          <button className="p-2.5 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            <FaBell className="text-xl" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-sm rounded-full border-4 border-gray-100 focus:border-gray-300 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="User"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 top-10 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:divide-gray-600 z-50">
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {user?.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                    {user?.email}
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/earnings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
                <div className="py-3">
                  <button
                    onClick={handleLogoutClick}
                    className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700"
                  >
                    <FaSignOutAlt className="inline mr-2" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
