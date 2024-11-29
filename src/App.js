import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import "./styles/App.css";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Form from "./components/Form";
import ResetPassword from "./pages/ResetPassword";
import OtpPage from "./pages/OtpPage";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <Router>
      
      <ConditionalNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <ConditionalFooter />
    </Router>
  );
}
const ConditionalNavBar = () => {
  const location = useLocation();

  // Paths where the navbar should be hidden
  const hiddenPaths = ["/signin", "/signup", "/form"];

  // Render navbar only if current path is not in hiddenPaths
  return !hiddenPaths.includes(location.pathname) ? <Navbar />  : null;
};

const ConditionalFooter = () => {
  const location = useLocation();

  // Paths where the footer should be hidden
  const hiddenPaths = ["/signin", "/signup", "/form"];

  // Render footer only if current path is not in hiddenPaths
  return !hiddenPaths.includes(location.pathname) ? <Footer /> : null;
};

export default App;