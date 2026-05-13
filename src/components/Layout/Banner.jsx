import React, { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../store/productSliceApi";

const categories = [
  "Electronics",
  "Computers",
  "Accessories",
  "SmartWatch",
  "Gaming",
  "Camera",
  "Woman’s Fashion",
  "Men’s Fashion",
  "Home & Lifestyle",
];

const banners = [
  {
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-[#1a1a1a] to-[#333333]"
  },
  {
    title: "Latest MacBook Pro",
    subtitle: "Apple M2 Max Chip",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-[#0f172a] to-[#334155]"
  },
  {
    title: "Premium Audio",
    subtitle: "Noise Cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-[#1e1b4b] to-[#4338ca]"
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (category) => {
    dispatch(filterByCategory(category));
    navigate("/shop");
  };

  return (
    <div className="bg-white dark:bg-gray-950 px-4 md:px-8 lg:px-12 py-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar - Interactive */}
        <aside className="hidden lg:block w-[280px] pr-8 border-r border-gray-100 dark:border-gray-800 py-4">
          <ul className="space-y-1">
            {categories.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                onClick={() => handleCategoryClick(item)}
                className="group flex items-center justify-between py-2.5 cursor-pointer"
              >
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-red-600 transition-colors">
                  {item}
                </span>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
              </motion.li>
            ))}
          </ul>
        </aside>

        {/* Carousel - Stunning Theme */}
        <div className="relative flex-1 rounded-2xl overflow-hidden bg-black h-[400px] md:h-[480px] shadow-2xl group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`absolute inset-0 bg-gradient-to-br ${banners[current].gradient} flex items-center`}
            >
              <div className="absolute inset-0 bg-black/20 z-10" />
              
              <div className="relative z-20 w-full h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12">
                
                {/* Text Content */}
                <div className="text-white max-w-lg text-center md:text-left flex flex-col items-center md:items-start">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                        alt="Brand"
                        className="w-5 invert"
                      />
                    </div>
                    <span className="text-sm font-semibold tracking-widest uppercase text-white/80">
                      {banners[current].subtitle}
                    </span>
                  </motion.div>

                  <motion.h1 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-8"
                  >
                    {banners[current].title}
                  </motion.h1>

                  <motion.button 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-black/20"
                  >
                    Explore Now
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Hero Image */}
                <motion.div
                  initial={{ x: 50, opacity: 0, rotate: 5 }}
                  animate={{ x: 0, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="hidden md:block w-[400px] lg:w-[500px]"
                >
                  <img
                    src={banners[current].image}
                    alt={banners[current].title}
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls - Premium Glassmorphism */}
          <div className="absolute inset-x-0 bottom-8 z-30 flex justify-center items-center gap-4">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="group relative py-2"
              >
                <div className={`h-1.5 transition-all duration-300 rounded-full ${
                  current === index ? "w-10 bg-red-500" : "w-4 bg-white/30 group-hover:bg-white/50"
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1))}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}