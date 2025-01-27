import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/dashboard components/Sidebar'; // Ensure this path is correct

import routeConfig from '../components/routeConfig';
import { useSelector } from 'react-redux'; // Import routeConfig // Import routeConfig


const DashboardView = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
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