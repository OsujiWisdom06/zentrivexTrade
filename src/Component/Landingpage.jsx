import React from 'react'
import '../styles/landingpage.css'
import InvestmentPlans from './InvestmentPlans'
import Footer from './Footer'
import { useEffect, useRef } from "react";
import { useState } from 'react';
import { TiStar } from 'react-icons/ti';
import { useTranslation } from 'react-i18next';


const Landingpage = () => {

    const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Johnson",
    rating: "⭐⭐⭐⭐⭐",
    country: "United States",
    review:
      "ZentrivexTrade has completely transformed my investment journey. The platform is secure, fast, and very easy to use."
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Michael Brown",
    country: "Canada",
      rating: "⭐⭐⭐⭐⭐",
    review:
      "Excellent customer support and smooth withdrawals. I've recommended ZentrivexTrade to several friends."
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Emma Wilson",
    country: "United Kingdom",
      rating: "⭐⭐⭐⭐⭐",
    review:
      "The investment plans are transparent and profitable. I couldn't be happier with the results."
  },
  {
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "David Anderson",
      rating: "⭐⭐⭐⭐",
    country: "Australia",
    review:
      "A trustworthy platform with an amazing user experience. Everything works exactly as expected."
  },
  {
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Sophia Martinez",
      rating: "⭐⭐⭐⭐⭐",
    country: "Spain",
    review:
      "I've been investing here for months and the returns have exceeded my expectations."
  },
  {
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "James Carter",
      rating: "⭐⭐⭐⭐",
    country: "Germany",
    review:
      "Reliable, professional and secure. This is by far one of the best investment platforms I've used."
  },

  {
  image: "https://randomuser.me/api/portraits/women/12.jpg",
  name: "Olivia Thompson",
  rating: "⭐⭐⭐⭐⭐",
  country: "New Zealand",
  review: "The platform is incredibly intuitive, and my investments have grown steadily. I couldn't be happier."
},
{
  image: "https://randomuser.me/api/portraits/men/41.jpg",
  name: "Daniel Roberts",
  rating: "⭐⭐⭐⭐",
  country: "Ireland",
  review: "I appreciate the transparency and security. Every transaction has been smooth and reliable."
},
{
  image: "https://randomuser.me/api/portraits/women/23.jpg",
  name: "Grace Kim",
  country: "South Korea",
  rating: "⭐⭐⭐⭐⭐",
  review: "Customer support responds quickly, and the investment dashboard makes everything easy to understand."
},
{
  image: "https://randomuser.me/api/portraits/men/57.jpg",
  name: "William Harris",
  country: "United States",
  rating: "⭐⭐⭐⭐⭐",
  review: "I've tried several investment platforms, and ZentrivexTrade is by far the most professional."
},
{
  image: "https://randomuser.me/api/portraits/women/35.jpg",
  name: "Isabella Rossi",
  country: "Italy",
  rating: "⭐⭐⭐⭐",
  review: "My portfolio has performed better than expected. The automated investment tools are excellent."
},
{
  image: "https://randomuser.me/api/portraits/men/81.jpg",
  name: "Lucas Ferreira",
  country: "Brazil",
  rating: "⭐⭐⭐⭐⭐",
  review: "Deposits and withdrawals are fast, and I always feel confident trading on this platform."
},
{
  image: "https://randomuser.me/api/portraits/women/55.jpg",
  name: "Amelia Scott",
  country: "South Africa",
  rating: "⭐⭐⭐⭐⭐",
  review: "Secure, transparent, and easy to navigate. I've recommended it to my family and colleagues."
},
{
  image: "https://randomuser.me/api/portraits/men/67.jpg",
  name: "Ethan Clark",
  country: "Singapore",
  rating: "⭐⭐⭐⭐⭐",
  review: "The market insights and analytics have helped me make much better investment decisions."
},
{
  image: "https://randomuser.me/api/portraits/women/74.jpg",
  name: "Charlotte Evans",
  country: "France",
  rating: "⭐⭐⭐⭐⭐",
  review: "Everything from registration to investing was seamless. It's a platform I truly trust."
},
{
  image: "https://randomuser.me/api/portraits/men/91.jpg",
  name: "Alexander Novak",
  country: "Switzerland",
  rating: "⭐⭐⭐⭐",
  review: "Excellent returns, professional service, and a beautiful interface. I'm very satisfied with my experience."
}
];


const [years, setYears] = useState(0);
const [customers, setCustomers] = useState(0);
const [trust, setTrust] = useState(0);
const [currentTestimonial, setCurrentTestimonial] = useState(0);
const [animate, setAnimate] = useState(false);

const { t } = useTranslation();


     const chartRef = useRef(null);
     const tickerRef = useRef(null);useEffect(() => {
    const animateCounter = (target, setter, duration = 3000) => {
        let start = 0;
        const increment = target / (duration / 16);

        const counter = setInterval(() => {
            start += increment;

            if (start >= target) {
                setter(target);
                clearInterval(counter);
            } else {
                setter(Math.floor(start));
            }
        }, 16);
    };

    animateCounter(10, setYears);
    animateCounter(600000, setCustomers);
    animateCounter(100, setTrust);
}, []);

useEffect(() => {
  if (!tickerRef.current) return;

  tickerRef.current.innerHTML = "";

  const script = document.createElement("script");
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
  script.type = "text/javascript";
  script.async = true;

  script.innerHTML = JSON.stringify({
    symbols: [
      { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
      { proName: "FOREXCOM:NSXUSD", title: "NASDAQ 100" },
      { proName: "FOREXCOM:DJI", title: "Dow Jones" },
      { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
      { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      { proName: "BINANCE:BNBUSDT", title: "BNB" },
      { proName: "BINANCE:SOLUSDT", title: "Solana" },
      { proName: "FX:EURUSD", title: "EUR/USD" },
      { proName: "FX:GBPUSD", title: "GBP/USD" },
      { proName: "TVC:GOLD", title: "Gold" },
      { proName: "TVC:SILVER", title: "Silver" },
      { proName: "NASDAQ:AAPL", title: "Apple" },
      { proName: "NASDAQ:TSLA", title: "Tesla" }
    ],
    showSymbolLogo: true,
    colorTheme: "dark",
    isTransparent: true,
    displayMode: "adaptive",
    locale: "en"
  });

  tickerRef.current.appendChild(script);
}, []);

      useEffect(() => {
    chartRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "SP:SPX",
      interval: "15",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      support_host: "https://www.tradingview.com",
    });

    chartRef.current.appendChild(script);
  }, []);

 useEffect(() => {
  const interval = setInterval(() => {
    setAnimate(false);

    setTimeout(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );

      setAnimate(true);
    }, 100);
  }, 4000);

  setAnimate(true);

  return () => clearInterval(interval);
}, []);

const sectionRef = useRef(null);

const [hasAnimated, setHasAnimated] = useState(false);

const [counts, setCounts] = useState({
  rating: 0,
  reviews: 0,
  activeUsers: 0,
  uptime: 0,
  assets: 0,
  support: 0,
});

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setHasAnimated(true);
      } else {
        setHasAnimated(false);

        setCounts({
          rating: 0,
          reviews: 0,
          activeUsers: 0,
          uptime: 0,
          assets: 0,
          support: 0,
        });
      }
    },
    {
      threshold: 0.4,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!hasAnimated) return;

  const targets = {
    rating: 4.9,
    reviews: 17847,
    activeUsers: 50,
    uptime: 99.9,
    assets: 2.5,
    support: 24,
  };

  const duration = 2000;
  const fps = 60;
  const totalFrames = (duration / 1000) * fps;

  let frame = 0;

  const timer = setInterval(() => {
    frame++;

    const progress = Math.min(frame / totalFrames, 1);

    setCounts({
      rating: +(targets.rating * progress).toFixed(1),
      reviews: Math.floor(targets.reviews * progress),
      activeUsers: Math.floor(targets.activeUsers * progress),
      uptime: +(targets.uptime * progress).toFixed(1),
      assets: +(targets.assets * progress).toFixed(1),
      support: Math.floor(targets.support * progress),
    });

    if (progress === 1) {
      clearInterval(timer);
    }
  }, 1000 / fps);

  return () => clearInterval(timer);
}, [hasAnimated]);

  return (
    <div className='landing-page-main'>
        <div className="landing-header-top">
  <div className="tradingview-widget-container">
    <div
      className="tradingview-widget-container__widget"
      ref={tickerRef}
    ></div>
  </div>
</div>
        <div className='landing-hero-page'>
            <div className='landing-hero-page-wrap'>
                <div className='landing-hero-page-div-1'>
                    <h1 style={{color: "white"}}>Your Trusted Platform for</h1>
                    <h1 style={{color:"#438617"}}>Smart Investments and</h1>
                    <h1 style={{color: "white"}}>Wealth Growth.</h1>
                </div>
                <div className='landing-hero-page-div-2'>
                    <p>The premier investment platform tailored for all your financial goals.</p>
                    <p>Invest in real estates, stocks, assets and grow your wealth effortlessly with</p>
                    <p>ZentrivexTrade.</p>
                </div>
               <div className='landing-hero-page-div-3'>
    <div className='hero-statistics-div1'>
        <h1>{years}+</h1>
        <p style={{ color: "gray" }}>Years of Excellence</p>
    </div>

    <div className='hero-statistics-div2'>
        <h1>{customers.toLocaleString()}+</h1>
        <p style={{ color: "gray" }}>Satisfied Customers</p>
    </div>

    <div className='hero-statistics-div3'>
        <h1>{trust}%</h1>
        <p style={{ color: "gray" }}>Client Trust</p>
    </div>
</div>
                <div className='landing-hero-page-div-4'>
                    <div className='hero-div-start-investing'>
                        <button className='start-investing-btn'>Start Investing</button>
                        <button className='view-market-btn'>View Market</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='live-data-market-div'>
            <div className='live-data-market-div-wrap'>
                <div className='live-data-market-div-1'>
                    <h1>Live Market Data</h1>
                    <p style={{color: "gray", fontSize:"20px"}}>Real-time cryptocurrency and trading insights at your fingertips</p>
                </div>
                <div className='live-data-market-div-2'>
                    <div className='live-data-market-div-2-main'>
                          <div className="live-data-market-div-2-main">
      <div
        className="dingviewtra-widget-container"
        ref={chartRef}
        style={{ 
          width: "85%",
          height: "60vh",
          margin: "0 auto", }} >
        <div
          className="tradingview-widget-container__widget"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </div>
                    </div>
                    <div className='live-data-market-div-2-btm'>
                        <p style={{color: "blue", cursor: "pointer"}}><a style={{textDecoration: "none"}} href='https://www.tradingview.com'>Financial Market</a></p><p style={{color: "white"}}>By TradingView</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='why-zentrivex-trade'>
            <div className='why-zentrivex-trade-div-1'>
                <div className='why-zentrivex-trade-div-1-wrap'>
                    <div className='why-zentrivex-trade-div-1-wrap-top'>
                        <p>Why ZentrivexTrade</p>
                    </div>
                    <div className='why-zentrivex-trade-div-1-wrap-btm'>
                        <h1>Everything you need to trade smarter</h1>
                        <p style={{color: "gray"}}>Our platform combines advanced technology with user-friendly design to give</p>
                        <p style={{color: "gray"}}>you the edge in today's markets.</p>
                    </div>
                </div>
            </div>
            <div className='why-zentrivex-trade-div2'>
                <div className='why-zentrivex-trade-div2-wrap'>
                    <div className='why-zentrivex-trade-div2-box-top'>
                        <div className='why-zentrivex-trade-div2-box-top-1'>
                            <div className='why-zentrivex-trade-div2-box-top-1-wrap'>
                            <div className='why-zentrivex-trade-div2-box-top-1-text1'>
                                 <div className='why-zentrivex-trade-div2-box-top-1-text1-image-div'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9q-5pk20fPSTTsRgLTEywvvBzsX6X96OAVHuiAAAzcw&s=10" alt="image" />
                                </div>
                            </div>
                             <div className='why-zentrivex-trade-div2-box-top-1-text2'>
                                <h1>Real-time Market Insights</h1>
                                <p style={{color: "gray", fontSize: "16px"}}>Stay ahead with live data, advanced analytics, and AI-powered insights that help you make informed investment decisions.</p>
                             </div>
                             </div>
                        </div>
                        <div className='why-zentrivex-trade-div2-box-top-2'>
                             <div className='why-zentrivex-trade-div2-box-top-1-wrap'>
                            <div className='why-zentrivex-trade-div2-box-top-1-text1'>
                                <div className='why-zentrivex-trade-div2-box-top-1-text1-image-div'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKP-6gBOSNj38N9234-Fxerr9CE3PUpkoCBP2qVMItYQ&s=10" alt="image" />
                                </div>
                            </div>
                             <div className='why-zentrivex-trade-div2-box-top-1-text2'>
                                <h1>Automated Portfolio Management</h1>
                                <p style={{color: "gray", fontSize: "16px"}}>Let our intelligent algorithms optimize your portfolio automatically, rebalancing based on market conditions and your goals.</p>
                             </div>
                             </div>
                        </div>
                        <div className='why-zentrivex-trade-div2-box-top-3'>
                             <div className='why-zentrivex-trade-div2-box-top-1-wrap'>
                            <div className='why-zentrivex-trade-div2-box-top-1-text1'>
                                 <div className='why-zentrivex-trade-div2-box-top-1-text1-image-div'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9747ZZcfhrBqOMhWowArqwikbnCJmO75aPFS_E4wvcg&s=10" alt="image" />
                                </div>
                            </div>
                             <div className='why-zentrivex-trade-div2-box-top-1-text2'>
                                <h1>Secure Transactions</h1>
                                <p  style={{color: "gray", fontSize: "16px"}}>Your investments are protected with bank-level security, multi-factor authentication, and encrypted transactions.</p>
                             </div>
                             </div>
                        </div>
                    </div>
                     <div className='why-zentrivex-trade-div2-box-btm'>
                         <div className='why-zentrivex-trade-div2-box-top-1'>
                             <div className='why-zentrivex-trade-div2-box-top-1-wrap'>
                            <div className='why-zentrivex-trade-div2-box-top-1-text1'>
                                 <div className='why-zentrivex-trade-div2-box-top-1-text1-image-div'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnBKMxvfzktZcbfY1X5Zo9gXu-Oiool4skhr2PMxcqQ&s=10" alt="image" />
                                </div>
                            </div>
                             <div className='why-zentrivex-trade-div2-box-top-1-text2'>
                                <h1>Lightning Fast Execution</h1>
                                <p style={{color: "gray", fontSize: "16px"}}>Execute trades in milliseconds with our high-performance infrastructure built for speed and reliability.</p>
                             </div>
                             </div>
                         </div>
                        <div className='why-zentrivex-trade-div2-box-top-2'>
                             <div className='why-zentrivex-trade-div2-box-top-1-wrap'>
                            <div className='why-zentrivex-trade-div2-box-top-1-text1'>
                                 <div className='why-zentrivex-trade-div2-box-top-1-text1-image-div'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzylr3cCL4beeOWy6j_iZpuLTtq96AYHqjY_s9pCo9tQ&s=10" alt="image" />
                                </div>
                            </div>
                             <div className='why-zentrivex-trade-div2-box-top-1-text2'>
                                <h1>24/7 Expert Support</h1>
                                <p style={{color: "gray", fontSize: "16px"}}>Our dedicated support team is available around the clock to help you navigate markets and resolve any issues.</p>
                             </div>
                             </div>
                        </div>
                        <div className='why-zentrivex-trade-div2-box-top-3'>
                             <div className='why-zentrivex-trade-div2-box-top-1-wrap'>
                            <div className='why-zentrivex-trade-div2-box-top-1-text1'>
                                 <div className='why-zentrivex-trade-div2-box-top-1-text1-image-div'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2pD1GqWkbljBWQUNbzml_jdKSnJukbpCdFpxQTOhYQ&s=10" alt="image" />
                                </div>
                            </div>
                             <div className='why-zentrivex-trade-div2-box-top-1-text2'>
                                <h1>Advanced Analytics</h1>
                                <p style={{color: "gray", fontSize: "16px"}}>Deep dive into market trends with professional-grade charts, indicators, and reporting tools at your fingertips.</p>
                             </div>
                             </div>
                        </div>
                     </div>
                </div>
            </div>
            <div className='trusted-by-investors-div'>
                <div className='trusted-by-investors-div-1'>
                    <div className='trusted-by-investors-div-1-inner'>
                        <h1>Trusted by Investors Worldwide</h1>
                        <p style={{color: "gray", fontSize: "18px"}}>See what our community is saying about us</p>
                    </div>
                </div>
                <div className='trusted-by-investors-div-2' ref={sectionRef}>
    <div className='trusted-by-investors-div-2-inner'>
        <div className='trusted-by-investors-div-2-inner-wrap'>

            <div className='trusted-by-investors-div-2-inner-wrap-1'>

                <div className='trusted-by-investors-div-2-inner-wrap-rating-div'>

                    <div className='trusted-by-investors-div-2-inner-wrap-rating-div-top1'>
                        <h1>
                            {counts.rating}
                            <TiStar className='rating-icon' />
                        </h1>

                        <p>
                            Based on {counts.reviews.toLocaleString()} reviews
                        </p>
                    </div>

                    <div className='trusted-by-investors-div-2-inner-wrap-rating-div-btm'>
                        <p style={{ color: "gray" }}>
                            5
                            <TiStar className='trusted-div-number-rating' />
                        </p>

                        <p style={{ color: "gray" }}>
                            4
                            <TiStar className='trusted-div-number-rating' />
                        </p>

                        <p style={{ color: "gray" }}>
                            3
                            <TiStar className='trusted-div-number-rating' />
                        </p>

                        <p style={{ color: "gray" }}>
                            2
                            <TiStar className='trusted-div-number-rating' />
                        </p>

                        <p style={{ color: "gray" }}>
                            1
                            <TiStar className='trusted-div-number-rating' />
                        </p>
                    </div>

                </div>

                <div className='trusted-by-investors-div-2-inner-wrap-rating-number-div'>
                    <p>78%</p>
                    <p>15%</p>
                    <p>4%</p>
                    <p>2%</p>
                    <p>1%</p>
                </div>

            </div>

            <div className='trusted-by-investors-div-2-inner-wrap-2'>

                <div className='trusted-by-investors-div-2-inner-wrap-2-active-users'>

                    <h1 style={{ color: "#4E90E6" }}>
                        {counts.activeUsers}K+
                    </h1>

                    <p style={{ color: "gray" }}>
                        Active Users
                    </p>

                    <h1 style={{ color: "#A78BFA" }}>
                        {counts.uptime}%
                    </h1>

                    <p style={{ color: "gray" }}>
                        Uptime
                    </p>

                </div>

                <div className='trusted-by-investors-div-2-inner-wrap-2-asset-managed'>

                    <h1 style={{ color: "#438617" }}>
                        ${counts.assets}B+
                    </h1>

                    <p style={{ color: "gray" }}>
                        Assets Managed
                    </p>

                    <h1 style={{ color: "#8E742D" }}>
                        {counts.support}/7
                    </h1>

                    <p style={{ color: "gray" }}>
                        Support
                    </p>

                </div>

            </div>

        </div>
    </div>
</div>
               <div className='trusted-by-investors-div-3'>
    <div className='trusted-by-investors-div-3-inner'>
        <div
  className={`trusted-by-investors-div-3-inner-wrap ${
    animate ? "testimonial-animate" : ""
  }`}
>

            <div className='trusted-by-investors-div-3-inner-wrap-div1'>
               <p>{testimonials[currentTestimonial].rating}</p>
            </div>

            <div className='trusted-by-investors-div-3-inner-wrap-div2'>
                <p>{testimonials[currentTestimonial].review}</p>
            </div>

            <div className='trusted-by-investors-div-3-inner-wrap-div3'>
                <div className='trusted-by-investors-div-3-inner-wrap-div3-inner-main'>

                    <div className='trusted-by-investors-div-3-inner-wrap-div3-inner-main-image-div'>
                        <img
                            src={testimonials[currentTestimonial].image}
                            alt={testimonials[currentTestimonial].name}
                        />
                    </div>

                    <div className='trusted-by-investors-div-3-inner-wrap-div3-inner-main-name-div'>

                        <div className='trusted-by-investors-div-3-inner-wrap-div3-inner-main-name-div-top1'>
                            <h3>{testimonials[currentTestimonial].name}</h3>
                        </div>

                        <div className='trusted-by-investors-div-3-inner-wrap-div3-inner-main-name-div-top2'>
                            <p>{testimonials[currentTestimonial].country}</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
                <InvestmentPlans/>
                <Footer/>
            </div>
            <div>
                
            </div>
        </div>
    </div>
    
  )
}

export default Landingpage