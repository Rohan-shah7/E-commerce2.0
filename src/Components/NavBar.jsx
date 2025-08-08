import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdShoppingCart, MdSearch } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  // Update cart count when component mounts and when localStorage changes
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalCount);
    };

    updateCartCount();
    
    // Listen for storage changes (when cart is updated from other components)
    window.addEventListener('storage', updateCartCount);
    
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <nav className="bg-gradient-to-r from-purple-300 to-purple-100 shadow-lg text-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          <span className="text-2xl font-bold">Ecommerce</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-purple-600 font-medium">
            Home
          </a>
          <a href="#" className="hover:text-purple-600 font-medium">
            About
          </a>

          <MdSearch className="text-2xl cursor-pointer hover:text-purple-600" />

          <div className="relative" onClick={handleCartClick}>
            <MdShoppingCart className="text-2xl cursor-pointer hover:text-purple-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>

          <button
            onClick={handleLoginClick}
            className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700 transition"
            type="button"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          <MdSearch className="text-2xl cursor-pointer hover:text-purple-600" />

          <div className="relative" onClick={handleCartClick}>
            <MdShoppingCart className="text-2xl cursor-pointer hover:text-purple-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>

          <button
            onClick={handleLoginClick}
            className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition text-sm"
            type="button"
          >
            Login
          </button>

          <HiMenu className="text-3xl cursor-pointer hover:text-purple-600" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
