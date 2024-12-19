// Navbar.js
import React from "react";

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <nav className="bg-gray-400 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="relative w-1/2 max-w-lg">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        /></div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="text-white hover:text-gray-300">
            {isDark ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
