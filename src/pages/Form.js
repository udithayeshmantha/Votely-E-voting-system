import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to backend)
    console.log("Form submitted");
    // Assuming form submission is successful, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-Poppins">
      <div className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-5xl ">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img alt="Volety" src={Logo} className="h-8 w-auto" />
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-2 font-bold">Fill out your information</h2>
        <p className="mb-8 text-gray-600 text-sm">
          Please fill out your information below
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Middle Name</label>
              <input
                type="text"
                placeholder="Middle Name"
                className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="block text-left text-gray-800 font-bold">Birthday</label>
            <input
              type="date"
              className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-left text-gray-800 font-bold">Contact Number</label>
            <div className="flex items-center mt-1">
              <span className="p-2 text-sm inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-100 text-gray-700 rounded-l-md">
                +94
              </span>
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full text-sm p-2 border border-gray-300 rounded-r-lg"
              />
            </div>
          </div>
          </div>

          <div className="flex flex-col">
            <label className="block text-left text-gray-800 font-bold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-left text-gray-800 font-bold">NIC Number</label>
            <input
              type="text"
              placeholder="NIC Number"
              className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Address: Province, Barangay, and City in One Column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Province</label>
              <select className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg">
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
              <label className="block text-left text-gray-800 font-bold">
                City/Municipality
              </label>
              <select className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg">
                <option>City/Municipality</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Electoral District</label>
              <select className="w-full text-sm p-2 mt-1 border border-gray-300 rounded-lg">
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
              className="w-full p-3 bg-[#a81d74] text-white rounded-lg cursor-pointer text-base hover:bg-[#a81d74] transition"
            >
              SUBMIT
            </button>
          </div>
        </form>

        {/* Back to Sign In */}
        <div className="text-center mt-4">
          <Link to="/signup" className="text-[#a81d74] hover:underline">Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Form;