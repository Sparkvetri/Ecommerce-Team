import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
  Speaker,
  Tv,
} from "lucide-react";

const categories = [
  {
    name: "Phones",
    icon: <Smartphone size={32} />,
  },
  {
    name: "Computers",
    icon: <Monitor size={32} />,
  },
  {
    name: "SmartWatch",
    icon: <Watch size={32} />,
  },
  {
    name: "Camera",
    icon: <Camera size={32} />,
    active: true,
  },
  {
    name: "HeadPhones",
    icon: <Headphones size={32} />,
  },
  {
    name: "Gaming",
    icon: <Gamepad2 size={32} />,
  },
  {
    name: "Speakers",
    icon: <Speaker size={32} />,
  },
  {
    name: "Television",
    icon: <Tv size={32} />,
  },
];

export default function BrowseCategory() {
  const itemsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + itemsPerPage < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="w-full bg-[#f6f6f6] py-8 md:py-12 px-4 sm:px-6 md:px-12">
      
      {/* Top Label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-7 md:h-8 bg-red-500 rounded-full"></div>

        <span className="text-red-500 font-semibold text-xs sm:text-sm">
          Categories
        </span>
      </div>

      {/* Heading + Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8 md:mb-10">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Browse By Category
        </h2>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition disabled:opacity-50"
            disabled={startIndex === 0}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition disabled:opacity-50"
            disabled={startIndex + itemsPerPage >= categories.length}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
        {visibleCategories.map((item, index) => (
          <div
            key={index}
            className={`
              border rounded-xl
              h-32 sm:h-36
              flex flex-col items-center justify-center
              cursor-pointer
              transition-all duration-300
              hover:scale-105
              ${
                item.active
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-black border-gray-300 hover:border-red-400"
              }
            `}
          >
            {/* Icon */}
            <div className="mb-3">
              {item.icon}
            </div>

            {/* Text */}
            <p className="font-medium text-sm sm:text-base text-center px-2">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-300 mt-10 md:mt-12"></div>
    </section>
  );
}