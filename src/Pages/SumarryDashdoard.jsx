import React, { useState } from "react";
import Sidebar from "../Component/Dashboard/Sidebar";
import BalanceCard from "../Component/Dashboard/BalanceCard";
import RecentTransactions from "../Component/Dashboard/RecentTransaction";
import QuickAction from "../Component/Dashboard/QuickAction";
import "../styles/sumarrydashboard.css";
import TopHeader from "../Component/TopHeader";
import DasboardInvestmentPlans from "../Component/DasboardInvestmentPlans";

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

        <TopHeader
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