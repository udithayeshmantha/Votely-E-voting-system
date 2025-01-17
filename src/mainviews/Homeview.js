import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import OtpPage from "../pages/OtpPage";
import Contactus from "../pages/Contactus";
import AboutUs from "../pages/aboutus";
import FAQ from "../pages/FAQ";
import Navbar from "../components/Navbar"; // Ensure Navbar is imported
import Footer from "../components/Footer"; // Ensure Navbar is imported
import Home from "../pages/Home"
 // Ensure Navbar is imported

function Homeview() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/otppage" element={<OtpPage />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Homeview;