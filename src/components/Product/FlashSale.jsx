import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FlashSaleSection = () => {
  // Access the products from Redux store
  const allProducts = useSelector((state) => state.products.allProducts);
  
  // Filter for Flash Sale items
  const flashSaleItems = allProducts.filter(item => item.isFlashSale);

  return (
    <section className="w-full py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-10 max-w-7xl mx-auto border-b border-gray-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-2">
            <div className="w-3 h-8 sm:w-4 sm:h-10 bg-[#DB4444] rounded-sm"></div>
            <span className="text-[#DB4444] font-bold text-xs sm:text-sm">Today's</span>
          </div>
          <div className="flex items-start sm:items-end gap-6 sm:gap-12 flex-col sm:flex-row">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Flash Sales</h2>
            {/* You can add your Timer component here later */}
          </div>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none p-1.5 sm:p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition active:bg-gray-300">
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          </button>
          <button className="flex-1 sm:flex-none p-1.5 sm:p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition active:bg-gray-300">
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
        {flashSaleItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-[#DB4444] text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-md font-medium hover:bg-red-600 transition-colors text-sm sm:text-base active:bg-red-700">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSaleSection;