import React from "react";

// Assuming `cn` is a utility function for conditional class names, here’s a basic example
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Activity data
const activities = [
  {
    title: "President Student Council",
    status: "ongoing",
    date: "12/22/2022",
  },
  {
    title: "Vice President Student Council",
    status: "pending",
    date: "Pending",
  },
  {
    title: "Secretary Student Council",
    status: "concluded",
    date: "Concluded",
  },
];

export function ElectionTimeline() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">Election Activities</h3>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-primary" /> Ongoing
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-secondary" /> Pending
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-muted-foreground" /> Concluded
        </div>
      </div>
      <div className="mt-4 space-y-4">
        {activities.map((activity) => (
          <div key={activity.title} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "h-2 w-2 rounded-full",
                  activity.status === "ongoing" && "bg-primary",
                  activity.status === "pending" && "bg-secondary",
                  activity.status === "concluded" && "bg-muted-foreground"
                )}
              />
              <span className="font-medium">{activity.title}</span>
            </div>
            <span className="text-sm text-muted-foreground">{activity.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElectionTimeline;
