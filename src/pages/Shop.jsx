import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByCategory } from '../store/productSliceApi';
import ProductCard from '../components/Product/ProductCard';

const Shop = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Phones', 'Computers', 'Gaming', 'HeadPhones', 'SmartWatch', 'Camera', 'Home'];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    dispatch(filterByCategory(category));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6 tracking-tight">Shop All Products</h1>
        
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No products found.</p>
        </div>
      )}
    </main>
  );
};

export default Shop;
