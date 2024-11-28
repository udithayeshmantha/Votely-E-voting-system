import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Bg from "../assets/bg.jpg";


const SignUp = () => {
  const [form, setForm] = useState({
    fullName: '',
    vin: '',
    email: '',
    password: '',
    phonenumber: ''
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
    <div className="flex flex-col lg:flex-row justify-around items-center gap-10 px-10 py-20 md:px-10 md:pt-28 lg:px-48 lg:pt-48 bg-cover bg-center bg-fixed " style={{ backgroundImage: `url(${Bg})` }}>
      <div className="lg:pr-10">
        <img src={Logo} alt="" />
      </div>
      <div className="w-full max-w-screen-sm bg-white rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl mb-2 text-center font-bold">Sign Up</h2>
        <p className="mb-2 mt-1 text-center text-gray-600">Welcome to Votely's Online Voting System, please register as a voter to vote in your preferred candidate.</p>

        <form onSubmit={handleSubmit}>
        <label for="id_no" className="block text-left text-gray-800 font-bold mt-4">Voters ID No.</label>
          <input
            type="text"
            name="fullName"
            placeholder="Voters ID No."
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            onChange={handleChange}
            required
          />
          <label for="password" className="block text-left text-gray-800 font-bold mt-4"> Create Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm password"
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            onChange={handleChange}
            required
          />

          <div className='flex items-center'>
            <input type="checkbox" name="terms" id="" className="w-auto mr-2" />
            <p className="mb-2 mt-1 text-center text-gray-600">I agree to Votely's <a href="#" className='text-[#7a59dc]'>Terms & Conditions</a> & <a href="#" className='text-[#7a59dc]'>Privacy Policy</a></p>
          </div>

          <button type="submit" className="w-full p-3 bg-[#7a59dc] text-white rounded-lg cursor-pointer text-base my-5 hover:bg-[#6C4AB6] transition">Register</button>
        </form>

        <p className="mb-2 mt-1 text-center text-gray-600">
          Already have an account? <a href="/signin" className="text-[#7a59dc] hover:underline">Sign In</a>
        </p>
        <div className="text-center mt-4">
          <Link to="/" className="text-[#7a59dc] hover:underline">Back to Home</Link>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;
