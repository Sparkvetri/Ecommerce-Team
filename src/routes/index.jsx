import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Profile from '../pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true,          element: <Home /> },
      { path: 'shop',         element: <Shop /> },
      { path: 'product/:id',  element: <ProductDetails /> },
      { path: 'profile',      element: <Profile /> },
    ],
  },
]);

export default router;
