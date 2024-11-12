// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Login() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="relative flex flex-col items-center justify-start h-full text-white z-10 pt-4">
        <Header /> {/* Include the Header component here */}
        
        <div className="p-8 rounded-md w-80 z-20 backdrop-blur-sm bg-transparent border border-gray-600 mt-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <form className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email:</label>
              <input type="email" className="w-full px-3 py-2 bg-transparent border border-gray-600 text-white rounded focus:outline-none" placeholder="Enter your email" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Password:</label>
              <input type="password" className="w-full px-3 py-2 bg-transparent border border-gray-600 text-white rounded focus:outline-none" placeholder="Enter your password" />
            </div>
            
            <button type="submit" className="w-full py-2 mt-4 bg-transparent border border-gray-600 hover:bg-gray-800 text-white rounded">Login</button>
          </form>
          
          <div className="flex justify-between mt-4 text-sm">
            <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
            <a href="/forgot-password" className="text-blue-400 hover:underline">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
