import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_white.png";

const Footer = () => {
  return (
    <div className="flex justify-evenly bg-blue-500 text-white h-48  ">
      <div className="justify-items-center content-center space-y-2 ">
        <a href="#" className="">
          <img src={Logo} alt="" className="w-40 " />
        </a>
        <div className="text-xs font-Poppins">
          Copyright © 2024. All rights reserved.
        </div>
      </div>
      <div className="justify-items-left p-8 content-center hidden md:block">
        <div className="font-semibold pb-2 font-Poppins">Legal</div>
        <div className="text-sm">
          <div className="font-medium pb-1">
            <Link to="/terms-and-conditions" className="font-Poppins">
              Terms and Conditions
            </Link>
          </div>
          <div className="font-medium pb-1">
            <Link to="/privacy-policy" className="font-Poppins">
              Privacy Policy
            </Link>
          </div>
          <div className="font-medium pb-1">
            <Link to="/faqs" className="font-Poppins">
              FAQs
            </Link>
          </div>
        </div>
      </div>
      <div className=" justify-items-left p-8 content-center hidden md:block ">
        <div className="font-semibold pb-2">Contact Us</div>
        <div className="text-sm ">
          <div className="font-medium pb-1 font-Poppins">
            Address : Uva Wellassa University, Sri Lanka
          </div>
          <div className="font-medium pb-1 font-Poppins">
            Email : Votely@gmail.com
          </div>
          <div className="font-medium pb-1 font-Poppins">
            Phone No : +94 076 169 3863
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
