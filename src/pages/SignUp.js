import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/Authcontext';
import Logo from "../assets/logo.png";
import Bg from "../assets/bg.jpg";

const SignUp = () => {
  const [form, setForm] = useState({
    voterID: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      setError("Please accept the Terms & Conditions");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await signup(form.email, form.password, form.voterID);
      navigate("/form");
    } catch (error) {
      setError("Failed to create an account: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-around items-center gap-10 px-10 py-20 font-Poppins md:px-10 md:pt-28 lg:px-48 lg:pt- bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="lg:pr-10">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="w-full max-w-screen-sm bg-white rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl mb-2 text-center font-bold">Sign Up</h2>
        <p className="mb-2 mt-1 text-center text-gray-600">
          Welcome to Votely's Online Voting System, please register as a voter
          to vote in your preferred candidate.
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="voterID"
            className="block text-left text-gray-800 font-bold mt-4"
          >
            Voters ID No.
          </label>
          <input
            type="text"
            name="voterID"
            placeholder="Voters ID No."
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            value={form.voterID}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="email"
            className="block text-left text-gray-800 font-bold mt-4"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="password"
            className="block text-left text-gray-800 font-bold mt-4"
          >
            Create Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="flex items-center">
            <input 
              type="checkbox" 
              name="terms" 
              className="w-auto mr-2"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required 
            />
            <p className="mb-2 mt-1 text-center text-gray-600">
              I agree to Votely's{" "}
              <a href="#" className="text-[#a81d74] hover:underline">
                Terms & Conditions
              </a>{" "}
              &{" "}
              <a href="#" className="text-[#a81d74] hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-[#a81d74] text-white rounded-lg cursor-pointer text-base my-5 transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mb-2 mt-1 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#a81d74] hover:underline">
            Sign In
          </Link>
        </p>
        <div className="text-center mt-4">
          <Link to="/" className="text-[#a81d74] hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
