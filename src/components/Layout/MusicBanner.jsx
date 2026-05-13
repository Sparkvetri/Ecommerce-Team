import React from "react";

const MusicBanner = () => {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-950 flex items-center justify-center py-8 px-3 sm:px-6 md:min-h-[600px] md:py-12 transition-colors duration-300">
      <div className="bg-black w-full max-w-6xl rounded-md overflow-hidden flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 gap-6 md:gap-8 relative">
        
        {/* Left Content */}
        <div className="text-white z-10 text-center md:text-left flex-1">
          <p className="text-green-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Categories</p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8">
            Enhance Your <br /> Music Experience
          </h1>

          {/* Timer */}
          <div className="flex gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 justify-center md:justify-start flex-wrap">
            <div className="bg-white text-black w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full flex flex-col items-center justify-center text-xs sm:text-sm font-bold">
              23
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium">hrs</span>
            </div>

            <div className="bg-white text-black w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full flex flex-col items-center justify-center text-xs sm:text-sm font-bold">
              05
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium">min</span>
            </div>

            <div className="bg-white text-black w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full flex flex-col items-center justify-center text-xs sm:text-sm font-bold">
              59
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium">sec</span>
            </div>

            <div className="bg-white text-black w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full flex flex-col items-center justify-center text-xs sm:text-sm font-bold">
              35
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium">ms</span>
            </div>
          </div>

          {/* Button */}
          <button className="bg-green-400 hover:bg-green-500 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-md font-semibold transition duration-300 text-sm sm:text-base w-full sm:w-auto">
            Buy Now!
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-6 md:mt-0 relative flex-1 flex justify-center md:justify-end">
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
          <img
            src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop"
            alt="Speaker"
            className="relative w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicBanner;