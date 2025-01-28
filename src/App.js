import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/Authcontext";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import OtpPage from "./pages/OtpPage";
import Contactus from "./pages/Contactus";
import FAQ from "./pages/FAQ";
import Sidebar from "./components/dashboard components/Sidebar";
import AboutUs from "./pages/aboutus";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.css";
import DashboardView from "./mainviews/dashboardview";
import Homeview from "./mainviews/Homeview";
import routeConfig from "./components/routeConfig";
import Form from "./pages/Form";
import AdminSidebar from "./components/admin components/admin";
import Adminview from "./mainviews/adminview";
import Adminroute from "./components/Adminroute";
import { ToastContainer } from "react-toastify";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastContainer />
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();

  const getScrollableContentClassNames = () => {
    const hiddenPaths = [
      "/signin",
      "/signup",
      "/resetpassword",
      "/",
      "/aboutus",
      "/contactus",
      "/FAQ",
      "/otppage",
    ];
    return hiddenPaths.includes(location.pathname)
      ? "scrollable-content-hidden flex-grow"
      : "scrollable-content flex-grow";
  };

  const ConditionalAdminSidebar = () => {
    const location = useLocation();
    const adminVisiblePaths = [
      "/admin",
      "/admin/users",
      "/admin/add-user",
      "/admin/candidates",
      "/admin/results",
      "/admin/settings",
      "/admin/dashboard",
      "/adminview",
    ];
    return adminVisiblePaths.includes(location.pathname) ? (
      <AdminSidebar />
    ) : null;
  };

  return (
    <div className="">
      <ConditionalNavBar />
      <div className="flex">
        <ConditionalSidebar />
        <ConditionalAdminSidebar />

        <div className={getScrollableContentClassNames()}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/form" element={<Form />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/otppage" element={<OtpPage />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/*" element={<Homeview />} />
            <Route path="/*" element={<Adminview />} />
            {/* <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/add-user" element={<AddNewUser />} /> */}

            {routeConfig.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
            {Adminroute.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </div>
      </div>
      <ConditionalFooter />
    </div>
  );
};

const ConditionalNavBar = () => {
  const location = useLocation();
  const hiddenPaths = [
    "/admin",
    "/signin",
    "/signup",
    "/resetpassword",
    "/otppage",
    "/candidates",
    "/VotersGuideline",
    "/settings",
    "/index",
    "/dashboard",
    "/form",
    "/admin/users",
    "/admin/add-user",
    "/admin/candidates",
    "/admin/results",
    "/admin/dashboard",
    "/admin/settings",
    "/adminview",
    "/adminlogin",

  ];
  return !hiddenPaths.includes(location.pathname) ? <Navbar /> : null;
};

const ConditionalSidebar = () => {
  const location = useLocation();
  const hiddenPaths = [
    "/admin",
    "/signin",
    "/signup",
    "/resetpassword",
    "/",
    "/aboutus",
    "/contactus",
    "/FAQ",
    "/otppage",
    "/form",
    "/admin/users",
    "/admin/add-user",
    "/admin/candidates",
    "/admin/results",
    "/admin/settings",
    "/admin/dashboard",
    "/adminview",
    "/adminlogin",
  ];
  return !hiddenPaths.includes(location.pathname) ? <Sidebar /> : null;
};

const ConditionalAdminSidebar = () => {
  const location = useLocation();
  const adminVisiblePaths = [
    "/admin",
    "/admin/users",
    "/admin/add-user",
    "/admin/candidates",
    "/admin/results",
    "/admin/settings",
    "/admin/dashboard",
    "/adminview",
  ];
  return adminVisiblePaths.includes(location.pathname) ? (
    <AdminSidebar />
  ) : null;
};

const ConditionalFooter = () => {
  const location = useLocation();
  const hiddenPaths = [
    "/admin",
    "/signin",
    "/signup",
    "/resetpassword",
    "/otppage",
    "/candidates",
    "/VotersGuideline",
    "/settings",
    "/index",
    "/dashboard",
    "/form",
    "/admin/users",
    "/admin/add-user",
    "/admin/candidates",
    "/admin/results",
    "/admin/dashboard",
    "/admin/settings",
    "/adminview",
    "/adminlogin",
  ];
  return !hiddenPaths.includes(location.pathname) ? <Footer /> : null;
};

export default App;
