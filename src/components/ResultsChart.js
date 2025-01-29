import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Data for the chart
const data = [
  { name: "Ranjith Dissanayake", votes: 120 },
  { name: "Asela Gunarathne", votes: 150 },
  { name: "Uditha Gaweshana", votes: 90 },

];

const colors = ["#8884d8", "#82ca9d", "#ffc658"];

export function ResultsChart() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Live Results</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            President Student Council
          </span>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="votes" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ResultsChart;
