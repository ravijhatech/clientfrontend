import React, { useEffect, useState } from "react";
import { FaStar, FaUpload } from "react-icons/fa";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";
import { FaStarOfLife } from "react-icons/fa6";

const DashboardSetting = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userId = localStorage.getItem("userId");
  const [isFormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    title: "",
    bio: "",
    gender: "",
  });

  const requirements = [
    { text: "At least 10 characters", check: password.length >= 10 },
    { text: "At least one lowercase character", check: /[a-z]/.test(password) },
    { text: "At least one uppercase character", check: /[A-Z]/.test(password) },
    { text: "At least one number", check: /\d/.test(password) },
    {
      text: "Inclusion of at least one special character (!@#$%^&*)",
      check: /[!@#$%^&*]/.test(password),
    },
  ];
  const handleNewPassword = async (e) => {
    e.preventDefault();
    if (!currentPassword || !password || !confirmPassword) {
      toast.info("All password fields are required!", { autoClose: 2000 });
      return;
    }

    if (password.length < 10) {
      toast.info("Password must be at least 10 characters!", {
        autoClose: 2000,
      });
      return;
    }
    if (password !== confirmPassword) {
      toast.info("Passwords do not match!", { autoClose: 2000 });
      return;
    }

    try {
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-18 rounded-lg">
      <div className="grid gap-3 md:grid-cols-2 w-full">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg  p-6">
          <span className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Account
          </span>
          <div className="flex items-center gap-6 mt-4">
            {/* Profile Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                <FaUpload className="text-lg" /> Upload
              </button>
              <button className="px-4 py-2 border hover:bg-gray-100 dark:bg-gray-800 hover:text-blue-800 border-gray-800 text-gray-800 rounded-lg dark:text-white dark:border-white transition">
                Remove
              </button>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            <form action="" onSubmit={handleUpdateProfile}>
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
                  >
                    First name
                    <sup className="text-[8px]">
                      <FaStarOfLife />
                    </sup>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Enter first name"
                    value={isFormData?.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...isFormData,
                        firstName: e.target.value,
                      })
                    }
                    required
                    className="w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                {/* Last Name */}
                <div className="w-full">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Enter last name"
                    value={isFormData?.lastName}
                    onChange={(e) =>
                      setFormData({
                        ...isFormData,
                        lastName: e.target.value,
                      })
                    }
                    required
                    className="w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="w-full">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
                  >
                    Your email
                    <sup className="text-[8px]">
                      <FaStarOfLife />
                    </sup>
                  </label>
                  <input
                    type="email"
                    id=""
                    placeholder="Enter your email"
                    value={isFormData?.email}
                    readOnly
                    required
                    className="w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
                  >
                    Phone number
                    <sup className="text-[8px]">
                      <FaStarOfLife />
                    </sup>
                  </label>
                  <input
                    type="tel"
                    id=""
                    placeholder="Enter your mobile"
                    value={isFormData?.mobile}
                    onChange={(e) =>
                      setFormData({
                        ...isFormData,
                        mobile: e.target.value,
                      })
                    }
                    required
                    className="w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
                  >
                    Title
                    <sup className="text-[8px]">
                      <FaStarOfLife />
                    </sup>
                  </label>
                  <input
                    type="text"
                    id=""
                    placeholder="Enter your title"
                    value={isFormData?.title}
                    onChange={(e) =>
                      setFormData({
                        ...isFormData,
                        title: e.target.value,
                      })
                    }
                    required
                    className="w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
                  >
                    Your gender
                    <sup className="text-[8px]">
                      <FaStarOfLife />
                    </sup>
                  </label>
                  <select
                    name=""
                    id=""
                    value={isFormData?.gender}
                    onChange={(e) =>
                      setFormData({
                        ...isFormData,
                        gender: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">select gender</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="transgender">transgender</option>
                  </select>
                </div>
              </div>
              <div className="w-full mt-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your biography
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message..."
                  value={isFormData?.bio}
                  onChange={(e) =>
                    setFormData({
                      ...isFormData,
                      bio: e.target.value,
                    })
                  }
                  rows="4"
                  className="w-full p-3 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>

              <div className="mt-4">
                <button className="px-4 py-3 text-sm bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          {/* Section Title */}
          <div className="mb-6">
            <span className="text-xl font-semibold text-gray-800 dark:text-white">
              Notifications
            </span>
            <hr className="mt-2 border-gray-300 dark:border-gray-700" />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              Alerts & Notifications
            </span>
            <button className="text-blue-600 font-medium hover:underline transition">
              Select all
            </button>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-4 mb-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="justice-communication"
                  className="sr-only peer"
                  checked
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                <div className="absolute w-5 h-5 bg-white border rounded-full left-0.5 top-0.5 peer-checked:translate-x-5 transition-transform shadow-md"></div>
              </label>
              <label htmlFor="justice-communication" className="cursor-pointer">
                <span className="font-medium text-gray-600 dark:text-white">
                  Justice communication
                </span>
                <p className="text-sm text-gray-500 dark:text-white dark:opacity-35">
                  Get Flowbite news, announcements, and product updates.
                </p>
              </label>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="justice-communication"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                <div className="absolute w-5 h-5 bg-white border rounded-full left-0.5 top-0.5 peer-checked:translate-x-5 transition-transform shadow-md"></div>
              </label>
              <label htmlFor="justice-communication" className="cursor-pointer">
                <span className="font-medium text-gray-600 dark:text-white">
                  Email notifications
                </span>
                <p className="text-sm text-gray-500 dark:text-white dark:opacity-35">
                  Get Flowbite news, announcements, and product updates.
                </p>
              </label>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="justice-communication"
                  className="sr-only peer"
                  checked
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
                <div className="absolute w-5 h-5 bg-white border rounded-full left-0.5 top-0.5 peer-checked:translate-x-5 transition-transform shadow-md"></div>
              </label>
              <label htmlFor="justice-communication" className="cursor-pointer">
                <span className="font-medium text-gray-600 dark:text-white">
                  Account activity
                </span>
                <p className="text-sm text-gray-500 dark:text-white dark:opacity-35">
                  Get Flowbite news, announcements, and product updates.
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-4">
        {/* Header */}
        <span className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Update Password
        </span>
        <hr className="mt-2 mb-4 border-gray-300 dark:border-gray-700" />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <form onSubmit={handleNewPassword}>
              <div className="mb-4">
                <label
                  className="block text-sm text-gray-700 dark:text-gray-300 font-medium mb-1"
                  htmlFor="current-password"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  placeholder="Enter your current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm text-gray-700 dark:text-gray-300 font-medium mb-1"
                  htmlFor="new-password"
                >
                  Your new Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm text-gray-700 dark:text-gray-300 font-medium mb-1"
                  htmlFor="confirm-password"
                >
                  Confirm new Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-3 text-sm bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition"
              >
                Save Changes
              </button>
            </form>
          </div>

          {/* Password Requirements */}
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">
              Password Requirements:
            </h2>
            <p className="mb-3 mt-0.5 text-gray-500">
              Ensure that these requirements are met:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {requirements.map((req, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  {req.check ? (
                    <IoIosCheckmark className="text-white bg-green-400 rounded-full w-4 h-4" />
                  ) : (
                    <IoIosClose className="text-white bg-gray-400 rounded-full w-4 h-4" />
                  )}
                  <span className="ml-2.5 pt-1">{req.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSetting;
