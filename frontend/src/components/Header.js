// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center z-20">
      <h1 className="text-2xl font-semibold text-white">Peer Lender</h1>
      <div className="space-x-2"> {/* Adjusted spacing between buttons */}
        <Link to="/">
          <button className="px-4 py-2 bg-transparent border border-gray-600 hover:bg-gray-800 text-white rounded">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 bg-transparent border border-gray-600 hover:bg-gray-800 text-white rounded">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
