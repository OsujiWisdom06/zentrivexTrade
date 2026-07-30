import React, { useEffect } from "react";
import "../styles/viewmarket.css"
import { useState } from "react";

const ViewMarket = () => {

  // =======================
// ACCOUNT
// =======================

const [balance, setBalance] = useState(0);

const [portfolio, setPortfolio] = useState([]);

const [transactions, setTransactions] = useState([]);

const [selectedStock, setSelectedStock] = useState(null);

const [quantity, setQuantity] = useState(1);

const [showModal, setShowModal] = useState(false);

const [modalMessage, setModalMessage] = useState("");

const stocks = [
  {
    symbol: "AAPL",
    name: "Apple",
    price: 213.54
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    price: 337.28
  },
  {
    symbol: "NVDA",
    name: "NVIDIA",
    price: 184.91
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    price: 531.42
  },
  {
    symbol: "AMZN",
    name: "Amazon",
    price: 243.17
  },
  {
    symbol: "META",
    name: "Meta",
    price: 811.35
  }
];

const buyStock = (stock) => {

  const total = stock.price * quantity;

  if (balance < total) {

    setModalMessage("Insufficient Funds");

    setShowModal(true);

    return;
  }

  setBalance(balance - total);

  setPortfolio(prev => [
    ...prev,
    {
      ...stock,
      quantity
    }
  ]);

  setTransactions(prev => [
    {
      type: "BUY",
      symbol: stock.symbol,
      quantity,
      total
    },
    ...prev
  ]);

  setModalMessage(
    `Successfully purchased ${quantity} ${stock.symbol} share(s)`
  );

  setShowModal(true);
};

const sellStock = (stock) => {

  const owned = portfolio.find(
    item => item.symbol === stock.symbol
  );

  if (!owned) {

    setModalMessage("You don't own this stock.");

    setShowModal(true);

    return;
  }

  const total = stock.price * owned.quantity;

  setBalance(balance + total);

  setPortfolio(prev =>
    prev.filter(item => item.symbol !== stock.symbol)
  );

  setTransactions(prev => [
    {
      type: "SELL",
      symbol: stock.symbol,
      quantity: owned.quantity,
      total
    },
    ...prev
  ]);

  setModalMessage(
    `Sold ${owned.quantity} ${stock.symbol}`
  );

  setShowModal(true);
};

  useEffect(() => {
    // Clear containers before loading widgets
    document.getElementById("tradingview_ticker").innerHTML = "";
    document.getElementById("tradingview_live_chart").innerHTML = "";
    document.getElementById("tradingview_market_overview").innerHTML = "";
    document.getElementById("tradingview_crypto").innerHTML = "";

    // ==========================
    // TICKER TAPE
    // ==========================
    const ticker = document.createElement("script");
    ticker.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    ticker.type = "text/javascript";
    ticker.async = true;

    ticker.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
        { proName: "FX:EURUSD", title: "EUR/USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { proName: "CAPITALCOM:GOLD", title: "Gold" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    document.getElementById("tradingview_ticker").appendChild(ticker);

    // ==========================
    // LIVE CHART
    // ==========================
    const liveChart = document.createElement("script");
    liveChart.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    liveChart.type = "text/javascript";
    liveChart.async = true;

    liveChart.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "15",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
    });

    document
      .getElementById("tradingview_live_chart")
      .appendChild(liveChart);

    // ==========================
    // MARKET OVERVIEW
    // ==========================
    const overview = document.createElement("script");
    overview.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    overview.type = "text/javascript";
    overview.async = true;

    overview.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      width: "100%",
      height: "550",
      showSymbolLogo: true,
      isTransparent: false,
      tabs: [
        {
          title: "Markets",
          symbols: [
            { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
            { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
            { s: "FOREXCOM:DJI", d: "Dow Jones" },
            { s: "FX:EURUSD", d: "EUR/USD" },
            { s: "FX:GBPUSD", d: "GBP/USD" },
            { s: "COMEX:GC1!", d: "Gold" },
          ],
        },
      ],
    });

    document
      .getElementById("tradingview_market_overview")
      .appendChild(overview);

    // ==========================
    // CRYPTO MARKET
    // ==========================
    const crypto = document.createElement("script");
    crypto.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    crypto.type = "text/javascript";
    crypto.async = true;

    crypto.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      width: "100%",
      height: "550",
      showSymbolLogo: true,
      isTransparent: false,
      tabs: [
        {
          title: "Crypto",
          symbols: [
            { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
            { s: "BINANCE:ETHUSDT", d: "Ethereum" },
            { s: "BINANCE:SOLUSDT", d: "Solana" },
            { s: "BINANCE:BNBUSDT", d: "BNB" },
            { s: "BINANCE:XRPUSDT", d: "XRP" },
            { s: "BINANCE:ADAUSDT", d: "Cardano" },
            { s: "BINANCE:DOGEUSDT", d: "Dogecoin" },
          ],
        },
      ],
    });

    document.getElementById("tradingview_crypto").appendChild(crypto);

    return () => {
      document.getElementById("tradingview_ticker").innerHTML = "";
      document.getElementById("tradingview_live_chart").innerHTML = "";
      document.getElementById("tradingview_market_overview").innerHTML = "";
      document.getElementById("tradingview_crypto").innerHTML = "";
    };
  }, []);

   useEffect(() => {
    const container = document.getElementById("tradingview_trending_assets");

    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      exchange: "US",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: "600",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(42, 46, 57, 0)",
      scaleFontColor: "rgba(219, 219, 219, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)"
    });

    container.appendChild(script);
  }, []);

    useEffect(() => {
    const container = document.getElementById("tradingview_forex_market");

    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      locale: "en",
      largeChartUrl: "",
      isTransparent: true,
      showFloatingTooltip: false,
      showChart: true,
      width: "100%",
      height: "650",
      plotLineColorGrowing: "rgba(41,98,255,1)",
      plotLineColorFalling: "rgba(41,98,255,1)",
      gridLineColor: "rgba(42,46,57,0)",
      scaleFontColor: "rgba(219,219,219,1)",
      belowLineFillColorGrowing: "rgba(41,98,255,0.12)",
      belowLineFillColorFalling: "rgba(41,98,255,0.12)",
      belowLineFillColorGrowingBottom: "rgba(41,98,255,0)",
      belowLineFillColorFallingBottom: "rgba(41,98,255,0)",
      symbolActiveColor: "rgba(41,98,255,0.12)",

      tabs: [
        {
          title: "Major Forex Pairs",
          symbols: [
            { s: "FX:EURUSD", d: "EUR/USD" },
            { s: "FX:GBPUSD", d: "GBP/USD" },
            { s: "FX:USDJPY", d: "USD/JPY" },
            { s: "FX:USDCHF", d: "USD/CHF" },
            { s: "FX:AUDUSD", d: "AUD/USD" },
            { s: "FX:USDCAD", d: "USD/CAD" },
            { s: "FX:NZDUSD", d: "NZD/USD" },
            { s: "FX:EURGBP", d: "EUR/GBP" },
            { s: "FX:EURJPY", d: "EUR/JPY" },
            { s: "FX:GBPJPY", d: "GBP/JPY" }
          ]
        }
      ],

      showSymbolLogo: true
    });

    container.appendChild(script);
  }, []);

    useEffect(() => {
    const container = document.getElementById("tradingview_bitcoin_news");

    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      feedMode: "symbol",
      symbol: "BINANCE:BTCUSDT",
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "regular",
      width: "100%",
      height: "700",
      locale: "en"
    });

    container.appendChild(script);
  }, []);


  return (
    <div className="market-container">

      {/* ======= LIVE TICKER ======= */}
      <div className="ticker-container">
        <div
          id="tradingview_ticker"
          className="tradingview-widget-container"
        ></div>
      </div>
      <div className="market-account">

    <div className="balance-card">

        <h3>Available Balance</h3>

        <h1>${balance.toFixed(2)}</h1>

    </div>

    <div className="balance-card">

        <h3>Portfolio Holdings</h3>

        <h1>{portfolio.length}</h1>

    </div>

    <div className="balance-card">

        <h3>Transactions</h3>

        <h1>{transactions.length}</h1>

    </div>

      <section className="market-widget">

<h2>Live Stock Market</h2>
<p style={{color: "white"}}>
  Track the live performance of 5 of the world's most popular stocks. Monitor real-time prices, daily changes, and market trends for leading companies to stay informed about the stock market.
</p>

<div className="stock-grid">

{

stocks.map(stock=>(

<div
className="stock-card"
key={stock.symbol}
>

<h3>{stock.name}</h3>

<p>{stock.symbol}</p>

<h2>${stock.price}</h2>

<input

type="number"

min={1}

value={quantity}

onChange={(e)=>setQuantity(Number(e.target.value))}

/>

<div className="stock-buttons">

<button
onClick={()=>buyStock(stock)}
>
Buy
</button>

<button
onClick={()=>sellStock(stock)}
>
Sell
</button>

</div>

</div>

))

}

</div>

</section>

<section className="market-widget">

<h2>Portfolio</h2>

<div className="portfolio-list">

{

portfolio.length===0?

<p style={{color: "white"}}>No stocks purchased.</p>

:

portfolio.map(item=>(

<div
className="portfolio-card"
key={item.symbol}
>

<h3>{item.name}</h3>

<p>{item.symbol}</p>

<p>

Shares:

{item.quantity}

</p>

</div>

))

}

</div>

</section>

<section className="market-widget">

<h2>Recent Transactions</h2>

<div className="transaction-list">

{

transactions.length===0?

<p style={{color: "white"}}>No transactions yet.</p>

:

transactions.map((item,index)=>(

<div
className="transaction-card"
key={index}
>

<strong>{item.type}</strong>

{item.symbol}

|

{item.quantity}

share(s)

|

$

{item.total.toFixed(2)}

</div>

))

}

</div>

</section>

{
showModal&&(

<div className="market-modal">

<div className="market-modal-content">

<h2>{modalMessage}</h2>

<button
onClick={()=>setShowModal(false)}
>
Close
</button>

</div>

</div>

)
}

</div>

      {/* ======= LIVE MARKET CHART ======= */}
      <section className="market-widget">
        <h2>Live Market Chart</h2>

        <div className="tradingview-widget-container">
          <div
            id="tradingview_live_chart"
            style={{ width: "100%", height: "650px" }}
          ></div>
        </div>
      </section>

      {/* ======= MARKET OVERVIEW ======= */}
      <section className="market-widget">
        <h2>Market Overview</h2>

        <div className="tradingview-widget-container">
          <div
            id="tradingview_market_overview"
            style={{ width: "100%", height: "550px" }}
          ></div>
        </div>
      </section>
      

      {/* ======= CRYPTO MARKET ======= */}
      <section className="market-widget">
        <h2>Crypto Market</h2>

        <div className="tradingview-widget-container">
          <div
            id="tradingview_crypto"
            style={{ width: "100%", height: "550px" }}
          ></div>
        </div>
      </section>

     <div className="trending-assets-widget">

    <div className="trending-assets-header">
      <h2>Trending Assets</h2>
      <p>
        Stay updated with the most actively traded and trending assets across global financial markets.
      </p>
    </div>

    <div id="tradingview_trending_assets"></div>

  </div>

    <div className="forex-market-widget">

    <div className="forex-market-header">
      <h2>Forex Market</h2>
      <p>Live exchange rates and price movements of the world's major currency pairs.</p>
    </div>

    <div id="tradingview_forex_market"></div>

  </div>

   <div className="bitcoin-news-widget">

      <div className="bitcoin-news-header">
        <h2>Bitcoin News</h2>
        <p>
          Stay informed with the latest Bitcoin news, market updates,
          price movements, and analysis from trusted financial sources.
        </p>
      </div>

      <div id="tradingview_bitcoin_news"></div>

    </div>

    </div>


    
  );
};

export default ViewMarket;