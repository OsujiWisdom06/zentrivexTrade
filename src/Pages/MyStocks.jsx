import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";
import "../styles/mystocks.css";

const MyStocks = () => {

  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // This will later come from your backend
  const stocks = [];

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

        <div className="stocks-container">

          <div className="stocks-header">
            <h2>My Stocks</h2>

            <p>
              View and manage all your stock investments in one place.
            </p>
          </div>

          {stocks.length === 0 ? (

            <div className="empty-stock-card">

              <div className="empty-stock-icon">
                📈
              </div>

              <h3>No Stocks Yet</h3>

              <p>
                You haven't purchased any stocks yet.
                Browse the market to discover available investment
                opportunities and start building your portfolio.
              </p>

              <button
                className="browse-market-btn"
                onClick={() => navigate("/markets")}
              >
                Browse Market
              </button>

            </div>

          ) : (

            <div className="stocks-grid">

              {stocks.map((stock) => (

                <div
                  className="stock-card"
                  key={stock._id}
                >

                  <div className="stock-top">

                    <h3>{stock.companyName}</h3>

                    <span>{stock.symbol}</span>

                  </div>

                  <div className="stock-info">

                    <p>
                      Shares:
                      <strong> {stock.quantity}</strong>
                    </p>

                    <p>
                      Current Price:
                      <strong> ${stock.currentPrice}</strong>
                    </p>

                    <p>
                      Total Value:
                      <strong> ${stock.totalValue}</strong>
                    </p>

                    <p
                      className={
                        stock.profit >= 0
                          ? "profit"
                          : "loss"
                      }
                    >
                      {stock.profit >= 0 ? "+" : ""}
                      {stock.profit}%
                    </p>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </main>

    </div>
  );
};

export default MyStocks;