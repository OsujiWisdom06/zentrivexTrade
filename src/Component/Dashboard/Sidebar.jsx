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
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/sidebar.css"

const Sidebar = ({ isOpen }) => {

  const nav = useNavigate()
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
      path: "/investment",
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
      path: "/transactions",
    },
    {
      name: "My Wallet",
      icon: <FaWallet />,
      path: "/my-wallet",
    },
    {
      name: "Markets",
      icon: <FaChartLine />,
      path: "/markets",
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
    <div className={isOpen ? "sidebar active" : "sidebar"}>
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
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span>{item.icon}</span>
            <p>{item.name}</p>
          </NavLink>
        ))}
      </div>

      <div className="logout-section">
        <button onClick={()=>nav("/")} className="logout-btn">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;