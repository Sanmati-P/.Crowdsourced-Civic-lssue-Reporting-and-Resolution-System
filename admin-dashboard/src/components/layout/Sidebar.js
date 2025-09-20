import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed">
      <div className="p-4 text-center text-2xl font-bold border-b border-gray-700">
        Civic Portal
      </div>
      <nav className="mt-4">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <a href="/dashboard" className="flex items-center">
              <span className="ml-2">Dashboard</span>
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <a href="/issues" className="flex items-center">
              <span className="ml-2">Issues</span>
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <a href="/analytics" className="flex items-center">
              <span className="ml-2">Analytics</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
