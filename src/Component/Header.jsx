import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { MdVerified } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillBarChartLineFill } from 'react-icons/bs';
import { MdRealEstateAgent } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerlogo = "/src/assets/zentrivextradelogo.jpeg";
  const nav = useNavigate();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Certificate Popup */}
      {showCertificate && (
        <div className="certificate-overlay" onClick={() => setShowCertificate(false)}>
          <div className="certificate-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={() => setShowCertificate(false)}>×</button>
            <img src={headerlogo} alt="Certificate" />
          </div>
        </div>
      )}

      {/* ===== HEADER ===== */}
      <div className="header-main">
        <div className="header-main-wrap">
          {/* Logo */}
          <div onClick={() => nav("/")} className="header-logo-div">
            <img src={headerlogo} alt="logo" />
          </div>

          <div className="header-write-up-div">
            <div className="header-write-up-div-main">

              {/* ===== DESKTOP NAV ===== */}
              <div className="header-write-up-div-main-div1">
                <p onClick={() => nav("/")}>Home</p>
                <p onClick={() => nav("/about-us")}>About</p>
                <p onClick={() => nav("/services")}>Services</p>

                <div className="other-features-parent">
                  <p onClick={() => setShowFeatures(!showFeatures)}>
                    Other Features
                    <IoMdArrowDropdown className="header-dropdown" />
                  </p>

                  {showFeatures && (
                    <div className="other-features-dropdown">
                      <p onClick={() => nav("/market-overview")}>
                        <BsFillBarChartLineFill style={{ color: "green" }} />
                        Markets
                      </p>
                      <p onClick={() => nav("/feature-two")}>
                        <MdRealEstateAgent style={{ color: "red" }} />
                        Real Estates
                      </p>
                    </div>
                  )}
                </div>

                <p onClick={() => setShowCertificate(true)}>
                  <MdVerified className="header-certificate" />
                  Certificates
                </p>
              </div>

              {/* ===== DESKTOP AUTH ===== */}
              <div className="header-write-up-div-main-div2">
                <div className="header-login-div">
                  <p onClick={() => nav("/login")}>Login</p>
                </div>
                <div className="header-signup-div">
                  <div onClick={() => nav("/register")} className="header-signup-div-main">
                    Register
                  </div>
                </div>
              </div>

              {/* ===== HAMBURGER (Mobile only) ===== */}
              <div
                className="header-write-up-div-main-div4"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <IoMenu />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE SLIDE-IN MENU ===== */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`} onClick={closeMobileMenu}>
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
          
          {/* Close Button */}
          <button className="mobile-menu-close" onClick={closeMobileMenu}>
            <IoClose />
          </button>

          {/* Menu Links */}
          <div className="mobile-menu-links">
            <p onClick={() => { nav("/"); closeMobileMenu(); }}>Home</p>
            <p onClick={() => { nav("/about-us"); closeMobileMenu(); }}>About</p>
            <p onClick={() => { nav("/services"); closeMobileMenu(); }}>Services</p>

            {/* Other Features (always expanded on mobile for better UX) */}
            <div className="mobile-features">
              <p className="mobile-features-title">Other Features</p>
              <p onClick={() => { nav("/market-overview"); closeMobileMenu(); }}>
                <BsFillBarChartLineFill style={{ color: "green" }} />
                Markets
              </p>
              <p onClick={() => { nav("/feature-two"); closeMobileMenu(); }}>
                <MdRealEstateAgent style={{ color: "red" }} />
                Real Estates
              </p>
            </div>

            <p onClick={() => { setShowCertificate(true); closeMobileMenu(); }}>
              <MdVerified className="header-certificate" />
              Certificates
            </p>
          </div>

          {/* Auth Buttons */}
          <div className="mobile-auth">
            <button className="mobile-login" onClick={() => { nav("/login"); closeMobileMenu(); }}>
              Login
            </button>
            <button className="mobile-register" onClick={() => { nav("/register"); closeMobileMenu(); }}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;