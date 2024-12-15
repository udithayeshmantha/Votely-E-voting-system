import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-800 text-white">
            <div className="p-4 text-2xl font-bold">Votely</div>
            <nav className="mt-10">
                <ul>
                    <li className="mb-4">
                        <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <span className="ml-2">Dashboard</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/elections" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <span className="ml-2">Elections</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/candidates" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <span className="ml-2">Candidates</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/results" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <span className="ml-2">Results</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/settings" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <span className="ml-2">Settings</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;