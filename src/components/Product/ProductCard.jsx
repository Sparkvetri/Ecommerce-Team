import React from 'react';
import { Heart, Eye, Star, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../store/wishlistSlice';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const productId = product._id || product.id;
  const isFavorite = wishlistItems.some(item => (item._id || item.id) === productId);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        fill={i < rating ? "#FFAD33" : "none"} 
        color={i < rating ? "#FFAD33" : "#D1D5DB"} 
        strokeWidth={i < rating ? 0 : 2} 
        className="sm:w-4 sm:h-4"
      />
    ));
  };

  const handleCardClick = () => {
    navigate(`/product/${productId}`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={handleCardClick}
      className="group relative flex flex-col gap-4 bg-white dark:bg-gray-900 p-2 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] cursor-pointer border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
    >
      {/* --- TOP IMAGE SECTION --- */}
      <div className="relative aspect-[4/5] bg-[#F8F8F8] dark:bg-gray-800 rounded-xl flex items-center justify-center p-6 overflow-hidden">
        
        {/* Badges - Glassmorphism */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {product.discount && (
            <span className="backdrop-blur-md bg-red-600/90 text-white text-[10px] sm:text-[11px] px-3 py-1 rounded-full font-bold tracking-wider shadow-lg">
              {product.discount}
            </span>
          )}
          {product.isNewItem && (
            <span className="backdrop-blur-md bg-emerald-500/90 text-white text-[10px] sm:text-[11px] px-3 py-1 rounded-full font-bold tracking-wider shadow-lg">
              NEW
            </span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWishlist}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xl border border-gray-100 dark:border-gray-700 ${
              isFavorite ? 'bg-red-600 text-white border-red-600' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-red-600 hover:text-white'
            }`}
          >
            <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); navigate(`/product/${productId}`); }}
            className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-red-600 hover:text-white transition-colors shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <Eye size={18} />
          </motion.button>
        </div>

        {/* Product Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.img 
            src={product.image} 
            alt={product.name} 
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=500'; }}
            className="object-contain w-full h-full mix-blend-normal dark:mix-blend-normal group-hover:scale-110 transition-transform duration-700" 
          />
          
          {/* Decorative Shadow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-black/5 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
        </div>

        {/* Add to Cart Overlay */}
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="absolute inset-x-0 bottom-0 bg-black/90 backdrop-blur-md text-white py-4 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center gap-3 font-bold text-xs uppercase tracking-[0.2em]"
        >
          <ShoppingBag size={16} />
          Add To Cart
        </motion.button>
      </div>

      {/* --- BOTTOM DETAILS SECTION --- */}
      <div className="px-3 pb-4 flex flex-col gap-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-red-600 transition-colors duration-300 leading-snug truncate">
            {product.name}
          </h3>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 dark:text-gray-500 line-through text-sm font-medium">
              ${product.oldPrice}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-1">
          <div className="flex gap-0.5">
            {renderStars(product.rating)}
          </div>
          <span className="text-gray-400 text-xs font-bold tracking-wider">
            ({product.reviews})
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;