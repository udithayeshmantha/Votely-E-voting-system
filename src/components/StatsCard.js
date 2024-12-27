import React from "react";

// Define the component, remove TypeScript type annotations
export function StatsCard({ title, value, icon }) {
  return (
    <div className="stats-card animate-in">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h4 className="mt-2 text-3xl font-bold">{value}</h4>
        </div>
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
