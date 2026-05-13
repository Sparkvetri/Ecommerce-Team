import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { removeFromWishlist } from '../store/wishlistSlice';
import { addToCart } from '../store/cartSlice';
import ProductCard from '../components/Product/ProductCard';

const Wishlist = () => {
  const { items } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMoveToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishlist(product.id));
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl inline-block border border-gray-100"
        >
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8 text-red-500">
            <Heart size={48} />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">Wishlist is Empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Save your favorite items to your wishlist and we'll keep them here for you.
          </p>
          <button 
            onClick={() => navigate('/shop')} 
            className="bg-red-600 text-white px-10 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100"
          >
            Start Exploring
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">Wishlist</h1>
            <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">
              {items.length} SAVED ITEMS
            </p>
          </div>
          
          <button 
            onClick={() => {
              items.forEach(item => dispatch(addToCart(item)));
              // We could clear wishlist here if we wanted
            }}
            className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all active:scale-95"
          >
            Move All To Bag
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {items.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative group"
              >
                <button 
                  onClick={() => dispatch(removeFromWishlist(product.id))}
                  className="absolute top-4 right-4 z-30 bg-white/80 backdrop-blur-md p-2 rounded-full text-gray-400 hover:text-red-600 shadow-md transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                >
                  <Trash2 size={18} />
                </button>
                
                <ProductCard product={product} />
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMoveToCart(product)}
                  className="w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-600 transition-colors shadow-lg"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
