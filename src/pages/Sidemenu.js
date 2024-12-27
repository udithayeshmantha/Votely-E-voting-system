import React from "react";
import { Home, Vote, FileText, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

// Utility function for conditional classnames, you can use a package like `classnames` or implement it yourself
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Vote, label: "Vote", path: "/vote" },
  { icon: FileText, label: "Voters Guideline", path: "/guidelines" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function DashboardSidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-card">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2">
            <h1 className="text-xl font-bold text-primary">iVOTE</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center border-t border-b py-6">
        <div className="h-16 w-16 overflow-hidden rounded-full bg-accent">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="mt-2 font-semibold">Juan Dela Cruz</h3>
        <p className="text-sm text-muted-foreground">View Profile</p>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
              item.path === "/" && "bg-accent text-accent-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-destructive hover:text-destructive-foreground">
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
