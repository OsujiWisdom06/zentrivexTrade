import React, { useEffect, useState } from "react";
import {
  FaCheck,
  FaArrowRight,
  FaShieldAlt,
  FaTimes,
} from "react-icons/fa";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "../styles/verifyemail.css";

const VerifyEmail = () => {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("");

  const BASE_URL = "https://zentrivex-backend.onrender.com";

  useEffect(() => {
    const verifyUserEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        setMessage("Verification token is missing.");
        return;
      }

      try {
        const response = await fetch(
          `${BASE_URL}/api/auth/verify-email?token=${encodeURIComponent(token)}`,
          {
            method: "GET",
          }
        );

        const data = await response.json();

        if (response.ok && data.success) {
          setStatus("success");
          setMessage(
            data.message || "Email verified successfully."
          );
        } else {
          setStatus("error");
          setMessage(
            data.message ||
              "Invalid or expired verification link."
          );
        }
      } catch (error) {
        console.error("Email verification error:", error);

        setStatus("error");
        setMessage(
          "Unable to verify your email right now. Please try again later."
        );
      }
    };

    verifyUserEmail();
  }, [searchParams]);

  const handleLogin = () => {
    nav("/login");
  };

  // =========================
  // VERIFYING
  // =========================

  if (status === "verifying") {
    return (
      <div className="verify-email-page">
        <div className="verify-email-card">

          <div className="verification-icon-wrapper">
            <div className="verification-icon verifying-icon">
              ...
            </div>
          </div>

          <h1>
            Verifying Your <span>Email...</span>
          </h1>

          <div className="verification-line"></div>

          <p className="verification-message">
            Please wait while we verify your email address.
          </p>

        </div>
      </div>
    );
  }

  // =========================
  // ERROR
  // =========================

  if (status === "error") {
    return (
      <div className="verify-email-page">
        <div className="verify-email-card">

          <div className="verification-icon-wrapper error-wrapper">
            <div className="verification-icon error-icon">
              <FaTimes />
            </div>
          </div>

          <h1>
            Verification <span>Failed</span>
          </h1>

          <div className="verification-line"></div>

          <p className="verification-message">
            {message}
          </p>

          <button
            className="verification-login-btn"
            onClick={handleLogin}
          >
            <span>Go to Login</span>
            <FaArrowRight />
          </button>

        </div>
      </div>
    );
  }

  // =========================
  // SUCCESS
  // =========================

  return (
    <div className="verify-email-page">
      <div className="verify-email-card">

        <div className="verification-icon-wrapper">
          <div className="verification-icon">
            <FaCheck />
          </div>
        </div>

        <h1>
          Your Email Has Been <span>Verified!</span>
        </h1>

        <div className="verification-line"></div>

        <p className="verification-message">
          {message}
        </p>

        <button
          className="verification-login-btn"
          onClick={handleLogin}
        >
          <span>Login to Your Account</span>
          <FaArrowRight />
        </button>

        <div className="security-message">
          <FaShieldAlt />
          <span>
            Your account is now secure and ready to use.
          </span>
        </div>

      </div>
    </div>
  );
};

export default VerifyEmail;