import React from "react";
import { Heart, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    rating: 88,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: "$960",
    oldPrice: "$1160",
    discount: "-35%",
    rating: 75,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    oldPrice: "$400",
    discount: "-30%",
    rating: 99,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "RGB Liquid CPU Cooler",
    price: "$160",
    oldPrice: "$170",
    discount: "-25%",
    rating: 65,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop",
  },
];

const RelatedItems = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16">
      
      {/* Heading */}
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        
        <div className="w-3 h-7 md:w-4 md:h-8 bg-red-500 rounded-sm"></div>

        <h2 className="text-red-500 font-semibold text-base sm:text-lg md:text-xl">
          Related Item
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group"
          >
            
            {/* Product Card */}
            <div className="bg-white rounded-xl p-4 relative overflow-hidden shadow-sm hover:shadow-md transition">
              
              {/* Discount Badge */}
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>

              {/* Icons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                
                {/* Wishlist */}
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                  <Heart size={16} />
                </button>

                {/* View */}
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                  <Eye size={16} />
                </button>
              </div>

              {/* Product Image */}
              <div className="h-44 sm:h-48 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    h-32 sm:h-36
                    object-contain
                    group-hover:scale-105
                    transition duration-300
                  "
                />
              </div>

              {/* Add To Cart */}
              <button
                className="
                  w-full
                  bg-black
                  text-white
                  py-3
                  rounded-md
                  mt-4
                  opacity-100
                  sm:opacity-0
                  sm:group-hover:opacity-100
                  transition duration-300
                  text-sm sm:text-base
                "
              >
                Add To Cart
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-4">
              
              {/* Title */}
              <h3 className="font-medium text-sm sm:text-base mb-2 line-clamp-2">
                {product.title}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2 text-sm flex-wrap">
                
                <span className="text-red-500 font-semibold">
                  {product.price}
                </span>

                <span className="text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                
                <div className="text-yellow-400 text-sm">
                  ★★★★★
                </div>

                <span className="text-gray-500 text-sm">
                  ({product.rating})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedItems;