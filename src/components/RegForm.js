import React from 'react';
import Logo from '../assets/logo.png';

const RegForm = () => {
  return (
    <div className="main-container">
        <div className="reg-form">
        <form>                 
            <div className="small-logo">
                <img src={Logo} alt="" />
            </div> 
            <div className="form-heading">
                <h2 className='secondary-heading secondary-heading-lf'>Fill out your information</h2>
                <p className='primary-text primary-text-lf'>Please fill out your information below</p>
            </div>

            <div className="form-group">
                <label for="firstname">FIRST NAME</label>
                <input 
                type="text"
                name="fisrtName"
                placeholder="First Name"
                />
            </div>
            <div className="form-group">
                <label for="firstname">MIDDLE NAME</label>
                <input 
                type="text"
                name="MiddleName"
                placeholder="Middle Name"
                />
            </div>
            <div className="form-group">
                <label for="firstname">LAST NAME</label>
                <input 
                type="text"
                name="LastName"
                placeholder="Last Name"
                />
            </div>
            <div className="persional-details">
                <label for="birthday">DATE OF BIRTH</label>
                <input 
                type="text"
                name="birthday"
                placeholder="MM/DD/YYYY"
                />
                <label for="contact">CONTACT NUMBER</label>
                <input 
                type="number"
                name="contactnumber"
                placeholder="Contact Number"
                />
                <label for="email">EMAIL</label>
                <input
                type="email"
                name="email"
                placeholder="Email address"
                />
                <label for="Organization">ORGANIZATION</label>
                <input 
                type="text"
                name="organization"
                placeholder="Organization"
                />
            </div>
        </form>
        </div>
    </div>
  )
}

export default RegForm;