import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaGlobe,
  FaBell,
  FaInfoCircle,
  FaFileAlt,
  FaShieldAlt,
  FaPhone,
} from "react-icons/fa";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className="px-20 py-10 bg-gray-100 min-h-screen font-Poppins">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <span className="flex items-center">
                <FaUser className="text-[#a81d74] mr-3" />
                Edit Profile
              </span>
              
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <span className="flex items-center">
                <FaLock className="text-[#a81d74] mr-3" />
                Change Password
              </span>
              
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <span className="flex items-center">
                <FaGlobe className="text-[#a81d74] mr-3" />
                Language
              </span>
              <span className="text-gray-500">English</span>
            </button>
            <div className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <span className="flex items-center">
                <FaBell className="text-[#a81d74] mr-3" />
                Notification
              </span>
              <button
                onClick={toggleNotifications}
                className={`w-10 h-6 rounded-full flex items-center px-1 ${
                  notificationsEnabled ? "bg-[#a81d74]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    notificationsEnabled ? "translate-x-4" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Links</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <span className="flex items-center">
                <FaInfoCircle className="text-[#a81d74] mr-3" />
                About Us
              </span>
              
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <span className="flex items-center">
                <FaFileAlt className="text-[#a81d74] mr-3" />
                Terms of Service
              </span>
              
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <span className="flex items-center">
                <FaShieldAlt className="text-[#a81d74] mr-3" />
                Privacy Policy
              </span>
              
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <span className="flex items-center">
                <FaPhone className="text-[#a81d74] mr-3" />
                Contact Us
              </span>
              
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-10 text-center text-gray-500">
        &copy; Copyright 2025 All rights reserved
      </footer>
    </div>
  );
};

export default Settings;
