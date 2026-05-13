import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import Checkout from '../pages/Checkout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import AdminDashboard from '../pages/Admin/AdminDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true,          element: <Home /> },
      { path: 'shop',         element: <Shop /> },
      { path: 'product/:id',  element: <ProductDetails /> },
      { path: 'profile',      element: <Profile /> },
      { path: 'login',        element: <Login /> },
      { path: 'register',     element: <Register /> },
      { path: 'cart',         element: <Cart /> },
      { path: 'wishlist',     element: <Wishlist /> },
      { path: 'checkout',     element: <Checkout /> },
      { path: 'about',        element: <About /> },
      { path: 'contact',      element: <Contact /> },
      { path: 'admin',        element: <AdminDashboard /> },
    ],
  },
]);

export default router;
