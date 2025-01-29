import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/dashboard components/Sidebar'; // Ensure this path is correct
import Adminroute from '../components/Adminroute'; // Import routeConfig

const adminview = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-grow scrollable-content">
        <Routes>
          {Adminroute.map((route) => (
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

export default adminview;