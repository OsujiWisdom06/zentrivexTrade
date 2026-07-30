import React, { useState } from "react";
import "../styles/deposit.css";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";

const Deposit = () => {

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

        <div className="deposit-container">

          <div className="deposit-header">

            <h2>Deposit Funds</h2>

            <p>
              Fund your investment account securely.
            </p>

          </div>


          <div className="deposit-card">


            <div className="deposit-item">

              <label>
                Deposit Amount (USD)
              </label>

              <input
                type="number"
                placeholder="Enter amount"
              />

            </div>



            <div className="deposit-item">

              <label>
                Payment Method
              </label>

              <select>

                <option>
                  Bitcoin (BTC)
                </option>

                <option>
                  Ethereum (ETH)
                </option>

                <option>
                  USDT (TRC20)
                </option>

              </select>

            </div>



            <div className="deposit-item">

              <label>
                Wallet Address
              </label>

              <div className="wallet-address">
                bc1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </div>

            </div>



            <button className="deposit-btn">
              Continue Deposit
            </button>


          </div>


        </div>

      </main>

    </div>
  );
};

export default Deposit;