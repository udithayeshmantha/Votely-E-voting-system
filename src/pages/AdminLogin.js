import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Bg from "../assets/bg.jpg";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    toast.success("Candidate created successfully.");

    // Simulate form validation or API request if needed
    if (form.email === "admin@example.com" && form.password === "admin123") {
      navigate("/admin/dashboard");
    } else {
        navigate("/admin/dashboard");
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-around items-center gap-10 px-20 py-28 font-Poppins md:px-20 md:py-32 lg:px-52 lg:py-48 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="lg:pr-10">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="w-full max-w-screen-sm bg-white rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl mb-2 text-center font-bold">Admin Login</h2>
        <p className="mb-2 mt-1 text-center text-gray-600">
          Enter your credentials to access the Admin Panel.
        </p>

        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block text-left text-gray-800 font-bold mt-4"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full p-3 my-2 border border-gray-300 rounded-lg"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="password"
            className="block text-left text-gray-800 font-bold mt-4"
          >
            Password
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
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 bg-[#a81d74] text-white rounded-lg cursor-pointer text-base my-5 ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#8a1860]"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/" className="text-[#a81d74] hover:underline">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
