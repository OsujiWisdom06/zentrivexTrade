import React from 'react'
import { IoMenu } from 'react-icons/io5'
import { MdVerified } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import '../styles/header.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { BsFillBarChartLineFill } from 'react-icons/bs';
import { MdRealEstateAgent } from "react-icons/md";

const Header = () => {

  const [showFeatures, setShowFeatures] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const headerlogo = "/src/assets/zentrivextradelogo.jpeg";

  // Replace this with your certificate image
  const certificateImage = "/src/assets/certificate.png";

  const nav = useNavigate();

  return (
    <>
      {showCertificate && (
        <div
          className="certificate-overlay"
          onClick={() => setShowCertificate(false)}
        >
          <div
            className="certificate-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-popup"
              onClick={() => setShowCertificate(false)}
            >
              ×
            </button>

            <img src={headerlogo} alt="Certificate" />
          </div>
        </div>
      )}

      <div className="header-main">
        <div className="header-main-wrap">
          <div onClick={() => nav("/")} className="header-logo-div">
            <img src={headerlogo} alt="logo" />
          </div>

          <div className="header-write-up-div">
            <div className="header-write-up-div-main">

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

              <div className="header-write-up-div-main-div2">
                <div className="header-login-div">
                  <p onClick={() => nav("/login")}>Login</p>
                </div>

                <div className="header-signup-div">
                  <div
                    onClick={() => nav("/register")}
                    className="header-signup-div-main"
                  >
                    Register
                  </div>
                </div>
              </div>

              <div className="header-write-up-div-main-div4">
                <IoMenu />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;