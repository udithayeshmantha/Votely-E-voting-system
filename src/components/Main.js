import React from "react";
import HorizontalBars from "./chart";
import Ongoing from "./dashboard components/main page/ongoing";
import Calendar from './dashboard components/main page/Calendar';

const Dashboard = () => {
  return (
    <div className="px-10 font-Poppins">
      <div className="grid grid-cols-2 lg:grid-flow-row-dense gap-4 ">
        <div className="bg-white  text-left px-6 col-span-2 lg:col-span-3">
          <h1 className="text-2xl font-bold ">Hello, Udith</h1>
          <h1 className="text-xl">Welcome to the Votely</h1>
        </div>
        {/* Ongoing Elections */}
        <Ongoing />

        {/* Calendar */}
        <Calendar />

        {/* Voting Process */}
        <div className="bg-white shadow p-4 md:p-6 rounded">
          <h2 className="font-bold mb-4">Voting Process</h2>
          <p>
            Total Registered Voters: <strong>362</strong>
          </p>
        </div>

        {/* Live Results */}
        <div className="bg-white shadow p-4 md:p-6 rounded">
          <h2 className="font-bold mb-4">Live Results</h2>
          <div>
            <p>Candidate #1: 33%</p>
            <p>Candidate #2: 38%</p>
            <p>Candidate #3: 29%</p>
          </div>
        </div>

        <div className="bg-white shadow p-4 md:p-6 rounded col-span-2">
          <HorizontalBars />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
