import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contactus from "../pages/Contactus";
import FAQ from "../pages/FAQ";
import AboutUs from "../pages/aboutus";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import RouteConfigComponent from "../components/RouteConfigComponent"; // Import RouteConfigComponent
import routeConfig from "../components/routeConfig"; // Import routeConfig

const MainPageContent = () => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <div className="flex-grow">
      {!hideNavbarAndFooter && <Navbar />}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard/*" element={<RouteConfigComponent />} /> {/* Add the RouteConfigComponent */}
          {routeConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
};

const MainPageRoute = () => {
  return (
    <Router>
      <MainPageContent />
    </Router>
  );
};

export default MainPageRoute;