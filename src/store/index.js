import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSliceApi';

const store = configureStore({
  reducer: {
    products: productReducer,
    // You can add more reducers here later (e.g., cart, user)
  },
});

export default store;