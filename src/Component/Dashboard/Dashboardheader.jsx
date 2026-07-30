import React from "react";
import "../../styles/dashboardheader.css";
import { IoNotificationsOutline, IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Dashboardheader = ({ toggleSidebar }) => {
  return (
    <header className="dashboard-header">

      <div className="dashboard-header-left">

        <button
          className="menu-btn"
          onClick={toggleSidebar}
        >
          <IoMenu />
        </button>

        <div>
          <h2>Welcome, Wisdom</h2>
          <p>Welcome back! Here's an overview of your account.</p>
        </div>

      </div>

      <div className="dashboard-header-right">

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

export default Dashboardheader;