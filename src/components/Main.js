import React from "react";
import Bg from "../assets/bg.jpg";
import Sidemenu from "../components/Sidemenu";
import BasicBars from "./chart";

const Dashboard = () => {
  return (
    <div className="px-10 font-Poppins">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="bg-white  text-left px-6 col-span-3">
          <h1 className="text-2xl font-bold ">Hello, Udith</h1>
          <h1 className="text-xl">Welcome to the Votely</h1>
        </div>
        {/* Ongoing Elections */}
        <div className="bg-white shadow p-4 md:p-6 rounded">
          <h2 className="font-bold mb-4">Ongoing Elections</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Vote now
          </button>
        </div>

        {/* Calendar */}
        <div className="bg-white shadow p-4 md:p-6 rounded">
          <h2 className="font-bold mb-4">Calendar</h2>
          <p>Next Event: December 22</p>
        </div>

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

        <div className="bg-white shadow p-4 md:p-6 rounded">
          <BasicBars />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
