import React from 'react';
import logo from './logo.svg';
import './App.css'; // or your main CSS file path
import './index.css'; // Make sure this is linked

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <header className="flex flex-col items-center justify-center text-xl">
        <img src={logo} className="h-48 animate-spin-slow" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-blue-400 mt-4"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

