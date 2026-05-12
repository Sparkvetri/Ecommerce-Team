import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Top Header - Hidden on very small screens, responsive on mobile */}
      <div className="hidden sm:flex bg-black text-white h-10 sm:h-12 items-center justify-center relative text-xs sm:text-sm px-2">
        <p className="font-light text-center truncate sm:truncate">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>

        <button className="ml-1 sm:ml-2 font-semibold underline text-xs sm:text-sm whitespace-nowrap">
          ShopNow
        </button>

        <div className="hidden lg:flex absolute right-4 sm:right-20 items-center gap-1 cursor-pointer">
          <span>English</span>
          <span className="text-xs">▼</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-gray-300 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 py-3 sm:h-20 sm:py-0">
          
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide whitespace-nowrap">
            Shopzy
          </h1>

          {/* Nav Links - Hidden on mobile */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-xs sm:text-sm font-medium">
            <li className="cursor-pointer border-b-2 border-black pb-1 hover:text-gray-600 transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition">
              Contact
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition">
              About
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition">
              Sign Up
            </li>
          </ul>

          {/* Search + Icons */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 ml-auto">
            
            {/* Search Box - Full on lg, icon on mobile */}
            <div className="hidden lg:flex items-center bg-gray-100 px-3 sm:px-4 py-2 rounded-md w-48 lg:w-72">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-xs sm:text-sm flex-1"
              />
              <button className="text-gray-600 text-lg">
                🔍
              </button>
            </div>

            {/* Search Icon - Mobile */}
            <button className="lg:hidden text-lg sm:text-xl hover:text-gray-600 transition">
              🔍
            </button>

            {/* Wishlist */}
            <button className="text-lg sm:text-2xl hover:text-gray-600 transition">
              ♡
            </button>

            {/* Cart */}
            <button className="text-lg sm:text-2xl hover:text-gray-600 transition">
              🛒
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden ml-2 p-1 hover:bg-gray-100 rounded transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-300 bg-white">
            <ul className="flex flex-col gap-0 text-sm font-medium py-2">
              <li className="cursor-pointer border-l-2 border-black pl-4 py-2 px-3 hover:bg-gray-100 transition">
                Home
              </li>
              <li className="cursor-pointer pl-4 py-2 px-3 hover:bg-gray-100 transition">
                Contact
              </li>
              <li className="cursor-pointer pl-4 py-2 px-3 hover:bg-gray-100 transition">
                About
              </li>
              <li className="cursor-pointer pl-4 py-2 px-3 hover:bg-gray-100 transition">
                Sign Up
              </li>
            </ul>

            {/* Mobile Search */}
            <div className="border-t border-gray-300 p-3">
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm flex-1"
                />
                <button className="text-gray-600 text-lg">
                  🔍
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}