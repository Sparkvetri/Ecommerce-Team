import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterByCategory } from '../../store/productSliceApi';
import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: 'Electronics', icon: <Smartphone strokeWidth={1.5} /> },
  { id: 2, name: 'Computers', icon: <Monitor strokeWidth={1.5} /> },
  { id: 3, name: 'Accessories', icon: <Headphones strokeWidth={1.5} /> },
  { id: 4, name: 'SmartWatch', icon: <Watch strokeWidth={1.5} /> },
  { id: 5, name: 'Camera', icon: <Camera strokeWidth={1.5} /> },
  { id: 6, name: 'Gaming', icon: <Gamepad strokeWidth={1.5} /> },
];

const CategorySection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);

  const handleCategoryClick = (name) => {
    setActiveTab(name);
    dispatch(filterByCategory(name));
    navigate('/shop');
  };

  return (
    <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-b border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-4 mb-12">
        <div className="flex items-center gap-3">
          <div className="w-4 h-10 bg-red-600 rounded-sm shadow-sm shadow-red-200"></div>
          <span className="text-red-600 font-bold text-sm tracking-widest uppercase">Categories</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Browse By Category</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryClick(cat.name)}
            className={`group relative flex flex-col items-center justify-center gap-4 aspect-square rounded-2xl border-2 transition-all duration-500 cursor-pointer overflow-hidden
              ${activeTab === cat.name 
                ? 'bg-red-600 border-red-600 text-white shadow-2xl shadow-red-200' 
                : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-300 hover:border-red-600 hover:shadow-xl hover:shadow-red-50 dark:hover:shadow-red-900/10'
              }`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${activeTab === cat.name ? 'hidden' : ''}`} />
            
            <div className={`p-4 rounded-full transition-transform duration-500 group-hover:scale-110 ${
              activeTab === cat.name ? 'bg-white/20' : 'bg-gray-50 dark:bg-gray-800 group-hover:bg-red-50 dark:group-hover:bg-red-900/20'
            }`}>
              {React.cloneElement(cat.icon, { size: 32, className: activeTab === cat.name ? 'text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-red-600' })}
            </div>
            
            <span className={`text-sm font-bold tracking-wide transition-colors duration-500 ${activeTab === cat.name ? 'text-white' : 'group-hover:text-red-600'}`}>
              {cat.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;