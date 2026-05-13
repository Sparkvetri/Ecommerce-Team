import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    role: null, // 'admin' or 'user'
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.role = action.payload.role || 'user';
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.role = action.payload.role || 'user';
      state.isAuthenticated = true;
      state.loading = false;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, registerSuccess } = authSlice.actions;
export default authSlice.reducer;
