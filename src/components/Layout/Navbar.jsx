import { useState } from 'react';
import { Menu, X, Search, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../store/productSliceApi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  const handleSearch = (e) => {
    dispatch(searchProducts(e.target.value));
    if(e.target.value.trim() !== '') {
       navigate('/shop');
    }
  };

  return (
    <>
      {/* Top Header - Hidden on very small screens, responsive on mobile */}
      <div className="hidden sm:flex bg-black text-white h-10 sm:h-12 items-center justify-center relative text-xs sm:text-sm px-2">
        <div className="flex items-center justify-center gap-2 sm:gap-3 max-w-7xl w-full mx-auto px-2">
          <p className="font-light text-center truncate">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="font-semibold underline text-xs sm:text-sm whitespace-nowrap hover:text-gray-300 transition-colors">
            Shop Now
          </button>
        </div>

        <div className="hidden lg:flex absolute right-4 sm:right-20 items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
          <span>English</span>
          <ChevronDown size={14} />
        </div>
      </div>

      {/* Main Navbar */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:h-20 sm:py-0">
          
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink 
              to="/" 
              className="text-2xl sm:text-3xl font-bold tracking-wider whitespace-nowrap flex-shrink-0 font-serif bg-gradient-to-r from-red-600 to-rose-400 bg-clip-text text-transparent"
            >
              Shopzy
            </NavLink>
          </motion.div>

          {/* Center Nav on desktop */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-8 lg:gap-12 text-sm font-medium">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative py-2 transition-colors hover:text-red-600 ${
                        isActive ? 'text-red-600' : 'text-gray-800'
                      } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Search + Icons */}
          <div className="flex items-center gap-4 lg:gap-6 text-gray-800">
            
            {/* Search Box - Full on lg, icon on mobile */}
            <div className="hidden lg:flex items-center bg-gray-100 px-4 py-2 rounded-full w-48 lg:w-72 focus-within:ring-2 focus-within:ring-red-200 focus-within:bg-white transition-all shadow-inner">
              <input
                type="text"
                placeholder="What are you looking for?"
                onChange={handleSearch}
                className="bg-transparent outline-none text-sm flex-1 placeholder-gray-500"
              />
              <motion.button whileHover={{ scale: 1.1 }} className="text-gray-500 hover:text-red-600 transition-colors" aria-label="Search">
                <Search size={18} />
              </motion.button>
            </div>

            {/* Search Icon - Mobile */}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="lg:hidden hover:text-red-600 transition-colors" aria-label="Search" onClick={() => setMobileMenuOpen(true)}>
              <Search size={20} />
            </motion.button>

            {/* Wishlist */}
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hover:text-red-600 transition-colors relative" aria-label="Wishlist">
              <Heart size={22} />
            </motion.button>

            {/* Cart */}
            <NavLink to="/cart">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hover:text-red-600 transition-colors relative" aria-label="Cart">
                <ShoppingCart size={22} />
              </motion.div>
            </NavLink>

            {/* Mobile Menu Button */}
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden ml-1 p-1 hover:bg-red-50 text-gray-800 hover:text-red-600 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-gray-200 bg-white overflow-hidden"
            >
              <ul className="flex flex-col text-sm font-medium py-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block pl-6 py-3 pr-4 hover:bg-red-50 hover:text-red-600 transition-colors ${
                          isActive ? 'border-l-4 border-red-600 bg-red-50 text-red-600' : 'border-l-4 border-transparent text-gray-700'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Mobile Search */}
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-100 transition-all">
                  <input
                    type="text"
                    placeholder="Search products..."
                    onChange={handleSearch}
                    className="bg-transparent outline-none text-sm flex-1"
                  />
                  <button className="text-gray-500 hover:text-red-600" aria-label="Search">
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}