import { Trash2, Plus, Minus } from 'lucide-react';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 border-b border-gray-200 hover:bg-gray-50 transition">
      {/* Product Image */}
      <img 
        src={item?.image || 'https://via.placeholder.com/80'} 
        alt={item?.name}
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
      />

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <h3 className="font-semibold text-sm sm:text-base text-black truncate">
            {item?.name}
          </h3>
          <p className="text-red-500 font-bold text-sm sm:text-base">
            ${item?.price}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            className="p-1 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            <Minus size={14} className="sm:w-4 sm:h-4" />
          </button>
          <span className="text-xs sm:text-sm font-medium w-6 text-center">{item?.quantity}</span>
          <button 
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            className="p-1 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            <Plus size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button 
        onClick={() => onRemove(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded transition"
        aria-label="Remove item"
      >
        <Trash2 size={16} className="sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default CartItem;
