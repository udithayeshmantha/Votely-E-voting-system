import React from 'react';
import Sidebar from '../components/Sidebar';
import Vote from '../components/dashboard components/Vote';

const Vote = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <Vote />
    </div>
  );
};

export default Vote;
