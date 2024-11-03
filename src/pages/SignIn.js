import React, { useState } from 'react';
import '../styles/signup.css';

const SignIn = () => {
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
    <div>
      <div className="main-container">
        <div className="welcome-section">
          <h3>Welcome to </h3>
          <h1>Votely</h1>
        </div>
        <div className="form">
          <h2>Sign In</h2>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter Email address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <p className='forgot-password'><a href="/forgot-password">Forgot Password?</a></p>

            <button type="submit">Sign In</button>
          </form>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn;