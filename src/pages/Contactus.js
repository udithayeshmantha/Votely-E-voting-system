import React from "react";
import Bg from "../assets/bg.jpg";

const Contactus = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed font-Poppins"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div>
        <h1 className="text-4xl md:text-5xl pt-20 text-center font-bold text-gray-800 ">
          CONTACT US
        </h1>
        <h3 className="text-xl md:text-2xl p-5 text-center">
          Have a question? We're here to help.
        </h3>
      </div>
      <div className="flex items-center justify-center px-4 sm:px-10 pb-20">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block text-left text-gray-800 font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-left text-gray-800 font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block text-left text-gray-800 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-left text-gray-800 font-bold">
                  Contact Number
                </label>
                <div className="flex items-center">
                  <span className="inline-flex items-center p-2 border border-r-0 border-gray-300 bg-gray-100 text-gray-700 rounded-l-md">
                    +94
                  </span>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="p-2 border border-gray-300 rounded-r-md flex-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">
                Questions and Comments
              </label>
              <textarea
                placeholder="Your message"
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#a81d74] text-white py-3 rounded-md font-medium transition hover:bg-[#8d1a63]"
              >
                SUBMIT REQUEST
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
