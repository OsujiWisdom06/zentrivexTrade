import React, { useState, useEffect } from "react";
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

  useEffect(() => {

  const container = document.getElementById("tradingview_chart");

  if(container){

    container.innerHTML = "";

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.type = "text/javascript";

    script.async = true;

    script.innerHTML = `
    {
      "autosize": true,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "allow_symbol_change": true,
      "calendar": false,
      "hide_side_toolbar": false,
      "hide_top_toolbar": false,
      "withdateranges": true,
      "details": true,
      "hotlist": true,
      "studies": [
        "STD;MACD",
        "STD;RSI"
      ]
    }
    `;

    container.appendChild(script);

  }


}, []);

useEffect(() => {

  const container = document.getElementById("forex_market_widget");


  if(container){

    container.innerHTML = "";


    const script = document.createElement("script");


    script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";


    script.type = "text/javascript";

    script.async = true;


    script.innerHTML = `

    {
      "colorTheme": "light",
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "width": "100%",
      "height": "500",
      "largeChartUrl": "",
      "isTransparent": false,

      "showSymbolLogo": true,

      "tabs": [
        {
          "title": "Forex",
          "symbols": [

            {
              "s": "FX:EURUSD",
              "d": "Euro / US Dollar"
            },

            {
              "s": "FX:GBPUSD",
              "d": "British Pound / US Dollar"
            },

            {
              "s": "FX:USDJPY",
              "d": "US Dollar / Japanese Yen"
            },

            {
              "s": "FX:AUDUSD",
              "d": "Australian Dollar / US Dollar"
            },

            {
              "s": "FX:USDCAD",
              "d": "US Dollar / Canadian Dollar"
            },

            {
              "s": "FX:USDCHF",
              "d": "US Dollar / Swiss Franc"
            }

          ]
        }
      ]
    }

    `;


    container.appendChild(script);

  }


}, []);


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

<div className="market-chart">

    <h3>
      Live Market Chart
    </h3>


    <div 
      id="tradingview_chart"
      className="tradingview-container"
    >

    </div>


</div>

          </div>






          {/* Forex Market */}

          <div className="market-section">

          {/* Forex Market */}

<div className="market-section">

  <h3>
    Forex Market
  </h3>


  <div 
    id="forex_market_widget"
    className="forex-widget"
  >

  </div>


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