import React from 'react';
import Logo from '../assets/logo.png';
import Bg from "../assets/bg.jpg";

const ResetPassword = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center gap-10 px-20 py-48 font-Poppins md:px-20 md:py-40 lg:px-52 lg:py-48 bg-cover bg-center bg-fixed " style={{ backgroundImage: `url(${Bg})` }}>
       <div className="flex ">
          <img src={Logo} alt="" />
       </div>
        
        <div className="w-full max-w-screen-sm bg-white rounded-lg p-8  shadow-xl">
            <h2 className='text-3xl mb-2 text-center font-bold'>Reset Password</h2>
            <p className='mb-2 mt-1 text-center text-gray-600'>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form action="">
                <label for="vin" className="block text-left text-gray-800 font-bold mt-4">VIN</label>
                <input 
                type="text"
                name="vin"
                placeholder="Enter VIN"
                className="w-full p-3 my-2 border border-gray-300 rounded-lg"
                required
                 />
                <label for="email" className="block text-left text-gray-800 font-bold mt-4">Email</label>
                <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full p-3 my-2 border border-gray-300 rounded-lg"
                required
                />
                <button type="submit" className='w-full p-3 bg-[#7a59dc] text-white rounded-lg cursor-pointer text-base my-5 hover:bg-[#6C4AB6]'><a href="/otppage">Send Code</a>
                </button>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword;