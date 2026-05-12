import { Outlet } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-2 md:pt-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
