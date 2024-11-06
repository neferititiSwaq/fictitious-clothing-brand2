import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import logo from '../assets/logo.webp';
import tshirt from '../assets/tshirt.webp';
import jeans from '../assets/jeans.webp';
import sneakers from '../assets/sneakers.webp';

function Header({ isLoggedIn, userName, handleLogin }) {
  return (
    <header className="bg-gray-900 text-white flex items-center justify-between p-4 md:p-6 lg:p-8 sticky top-0 z-10">
      
      <div className="flex items-center">
        {/* Make the logo a clickable link to the homepage */}
        <Link to="/">
          <img src={logo} alt="Brand Logo" className="h-auto w-24 md:w-32 mr-2" />
        </Link>
        <Link to="/">
          <h1 className="text-xl hover:underline">Fictitious Clothing Brand</h1>
        </Link>
      </div>

      {/* Remove Product Preview Section */}
      {/* The section below is removed to prevent product images from displaying */}
      {/* 
      <div className="flex space-x-4">
        <Link to="/tshirt">
          <img src={tshirt} alt="T-shirt" className="h-10 w-10 md:h-12 md:w-12" />
        </Link>
        <Link to="/jeans">
          <img src={jeans} alt="Jeans" className="h-10 w-10 md:h-12 md:w-12" />
        </Link>
        <Link to="/sneakers">
          <img src={sneakers} alt="Sneakers" className="h-10 w-10 md:h-12 md:w-12" />
        </Link>
      </div>
      */}

      <div>
        {isLoggedIn ? (
          <p>Welcome, {userName}!</p>
        ) : (
          // Optionally link the "Sign In" button to a dedicated sign-in page
          <Link to="/signin">
            <button className="bg-blue-500 p-2 rounded" onClick={handleLogin}>
              Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
