import React from "react";

const MusicBanner = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="bg-black w-full max-w-6xl rounded-md overflow-hidden flex flex-col md:flex-row items-center justify-between px-10 py-12 relative">
        
        {/* Left Content */}
        <div className="text-white z-10">
          <p className="text-green-400 font-semibold mb-4">Categories</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Enhance Your <br /> Music Experience
          </h1>

          {/* Timer */}
          <div className="flex gap-4 mb-8">
            <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center text-sm font-bold">
              23
              <span className="text-[10px] font-medium">Hours</span>
            </div>

            <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center text-sm font-bold">
              05
              <span className="text-[10px] font-medium">Days</span>
            </div>

            <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center text-sm font-bold">
              59
              <span className="text-[10px] font-medium">Minutes</span>
            </div>

            <div className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center text-sm font-bold">
              35
              <span className="text-[10px] font-medium">Seconds</span>
            </div>
          </div>

          {/* Button */}
          <button className="bg-green-400 hover:bg-green-500 text-white px-8 py-3 rounded-md font-semibold transition duration-300">
            Buy Now!
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 relative">
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>

                    <img
            src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop"
            alt="Speaker"
            className="relative w-[500px] object-contain"
            />
        </div>
      </div>
    </div>
  );
};

export default MusicBanner;