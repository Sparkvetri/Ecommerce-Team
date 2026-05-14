import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/productSliceApi';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 pt-2 md:pt-4 text-gray-900 dark:text-gray-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
