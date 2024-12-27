import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Vote, FileText, Settings, LogOut } from "lucide-react";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Vote, label: "Vote", path: "/candidates" },
    { icon: FileText, label: "Voter Guideline", path: "/VotersGuideline" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="h-screen w-64 bg-neutral-300 border-r border-gray-200 flex flex-col md:w-80 font-Poppins">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/">
            <img alt="Volety" src={Logo} className="h-8 w-auto" />
          </Link>
        </div>

        <div className="hidden lg:flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full mb-3">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg">User Profile</h3>
          <Link to="/profile" className="text-sm">
            View Profile
          </Link>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path) ? "text-white" : "text-black "
              }`}
            >
              <item.icon size={20} />
              <span className="hidden sm:flex">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <button className="flex items-center gap-3 text-gray-600 hover:text-votely-primary transition-colors w-full">
          <LogOut size={20} />
          <span className="hidden sm:inline">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
