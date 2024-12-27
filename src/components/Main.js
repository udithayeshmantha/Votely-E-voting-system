import React from "react";
import { Users, Vote, UserSquare2 } from "lucide-react";
import DashboardHeader from "./DashboardHeader";
import ElectionCard from "./ElectionCard";
import ElectionTimeline from "./ElectionTimeline";
import ResultsChart from "./ResultsChart";
import StatsCard from "./StatsCard";

const Index = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 overflow-auto font-Poppins">
        <DashboardHeader />
        <main className="dashboard-gradient min-h-[calc(100vh-4rem)] px-20 py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Hello, Udith!</h1>
            <p className="text-muted-foreground">
              Welcome to Votely's Online Voting System
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StatsCard
              title="Total Registered Voters"
              value={362}
              icon={<Users className="h-6 w-6" />}
            />
            <StatsCard
              title="Total Votes Cast"
              value={344}
              icon={<Vote className="h-6 w-6" />}
            />
            <StatsCard
              title="Registered Candidates"
              value={3}
              icon={<UserSquare2 className="h-6 w-6" />}
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <ElectionCard />
              <ResultsChart />
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Calendar</h3>
                <div className="flex items-center justify-between text-sm px-4">
                  <span>Today</span>
                  <span>Next week</span>
                  <span>This Month</span>
                </div>
                <div className="mt-4 rounded-lg bg-accent p-4">
                  <div className="text-sm text-muted-foreground">December</div>
                  <div className="mt-1 text-2xl font-bold">22</div>
                  <div className="mt-2 text-sm font-medium">
                    President Student Council
                  </div>
                </div>
              </div>
              <ElectionTimeline />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
