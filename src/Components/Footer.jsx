import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand & Tagline */}
        <div>
          <h1 className="text-3xl font-bold text-yellow-300">ShopEase</h1>
          <p className="mt-2 text-gray-200">
            Your trusted destination for smart shopping and amazing deals.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-yellow-200">Quick Links</h2>
          <ul className="space-y-2 text-gray-100">
            <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Login</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Sign Up</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Cart</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-yellow-200">Contact</h2>
          <p>Email: support@Ecommerce.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Commerce Jhapa Nepal</p>
        </div>
      </div>

      <hr className="my-6 border-indigo-400" />

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
