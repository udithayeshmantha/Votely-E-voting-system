import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';
import Logo from '../assets/logo.png';
import Bg from "../assets/bg.jpg";
import { handleApiCall } from '../api/handleApiCall';
import axios from 'axios';
import { MediaBluetoothOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/features/userSlice';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const user = useSelector((state) => state.user);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const dispatch = useDispatch();
  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // handle api call submit data 
    try {
      const response = await handleApiCall(
        'http://localhost:5000/api/users/login',
        'post',
        { 'Content-Type': 'application/json' },
        form
      );

      console.log(response)
      if (response.status === 200) {
        localStorage.setItem('token',response.data.token);
        dispatch(setUser(
          {
            uid: response.data.uid,
            email: response.data.email,
            token: response.data.token,
            role: response.data.role
          }
        ));
        console.log(user);
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.',error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-around items-center gap-10 px-20 py-28 font-Poppins md:px-20 md:py-32 lg:px-52 lg:py-48 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="lg:pr-10">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="w-full max-w-screen-sm bg-white rounded-lg p-8 shadow-xl">
        <h2 className='text-3xl mb-2 text-center font-bold'>Sign In</h2>
        <p className='mb-2 mt-1 text-center text-gray-600'>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>

        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className='block text-left text-gray-800 font-bold mt-4'>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className='block text-left text-gray-800 font-bold mt-4'>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            value={form.password}
            onChange={handleChange}
            required
          />
          <a href="/resetpassword" className="text-[#a81d74] hover:underline">Forgot Password?</a>

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 bg-[#a81d74] text-white rounded-lg cursor-pointer text-base my-5 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#8a1860]'
              }`}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className='mb-2 mt-1 text-center text-gray-600'>
          Don't have an account? <a href="/signup" className="text-[#a81d74] hover:underline">Sign Up</a>
        </p>
        <div className="text-center mt-4">
          <a href="/" className="text-[#a81d74] hover:underline">Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;