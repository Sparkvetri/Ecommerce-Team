import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function BestSellingProducts() {
  const allProducts = useSelector((state) => state.products.allProducts);
  const products = allProducts.slice(4, 14); // Show more best sellers
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-12 md:py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto dark:bg-gray-950">
      {/* Heading Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-10 bg-red-600 rounded-sm shadow-sm shadow-red-200"></div>
            <span className="text-red-600 font-bold text-sm tracking-widest uppercase">This Month</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">Best Selling Products</h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:bg-red-600 hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:bg-red-600 hover:text-white transition-all"
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/shop')}
            className="hidden md:block bg-red-600 text-white px-10 py-3.5 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100 dark:shadow-none text-sm tracking-wide"
          >
            View All
          </motion.button>
        </div>
      </div>

      {/* Horizontal Slider */}
      <div 
        ref={scrollRef}
        className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product._id || product.id} className="min-w-[75%] sm:min-w-[45%] md:min-w-[31%] lg:min-w-[calc(25%-18px)] snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}