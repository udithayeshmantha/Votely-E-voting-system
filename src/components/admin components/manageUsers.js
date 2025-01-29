import React, { useState, useEffect } from "react";
import { Edit, Trash } from "lucide-react";
import { handleApiCall } from "../../api/handleApiCall";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Authcontext';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    password: ""
  });

  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log('Global state:', user);
  }, [user]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await handleApiCall("http://localhost:3000/api/users", "GET", {
          "Content-Type": "application/json"
        });
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await handleApiCall(`http://localhost:3000/api/users/${userId}`, "DELETE", {
          "Content-Type": "application/json"
        });
        setUsers(users.filter((user) => user._id !== userId));
        toast.success("User deleted successfully.");
      } catch (err) {
        console.error("Error deleting user:", err);
        toast.success("User deleted successfully.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await handleApiCall("http://localhost:3000/api/users", "POST", {
        "Content-Type": "application/json"
      }, newUser);
      setUsers((prev) => [...prev, response.data]);
      setNewUser({ name: "", email: "", role: "", password: "" });
      toast.success("User created successfully.");
    } catch (err) {
      console.error("Error creating user:", err);
      setError("Failed to create user. Please try again.");
      toast.error("Failed to create user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-around items-center gap-10 px-20 py-28 font-Poppins md:px-20 md:py-32 lg:px-52 lg:py-48 bg-cover bg-center bg-fixed">
      <div className="w-full max-w-screen-lg bg-white rounded-lg p-8 shadow-xl">
        <h2 className='text-3xl mb-2 text-center font-bold'>Manage Users</h2>
        <p className='mb-2 mt-1 text-center text-gray-600'>Manage the list of users in the system.</p>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={newUser.name}
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
              value={newUser.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={newUser.role}
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
              value={newUser.password}
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
            {loading ? 'Creating user...' : 'Create User'}
          </button>
        </form>

        <table className="min-w-full bg-white border border-gray-200">
          {/* <thead>
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Role</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead> */}
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{user.name}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">{user.role}</td>
                <td className="px-4 py-2 border-b flex gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => alert(`Edit user: ${user.name}`)}
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(user._id)}
                  >
                    <Trash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
