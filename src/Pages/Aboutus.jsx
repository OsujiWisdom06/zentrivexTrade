import React from 'react'
import "../styles/aboutus.css"
import Header from '../Component/Header'
import { LuDot } from "react-icons/lu";
import Footer from '../Component/Footer';

const Aboutus = () => {
  return (
    <div>
      <div className='about-us'>
        <Header/>
        <div className='about-us-main'>
          <div className='about-us-hero-inner'>
            <h1>About Us</h1>
            <p style={{fontSize: "17px"}}>At ZentrivexTrade, we believe that investing should be secure, transparent, and accessible to everyone. 
              We are a global investment platform dedicated to helping individuals and businesses achieve their financial goals with confidence. 
              Whether you're a first-time investor or a seasoned professional, ZentrivexTrade provides 
              the tools, resources, and expert insights you need to grow your wealth efficiently and responsibly.</p>
          </div>
        </div>
        <div className='about-us-our-mission-our-vision'>
          <div className='about-us-our-mission-div'>
            <div className='about-us-our-mission-div1'>
              <h1>Our Mission</h1>
              <p  style={{fontSize: "17px"}}>Our mission is simple: to empower people to take control of their financial future. We strive to make investing a straightforward, 
                secure, and rewarding experience by providing
                 cutting-edge technology, expert financial advice, and a range of high-performing investment opportunities tailored to meet your needs.</p>
            </div>
             <div className='about-us-our-mission-div2'>
              <div className='about-us-our-mission-div2-inner-image'>
                <img src="https://www.trade-locker.com/_next/image?url=%2Fimages%2Fproducts%2Fmission-arrow.png&w=384&q=75" alt="image" />
              </div>
             </div>
          </div>
          <div className='about-us-our-vision-div'>
            <div className='about-us-our-vision-div-inner'>
              <h1>Our Story</h1>
              <p  style={{fontSize: "17px"}}>TradeLocker was created by a group of financial experts and tech innovators who recognized a gap in the market
                 for a reliable, user-friendly investment platform. Over the years, we've grown into a trusted name in the investment industry, 
                 serving individuals and companies across the globe. Our commitment to innovation 
                and transparency sets us apart, and we continue to evolve to meet the changing needs of the financial world.</p>
            </div>
          </div>
        </div>
        <div className='why-choose-us-div'>
          <div className='why-choose-us-div-top'>
            <div className='why-choose-us-div-top-1'>
              <h1>Why Choose ZentrivexTrade?</h1>
              <p style={{fontSize: "17px"}}><LuDot/>Cutting-Edge Technology: Our platform uses the latest financial technology to make investing seamless and efficient</p>
              <p style={{fontSize: "17px"}}><LuDot/>Transparency & Security: We maintain full transparency, so you always know where your investments stand.</p>
              <p style={{fontSize: "17px"}}><LuDot/>Expert Support: Our team of financial experts is available 24/7 to offer guidance and support whenever you need it.</p>
              <p style={{fontSize: "17px"}}><LuDot/>High Client Satisfaction: With a 98% client satisfaction rate, we pride ourselves on delivering results that matter.</p>
            </div>
            <div className='why-choose-us-div-top-2'>
              <div className='why-choose-us-div-top-2-inner-image'>
                <img src="https://www.trade-locker.com/_next/image?url=%2Fimages%2Fproducts%2Fabout_why_choose_image.png&w=384&q=75" alt="image" />
              </div>
            </div>
          </div>
          <div className='why-choose-us-div-btm'>
            <div className='why-choose-us-div-btm-1'>
              <div className='why-choose-us-div-btm-1-image-div'>
                <img src="https://www.trade-locker.com/_next/image?url=%2Fimages%2Fproducts%2Fabout-money.png&w=384&q=75" alt="image" />
              </div>
            </div>
            <div className='why-choose-us-div-btm-2'>
              <h1>Our Values</h1>
              <p style={{fontSize: "17px"}}><LuDot/>Integrity: Trust is the foundation of everything we do. We operate with full transparency and always act in the best interest of our clients.</p>
              <p style={{fontSize: "17px"}}><LuDot/>Innovation: We are constantly pushing the boundaries of what's possible in investment technology to deliver the best experience for our users</p>
              <p style={{fontSize: "17px"}}><LuDot/>Customer-Centric: Every decision we make starts with our client's needs. We prioritize exceptional customer service and personalized investment solutions.</p>
            </div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Aboutus