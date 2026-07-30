import React, { useState } from "react";
import Sidebar from "../Component/Dashboard/Sidebar";
import Dashboardheader from "../Component/Dashboard/Dashboardheader";
import "../styles/sumarrydashboard.css";
import BalanceCard from "../Component/Dashboard/BalanceCard";
import RecentTransactions from "../Component/Dashboard/RecentTransaction";
import QuickAction from "../Component/Dashboard/QuickAction";

const SumarryDasboard = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="dashboard">

      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />

      <main className="dashboard-main">

        <Dashboardheader
          toggleSidebar={toggleSidebar}
        />

        <BalanceCard />

        <QuickAction />

        <RecentTransactions />

      </main>

    </div>
  );
};

export default SumarryDasboard;