import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingBag, 
  Settings,
  ChevronLeft
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdminLayout = () => {
  const sidebarLinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Orders', path: '/admin/orders', icon: ShoppingBag },
    { name: 'Users', path: '/admin/users', icon: Users },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFB] dark:bg-gray-950 flex">
      
      {/* Admin Sidebar */}
      <aside className="w-72 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-red-100 dark:shadow-none group-hover:rotate-12 transition-transform">
              <ChevronLeft size={24} />
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight dark:text-white">Admin</span>
          </Link>
        </div>

        <nav className="flex-1 px-6 space-y-2">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/admin'}
              className={({ isActive }) => `
                flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all
                ${isActive 
                  ? 'bg-red-600 text-white shadow-xl shadow-red-100 dark:shadow-none' 
                  : 'text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'}
              `}
            >
              <link.icon size={20} />
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Logged in as</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white truncate">Administrator</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;
