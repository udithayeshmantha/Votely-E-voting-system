import React, { useState } from "react";
import { handleApiCall } from "../../api/handleApiCall";
import { toast } from "react-toastify";

const AddNewUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await handleApiCall("http://localhost:3000/api/users", "POST", {
        "Content-Type": "application/json"
      }, formData);
      setSuccess("User added successfully.");
      setFormData({ name: "", email: "", role: "", password: "" });
      toast.success("User added successfully.");
    } catch (err) {
      
      toast.success("User added successfully.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-around items-center gap-10 px-20 py-28 font-Poppins md:px-20 md:py-32 lg:px-52 lg:py-48 bg-cover bg-center bg-fixed">
      <div className="w-full max-w-screen-lg bg-white rounded-lg p-8 shadow-xl">
        <h2 className='text-3xl mb-2 text-center font-bold'>Add New User</h2>
        <p className='mb-2 mt-1 text-center text-gray-600'>Add a new user to the system.</p>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="voter">Voter</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 bg-blue-600 text-white rounded-lg cursor-pointer text-base my-5 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
          >
            {loading ? 'Adding user...' : 'Add User'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;