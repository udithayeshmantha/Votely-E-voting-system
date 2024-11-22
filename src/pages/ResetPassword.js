import React from 'react';
import Logo from '../assets/logo.png';

const ResetPassword = () => {
  return (
    <div className="main-container">
       <div className="logo-container">
          <img src={Logo} alt="" />
       </div>
        
        <div className="form">
            <h2 className='secondary-heading'>Reset Password</h2>
            <p className='primary-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form action="">
                <label for="vin">VIN</label>
                <input 
                type="text"
                name="vin"
                placeholder="Enter VIN"
                required
                 />
                <label for="email">Email</label>
                <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                />
                <button type="submit" className='primary-btn'>Send Code</button>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword;