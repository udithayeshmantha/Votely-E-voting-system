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
        <p>Welcome to Votely's Online Voting System, please register as a voter to vote in your preferred candidate.</p>
        <form onSubmit={handleSubmit}>

        <label for="id_no">Voters ID No.</label>
          <input
            type="text"
            name="fullName"
            placeholder="Voters ID No."
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <label for="password"> Create Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm password"
            onChange={handleChange}
            required
          />

          <div className='terms'>
            <input type="checkbox" name="terms" id="" />
            <p>I agree to Votely's <a href="#">Terms & Conditions</a> & <a href="#">Privacy Policy</a></p>
          </div>

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
