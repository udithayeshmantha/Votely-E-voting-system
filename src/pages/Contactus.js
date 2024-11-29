import React from 'react'
import Bg from "../assets/bg.jpg";

const Contactus = () => {
  return (
    <div className="h-screen justify-center items-center bg-cover bg-center bg-fixed " style={{ backgroundImage: `url(${Bg})` }}>
        <h1 className='text-5xl pt-40 text-center font-bold'>CONTACT US</h1>
        <h3 className='text-3xl m-5 text-center'>Have a question? We're here to help.</h3>

        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl ">
        <form className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email and Contact Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Contact Number</label>
              <div className="flex items-center">
                <span className="inline-flex items-center p-2 border border-r-0 border-gray-300 bg-gray-100 text-gray-700 rounded-l-md">
                  +63
                </span>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="p-2 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500 flex-1"
                />
              </div>
            </div>
          </div>

          {/* Questions and Comments */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Questions and Comments
            </label>
            <textarea
              placeholder=""
              rows="4"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* reCAPTCHA */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">I'm not a robot</span>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition"
            >
              SUBMIT REQUEST
            </button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Contactus;