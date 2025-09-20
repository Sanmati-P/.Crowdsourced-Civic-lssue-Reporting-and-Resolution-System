// src/components/layout/MainContent.js
import React from 'react';

const MainContent = ({ children }) => {
  return (
    // Add 'w-full' to ensure the content area fills the horizontal space
    <div className="ml-64 p-8 bg-gray-100 min-h-screen w-full">
      {children}
    </div>
  );
};

export default MainContent;