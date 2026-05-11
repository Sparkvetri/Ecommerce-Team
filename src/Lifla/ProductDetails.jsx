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
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mb-8">
        Account / Gaming /{" "}
        <span className="text-black font-medium">
          Havic HV G-92 Gamepad
        </span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex gap-4">
          {/* Small Images */}
          <div className="flex flex-col gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setMainImage(img)}
                className="w-24 h-24 bg-gray-100 rounded-lg cursor-pointer overflow-hidden border hover:border-red-400"
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
          <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center p-8">
            <img
              src={mainImage}
              alt="gamepad"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            Havic HV G-92 Gamepad
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="text-yellow-400 text-lg">★★★★★</div>
            <p className="text-gray-400 text-sm">(150 Reviews)</p>
            <span className="text-green-500 text-sm">| In Stock</span>
          </div>

          {/* Price */}
          <h2 className="text-3xl font-semibold mb-5">$192.00</h2>

          {/* Description */}
          <p className="text-gray-600 leading-7 border-b pb-6">
            PlayStation 5 Controller Skin High quality vinyl with air
            channel adhesive for easy bubble free install & mess free
            removal Pressure sensitive.
          </p>

          {/* Colors */}
          <div className="flex items-center gap-4 mt-6">
            <p className="font-medium">Colours:</p>

            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-400 border-2 border-black cursor-pointer"></div>
              <div className="w-5 h-5 rounded-full bg-red-300 cursor-pointer"></div>
            </div>
          </div>

          {/* Sizes */}
          <div className="flex items-center gap-4 mt-6">
            <p className="font-medium">Size:</p>

            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size, index) => (
                <button
                  key={index}
                  className={`border px-3 py-1 rounded-md text-sm hover:bg-red-500 hover:text-white transition ${
                    size === "M"
                      ? "bg-red-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Button */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                className="px-4 py-2 text-xl"
              >
                -
              </button>

              <span className="px-6 py-2 border-x">{count}</span>

              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-red-500 text-white text-xl"
              >
                +
              </button>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-md font-medium">
              Buy Now
            </button>

            <button className="border p-3 rounded-md text-xl">
              ♡
            </button>
          </div>

          {/* Delivery Box */}
          <div className="border rounded-md mt-10 overflow-hidden">
            {/* Free Delivery */}
            <div className="flex items-start gap-4 p-5 border-b">
              <div className="text-3xl">🚚</div>

              <div>
                <h3 className="font-semibold">Free Delivery</h3>
                <p className="text-sm text-gray-500 underline mt-1">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            {/* Return Delivery */}
            <div className="flex items-start gap-4 p-5">
              <div className="text-3xl">↩️</div>

              <div>
                <h3 className="font-semibold">Return Delivery</h3>
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