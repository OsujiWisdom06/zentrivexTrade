import React from "react";
import "../../styles/balancecard.css"
import {
  FaWallet,
  FaArrowCircleUp,
  FaChartLine,
  FaCoins,
} from "react-icons/fa";

const BalanceCard = () => {
  return (
    <section className="balance-section">

      {/* Large Balance Card */}
      <div className="total-balance-card">

        <div className="balance-top">
          <p>Total Balance</p>
          <FaWallet />
        </div>

        <h1>$18,562.90</h1>

        <div className="balance-bottom">
          <span>+$1,250.00 Today</span>
        </div>

      </div>

      {/* Right Cards */}

      <div className="balance-small-cards">

        <div className="small-card">

          <div className="small-top">
            <p>Available Balance</p>
            <FaCoins />
          </div>

          <h2>$15,200</h2>

        </div>

        <div className="small-card">

          <div className="small-top">
            <p>Total Profit</p>
            <FaArrowCircleUp />
          </div>

          <h2>$3,250</h2>

        </div>

        <div className="small-card">

          <div className="small-top">
            <p>Active Investment</p>
            <FaChartLine />
          </div>

          <h2>06</h2>

        </div>

      </div>

    </section>
  );
};

export default BalanceCard;