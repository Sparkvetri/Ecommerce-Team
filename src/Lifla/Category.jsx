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

  // New Categories
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
    <section className="w-full bg-[#f6f6f6] py-12 px-6 md:px-12">
      {/* Top Label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-red-500 rounded-full"></div>
        <span className="text-red-500 font-semibold text-sm">
          Categories
        </span>
      </div>

      {/* Heading + Buttons */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold text-black">
          Browse By Category
        </h2>

        <div className="flex items-center gap-3">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition disabled:opacity-50"
            disabled={startIndex === 0}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition disabled:opacity-50"
            disabled={startIndex + itemsPerPage >= categories.length}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
        {visibleCategories.map((item, index) => (
          <div
            key={index}
            className={`border rounded-md h-36 flex flex-col items-center justify-center cursor-pointer transition-all duration-300
              ${
                item.active
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-black border-gray-300 hover:border-red-400"
              }`}
          >
            <div className="mb-3">{item.icon}</div>
            <p className="font-medium">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-300 mt-12"></div>
    </section>
  );
}