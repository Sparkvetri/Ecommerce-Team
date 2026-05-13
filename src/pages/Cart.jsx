import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowRight, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl inline-block border border-gray-100"
        >
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8 text-red-500">
            <ShoppingBag size={48} />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">Your Luxury Cart is Empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Discover our exclusive collection and start your premium shopping experience today.
          </p>
          <button 
            onClick={() => navigate('/shop')} 
            className="bg-red-600 text-white px-10 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100"
          >
            Start Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="bg-[#FBFBFB] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-12">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT: ITEMS LIST --- */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-8 group hover:shadow-md transition-all duration-300"
                >
                  <div className="w-32 h-32 bg-[#F8F8F8] rounded-2xl flex items-center justify-center p-4 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  
                  <div className="flex-1 flex flex-col sm:flex-row justify-between w-full gap-6">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-red-600 transition-colors">{item.name}</h3>
                      <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">Premium Product</p>
                      <span className="text-lg font-bold text-gray-900 mt-2">${item.price}</span>
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="flex items-center border-2 border-gray-50 rounded-full p-1 bg-gray-50">
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center font-bold tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all text-red-600"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <span className="font-bold text-lg text-gray-900 tabular-nums">${item.totalPrice}</span>
                        <button 
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-gray-300 hover:text-red-500 transition-colors p-2"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              <Link to="/shop" className="border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* --- RIGHT: SUMMARY --- */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 sticky top-32"
            >
              <h2 className="text-2xl font-serif font-bold mb-8 text-gray-900">Order Summary</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-bold">${totalAmount}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Shipping</span>
                  <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs">Free</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium pb-6 border-b border-gray-100">
                  <span>Estimated Tax</span>
                  <span className="text-gray-900 font-bold">$0.00</span>
                </div>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-bold text-red-600 tabular-nums">${totalAmount}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-4 border border-gray-100">
                  <input 
                    type="text" 
                    placeholder="Coupon Code" 
                    className="bg-transparent border-none outline-none flex-1 text-sm font-bold uppercase tracking-widest"
                  />
                  <button className="text-red-600 font-bold text-xs uppercase tracking-widest hover:text-red-700">Apply</button>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 shadow-2xl shadow-red-200 hover:bg-red-700 transition-all"
                >
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
