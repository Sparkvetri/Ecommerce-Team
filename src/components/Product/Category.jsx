import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../store/productSliceApi';
import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: 'Phones', icon: <Smartphone size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { id: 2, name: 'Computers', icon: <Monitor size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { id: 3, name: 'SmartWatch', icon: <Watch size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { id: 4, name: 'Camera', icon: <Camera size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { id: 5, name: 'HeadPhones', icon: <Headphones size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { id: 6, name: 'Gaming', icon: <Gamepad size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
];

const CategorySection = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(null);

  const handleCategoryClick = (name) => {
    setActiveTab(name);
    dispatch(filterByCategory(name)); // Trigger Redux Action
  };

  return (
    <section className="w-full py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 sm:gap-3 mb-2">
        <div className="w-3 h-8 sm:w-4 sm:h-10 bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-bold text-xs sm:text-sm">Categories</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 md:mb-10">Browse By Category</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCategoryClick(cat.name)}
            className={`flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 h-24 sm:h-28 md:h-32 lg:h-36 border rounded-md cursor-pointer transition-all duration-300 p-2
              ${activeTab === cat.name 
                ? 'bg-[#DB4444] border-[#DB4444] text-white shadow-lg' 
                : 'bg-white border-gray-200 text-black hover:border-[#DB4444]'
              }`}
          >
            {cat.icon}
            <span className="text-xs sm:text-sm font-medium text-center line-clamp-2">{cat.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;