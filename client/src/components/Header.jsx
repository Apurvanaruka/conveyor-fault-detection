import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex items-center justify-between">
        <div>
          <Link to="/" className="text-xl font-bold">Home</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
