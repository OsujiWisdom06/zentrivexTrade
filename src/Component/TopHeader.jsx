import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import "../styles/topheader.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TopHeader = ({ toggleSidebar }) => {
  const nav = useNavigate();

  // Get the currently logged-in user from Redux
  const user = useSelector((state) => state.auth.user);

  // Get only the first name
  const firstName =
    user?.fullName?.trim().split(/\s+/)[0] || "User";

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
            Welcome,{" "}
            <strong>
              {firstName}
            </strong>{" "}
            👋
          </h1>

        </div>

      </div>

      <div className="top-header-right">

        <div className="user-box">

          <FaUserCircle
            onClick={() => nav("/profile")}
            className="user-icon"
          />

        </div>

      </div>

    </header>
  );
};

export default TopHeader;