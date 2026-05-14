import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Package, Settings, LogOut, ChevronRight, ShoppingBag, MapPin, Mail } from 'lucide-react';
import { logout } from '../store/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('profile'); // profile, orders
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    if (location.hash === '#orders') {
      setActiveTab('orders');
    }
  }, [user, navigate, location]);

  useEffect(() => {
    if (activeTab === 'orders' && user) {
      fetchOrders();
    }
  }, [activeTab, user]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get('http://localhost:5000/api/orders/myorders', config);
      setOrders(data);
    } catch (error) {
      toast.error('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 w-full lg:w-72 flex flex-col gap-4">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-20 h-20 bg-red-50 dark:bg-red-950/20 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={40} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-bold transition-colors ${activeTab === 'profile' ? 'bg-red-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              >
                <User size={18} /> Profile Overview
              </button>
              <button 
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-bold transition-colors ${activeTab === 'orders' ? 'bg-red-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              >
                <Package size={18} /> My Orders
              </button>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-4 px-6 py-4 text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {activeTab === 'profile' ? (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
                >
                  <h3 className="text-2xl font-serif font-bold mb-8 text-gray-900 dark:text-white">Profile Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                        <div className="flex items-center gap-3 mt-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-gray-900 dark:text-white font-medium">
                          <User size={18} className="text-gray-400" /> {user.name}
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                        <div className="flex items-center gap-3 mt-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-gray-900 dark:text-white font-medium">
                          <Mail size={18} className="text-gray-400" /> {user.email}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Shipping Address</label>
                        <div className="flex items-center gap-3 mt-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-gray-400 dark:text-gray-500 font-medium italic">
                          <MapPin size={18} /> No address saved yet
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-10 px-8 py-4 bg-gray-900 dark:bg-black text-white rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-black dark:hover:bg-gray-950 transition-all">
                    Edit Profile
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
                >
                  <h3 className="text-2xl font-serif font-bold mb-8 text-gray-900 dark:text-white">Order History</h3>
                  
                  {loading ? (
                    <div className="flex justify-center py-20">
                      <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : orders.length > 0 ? (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order._id} className="border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all">
                          <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Order ID</p>
                              <p className="text-sm font-bold text-gray-900 dark:text-white">#{order._id.substring(0, 10).toUpperCase()}</p>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Placed On</p>
                              <p className="text-sm font-bold text-gray-900 dark:text-white">{new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total</p>
                              <p className="text-sm font-bold text-red-600">${order.totalPrice}</p>
                            </div>
                            <div className="flex items-center">
                              <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${order.isPaid ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                {order.isPaid ? 'Paid' : 'Payment Pending'}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2 overflow-x-auto pb-2">
                            {order.orderItems.map((item, idx) => (
                              <div key={idx} className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex-shrink-0 p-1">
                                <img src={item.image} alt="" className="w-full h-full object-contain" title={item.name} />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <ShoppingBag size={40} />
                      </div>
                      <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">No orders yet</p>
                      <button 
                        onClick={() => navigate('/shop')}
                        className="mt-6 text-red-600 font-bold text-sm hover:underline"
                      >
                        Start Shopping
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
