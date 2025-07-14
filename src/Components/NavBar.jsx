import React from "react";
import { MdShoppingCart, MdSearch } from "react-icons/md";
import logo from "../assets/logo.png"; 

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg py-4 px-6 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between space-x-6">
        
        {/* Logo + Text */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <div className="text-3xl font-bold text-yellow-300">Ecommerce</div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full overflow-hidden px-3 py-1 text-gray-700 w-64 shadow-inner">
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none w-full bg-transparent px-2 py-1"
          />
          <MdSearch className="text-xl text-gray-500" />
        </div>

        {/* Cart Icon */}
        <a href="#" className="flex items-center gap-1 hover:text-yellow-300 transition text-lg font-medium">
          <MdShoppingCart className="text-2xl" />
          Cart
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-lg font-medium">
          <a href="#" className="hover:text-yellow-300 transition">Home</a>
          <a href="#" className="hover:text-yellow-300 transition">About Us</a>
          <a href="#" className="hover:text-yellow-300 transition">Login</a>
          <a href="#" className="hover:text-yellow-300 transition">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
