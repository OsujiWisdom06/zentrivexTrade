import React from "react";
import "../../styles/dashboardheader.css";
import { IoNotificationsOutline, IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";


const Dashboardheader = ({ toggleSidebar }) => {

  // Get logged-in user from Redux
  const user = useSelector((state) => state.auth.user);

  // Get authentication status
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );


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
          <h2>
            Welcome, {user?.fullName || "User"}
          </h2>

          <p>
            Welcome back! Here's an overview of your account.
          </p>
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
            <h4>
              {user?.fullName || "User"}
            </h4>

            <p>
              {isAuthenticated ? "Investor" : "Guest"}
            </p>
          </div>

        </div>


      </div>


    </header>
  );
};


export default Dashboardheader;