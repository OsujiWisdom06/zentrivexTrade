import React from 'react'
import { IoMenu } from 'react-icons/io5'
import { IoLanguageSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import '../styles/header.css'
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsFillBarChartLineFill } from 'react-icons/bs';
import { MdRealEstateAgent } from "react-icons/md";

const Header = () => {

  

  const [showFeatures, setShowFeatures] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

const languageRef = useRef(null);

const { i18n } = useTranslation();
const { t } = useTranslation();

const languages = [
  { code: "en", name: "🇺🇸 English" },
  { code: "fr", name: "🇫🇷 French" },
  { code: "es", name: "🇪🇸 Spanish" },
  { code: "de", name: "🇩🇪 German" },
  { code: "it", name: "🇮🇹 Italian" },
  { code: "pt", name: "🇵🇹 Portuguese" },
  { code: "ja", name: "🇯🇵 Japanese" },
];

const changeLanguage = (code) => {
  i18n.changeLanguage(code);
  setShowLanguages(false);
};

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      languageRef.current &&
      !languageRef.current.contains(event.target)
    ) {
      setShowLanguages(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  const headerlogo = "/src/assets/zentrivextradelogo.jpeg"

  // Replace this with your certificate image
  const certificateImage = "/src/assets/certificate.png";

  const nav = useNavigate()

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

      <div className='header-main'>
        <div className='header-main-wrap'>
          <div onClick={() => nav("/")} className='header-logo-div'>
            <img src={headerlogo} alt="logo" />
          </div>

          <div className='header-write-up-div'>
            <div className='header-write-up-div-main'>

              <div className='header-write-up-div-main-div1'>
                <p onClick={() => nav("/")}>{t("home")}</p>
                <p onClick={() => nav("/about-us")}>{t("about")}</p>
                <p onClick={() => nav("/services")}>{t("services")}</p>

                <div className="other-features-parent">
                  <p onClick={() => setShowFeatures(!showFeatures)}>
                   {t("otherFeatures")}
                    <IoMdArrowDropdown className="header-dropdown" />
                  </p>

                  {showFeatures && (
                    <div className="other-features-dropdown">
                      <p onClick={() => nav("/market-overview")}><BsFillBarChartLineFill style={{color: "green"}}/>{t("markets")}</p>
                      <p onClick={() => nav("/feature-two")}><MdRealEstateAgent style={{color: "red"}}/>{t("realEstates")}</p>
                    </div>
                  )}
                </div>

                <p onClick={() => setShowCertificate(true)}>
                  <MdVerified className='header-certificate' />
                 {t("certificates")}
                </p>

              </div>

              <div className='header-write-up-div-main-div2'>
                <div className='header-login-div'>
                  <p onClick={() => nav("/login")}>{t("login")}</p>
                </div>

                <div className='header-signup-div'>
                  <div
                    onClick={() => nav("/register")}
                    className='header-signup-div-main'
                  >
                   {t("register")}
                  </div>
                </div>
              </div>

              <div
  className="header-write-up-div-main-div3"
  ref={languageRef}
>
  <div
    className="language-selector"
    onClick={() => setShowLanguages(!showLanguages)}
  >
    <IoLanguageSharp />

    <p>{i18n.language.toUpperCase()}</p>

    <IoMdArrowDropdown />
  </div>

  {showLanguages && (
    <div className="language-dropdown">
      {languages.map((language) => (
        <div
          key={language.code}
          className={`language-item ${
            i18n.language === language.code ? "active-language" : ""
          }`}
          onClick={() => changeLanguage(language.code)}
        >
          {language.name}
        </div>
      ))}
    </div>
  )}
</div>

              <div className='header-write-up-div-main-div4'>
                <IoMenu />
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header