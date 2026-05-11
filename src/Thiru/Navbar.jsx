export default function Navbar() {
  return (
    <>
      {/* Top Header */}
      <div className="bg-black text-white h-12 flex items-center justify-center relative text-sm">
        <p className="font-light">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>

        <button className="ml-2 font-semibold underline">
          ShopNow
        </button>

        <div className="absolute right-20 flex items-center gap-1 cursor-pointer">
          <span>English</span>
          <span className="text-xs">▼</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-gray-300">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">
            Shopzy
          </h1>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-12 text-sm font-medium">
            <li className="cursor-pointer border-b-2 border-black pb-1">
              Home
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition">
              Contact
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition">
              About
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition">
              Sign Up
            </li>
          </ul>

          {/* Search + Icons */}
          <div className="flex items-center gap-6">
            
            {/* Search Box */}
            <div className="hidden lg:flex items-center bg-gray-100 px-4 py-2 rounded-md w-72">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-sm flex-1"
              />

              <button className="text-gray-600">
                🔍
              </button>
            </div>

            {/* Wishlist */}
            <button className="text-2xl">
              ♡
            </button>

            {/* Cart */}
            <button className="text-2xl">
              🛒
            </button>
          </div>
        </div>
      </div>
    </>
  );
}