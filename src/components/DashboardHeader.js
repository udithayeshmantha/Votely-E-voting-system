import React from "react";
import { Bell, Search } from "lucide-react";
import userlogo from "../assets/user.png";

// Assuming Input is a reusable component, if not you can replace it with a standard HTML input element
const Input = ({ placeholder, className }) => {
  return <input type="text" placeholder={placeholder} className={className} />;
};

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="relative w-96">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search..." className="w-full pl-8" />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 hover:bg-accent">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
        </button>
        <div className="h-8 w-8 overflow-hidden rounded-full bg-accent">
          <img
            src={userlogo}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
