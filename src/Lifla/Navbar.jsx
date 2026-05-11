// App.jsx
import React, { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const banners = [
  {
    title: "Up to 10% off Voucher",
    subtitle: "iPhone 14 Series",
    image:
      "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Latest MacBook Pro",
    subtitle: "Apple Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Premium Headphones",
    subtitle: "Noise Cancellation",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gaming Collection",
    subtitle: "PlayStation 5",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Smart Watch Deals",
    subtitle: "Series 8",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="flex w-[1150px] gap-6">
        
        {/* Sidebar */}
        <aside className="w-[260px] bg-white rounded-md py-4 shadow-sm">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-6 py-3 hover:bg-gray-100 cursor-pointer transition"
            >
              <span className="text-[15px] font-medium">
                {item}
              </span>
              <ChevronRight size={16} />
            </div>
          ))}
        </aside>

        {/* Carousel */}
        <div className="relative flex-1 h-[380px] overflow-hidden rounded-md bg-black">
          
          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {banners.map((banner, index) => (
              <div
                key={index}
                className="min-w-full h-full flex items-center justify-between px-14"
              >
                {/* Left Content */}
                <div className="text-white z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                      alt="Apple"
                      className="w-8 invert"
                    />
                    <span className="text-sm">
                      {banner.subtitle}
                    </span>
                  </div>

                  <h1 className="text-5xl font-bold leading-tight mb-8 max-w-[350px]">
                    {banner.title}
                  </h1>

                  <button className="border-b border-white pb-1 text-lg hover:text-gray-300 transition">
                    Shop Now →
                  </button>
                </div>

                {/* Image */}
                <img
                  src={banner.image}
                  alt=""
                  className="w-[420px] h-[300px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-red-500 scale-110"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}