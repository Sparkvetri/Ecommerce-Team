import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingBag, 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  TrendingUp,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const allProducts = useSelector((state) => state.products.allProducts);
  
  // Mock Stats
  const stats = [
    { label: 'Total Revenue', value: '$128,430', icon: <DollarSign className="text-green-600" />, trend: '+12.5%' },
    { label: 'Active Users', value: '1,240', icon: <Users className="text-blue-600" />, trend: '+3.2%' },
    { label: 'Total Products', value: allProducts.length, icon: <Package className="text-purple-600" />, trend: '+5' },
    { label: 'Pending Orders', value: '42', icon: <ShoppingBag className="text-orange-600" />, trend: '-2' },
  ];

  const SidebarItem = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 ${
        activeTab === id 
          ? 'bg-red-50 text-red-600 border-r-4 border-red-600' 
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      {React.cloneElement(icon, { size: 20 })}
      <span className="font-semibold text-sm tracking-wide">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 shadow-xl z-20">
        <div className="p-8 border-b border-gray-50">
          <h1 className="text-xl font-bold tracking-tighter text-gray-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white">A</div>
            Admin Central
          </h1>
        </div>
        <nav className="py-6">
          <SidebarItem id="overview" label="Dashboard" icon={<LayoutDashboard />} />
          <SidebarItem id="products" label="Products" icon={<Package />} />
          <SidebarItem id="users" label="Users" icon={<Users />} />
          <SidebarItem id="orders" label="Orders" icon={<ShoppingBag />} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Header */}
        <header className="bg-white h-20 border-b border-gray-100 flex items-center justify-between px-10">
          <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 w-96">
            <Search size={18} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">Admin User</p>
              <p className="text-xs text-gray-400">Master Account</p>
            </div>
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-10 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-10"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard Overview</h2>
                  <button className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-red-700 transition-all flex items-center gap-2">
                    <TrendingUp size={18} />
                    Download Report
                  </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                          {stat.icon}
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                        }`}>
                          {stat.trend}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                    </div>
                  ))}
                </div>

                {/* Recent Activity Mockup */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">Recent Transactions</h3>
                    <button className="text-red-600 text-sm font-bold hover:underline">View All</button>
                  </div>
                  <div className="p-0">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="p-6 flex items-center justify-between border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg" />
                          <div>
                            <p className="font-bold text-gray-900 text-sm">Order #8294{item}</p>
                            <p className="text-xs text-gray-400">by john.doe@example.com</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900 text-sm">$420.00</p>
                          <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Completed</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'products' && (
              <motion.div
                key="products"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Product Management</h2>
                  <button className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-red-700 transition-all flex items-center gap-2">
                    <Plus size={18} />
                    Add Product
                  </button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50/50 text-gray-400 uppercase text-[10px] font-bold tracking-[0.2em]">
                      <tr>
                        <th className="px-6 py-4">Product</th>
                        <th className="px-6 py-4">Category</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Stock</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {allProducts.slice(0, 8).map((product) => (
                        <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img src={product.image} className="w-10 h-10 rounded-lg object-cover" alt="" />
                              <span className="font-bold text-gray-900 text-sm truncate max-w-[200px]">{product.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2.5 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500">{product.category}</span>
                          </td>
                          <td className="px-6 py-4 font-bold text-sm text-gray-900">${product.price}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-green-600">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                              <span className="text-xs font-bold">In Stock</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right space-x-2">
                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                              <Edit size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-4 border-t border-gray-50 flex justify-center">
                    <button className="text-sm font-bold text-gray-400 hover:text-red-600 transition-colors">Show More Products...</button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'users' && (
              <motion.div
                key="users"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">User Management</h2>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50/50 text-gray-400 uppercase text-[10px] font-bold tracking-[0.2em]">
                      <tr>
                        <th className="px-6 py-4">User</th>
                        <th className="px-6 py-4">Role</th>
                        <th className="px-6 py-4">Join Date</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {['Admin User', 'John Doe', 'Sarah Smith'].map((user, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                                {user[0]}
                              </div>
                              <div>
                                <p className="font-bold text-gray-900 text-sm">{user}</p>
                                <p className="text-xs text-gray-400">{user.toLowerCase().replace(' ', '.')}@example.com</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              user.includes('Admin') ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                            }`}>
                              {user.includes('Admin') ? 'ADMIN' : 'CUSTOMER'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs font-medium text-gray-500">May 12, 2026</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-gray-400 hover:text-red-600 transition-colors">
                              <AlertCircle size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
