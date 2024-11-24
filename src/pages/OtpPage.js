import React from 'react'
import Bg from "../assets/bg.jpg";

const OtpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${Bg})` }}>
        <div className="w-full max-w-lg bg-white rounded-lg p-8 shadow-xl">
            <h2 className='text-3xl mb-2 text-center font-bold'>Enter verification code</h2>
            <p className='mb-2 mt-1 text-center text-gray-600'>A verification code has been sent to your phone number</p>
            <form>
                <input 
                type="text"
                name="otp"
                placeholder=" "
                maxlength="1"
                className='w-[16%] p-3 m-2 border border-gray-300 rounded-lg gap-2.5 text-lg text-center'
                />
                <input 
                type="text"
                name="otp"
                placeholder=" "
                maxlength="1"
                className='w-[16%] p-3 m-2 border border-gray-300 rounded-lg gap-2.5 text-lg text-center'
                />
                <input 
                type="text"
                name="otp"
                placeholder=" "
                maxlength="1"
                className='w-[16%] p-3 m-2 border border-gray-300 rounded-lg gap-2.5 text-lg text-center'
                />
                <input 
                type="text"
                name="otp"
                placeholder=" "
                maxlength="1"
                className='w-[16%] p-3 m-2 border border-gray-300 rounded-lg gap-2.5 text-lg text-center'
                />
                <input 
                type="text"
                name="otp"
                placeholder=" "
                maxlength="1"
                className='w-[16%] p-3 m-2 border border-gray-300 rounded-lg gap-2.5 text-lg text-center'
                />
                <button type="submit" className="w-full p-3 bg-[#7a59dc] text-white rounded-lg cursor-pointer text-base my-5 hover:bg-[#6C4AB6]">Verify</button>
                <p className='mb-2 mt-1 text-center text-gray-600'>Didn’t get a code? <a href="/" className="text-[#7a59dc] hover:underline"> Click here to resend </a></p>
            </form> 
        </div>
    </div>
  )
}

export default OtpPage;