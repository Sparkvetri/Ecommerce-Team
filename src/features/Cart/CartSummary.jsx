const CartSummary = ({ subtotal = 0, shipping = 10, tax = 0 }) => {
  const total = subtotal + shipping + tax;

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold mb-4 pb-4 border-b border-gray-200">Order Summary</h3>
      
      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        {/* Subtotal */}
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-medium">${shipping.toFixed(2)}</span>
        </div>

        {/* Tax */}
        {tax > 0 && (
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gray-600">Tax:</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4 sm:pt-6 flex justify-between items-center">
        <span className="font-bold text-base sm:text-lg">Total:</span>
        <span className="font-bold text-lg sm:text-xl text-red-500">${total.toFixed(2)}</span>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 sm:py-3 rounded-md font-medium transition mt-4 sm:mt-6 text-sm sm:text-base active:bg-red-700">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
