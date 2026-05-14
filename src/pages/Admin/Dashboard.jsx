import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { 
  Users, 
  Package, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  AlertCircle,
  Plus,
  Search,
  MoreVertical
} from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalProducts: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      
      const [ordersRes, usersRes, productsRes] = await Promise.all([
        axios.get('http://localhost:5000/api/orders', config),
        axios.get('http://localhost:5000/api/users', config),
        axios.get('http://localhost:5000/api/products')
      ]);

      const orders = ordersRes.data;
      const sales = orders.reduce((acc, order) => acc + (order.isPaid ? order.totalPrice : 0), 0);

      setStats({
        totalSales: sales.toFixed(2),
        totalOrders: orders.length,
        totalUsers: usersRes.data.length,
        totalProducts: productsRes.data.length
      });

      setRecentOrders(orders.slice(0, 5));
    } catch (error) {
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { label: 'Total Revenue', value: `$${stats.totalSales}`, icon: DollarSign, color: 'bg-emerald-500' },
    { label: 'Total Orders', value: stats.totalOrders, icon: ShoppingBag, color: 'bg-blue-500' },
    { label: 'Total Customers', value: stats.totalUsers, icon: Users, color: 'bg-purple-500' },
    { label: 'Products Live', value: stats.totalProducts, icon: Package, color: 'bg-orange-500' },
  ];

  if (loading) return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your business operations and insights</p>
        </div>
        <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-red-700 transition-all shadow-xl shadow-red-100 dark:shadow-none">
          <Plus size={18} /> Add New Product
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`${stat.color} p-3 rounded-2xl text-white shadow-lg`}>
                <stat.icon size={24} />
              </div>
              <TrendingUp size={16} className="text-emerald-500" />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white tabular-nums">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recent Orders */}
        <div className="lg:col-span-8 bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-8 border-b border-gray-50 dark:border-gray-800 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Orders</h3>
            <button className="text-sm font-bold text-red-600 hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Order ID</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Total</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {recentOrders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">
                      #{order._id.substring(0, 8).toUpperCase()}
                    </td>
                    <td className="px-8 py-6 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {order.user?.name || 'Guest'}
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-gray-900 dark:text-white">
                      ${order.totalPrice}
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${order.isPaid ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                        {order.isPaid ? 'Paid' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Notifications */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">System Health</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-emerald-600">
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                <span className="text-sm font-bold tracking-widest uppercase">Database Online</span>
              </div>
              <div className="flex items-center gap-4 text-emerald-600">
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                <span className="text-sm font-bold tracking-widest uppercase">API Server Healthy</span>
              </div>
              <div className="flex items-center gap-4 text-amber-500">
                <AlertCircle size={20} />
                <span className="text-sm font-bold tracking-widest uppercase">3 Low Stock Alerts</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-[2.5rem] shadow-2xl text-white">
            <h3 className="text-xl font-bold mb-2">Need Help?</h3>
            <p className="text-gray-400 text-sm mb-6">Access professional support for your store management.</p>
            <button className="w-full py-4 bg-white text-black rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-all">
              Contact Support
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;
