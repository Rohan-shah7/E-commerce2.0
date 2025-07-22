import { MdShoppingCart, MdSearch } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/logo.png";

const NavBar = () => {
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
          <a href="#" className="hover:text-purple-600 font-medium">
            Contact
          </a>
          <MdSearch className="text-2xl cursor-pointer hover:text-purple-600" />
          <div className="relative">
            <MdShoppingCart className="text-2xl cursor-pointer hover:text-purple-600" />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          <MdSearch className="text-2xl cursor-pointer hover:text-purple-600" />
          <div className="relative">
            <MdShoppingCart className="text-2xl cursor-pointer hover:text-purple-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              3
            </span>
          </div>
          <HiMenu className="text-3xl cursor-pointer hover:text-purple-600" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
