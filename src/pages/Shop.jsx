import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { filterByCategory, fetchProducts } from '../store/productSliceApi';
import ProductCard from '../components/Product/ProductCard';

const Shop = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get('keyword');

  const { filteredProducts, currentCategory, loading } = useSelector((state) => state.products);

  const categories = [
    'All', 
    'Fashion', 
    'Electronics', 
    'Computers',
    'Accessories',
    'Home & Lifestyle', 
    'Sports & Outdoor', 
    'Health & Beauty'
  ];

  useEffect(() => {
    if (keyword) {
      dispatch(fetchProducts(keyword));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, keyword]);

  const handleCategoryClick = (category) => {
    dispatch(filterByCategory(category));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 dark:bg-gray-950">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6 tracking-tight dark:text-white">
          {keyword ? `Search results for "${keyword}"` : 'Shop All Products'}
        </h1>
        
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currentCategory === cat 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-200 dark:shadow-none' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product._id || product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No products found matching your criteria.</p>
        </div>
      )}
    </main>
  );
};

export default Shop;
