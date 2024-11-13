import React, { useState } from 'react';
import Logo from '../assets/logo.png';

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
      <div className="main-container">
        <div className="logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="form">
          <h2 className='secondary-heading'>Sign In</h2>
          <p className='primary-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <a href="/forgot-password">Forgot Password?</a>

            <button type="submit" className='primary-btn'>Sign In</button>
          </form>
          <p className='primary-text'>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
  )
}

export default SignIn;