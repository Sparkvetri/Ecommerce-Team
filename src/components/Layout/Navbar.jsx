import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Menu, 
  X, 
  LogOut, 
  UserCircle, 
  Settings, 
  ShoppingBag,
  ChevronDown,
  LayoutDashboard
} from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../Common/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.auth || { isAuthenticated: false, user: null });
  const isAdmin = user?.isAdmin;
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileOpen(false);
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/shop?keyword=${keyword}`);
    } else {
      navigate('/shop');
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Premium Gradient */}
          <Link to="/" className="flex items-center group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent font-serif tracking-tight"
            >
              Exclusive
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative py-2 text-sm font-bold tracking-widest uppercase transition-all duration-300
                  ${isActive ? 'text-red-600' : 'text-gray-500 hover:text-black'}
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 group focus-within:bg-white dark:focus-within:bg-gray-700 focus-within:ring-2 focus-within:ring-red-100 dark:focus-within:ring-red-900/30 transition-all">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-48 font-medium text-gray-900 dark:text-white"
              />
              <button type="submit">
                <Search size={18} className="text-gray-400 group-focus-within:text-red-500 transition-colors" />
              </button>
            </form>

            <div className="flex items-center gap-2 md:gap-4">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Wishlist Icon */}
              <Link to="/wishlist" className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors group">
                <Heart size={24} className="group-hover:scale-110 transition-transform" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900 tabular-nums">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Icon */}
              <Link to="/cart" className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors group">
                <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
                {cartQuantity > 0 && (
                  <span className="absolute top-1 right-1 bg-black dark:bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900 tabular-nums">
                    {cartQuantity}
                  </span>
                )}
              </Link>

              {/* Auth / Profile */}
              {isAuthenticated ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 p-1 rounded-full border-2 border-transparent hover:border-red-100 transition-all"
                  >
                    <div className="w-9 h-9 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                      <User size={20} />
                    </div>
                    <ChevronDown size={14} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden py-2"
                      >
                        <div className="px-4 py-3 border-b border-gray-50 dark:border-gray-800">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Account</p>
                          <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{user?.name || 'User'}</p>
                        </div>
                        {isAdmin && (
                          <button 
                            onClick={() => { navigate('/admin'); setIsProfileOpen(false); }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 bg-red-50/50 hover:bg-red-50 transition-colors font-bold"
                          >
                            <LayoutDashboard size={18} /> Admin Dashboard
                          </button>
                        )}
                        <button onClick={() => { navigate('/profile'); setIsProfileOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <UserCircle size={18} /> Manage My Account
                        </button>
                        <button onClick={() => { navigate('/profile#orders'); setIsProfileOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <ShoppingBag size={18} /> My Orders
                        </button>
                        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <Settings size={18} /> Settings
                        </button>
                        <div className="border-t border-gray-50 mt-2">
                          <button 
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <LogOut size={18} /> Logout
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  to="/login"
                  className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100 hidden sm:block"
                >
                  Login
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-gray-600 hover:text-red-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-red-600 bg-red-50 px-4 py-3 rounded-xl flex items-center gap-3"
                >
                  <LayoutDashboard size={20} /> Admin Dashboard
                </Link>
              )}
              {!isAuthenticated && (
                <Link 
                  to="/login" 
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-red-600 text-white py-4 rounded-xl text-center font-bold"
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;