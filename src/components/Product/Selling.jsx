import {
  Heart,
  Eye,
  Star,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "The north coat",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    price: "$260",
    oldPrice: "$360",
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    price: "$960",
    oldPrice: "$1160",
    rating: 4,
    reviews: 65,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop",
    price: "$160",
    oldPrice: "$170",
    rating: 4,
    reviews: 65,
  },
  {
    id: 4,
    name: "Small BookSelf",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    price: "$360",
    oldPrice: "",
    rating: 5,
    reviews: 65,
  },
];

export default function BestSellingProducts() {
  return (
    <section className="w-full bg-[#f6f6f6] py-6 sm:py-8 md:py-12 lg:py-14 px-3 sm:px-6 md:px-10 lg:px-12">
      {/* Top Label */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="w-2 h-6 sm:h-8 bg-red-500 rounded-full"></div>
        <span className="text-red-500 font-semibold text-xs sm:text-sm">
          This Month
        </span>
      </div>

      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 md:mb-10 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Best Selling Products
        </h2>

        <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-md font-medium transition active:bg-red-700 text-sm sm:text-base w-full sm:w-auto">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            {/* Image Card */}
            <div className="relative bg-[#ececec] rounded-md aspect-square flex items-center justify-center overflow-hidden">
              
              {/* Icons */}
              <div className="absolute top-2 sm:top-3 right-2 sm:right-4 flex flex-col gap-2 sm:gap-3 z-10 opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <button className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition active:scale-95">
                  <Heart size={16} className="sm:w-5 sm:h-5" />
                </button>

                <button className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition active:scale-95">
                  <Eye size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[150px] md:h-[180px] object-contain group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="mt-2 sm:mt-3 md:mt-4">
              <h3 className="font-semibold text-xs sm:text-base md:text-lg text-black mb-1.5 sm:mb-2 line-clamp-1 sm:line-clamp-2">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2 flex-wrap">
                <span className="text-red-500 font-semibold text-sm sm:text-base">
                  {product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-xs sm:text-sm">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      className="sm:w-4 sm:h-4"
                      fill={
                        index < product.rating
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>

                <span className="text-gray-500 text-xs sm:text-sm">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}