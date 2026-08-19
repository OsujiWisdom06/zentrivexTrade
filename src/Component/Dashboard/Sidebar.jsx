import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaChartLine,
  FaMoneyBillWave,
  FaWallet,
  FaExchangeAlt,
  FaBuilding,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authslice";
import "../../styles/sidebar.css";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const zentrivexlogo = "/src/assets/zentrivextradelogo.jpeg";

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/dash-board",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
    {
      name: "Investment",
      icon: <FaChartLine />,
      path: "/my-dashboard/investment-plans",
    },
    {
      name: "Deposit",
      icon: <FaMoneyBillWave />,
      path: "/deposit",
    },
    {
      name: "Withdraw",
      icon: <FaMoneyBillWave />,
      path: "/withdraw",
    },
    {
      name: "Transactions",
      icon: <FaExchangeAlt />,
      path: "/transactions/history",
    },
    {
      name: "My Wallet",
      icon: <FaWallet />,
      path: "/my-wallet",
    },
    {
      name: "Markets",
      icon: <FaChartLine />,
      path: "/dashboard/my-market",
    },
    {
      name: "My Stocks",
      icon: <FaChartLine />,
      path: "/my-stocks",
    },
    {
      name: "Real Estates",
      icon: <FaBuilding />,
      path: "/real-estates",
    },
  ];

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    // Clear user and token from Redux
    dispatch(logout());

    // Close sidebar
    closeSidebar();

    // Redirect to home/login
    nav("/");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      <aside
        className={`sidebar ${isOpen ? "active" : ""}`}
      >

        {/* Mobile Close Button */}
        <button
          className="sidebar-close-btn"
          onClick={closeSidebar}
        >
          <IoClose />
        </button>

        <div className="sidebar-top">
          <img
            src={zentrivexlogo}
            alt="Zentrivex Trade logo"
          />
        </div>

        <div className="sidebar-links">

          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
              onClick={closeSidebar}
            >
              <span>{item.icon}</span>
              <p>{item.name}</p>
            </NavLink>
          ))}

        </div>

        <div className="logout-section">

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;