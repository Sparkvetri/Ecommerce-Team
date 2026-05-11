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
    <section className="w-full bg-[#f6f6f6] py-14 px-6 md:px-12">
      {/* Top Label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-red-500 rounded-full"></div>
        <span className="text-red-500 font-semibold text-sm">
          This Month
        </span>
      </div>

      {/* Heading */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold text-black">
          Best Selling Products
        </h2>

        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id}>
            {/* Image Card */}
            <div className="relative bg-[#ececec] rounded-md h-[270px] flex items-center justify-center overflow-hidden group">
              
              {/* Icons */}
              <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
                <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition">
                  <Heart size={18} />
                </button>

                <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition">
                  <Eye size={18} />
                </button>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-[180px] h-[180px] object-contain group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg text-black mb-2">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-red-500 font-semibold">
                  {product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill={
                        index < product.rating
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>

                <span className="text-gray-500 text-sm">
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