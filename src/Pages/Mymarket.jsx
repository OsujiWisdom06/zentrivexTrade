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

const trendingContainer = document.getElementById(
  "trending_assets_widget"
);

if (trendingContainer) {

  trendingContainer.innerHTML = "";

  const script = document.createElement("script");

  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";

  script.type = "text/javascript";

  script.async = true;

  script.innerHTML = `
  {
    "colorTheme": "light",
    "dateRange": "12M",
    "exchange": "US",
    "showChart": true,
    "locale": "en",
    "width": "100%",
    "height": "600",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "showFloatingTooltip": true,
    "plotLineColorGrowing": "rgba(37, 99, 235, 1)",
    "plotLineColorFalling": "rgba(220, 38, 38, 1)",
    "gridLineColor": "rgba(240,243,250,0)",
    "scaleFontColor": "#6B7280",
    "belowLineFillColorGrowing": "rgba(37,99,235,0.12)",
    "belowLineFillColorFalling": "rgba(220,38,38,0.12)",
    "symbolActiveColor": "rgba(37,99,235,0.12)"
  }
  `;

  trendingContainer.appendChild(script);

}

const heatmapContainer = document.getElementById(
  "crypto_heatmap_widget"
);

if (heatmapContainer) {

  heatmapContainer.innerHTML = "";

  const script = document.createElement("script");

  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";

  script.type = "text/javascript";

  script.async = true;

  script.innerHTML = `
  {
    "dataSource": "Crypto",
    "blockSize": "market_cap_calc",
    "blockColor": "24h_close_change|5",
    "locale": "en",
    "symbolUrl": "",
    "colorTheme": "light",
    "hasTopBar": false,
    "isDataSetEnabled": false,
    "isZoomEnabled": true,
    "hasSymbolTooltip": true,
    "width": "100%",
    "height": "650"
  }
  `;

  heatmapContainer.appendChild(script);

}

const moversContainer = document.getElementById(
  "market_movers_widget"
);

if (moversContainer) {

  moversContainer.innerHTML = "";

  const script = document.createElement("script");

  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";

  script.type = "text/javascript";

  script.async = true;

  script.innerHTML = `
  {
    "colorTheme": "light",
    "dateRange": "12M",
    "exchange": "US",
    "showChart": true,
    "locale": "en",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "showFloatingTooltip": false,
    "width": "100%",
    "height": "600",
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(239, 83, 80, 1)",
    "gridLineColor": "rgba(240,243,250,0)",
    "scaleFontColor": "rgba(106,109,120,1)",
    "belowLineFillColorGrowing": "rgba(41,98,255,0.12)",
    "belowLineFillColorFalling": "rgba(239,83,80,0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41,98,255,0)",
    "belowLineFillColorFallingBottom": "rgba(239,83,80,0)",
    "symbolActiveColor": "rgba(41,98,255,0.12)"
  }
  `;

  moversContainer.appendChild(script);

}

const newsContainer = document.getElementById(
  "market_news_widget"
);

if (newsContainer) {

  newsContainer.innerHTML = "";

  const script = document.createElement("script");

  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";

  script.type = "text/javascript";

  script.async = true;

  script.innerHTML = `
  {
    "feedMode": "all_symbols",
    "colorTheme": "light",
    "isTransparent": false,
    "displayMode": "regular",
    "width": "100%",
    "height": "650",
    "locale": "en"
  }
  `;

  newsContainer.appendChild(script);

}


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


           {/* Trending Assets */}

<div className="market-section">

  <h3>
    Trending Assets
  </h3>

  <div
    id="trending_assets_widget"
    className="trending-assets-widget"
  ></div>

</div>


          </div>







          {/* Crypto Heatmap */}

          <div className="market-section">


{/* Crypto Heatmap */}

<div className="market-section">

  <h3>
    Crypto Heatmap
  </h3>

  <div
    id="crypto_heatmap_widget"
    className="crypto-heatmap-widget"
  ></div>

</div>


          </div>







          {/* Market Movers */}

          <div className="market-section">


           {/* Top Gainers & Losers */}

<div className="market-section">

  <h3>
    Top Gainers & Losers
  </h3>

  <div
    id="market_movers_widget"
    className="market-movers-widget"
  ></div>

</div>

          </div>






          {/* Market News */}

          <div className="market-section">


            {/* Market News */}

<div className="market-section">

  <h3>
    Market News
  </h3>

  <div
    id="market_news_widget"
    className="market-news-widget"
  ></div>

</div>


          </div>





        </div>



      </main>



    </div>

  );

};


export default MyMarkets;