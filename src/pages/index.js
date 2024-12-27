import React from "react";
import { Users, Vote, UserSquare2 } from "lucide-react";
import DashboardHeader from "./components/dashboard/DashboardHeader";
import DashboardSidebar from "./components/dashboard/DashboardSidebar";
import ElectionCard from "./components/dashboard/ElectionCard";
import ElectionTimeline from "./components/dashboard/ElectionTimeline";
import ResultsChart from "./components/dashboard/ResultsChart";
import StatsCard from "./components/dashboard/StatsCard";

export default function Index() {
  return (
    <div className="flex h-screen w-full">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <DashboardHeader />
        <main className="dashboard-gradient min-h-[calc(100vh-4rem)] p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Hello, Juan!</h1>
            <p className="text-muted-foreground">Welcome LOGO's Online Voting System</p>
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
                <div className="flex items-center justify-between text-sm">
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
}
