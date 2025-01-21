// src/pages/ResetPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';
import Logo from '../assets/logo.png';
import Bg from "../assets/bg.jpg";

const ResetPassword = () => {
  const [form, setForm] = useState({
    email: '',
    voterIdNo: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      
      await resetPassword(form.email, form.voterIdNo);
      setMessage('Check your email inbox for password reset instructions.');
      
      // Optionally clear the form
      setForm({ email: '', voterIdNo: '' });
      
      // Redirect to signin page after 3 seconds
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
      
    } catch (err) {
      setError('Failed to reset password. Please verify your information.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-around items-center gap-10 px-20 py-28 font-Poppins md:px-20 md:py-32 lg:px-52 lg:py-48 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="lg:pr-10">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="w-full max-w-screen-sm bg-white rounded-lg p-8 shadow-xl">
        <h2 className='text-3xl mb-2 text-center font-bold'>Reset Password</h2>
        <p className='mb-2 mt-1 text-center text-gray-600'>Enter your email and Voter ID to reset your password.</p>

        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className='block text-left text-gray-800 font-bold mt-4'>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="voterIdNo" className='block text-left text-gray-800 font-bold mt-4'>Voter ID Number</label>
          <input
            type="text"
            name="voterIdNo"
            placeholder="Enter your Voter ID number"
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            value={form.voterIdNo}
            onChange={handleChange}
            required
          />

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full p-3 bg-[#a81d74] text-white rounded-lg cursor-pointer text-base my-5 ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#8a1860]'
            }`}
          >
            {loading ? 'Processing...' : 'Reset Password'}
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/signin" className="text-[#a81d74] hover:underline">Back to Sign In</a>
        </div>

        <div className="text-center mt-4">
          <a href="/" className="text-[#a81d74] hover:underline">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;