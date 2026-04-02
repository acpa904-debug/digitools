
import { useState } from "react";

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-[#7B2FF7] font-bold text-xl">Digi</span>
          <span className="text-gray-800 font-bold text-xl">Tools</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600 font-medium">
          <a href="#" className="hover:text-[#7B2FF7] transition-colors">Home</a>
          <a href="#products" className="hover:text-[#7B2FF7] transition-colors">Products</a>
          <a href="#steps" className="hover:text-[#7B2FF7] transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-[#7B2FF7] transition-colors">Pricing</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#7B2FF7] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login Button */}
          <button className="hidden md:block bg-[#7B2FF7] text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#6822e0] transition-colors">
            Login
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3 text-sm text-gray-600">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#steps" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <button className="bg-[#7B2FF7] text-white px-4 py-2 rounded-lg font-medium w-fit">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;