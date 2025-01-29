import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  ClipboardList,
  FileText,
  Settings,
  LogOut,
  BarChart,
  UserPlus,
} from "lucide-react";
import Logo from "../../assets/logo.png";
import userlogo from "../../assets/user.png";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    // { icon: Home, label: "Dashboard", path: "/admin/dashboard" },
    // { icon: Users, label: "Manage Users", path: "/admin/users" },
    { icon: UserPlus, label: "Add New User", path: "/admin/add-user" },
    { icon: ClipboardList, label: "Manage Candidates", path: "/admin/candidates" },
   // { icon: BarChart, label: "Results & Analytics", path: "/admin/results" },
    // { icon: Settings, label: "Admin Settings", path: "/admin/settings" },
  ];

  const handleLogout = () => {
    // Perform any logout logic here
    navigate("/");
  };

  return (
    <div className="h-screen bg-neutral-300 border-r border-gray-200 flex flex-col font-Poppins w-20 md:w-max">
      <div className="p-6 flex flex-col gap-6">
        <div className="md:flex justify-start gap-2 mb-8 hidden">
          <Link to="/admin/dashboard">
            <img alt="Votely" src={Logo} className="h-auto w-24 lg:w-24" />
          </Link>
        </div>

        <div className="flex-col justify-center items-center mb-8 hidden md:flex">
          <div className="w-20 h-20 rounded-full mb-3">
            <img
              src={userlogo}
              alt="Admin Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg">Admin Panel</h3>
          <Link to="/admin/profile" className="text-sm">
            View Profile
          </Link>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 py-3 rounded-lg transition-colors ${
                isActive(item.path) ? "bg-votely-primary text-white" : "text-black"
              }`}
            >
              <item.icon size={20} />
              <span className="hidden md:flex flex-initial w-32">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-gray-600 hover:text-votely-primary transition-colors w-full"
        >
          <LogOut size={20} />
          <span className="hidden md:inline">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Admin;