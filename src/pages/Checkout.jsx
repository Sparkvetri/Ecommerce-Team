import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Truck, ShieldCheck, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { clearCart } from '../store/cartSlice';

const Checkout = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState('billing'); // billing, payment, success
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      dispatch(clearCart());
    }, 2500);
  };

  if (items.length === 0 && step !== 'success') {
    navigate('/cart');
    return null;
  }

  return (
    <main className="bg-[#FBFBFB] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {step !== 'success' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* --- LEFT: FORMS --- */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step === 'billing' ? 'bg-red-600 text-white shadow-lg' : 'bg-emerald-500 text-white'}`}>
                  {step === 'billing' ? '1' : <CheckCircle2 size={20} />}
                </div>
                <div className="h-[2px] flex-1 bg-gray-200" />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step === 'payment' ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-200 text-gray-400'}`}>
                  2
                </div>
              </div>

              {step === 'billing' && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100"
                >
                  <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900">Billing Details</h2>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name*</label>
                      <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-red-100 outline-none" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name*</label>
                      <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-red-100 outline-none" required />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Street Address*</label>
                      <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-red-100 outline-none" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Town/City*</label>
                      <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-red-100 outline-none" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number*</label>
                      <input type="tel" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-red-100 outline-none" required />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address*</label>
                      <input type="email" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-red-100 outline-none" required />
                    </div>
                  </form>
                  <button 
                    onClick={() => setStep('payment')}
                    className="mt-10 w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-black transition-all"
                  >
                    Continue to Payment
                    <ArrowRight size={20} />
                  </button>
                </motion.div>
              )}

              {step === 'payment' && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100"
                >
                  <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900">Payment Method</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-6 border-2 border-red-600 bg-red-50/30 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <CreditCard className="text-red-600" />
                        <span className="font-bold text-gray-900">Credit or Debit Card</span>
                      </div>
                      <div className="flex gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="MC" />
                      </div>
                    </div>
                    
                    <div className="p-6 border-2 border-gray-100 rounded-2xl flex items-center gap-4 opacity-50 cursor-not-allowed">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                      <span className="font-bold text-gray-400">Cash on Delivery</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Card Number</label>
                      <input type="text" placeholder="**** **** **** ****" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">CVV</label>
                        <input type="text" placeholder="***" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium outline-none" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex gap-4">
                    <button 
                      onClick={() => setStep('billing')}
                      className="px-8 py-5 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase text-gray-400 hover:text-gray-900 transition-all"
                    >
                      Go Back
                    </button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isProcessing}
                      onClick={handlePlaceOrder}
                      className="flex-1 bg-red-600 text-white py-5 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 shadow-2xl shadow-red-200 hover:bg-red-700 transition-all disabled:bg-gray-400 disabled:shadow-none"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Confirm Payment of ${totalAmount}
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* --- RIGHT: ORDER RECAP --- */}
            <div className="lg:col-span-4">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 sticky top-32">
                <h3 className="text-2xl font-serif font-bold mb-8 text-gray-900">Your Order</h3>
                <div className="space-y-6 max-h-[300px] overflow-y-auto mb-8 pr-2 custom-scrollbar">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                        <img src={item.image} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900 truncate">{item.name}</p>
                        <p className="text-xs text-gray-400 font-bold tracking-widest">{item.quantity} x ${item.price}</p>
                      </div>
                      <span className="font-bold text-sm text-gray-900">${item.totalPrice}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100 mb-8">
                  <div className="flex justify-between text-sm font-bold text-gray-400 uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span className="text-gray-900">${totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-gray-400 uppercase tracking-widest">
                    <span>Shipping</span>
                    <span className="text-emerald-500">Free</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-4">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-bold text-red-600 tracking-tight">${totalAmount}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-emerald-600">
                    <ShieldCheck size={20} />
                    <span className="text-xs font-bold tracking-widest uppercase">SSL Encrypted Payment</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-600">
                    <Truck size={20} />
                    <span className="text-xs font-bold tracking-widest uppercase">Insured Free Shipping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-2xl mx-auto bg-white p-16 rounded-[3rem] shadow-2xl border border-gray-100 text-center"
          >
            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-500">
              <CheckCircle2 size={56} />
            </div>
            <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Order Placed Successfully!</h2>
            <p className="text-gray-500 mb-12 text-lg">
              Your luxury items are being prepared for delivery. You'll receive a confirmation email shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/shop')}
                className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all"
              >
                Continue Shopping
              </button>
              <button 
                onClick={() => navigate('/')}
                className="bg-white text-gray-900 border-2 border-gray-100 px-10 py-4 rounded-full font-bold hover:border-red-600 hover:text-red-600 transition-all"
              >
                Go to Homepage
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Checkout;
