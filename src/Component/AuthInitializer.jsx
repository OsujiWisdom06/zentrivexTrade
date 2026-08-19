import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout, setLoading } from "../Redux/slices/authSlice.js";

const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();

  const token = useSelector(
    (state) => state.auth.token
  );

  const hasCheckedAuth = useRef(false);

  const BASE_URL =
    "https://zentrivex-backend.onrender.com";

  useEffect(() => {
    const getCurrentUser = async () => {
      // Prevent duplicate request
      if (hasCheckedAuth.current) {
        return;
      }

      hasCheckedAuth.current = true;

      // No token means user is not logged in
      if (!token) {
        dispatch(setLoading(false));
        return;
      }

      try {
        const response = await fetch(
          `${BASE_URL}/api/auth/me`,
          {
            method: "GET",

            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (response.ok && data.success) {
          // Update Redux with the latest user
          // returned from the backend
          dispatch(setUser(data.user));
        } else {
          // Token is probably invalid/expired
          dispatch(logout());
        }
      } catch (error) {
        console.error(
          "Get current user error:",
          error
        );

        // Don't keep the app stuck in loading
        dispatch(setLoading(false));
      }
    };

    getCurrentUser();
  }, [token, dispatch]);

  return children;
};

export default AuthInitializer;