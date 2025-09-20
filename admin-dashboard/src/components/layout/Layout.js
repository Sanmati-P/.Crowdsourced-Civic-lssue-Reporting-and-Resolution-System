import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
};

export default Layout;
