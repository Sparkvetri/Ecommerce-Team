import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowLeft, Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { addToCart } from '../store/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';
import axios from 'axios';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const wishlistItems = useSelector((state) => state.wishlist.items);
  
  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(data);
    } catch (error) {
      toast.error('Product not found');
    } finally {
      setLoading(false);
    }
  };

  const isFavorite = wishlistItems.some(item => (item._id || item.id) === product?._id);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success('Added to cart');
  };

  const toggleWishlist = () => {
    if (isFavorite) {
      dispatch(removeFromWishlist(product._id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-[70vh] bg-white dark:bg-gray-950">
      <Loader2 size={48} className="animate-spin text-red-600" />
    </div>
  );

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center bg-white dark:bg-gray-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-900 p-12 rounded-3xl shadow-xl inline-block"
        >
          <h2 className="text-3xl font-serif font-bold mb-6 dark:text-white">Product Not Found</h2>
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

  return (
    <main className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
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
                    activeImage === idx ? 'border-red-600 bg-red-50 dark:bg-red-950/20' : 'border-gray-100 dark:border-gray-800 bg-[#F8F8F8] dark:bg-gray-900 hover:border-red-200'
                  }`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-contain mix-blend-normal" />
                </button>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 bg-[#F8F8F8] dark:bg-gray-900 rounded-[2.5rem] p-12 md:p-20 flex items-center justify-center order-1 md:order-2 relative overflow-hidden group shadow-inner"
            >
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto max-h-[600px] object-contain mix-blend-normal drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
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
                <span className="bg-red-50 dark:bg-red-950/30 text-red-600 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-red-100 dark:border-red-900/30">
                  Exclusive Deal
                </span>
                <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} />
                  Verified Product
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 dark:text-white leading-tight mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
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
                <div className="h-6 w-[1.5px] bg-gray-100 dark:bg-gray-800" />
                <span className="text-emerald-500 font-bold text-sm tracking-wider">IN STOCK</span>
              </div>

              <div className="flex items-baseline gap-4 mb-10">
                <span className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-2xl text-gray-300 dark:text-gray-600 line-through font-medium">${product.oldPrice}</span>
                )}
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10 font-medium">
                {product.description || `Elevate your style with the ${product.name}. A masterpiece of modern design and unparalleled performance, crafted for those who demand the absolute best in every detail.`}
              </p>

              {/* Interaction Controls */}
              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-8">
                  <div className="flex items-center border-2 border-gray-100 dark:border-gray-800 rounded-full p-1 bg-gray-50/50 dark:bg-gray-800/50">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all text-xl font-bold dark:text-white"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-lg tabular-nums dark:text-white">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all text-xl font-bold text-red-600"
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
                        : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 text-gray-400 hover:border-red-600 hover:text-red-600'
                    }`}
                  >
                    <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
                  </motion.button>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 shadow-2xl shadow-red-200 dark:shadow-none hover:bg-red-700 transition-all"
                >
                  <ShoppingBag size={20} />
                  Add To Luxury Cart
                </motion.button>
              </div>

              {/* Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-red-50 dark:group-hover:bg-red-950/20 transition-colors">
                    <Truck size={24} className="text-gray-400 group-hover:text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">Free Delivery</h4>
                    <p className="text-xs text-gray-400 font-medium">Orders over $500</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-red-50 dark:group-hover:bg-red-950/20 transition-colors">
                    <RotateCcw size={24} className="text-gray-400 group-hover:text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">Return Policy</h4>
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
