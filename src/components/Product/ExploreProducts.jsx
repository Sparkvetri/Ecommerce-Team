import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExploreProducts = () => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const products = allProducts.slice(15, 35); // Show a good variety
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
    <section className="w-full py-12 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-10 bg-red-600 rounded-sm shadow-lg shadow-red-200"></div>
            <span className="text-red-600 font-bold text-sm tracking-[0.2em] uppercase">Our Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-serif">Explore Our Products</h2>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-gray-800 hover:bg-red-600 hover:text-white transition-all"
          >
            <ArrowLeft size={20} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-gray-800 hover:bg-red-600 hover:text-white transition-all"
          >
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </div>

      {/* Horizontal Slider */}
      <div 
        ref={scrollRef}
        className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-10 no-scrollbar scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map(item => (
          <div key={item.id} className="min-w-[75%] sm:min-w-[45%] md:min-w-[31%] lg:min-w-[calc(25%-18px)] snap-start">
            <ProductCard product={item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/shop')}
          className="bg-red-600 text-white px-14 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-2xl shadow-red-100 tracking-widest text-sm uppercase"
        >
          Explore All Products
        </motion.button>
      </div>
    </section>
  );
};

export default ExploreProducts;