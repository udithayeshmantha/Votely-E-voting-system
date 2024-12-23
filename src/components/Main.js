import React from "react";
import HorizontalBars from "./chart";
import Ongoing from "./dashboard components/main page/ongoing";
import Calendar from './dashboard components/main page/Calendar';
import VotingProcess from './dashboard components/main page/VotingProcess';

const Dashboard = () => {
  return (
    <div className="px-10 font-Poppins">
      <div className="grid grid-cols-2 lg:grid-flow-row-dense gap-4 ">
        <div className="bg-white  text-left px-6 col-span-2 lg:col-span-2">
          <h1 className="text-2xl font-bold ">Hello, Udith</h1>
          <h1 className="text-xl">Welcome to the Votely</h1>
        </div>
        {/* Ongoing Elections */}
        <Ongoing />

        {/* Calendar */}
        <Calendar />

        {/* Voting Process */}
        <VotingProcess />

        {/* Live Results */}
        
      </div>
    </div>
  );
};

export default Dashboard;
