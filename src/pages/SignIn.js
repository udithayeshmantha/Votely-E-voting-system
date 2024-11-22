import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Bg from "../assets/bg.jpg";

const SignIn = ({}) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to backend)
    console.log(form);
  };


  return (
      <div className="flex justify-center items-center h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${Bg})` }}>
        <div className="flex-1 pl-80">
          <img src={Logo} alt="" />
        </div>
        <div className="w-full max-w-screen-sm bg-white rounded-lg p-8 mr-80 shadow-xl">
          <h2 className='text-3xl mb-2 text-center font-bold'>Sign In</h2>
          <p className='mb-2 mt-1 text-center text-gray-600'>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          <form onSubmit={handleSubmit}>
            <label for="email" className='block text-left text-gray-800 font-bold mt-4'>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full p-3 my-2 border border-gray-300 rounded-lg"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label for="password" className='block text-left text-gray-800 font-bold mt-4'>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 my-2 border border-gray-300 rounded-lg"
              value={form.password}
              onChange={handleChange}
              required
            />
            <a href="/forgot-password" className="text-[#7a59dc] hover:underline">Forgot Password?</a>

            <button type="submit" className='w-full p-3 bg-[#7a59dc] text-white rounded-lg cursor-pointer text-base my-5 hover:bg-[#6C4AB6]"'>Sign In</button>
          </form>
          <p className='mb-2 mt-1 text-center text-gray-600'>
            Don't have an account? <a href="/signup" className="text-[#7a59dc] hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
  )
}

export default SignIn;