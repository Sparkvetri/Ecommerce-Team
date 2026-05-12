import React from 'react';
import ProductCard from './ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ExploreProducts = () => {
  const products = [
  { 
    id: 1, 
    name: "Breed Dry Dog Food", 
    price: 100, 
    rating: 3, 
    reviews: 35, 
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=500&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    name: "CANON EOS DSLR Camera", 
    price: 360, 
    rating: 4, 
    reviews: 95, 
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    name: "ASUS FHD Gaming Laptop", 
    price: 700, 
    rating: 5, 
    reviews: 325, 
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=500&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    name: "Curology Product Set", 
    price: 500, 
    rating: 4, 
    reviews: 145, 
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=500&auto=format&fit=crop" 
  },
];

  return (
    <section className="w-full py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-10 max-w-7xl mx-auto">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 md:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-2">
            <div className="w-3 h-8 sm:w-4 sm:h-10 bg-red-500 rounded-sm"></div>
            <span className="text-red-500 font-bold text-xs sm:text-sm">Our Products</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Explore Our Products</h2>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none p-1.5 sm:p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors active:bg-gray-300">
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          </button>
          <button className="flex-1 sm:flex-none p-1.5 sm:p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors active:bg-gray-300">
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* THE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
        {products.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-red-500 text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-md font-medium hover:bg-red-600 transition-colors text-sm sm:text-base active:bg-red-700">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts;