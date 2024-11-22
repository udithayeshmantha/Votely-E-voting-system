import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Form = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
            <Link to="/">
              <img alt="Volety" src={Logo} className="h-8 w-auto" />
            </Link>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          Fill out your information
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          Please fill out your information below
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* First, Middle, and Last Name in One Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="text-sm mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Middle Name</label>
              <input
                type="text"
                placeholder="Middle Name"
                className="text-sm mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="text-sm mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Birthday */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Birthday</label>
            <input
              type="date"
              className="text-sm mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Contact Number</label>
            <div className="flex items-center mt-1">
              <span className="p-2 text-sm inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-100 text-gray-700 rounded-l-md">
                +94
              </span>
              <input
                type="text"
                placeholder="Contact Number"
                className="text-sm p-2 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500 flex-1"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="text-sm mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Organization */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Organization</label>
            <input
              type="text"
              placeholder="Organization"
              className="text-sm mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Address: Province, Barangay, and City in One Column */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Province</label>
              <select className="text-sm mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option>Northern Province</option>
                <option>North Central Province</option>
                <option>North Western Province</option>
                <option>Central Province</option>
                <option>Western Province</option>
                <option>Eastern Province</option>
                <option>Southern Province</option>
                <option> Sabaragamuwa Province</option>
                <option>Uva Province</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                City/Municipality
              </label>
              <select className="text-sm mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option>City/Municipality</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Electoral District</label>
              <select className="text-sm mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option>Colombo</option>
                <option>Gampaha</option>
                <option>Kaluthara</option>
                <option>Kandy</option>
                <option>Matale</option>
                <option>Nuwara Eliya</option>
                <option>Galle</option>
                <option>Matara</option>
                <option>Matara</option>
                <option>Matara</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white p-3 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
