const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-medium transition active:scale-95 text-sm sm:text-base min-h-10 sm:min-h-11';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-black',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
  };

  const variantStyles = variants[variant] || variants.primary;

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
