// App.js
import React, { useState, useEffect } from "react"
import './App.css'
import Navbar from "./components/Nav.jsx";
import UserList from "./components/UerList.jsx";

function App() {
  const [showUserList, setShowUserList] = useState(true);

  // Toggle the display of UserList
  const toggleUserList = () => {
    setShowUserList(!showUserList);
  };
  const [isDark, setIsDark] = useState(false);

  // Check localStorage for the user's theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Update body class based on the theme
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <div className="p-4">
       <div className="d-flex">

        <button onClick={toggleUserList} className="w-20 h-10 bg-gray-600 text-white">All</button>
        <button onClick={() => alert('This could trigger adding a new user')} className="w-20 h-10 bg-gray-600 text-white" >Mern</button>
        <button className="w-20 h-10 bg-gray-600 text-white" >Fluter</button>
        <button className="w-20 h-10 bg-gray-600 text-white" >Python</button>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="text-white hover:text-gray-300">
            {isDark ? '🌞' : '🌙'}
          </button>
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;

