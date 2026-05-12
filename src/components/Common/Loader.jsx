const Loader = ({ fullScreen = true }) => {
  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50' 
    : 'flex items-center justify-center py-8 sm:py-12';

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-3 sm:mb-4"></div>
        <p className="text-sm sm:text-base text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
