const Input = ({ label, type = 'text', className = '', ...props }) => {
  return (
    <div className="w-full flex flex-col gap-1.5 sm:gap-2">
      {label && (
        <label className="text-xs sm:text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input 
        type={type}
        className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
