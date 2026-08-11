import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // =====================================================
    // LOGIN
    // =====================================================

    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },

    // =====================================================
    // LOGOUT
    // =====================================================

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },

    // =====================================================
    // SET USER
    // =====================================================

    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    // =====================================================
    // CLEAR USER
    // =====================================================

    clearUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },

    // =====================================================
    // LOADING
    // =====================================================

    setAuthLoading: (state, action) => {
      state.loading = action.payload;
    },

    // =====================================================
    // ERROR
    // =====================================================

    setAuthError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // =====================================================
    // CLEAR ERROR
    // =====================================================

    clearAuthError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginSuccess,
  logout,
  setUser,
  clearUser,
  setAuthLoading,
  setAuthError,
  clearAuthError,
} = authSlice.actions;

export default authSlice.reducer;