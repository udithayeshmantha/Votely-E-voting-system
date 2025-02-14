import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_white.png";

const Footer = () => {
  return (
    <div className="flex justify-evenly bg-[#a81d74] text-white h-48 font-Poppins">
      <div className="justify-items-center content-center space-y-2 p-8">
        <a href="a" className="">
          <img src={Logo} alt="" className="w-40 " />
        </a>
        <div className="text-xs">
          Copyright © 2024. All rights reserved.
        </div>
      </div>
      <div className="justify-items-left p-8 content-center hidden md:block">
        <div className="font-semibold pb-2">Legal</div>
        <div className="text-sm">
          <div className="font-medium pb-1">
            <Link to="/terms-and-conditions" className="">
              Terms and Conditions
            </Link>
          </div>
          <div className="font-medium pb-1">
            <Link to="/privacy-policy" className="">
              Privacy Policy
            </Link>
          </div>
          <div className="font-medium pb-1">
            <Link to="/faqs" className="">
              FAQs
            </Link>
          </div>
        </div>
      </div>
      <div className=" justify-items-left p-8 content-center hidden md:block ">
        <div className="font-semibold pb-2">Contact Us</div>
        <div className="text-sm ">
          <div className="font-medium pb-1">
            Address : Uva Wellassa University, Sri Lanka
          </div>
          <div className="font-medium pb-1">
            Email : Votely@gmail.com
          </div>
          <div className="font-medium pb-1">
            Phone No : +94 76 169 3863
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
