import React from "react";
import Sidebar from "../Component/Dashboard/Sidebar";
import Dashboardheader from "../Component/Dashboard/Dashboardheader";
import "../styles/sumarrydashboard.css"
import BalanceCard from "../Component/Dashboard/BalanceCard";
import RecentTransactions from "../Component/Dashboard/RecentTransaction";
import QuickAction from "../Component/Dashboard/QuickAction";
const SumarryDasboard = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-main">

        <Dashboardheader />
        <BalanceCard />
        <QuickAction/>
        < RecentTransactions/>

      </main>

    </div>
  );
};

export default SumarryDasboard;