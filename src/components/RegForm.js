import React from 'react';
import Logo from '../assets/logo.png';

const RegForm = () => {
  return (
        <div className="reg-form">
            <div className="small-logo">
                <img src={Logo} alt="" />
            </div> 
             <div className="form-heading">
                <h2 className='secondary-heading secondary-heading-lf'>Fill out your information</h2>
                <p className='primary-text primary-text-lf'>Please fill out your information below</p>
            </div>
        <form className='votely-form'>                         
            <div className="form-group">
                <label for="firstname">FIRST NAME</label>
                <input 
                type="text"
                name="fisrtName"
                placeholder="First Name"
                required
                />
                <label for="firstname">MIDDLE NAME</label>
                <input 
                type="text"
                name="MiddleName"
                placeholder="Middle Name"
                />
                <label for="firstname">LAST NAME</label>
                <input 
                type="text"
                name="LastName"
                placeholder="Last Name"
                required
                />
            </div>
            <div className="persional-details">   
                <label for="birthday">DATE OF BIRTH</label>
                <input 
                type="date"
                name="birthday"
                placeholder="MM/DD/YYYY"
                required
                />               
                <label for="contact">CONTACT NUMBER</label>
                <span className='country-code'>LK +94</span>
                <input 
                type="tel"
                name="contactnumber"
                placeholder="Contact Number"
                required
                />
                <label for="email">EMAIL</label>
                <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                />
                <label for="Organization">ORGANIZATION</label>
                <input 
                type="text"
                name="organization"
                placeholder="Organization"
                />
            </div>
            <div className="address-details">
                <h2>CURRENT ADDRESS</h2>
            </div>
        </form>
        </div>
  );
};
export default RegForm;