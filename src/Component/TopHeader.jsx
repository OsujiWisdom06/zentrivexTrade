import React from "react";
import { IoMenu, IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import "../styles/topheader.css";

const TopHeader = ({ toggleSidebar }) => {
  return (
    <header className="top-header">

      <div className="top-header-left">

        <button
          className="menu-toggle-btn"
          onClick={toggleSidebar}
        >
          <IoMenu />
        </button>

        <div className="top-logo">

          <h1 className="welcome-text">
            Welcome, <strong>Wisdom</strong> 👋
          </h1>
        </div>

      </div>

      <div className="top-header-right">

        <div className="notification-box">
          <IoNotificationsOutline />
          <span className="notification-dot"></span>
        </div>

        <div className="user-box">
          <FaUserCircle className="user-icon" />

          <div>
            <h4>Wisdom</h4>
            <p>Investor</p>
          </div>
        </div>

      </div>

    </header>
  );
};

export default TopHeader;