import React from 'react'

const OtpPage = () => {
  return (
    <div className="main-container">
        <div className="otp-form">
            <form>
                <h2 className='secondary-heading'>Enter verification code</h2>
                <p className='primary-text'>A verification code has been sent to your phone number</p>

                <input 
                type="text"
                name="otp"
                placeholder=" "
                maxlength="1"
                />
                <input 
                type="text"
                name="otp"
                placeholder=" "
                maxlength="1"
                />
                <input 
                type="text"
                name="otp"
                placeholder=" "
                maxlength="1"
                />
                <input 
                type="text"
                name="otp"
                placeholder=" "
                maxlength="1"
                />
                <input 
                type="text"
                name="otp"
                placeholder=" "
                maxlength="1"
                />

                <button type="submit" className='primary-btn'>Verify</button>
                <p className='primary-text'>Didn’t get a code? <a href="/"> Click here to resend </a></p>
            </form> 
        </div>
    </div>
  )
}

export default OtpPage