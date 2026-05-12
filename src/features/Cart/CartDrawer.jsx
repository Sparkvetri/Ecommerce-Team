import { X } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`
          fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white shadow-lg z-50 
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold">Shopping Cart</h2>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-md transition"
            aria-label="Close cart"
          >
            <X size={24} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Cart Items Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 h-[calc(100%-200px)]">
          <p className="text-sm sm:text-base text-gray-500 text-center py-8">
            Your cart is empty
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 rounded-md font-medium transition text-sm sm:text-base">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
