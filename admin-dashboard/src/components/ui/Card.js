import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;