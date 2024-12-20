import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Nav.jsx";
import profileImage from './assets/pro.jpg'; 



function App() {
  const [showUserList, setShowUserList] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Track the selected category
  
  // Sample user data for different categories
  const users = [
    {id:"1", name: "John Doe", category: "Mern", },
    {id:"2", name: "Jane Smith", category: "Flutter" },
    {id:"3", name: "Sam Wilson", category: "Python" },
    {id:"4", name: "Chris Evans", category: "Mern" },
    {id:"5", name: "Natalie Portman", category: "Flutter" },
    {id:"6", name: "Robert Downey Jr.", category: "Python" },
  ];

  // Filter users based on selected category
  const filteredUsers = selectedCategory === 'All' 
    ? users 
    : users.filter(user => user.category === selectedCategory);

  const toggleUserList = () => {
    setShowUserList(!showUserList);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

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
      <div className="p-4 w-full h-full">
        <div className="d-flex w-full h-full  mb-10">
          {/* Filter Buttons */}
          <button 
            onClick={() => setSelectedCategory('All')} 
            className="w-20 h-10 bg-gray-600 text-white"
          >
            All
          </button>
          <button 
            onClick={() => setSelectedCategory('Mern')} 
            className="w-20 h-10 bg-gray-600 text-white"
          >
            Mern
          </button>
          <button 
            onClick={() => setSelectedCategory('Flutter')} 
            className="w-20 h-10 bg-gray-600 text-white"
          >
            Flutter
          </button>
          <button 
            onClick={() => setSelectedCategory('Python')} 
            className="w-20 h-10 bg-gray-600 text-white"
          >
            Python
          </button>
          
          {/* Theme toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="text-white hover:text-gray-300"
            >
              {isDark ? '🌞' : '🌙'}
            </button>
          </div>
        </div>


        {showUserList && (
          <div className=" mt-4 w-full h-full my-80 grid sm:grid-cols-4 lg:grid-cols-2xl:grid-cols-4 gap-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <div key={index} className="user-card text-center bg-indigo-300 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"> 
                <img src={profileImage} alt="Profile" className="rounded-full w-20 h-20 drop-shadow-2xl" />
                  <h2 className="text-lg">{user.id}</h2>
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-gray-500 text-black">{user.category}</p>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 w-full">
                No users found for this category.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;



