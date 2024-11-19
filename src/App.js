import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import "./styles/App.css";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
      
    </Router>
  );
}

export default App;