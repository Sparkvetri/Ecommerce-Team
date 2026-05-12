import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/products';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: products, // Initial data from file
    flashSales: products.filter(p => p.isFlashSale),
    filteredProducts: products
  },
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload;
      if (category === 'All') {
        state.filteredProducts = state.allProducts;
      } else {
        state.filteredProducts = state.allProducts.filter(p => p.category === category);
      }
    },
    // Useful for a Search Bar later
    searchProducts: (state, action) => {
      state.filteredProducts = state.allProducts.filter(p => 
        p.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
  }
});

export const { filterByCategory, searchProducts } = productSlice.actions;
export default productSlice.reducer;