import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // ==========================================
    // SET USER + TOKEN AFTER LOGIN
    // ==========================================

    setCredentials: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      state.loading = false;
    },

    // ==========================================
    // UPDATE CURRENT USER
    // ==========================================

    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },

    // ==========================================
    // SET LOADING
    // ==========================================

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // ==========================================
    // LOGOUT
    // ==========================================

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const {
  setCredentials,
  setUser,
  setLoading,
  logout,
} = authSlice.actions;

export default authSlice.reducer;