import React from "react";
import Sidebar from "../Component/Dashboard/Sidebar";
import DashboardHeader from "../Component/Dashboard/Dashboardheader";
import "../styles/market.css";
import {
  FaBitcoin,
  FaEthereum,
  FaCoins,
  FaArrowUp,
} from "react-icons/fa";

const markets = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$118,450.25",
    change: "+2.45%",
    icon: <FaBitcoin />,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,845.90",
    change: "+1.78%",
    icon: <FaEthereum />,
  },
  {
    id: 3,
    name: "USDT",
    symbol: "USDT",
    price: "$1.00",
    change: "0.00%",
    icon: <FaCoins />,
  },
  {
    id: 4,
    name: "BNB",
    symbol: "BNB",
    price: "$825.42",
    change: "+4.12%",
    icon: <FaArrowUp />,
  },
];

const Markets = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-main">

        {/* <DashboardHeader /> */}

        <div className="markets-container">

          <div className="markets-header">
            <h2>Markets</h2>
            <p>Track the latest cryptocurrency market prices.</p>
          </div>

          <div className="markets-grid">

            {markets.map((market) => (
              <div className="market-card" key={market.id}>

                <div className="market-top">

                  <div className="market-icon">
                    {market.icon}
                  </div>

                  <div>
                    <h3>{market.name}</h3>
                    <span>{market.symbol}</span>
                  </div>

                </div>

                <h1>{market.price}</h1>

                <div className="market-bottom">

                  <span className="market-change">
                    {market.change}
                  </span>

                  <button>View</button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </main>

    </div>
  );
};

export default Markets;