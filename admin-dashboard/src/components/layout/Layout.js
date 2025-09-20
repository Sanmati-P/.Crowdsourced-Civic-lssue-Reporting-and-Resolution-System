// src/components/layout/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = ({ children }) => {
  return (
    // Add 'flex' and 'w-full' to the parent container
    <div className="flex w-full min-h-screen"> 
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
};

export default Layout;