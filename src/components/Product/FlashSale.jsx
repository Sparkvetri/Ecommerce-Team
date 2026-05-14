import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (e.g., 3 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(targetDate.getHours() + 23);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label, isLast }) => (
    <div className="flex items-center">
      <div className="flex flex-col items-center min-w-[45px] sm:min-w-[60px]">
        <span className="text-[10px] sm:text-xs font-semibold text-gray-800 mb-1">{label}</span>
        <span className="text-xl sm:text-3xl font-bold tracking-tight text-black dark:text-white tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      {!isLast && (
        <div className="mx-2 sm:mx-4 mt-4 sm:mt-6">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="w-1 h-1 sm:w-1 sm:h-1 bg-red-400 rounded-full"></div>
            <div className="w-1 h-1 sm:w-1 sm:h-1 bg-red-400 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex items-center select-none bg-gray-50/50 dark:bg-gray-800/50 p-4 rounded-3xl border border-gray-100 dark:border-gray-800">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" isLast />
    </div>
  );
};

const FlashSaleSection = () => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const navigate = useNavigate();
  
  const flashSaleItems = allProducts.filter(item => item.isFlashSale).slice(0, 4);

  return (
    <section className="w-full py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-10 max-w-7xl mx-auto border-b border-gray-200 dark:border-gray-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-10 bg-[#DB4444] rounded-sm shadow-sm shadow-red-200"></div>
            <span className="text-[#DB4444] font-bold text-sm tracking-wider uppercase">Today's</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Flash Sales</h2>
            <CountdownTimer />
          </div>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110 active:scale-95 shadow-sm text-gray-900 dark:text-gray-100">
            <ArrowLeft size={20} />
          </button>
          <button className="flex-1 sm:flex-none p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110 active:scale-95 shadow-sm text-gray-900 dark:text-gray-100">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
        {flashSaleItems.map(product => (
          <ProductCard key={product._id || product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={() => navigate('/shop')}
          className="bg-[#DB4444] text-white px-12 py-4 rounded-md font-bold hover:bg-red-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-100 text-base"
        >
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSaleSection;