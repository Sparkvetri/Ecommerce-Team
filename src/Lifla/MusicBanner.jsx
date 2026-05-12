import React from "react";

const MusicBanner = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 sm:p-6">
      
      {/* Banner */}
      <div
        className="
          bg-black
          w-full
          max-w-6xl
          rounded-2xl
          overflow-hidden
          flex flex-col-reverse lg:flex-row
          items-center
          justify-between
          px-6 sm:px-8 md:px-12
          py-10 md:py-14
          relative
          gap-10
        "
      >
        
        {/* Left Content */}
        <div className="text-white z-10 w-full lg:w-1/2 text-center lg:text-left">
          
          {/* Small Title */}
          <p className="text-green-400 font-semibold mb-4 text-sm sm:text-base">
            Categories
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              leading-tight
              mb-8
            "
          >
            Enhance Your <br />
            Music Experience
          </h1>

          {/* Timer */}
          <div
            className="
              flex
              flex-wrap
              justify-center lg:justify-start
              gap-3 sm:gap-4
              mb-8
            "
          >
            
            {/* Hours */}
            <div className="bg-white text-black w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col items-center justify-center text-sm font-bold">
              23
              <span className="text-[10px] font-medium">
                Hours
              </span>
            </div>

            {/* Days */}
            <div className="bg-white text-black w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col items-center justify-center text-sm font-bold">
              05
              <span className="text-[10px] font-medium">
                Days
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-white text-black w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col items-center justify-center text-sm font-bold">
              59
              <span className="text-[10px] font-medium">
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div className="bg-white text-black w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col items-center justify-center text-sm font-bold">
              35
              <span className="text-[10px] font-medium">
                Seconds
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            className="
              bg-green-400
              hover:bg-green-500
              text-white
              px-6 sm:px-8
              py-3
              rounded-md
              font-semibold
              transition duration-300
              w-full sm:w-auto
            "
          >
            Buy Now!
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop"
            alt="Speaker"
            className="
              relative
              w-full
              max-w-[280px]
              sm:max-w-[400px]
              md:max-w-[500px]
              object-contain
            "
          />
        </div>
      </div>
    </div>
  );
};

export default MusicBanner;