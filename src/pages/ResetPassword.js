import React from 'react';

const ResetPassword = () => {
  return (
    <div className="main-container">
        <div className="welcome-section">
            <h3>Welcome to</h3>
            <h1>Votely</h1>
        </div>
        
        <div className="form">
            <form action="">
                <h2>Reset Password</h2>
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                <input 
                type="text"
                name="vin"
                placeholder="Enter VIN"
                required
                 /> 
                <input
                type="email"
                name="email"
                placeholder="Enter Email address"
                required
                />
                <button type="submit">Send Code</button>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword;