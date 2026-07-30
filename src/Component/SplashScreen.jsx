import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/splashscreen.css";

const SplashScreen = () => {

    const zentrivexlogo =  "/src/assets/zentrivextradelogo.jpeg"
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 3000); // 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img
        src={zentrivexlogo}
        alt="Zentrivex Trade Logo"
        className="splash-logo"
      />

      <h2 className="loading-text">
        Securing Your Investment, Zentrivex Trade...
      </h2>
    </div>
  );
};

export default SplashScreen;