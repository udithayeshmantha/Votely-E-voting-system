import React from 'react'
import Bg from "../assets/bg.jpg";

const Contactus = () => {
  return (
    
    <div className="min-h-screen bg-cover bg-center bg-fixed font-Poppins" style={{ backgroundImage: `url(${Bg})` }}>
        <div>
            <h1 className='text-5xl pt-20 text-center font-bold'>CONTACT US</h1>
            <h3 className='text-2xl m-5 text-center'>Have a question? We're here to help.</h3>
        </div>
        <div className='flex items-center justify-center'>
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl ">
        <form className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-left text-gray-800 font-bold">Contact Number</label>
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
              placeholder=""
              rows="4"
              className="mt-1 p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <div className="flex items-center w-2/6 p-6 border border-gray-300 rounded-md space-x-3">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">I'm not a robot</span>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#7a59dc] text-white py-3 rounded-md font-medium hover:bg-[#6C4AB6] transition"
            >
              SUBMIT REQUEST
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus;