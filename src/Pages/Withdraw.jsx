import React from "react";
import DashboardHeader from "../Component/Dashboard/Dashboardheader";
import "../styles/withdraw.css";
import Sidebar from "../Component/Dashboard/Sidebar";

const Withdraw = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">

        {/* <DashboardHeader /> */}

        <div className="withdraw-container">

          <div className="withdraw-header">
            <h2>Withdraw Funds</h2>
            <p>Request a withdrawal from your investment account.</p>
          </div>

          <div className="withdraw-card">

            <div className="available-balance">
              <h4>Available Balance</h4>
              <h2>$15,200.00</h2>
            </div>

            <div className="withdraw-item">
              <label>Withdrawal Amount (USD)</label>
              <input
                type="number"
                placeholder="Enter withdrawal amount"
              />
            </div>

            <div className="withdraw-item">
              <label>Withdrawal Method</label>

              <select>
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>USDT (TRC20)</option>
              </select>
            </div>

            <div className="withdraw-item">
              <label>Wallet Address</label>

              <input
                type="text"
                placeholder="Enter your wallet address"
              />
            </div>

            <button className="withdraw-btn">
              Request Withdrawal
            </button>

          </div>

        </div>

      </main>
    </div>
  );
};

export default Withdraw;