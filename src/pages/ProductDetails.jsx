import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowLeft, Star } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const allProducts = useSelector((state) => state.products.allProducts);
  
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="text-red-500 hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <div className="bg-[#F5F5F5] rounded-xl p-8 flex items-center justify-center min-h-[400px]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto max-h-[500px] object-cover rounded-lg mix-blend-multiply"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{product.name}</h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  fill={i < product.rating ? "#FFAD33" : "none"} 
                  color={i < product.rating ? "#FFAD33" : "#D1D5DB"} 
                />
              ))}
            </div>
            <span className="text-gray-500">({product.reviews} Reviews)</span>
            <span className="text-green-500 font-medium">In Stock</span>
          </div>

          <div className="text-2xl font-semibold text-black mt-2">
            ${product.price} 
            {product.oldPrice && <span className="text-gray-400 line-through text-lg ml-3">${product.oldPrice}</span>}
          </div>

          <p className="text-gray-600 leading-relaxed mt-4 border-b border-gray-200 pb-6">
            Experience premium quality with the {product.name}. Designed for excellence and built to last. 
            Perfect for your everyday needs.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-red-500 text-white px-12 py-3 rounded-md font-medium hover:bg-red-600 transition-colors w-full sm:w-auto">
              Buy Now
            </button>
            <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-50 transition-colors">
              <Star size={24} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
