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
import "../../styles/sidebar.css";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const nav = useNavigate();

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

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <aside className={`sidebar ${isOpen ? "active" : ""}`}>

        {/* Mobile Close Button */}

        <button
          className="sidebar-close-btn"
          onClick={closeSidebar}
        >
          <IoClose />
        </button>

        <div className="sidebar-top">
          <h2>Zentrivex</h2>
          <span>Trade</span>
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
            onClick={() => {
              closeSidebar();
              nav("/");
            }}
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