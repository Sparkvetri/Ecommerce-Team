import React from 'react';
import { Heart, Eye, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Logic to handle star rendering
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
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={handleCardClick}
      className="group flex flex-col gap-2 sm:gap-3 relative w-full cursor-pointer"
    >
      {/* --- TOP IMAGE SECTION --- */}
      <div className="relative aspect-square bg-[#F5F5F5] rounded-md flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
        
        {/* Badges (Discount or New) */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
          {product.discount && (
            <span className="bg-[#DB4444] text-white text-[10px] sm:text-[12px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm font-medium">
              {product.discount}
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#00FF66] text-white text-[10px] sm:text-[12px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm font-medium">
              NEW
            </span>
          )}
        </div>
        
        {/* Quick Actions (Floating Icons) */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-col gap-1.5 sm:gap-2 z-10 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-1.5 sm:p-2 rounded-full hover:bg-[#DB4444] hover:text-white transition-all shadow-sm active:scale-95 sm:active:scale-100"
          >
            <Heart size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button 
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-1.5 sm:p-2 rounded-full hover:bg-[#DB4444] hover:text-white transition-all shadow-sm active:scale-95 sm:active:scale-100"
          >
            <Eye size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=500'; }} // Fallback image if unsplash link breaks
          className="object-cover w-full h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500 rounded-md" 
        />

        {/* Add to Cart - Slide Up Action / Mobile Touch */}
        <button 
          onClick={(e) => { e.stopPropagation(); /* Dispatch add to cart */ }}
          className="absolute bottom-0 w-full bg-black text-white py-2 sm:py-2.5 translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300 font-medium text-xs sm:text-sm active:bg-gray-800"
        >
          Add To Cart
        </button>
      </div>

      {/* --- BOTTOM DETAILS SECTION --- */}
      <div className="flex flex-col gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
        <h3 className="font-bold text-xs sm:text-base text-black truncate group-hover:text-[#DB4444] transition-colors line-clamp-2 sm:line-clamp-1">
          {product.name}
        </h3>
        
        <div className="flex gap-2 sm:gap-3 items-center flex-wrap">
          <span className="text-[#DB4444] font-semibold text-sm sm:text-base">${product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-xs sm:text-sm font-medium">
              ${product.oldPrice}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex gap-0.5">
            {renderStars(product.rating)}
          </div>
          <span className="text-gray-500 text-xs sm:text-sm font-semibold">
            ({product.reviews})
          </span>
        </div>

        {/* Color Variants (If exists) */}
        {product.colors && (
          <div className="flex gap-1.5 sm:gap-2 mt-1">
            {product.colors.map((color, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-[1.5px] cursor-pointer hover:scale-110 transition-transform ${index === 0 ? 'border-black' : 'border-transparent shadow-sm'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;