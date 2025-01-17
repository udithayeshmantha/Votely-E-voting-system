import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/dashboard components/Sidebar'; // Ensure this path is correct
import routeConfig from '../components/routeConfig'; // Import routeConfig

const DashboardView = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-grow scrollable-content">
        <Routes>
          {routeConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default DashboardView;