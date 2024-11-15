import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-evenly bg-indigo-600 text-white h-44">
      <div className="justify-items-start content-center space-y-2 ">
        <a href="#" className="">
          <img src={Logo} alt="" className="w-40 " />
        </a>
        <div className="text-xs">Copyright © 2024. All rights reserved.</div>
      </div>
      <div className="justify-items-left p-8 content-center">
        <div className="font-semibold ">Legal</div>
        <div className="text-sm">
          <div className="font-medium ">
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </div>
          <div className="font-medium">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="font-medium">
            <Link to="/faqs">FAQs</Link>
          </div>
        </div>
      </div>
      <div className="justify-items-left p-8 content-center">
        <div className="font-semibold">Contact Us</div>
        <div className="text-sm">
          <div className="font-medium">Address : Uva Wellassa University, Sri lanka</div>
          <div className="font-medium">Email : Votely@gmail.com</div>
          <div className="font-medium">Phone No : +94 076 169 3863</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
