import React, { useState } from "react";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";
import "../styles/mymarket.css";

const MyMarkets = () => {

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



        <div className="markets-container">



          <div className="markets-header">

            <h2>
              Market Overview
            </h2>

            <p>
              Track live prices, charts, and market movements.
            </p>

          </div>





          {/* TradingView Live Chart */}

          <div className="market-chart">


            <h3>
              Live Market Chart
            </h3>


            <div className="chart-placeholder">

              TradingView Chart Coming Soon

            </div>


          </div>






          {/* Forex Market */}

          <div className="market-section">

            <h3>
              Forex Market
            </h3>


            <div className="widget-placeholder">

              Forex Market Widget

            </div>

          </div>







          {/* Trending Assets */}

          <div className="market-section">

            <h3>
              Trending Assets
            </h3>


            <div className="widget-placeholder">

              Trending Assets Widget

            </div>


          </div>







          {/* Crypto Heatmap */}

          <div className="market-section">


            <h3>
              Crypto Heatmap
            </h3>


            <div className="widget-placeholder">

              Crypto Heatmap Widget

            </div>


          </div>







          {/* Market Movers */}

          <div className="market-section">


            <h3>
              Top Gainers & Losers
            </h3>


            <div className="widget-placeholder">

              Top Movers Widget

            </div>


          </div>








          {/* Fear And Greed */}

          <div className="market-section">


            <h3>
              Fear & Greed Index
            </h3>


            <div className="widget-placeholder">

              Fear & Greed Index Widget

            </div>


          </div>







          {/* Market News */}

          <div className="market-section">


            <h3>
              Market News
            </h3>


            <div className="widget-placeholder">

              Market News Widget

            </div>


          </div>





        </div>



      </main>



    </div>

  );

};


export default MyMarkets;