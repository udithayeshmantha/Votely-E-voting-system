import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Data for the chart
const data = [
  { name: "Candidate #1", votes: 120 },
  { name: "Candidate #2", votes: 150 },
  { name: "Candidate #3", votes: 90 },
];

export function ResultsChart() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Live Results</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">President Student Council</span>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="votes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ResultsChart;
