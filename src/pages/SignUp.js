import React, { useState } from 'react';

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
    <div className="main-container">
      <div className="welcome-section">
        <h3>Welcome to </h3>
        <h1>Votely</h1>
      </div>
      <div className="form">
        <h2>Sign Up</h2>
        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="vin"
            placeholder="Enter VIN"
            value={form.vin}
            onChange={handleChange}
            required
          />
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
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />
           <input
            type="phonenumber"
            name="phonenumber"
            placeholder="Enter Phone number"
            value={form.phonenumber}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
        <p>
          By signing up you accept our <a href="/terms">terms & condition</a> & <a href="/privacy">privacy policy</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
