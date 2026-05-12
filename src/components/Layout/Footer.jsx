const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
          
          {/* Column 1 - Company */}
          <div className="col-span-1">
            <h3 className="font-bold text-base sm:text-lg mb-4">Shopzy</h3>
            <ul className="text-xs sm:text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 - Support */}
          <div className="col-span-1">
            <h4 className="font-bold text-base sm:text-lg mb-4">Support</h4>
            <ul className="text-xs sm:text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Shipping Info</a></li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div className="col-span-1">
            <h4 className="font-bold text-base sm:text-lg mb-4">Legal</h4>
            <ul className="text-xs sm:text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Returns</a></li>
            </ul>
          </div>

          {/* Column 4 - Follow */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h4 className="font-bold text-base sm:text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-gray-300 transition">👍</a>
              <a href="#" className="hover:text-gray-300 transition">🐦</a>
              <a href="#" className="hover:text-gray-300 transition">📷</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            &copy; 2024 Shopzy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
