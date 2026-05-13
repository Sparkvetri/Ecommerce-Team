import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowLeft, Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { addToCart } from '../store/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const allProducts = useSelector((state) => state.products.allProducts);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const product = allProducts.find(p => p.id === parseInt(id));

  const isFavorite = wishlistItems.some(item => item.id === product?.id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl inline-block"
        >
          <h2 className="text-3xl font-serif font-bold mb-6">Product Not Found</h2>
          <button 
            onClick={() => navigate('/shop')} 
            className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg"
          >
            Explore Collection
          </button>
        </motion.div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    // Optional: Add a toast notification here
  };

  const toggleWishlist = () => {
    if (isFavorite) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Navigation Breadcrumb */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-red-600 mb-12 transition-all font-bold tracking-widest uppercase text-xs"
        >
          <ArrowLeft size={16} />
          Back to Collection
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- LEFT: IMAGE GALLERY --- */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
            <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible">
              {[product.image, product.image, product.image].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-4 flex-shrink-0 transition-all duration-300 border-2 ${
                    activeImage === idx ? 'border-red-600 bg-red-50' : 'border-gray-100 bg-[#F8F8F8] hover:border-red-200'
                  }`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 bg-[#F8F8F8] rounded-[2.5rem] p-12 md:p-20 flex items-center justify-center order-1 md:order-2 relative overflow-hidden group shadow-inner"
            >
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto max-h-[600px] object-contain mix-blend-multiply drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-red-100">
                  Exclusive Deal
                </span>
                <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} />
                  Verified Product
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      fill={i < product.rating ? "#FFAD33" : "none"} 
                      color={i < product.rating ? "#FFAD33" : "#D1D5DB"} 
                      strokeWidth={i < product.rating ? 0 : 2}
                    />
                  ))}
                  <span className="text-gray-400 font-bold ml-2 text-sm">({product.reviews} REVIEWS)</span>
                </div>
                <div className="h-6 w-[1.5px] bg-gray-100" />
                <span className="text-emerald-500 font-bold text-sm tracking-wider">IN STOCK</span>
              </div>

              <div className="flex items-baseline gap-4 mb-10">
                <span className="text-4xl font-bold text-gray-900 tracking-tight">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-2xl text-gray-300 line-through font-medium">${product.oldPrice}</span>
                )}
              </div>

              <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                Elevate your style with the {product.name}. A masterpiece of modern design and unparalleled performance, 
                crafted for those who demand the absolute best in every detail.
              </p>

              {/* Interaction Controls */}
              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-8">
                  <div className="flex items-center border-2 border-gray-100 rounded-full p-1 bg-gray-50/50">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:shadow-md transition-all text-xl font-bold"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-lg tabular-nums">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:shadow-md transition-all text-xl font-bold text-red-600"
                    >
                      +
                    </button>
                  </div>
                  
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleWishlist}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all border-2 ${
                      isFavorite 
                        ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-200' 
                        : 'bg-white border-gray-100 text-gray-400 hover:border-red-600 hover:text-red-600'
                    }`}
                  >
                    <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
                  </motion.button>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 shadow-2xl shadow-red-200 hover:bg-red-700 transition-all"
                >
                  <ShoppingBag size={20} />
                  Add To Luxury Cart
                </motion.button>
              </div>

              {/* Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-gray-100">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                    <Truck size={24} className="text-gray-400 group-hover:text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Free Delivery</h4>
                    <p className="text-xs text-gray-400 font-medium">Orders over $500</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                    <RotateCcw size={24} className="text-gray-400 group-hover:text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Return Policy</h4>
                    <p className="text-xs text-gray-400 font-medium">30 days easy return</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
