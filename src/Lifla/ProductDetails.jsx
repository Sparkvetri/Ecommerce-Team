import React, { useState } from "react";

const ProductDetails = () => {
  const images = [
    "https://i.imgur.com/2nCt3Sbl.jpg",
    "https://i.imgur.com/l49aYS3l.jpg",
    "https://i.imgur.com/2nCt3Sbl.jpg",
    "https://i.imgur.com/l49aYS3l.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [count, setCount] = useState(2);

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 md:px-12">
      
      {/* Breadcrumb */}
      <p className="text-xs sm:text-sm text-gray-400 mb-6 md:mb-8 flex flex-wrap gap-1">
        Account / Gaming /
        <span className="text-black font-medium">
          Havic HV G-92 Gamepad
        </span>
      </p>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          
          {/* Thumbnail Images */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setMainImage(img)}
                className={`
                  min-w-[80px]
                  w-20 h-20
                  sm:w-24 sm:h-24
                  bg-gray-100
                  rounded-lg
                  cursor-pointer
                  overflow-hidden
                  border
                  hover:border-red-400
                  ${
                    mainImage === img
                      ? "border-red-500"
                      : "border-transparent"
                  }
                `}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-gray-100 rounded-xl flex items-center justify-center p-4 sm:p-6 md:p-8">
            <img
              src={mainImage}
              alt="gamepad"
              className="w-full max-w-[250px] sm:max-w-md object-contain"
            />
          </div>
        </div>

        {/* Right Section */}
        <div>
          
          {/* Product Title */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            Havic HV G-92 Gamepad
          </h1>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="text-yellow-400 text-lg">
              ★★★★★
            </div>

            <p className="text-gray-400 text-sm">
              (150 Reviews)
            </p>

            <span className="text-green-500 text-sm">
              | In Stock
            </span>
          </div>

          {/* Price */}
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
            $192.00
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-7 border-b pb-6 text-sm sm:text-base">
            PlayStation 5 Controller Skin High quality vinyl with
            air channel adhesive for easy bubble free install &
            mess free removal Pressure sensitive.
          </p>

          {/* Colors */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            
            <p className="font-medium">
              Colours:
            </p>

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-400 border-2 border-black cursor-pointer"></div>

              <div className="w-5 h-5 rounded-full bg-red-300 cursor-pointer"></div>
            </div>
          </div>

          {/* Sizes */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            
            <p className="font-medium">
              Size:
            </p>

            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL"].map((size, index) => (
                <button
                  key={index}
                  className={`
                    border
                    px-3 py-1
                    rounded-md
                    text-sm
                    hover:bg-red-500
                    hover:text-white
                    transition
                    ${
                      size === "M"
                        ? "bg-red-500 text-white"
                        : "bg-white"
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Buy */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            
            {/* Quantity */}
            <div className="flex items-center border rounded-md overflow-hidden w-fit">
              
              <button
                onClick={() =>
                  setCount(count > 1 ? count - 1 : 1)
                }
                className="px-4 py-2 text-xl"
              >
                -
              </button>

              <span className="px-6 py-2 border-x">
                {count}
              </span>

              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-red-500 text-white text-xl"
              >
                +
              </button>
            </div>

            {/* Buy Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 sm:px-10 py-3 rounded-md font-medium w-full sm:w-auto">
              Buy Now
            </button>

            {/* Wishlist */}
            <button className="border p-3 rounded-md text-xl w-fit">
              ♡
            </button>
          </div>

          {/* Delivery Box */}
          <div className="border rounded-xl mt-10 overflow-hidden">
            
            {/* Free Delivery */}
            <div className="flex gap-4 p-5 border-b">
              
              <div className="text-3xl">
                🚚
              </div>

              <div>
                <h3 className="font-semibold">
                  Free Delivery
                </h3>

                <p className="text-sm text-gray-500 underline mt-1">
                  Enter your postal code for Delivery
                  Availability
                </p>
              </div>
            </div>

            {/* Return Delivery */}
            <div className="flex gap-4 p-5">
              
              <div className="text-3xl">
                ↩️
              </div>

              <div>
                <h3 className="font-semibold">
                  Return Delivery
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;