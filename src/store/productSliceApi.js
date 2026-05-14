import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (keyword = '', thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}${keyword ? `?keyword=${keyword}` : ''}`);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    flashSales: [],
    filteredProducts: [],
    currentCategory: 'All',
    loading: false,
    error: null
  },
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.currentCategory = category;
      if (category === 'All') {
        state.filteredProducts = state.allProducts;
      } else {
        state.filteredProducts = state.allProducts.filter(p => p.category === category);
      }
    },
    searchProducts: (state, action) => {
      state.filteredProducts = state.allProducts.filter(p => 
        p.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
        state.filteredProducts = action.payload;
        state.flashSales = action.payload.filter(p => p.isFlashSale);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { filterByCategory, searchProducts } = productSlice.actions;
export default productSlice.reducer;