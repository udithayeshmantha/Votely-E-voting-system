import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import OtpPage from "./pages/OtpPage";
import Contactus from "./pages/Contactus";
import FAQ from "./pages/FAQ";
import Sidebar from "./components/dashboard components/Sidebar";
import AboutUs from "./pages/aboutus";
import routeConfig from "./components/routeConfig";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      {/* <ConditionalNavBar /> */}
      <div className="flex">
        <Sidebar />
        <div className="flex-grow scrollable-content">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/otppage" element={<OtpPage />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/aboutus" element={<AboutUs />} /> */}
            {routeConfig.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </div>
      </div>
      
      {/* <ConditionalFooter /> */}
    </Router>
  );
}

const ConditionalNavBar = () => {
  const location = useLocation();
  const hiddenPaths = [
    "/signin",
    "/signup",
    "/form",
    "/resetpassword",
    "/otppage",
  ];
  return !hiddenPaths.includes(location.pathname) ? <Navbar /> : null;
};

const ConditionalFooter = () => {
  const location = useLocation();
  const hiddenPaths = [
    "/signin",
    "/signup",
    "/form",
    "/resetpassword",
    "/otppage",
  ];
  return !hiddenPaths.includes(location.pathname) ? <Footer /> : null;
};

export default App;
