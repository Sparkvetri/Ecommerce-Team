import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
  ShoppingBag, 
  Truck, 
  CheckCircle2, 
  Clock, 
  Eye, 
  Loader2,
  DollarSign
} from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const OrderList = () => {
  const { user } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const { data } = await axios.get('http://localhost:5000/api/orders', config);
      setOrders(data);
    } catch (error) {
      toast.error('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const deliverHandler = async (id) => {
    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      await axios.put(`http://localhost:5000/api/orders/${id}/deliver`, {}, config);
      toast.success('Order marked as delivered');
      fetchOrders();
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">Orders Overview</h1>
        <p className="text-gray-500 dark:text-gray-400">Track shipments and update delivery status</p>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-red-600" size={40} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Order ID</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Total</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Paid</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Delivered</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                <AnimatePresence>
                  {orders.map((order) => (
                    <motion.tr 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={order._id} 
                      className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group"
                    >
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
                        {order.isPaid ? (
                          <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-widest">
                            <CheckCircle2 size={14} /> Paid
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] uppercase tracking-widest">
                            <Clock size={14} /> Pending
                          </div>
                        )}
                      </td>
                      <td className="px-8 py-6">
                        {order.isDelivered ? (
                          <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-widest">
                            <Truck size={14} /> Delivered
                          </div>
                        ) : (
                          <button 
                            onClick={() => deliverHandler(order._id)}
                            className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
                          >
                            Mark Delivered
                          </button>
                        )}
                      </td>
                      <td className="px-8 py-6">
                        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100">
                          <Eye size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
