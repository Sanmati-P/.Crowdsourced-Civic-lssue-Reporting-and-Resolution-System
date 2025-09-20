import React from 'react';

const MainContent = ({ children }) => {
  return (
    <div className="ml-64 p-8 bg-gray-100 min-h-screen">
      {children}
    </div>
  );
};

export default MainContent;
