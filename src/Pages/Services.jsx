import React from 'react'
import Header from '../Component/Header'
import '../styles/services.css'
import { FaBitcoinSign, FaDollarSign, FaGraduationCap, FaHouseChimney, FaWarehouse } from 'react-icons/fa6'
import { TiChartLine } from 'react-icons/ti'
import Footer from '../Component/Footer'
import InvestmentPlans from '../Component/InvestmentPlans'

const Services = () => {
  return (
    <div className='our-services-main-div-main'>
      <Header/>
      <div className='our-service-hero'>
        <div className='our-service-hero-inner'>
          <h1>Our Services</h1>
          <p style={{fontSize: "17px"}}>At ZENTRIVEX-TRADE, we offer a range of tailored investment services designed to meet your unique financial goals. 
            Whether you're looking to grow your wealth, diversify your portfolio, 
            or secure your financial future, we provide the tools and support to help you succeed in the world of investing.</p>
        </div>
      </div>
      <div className='our-services-we-thrive-div'>
        <div className='our-services-we-thrive-div-top-1'>
          <h1>We strive to make investing a straightforward,</h1>
          <h1> secure, and rewarding experience.</h1>
        </div>
        <div className='our-services-we-thrive-div-top-2'>
          <div className='our-services-we-thrive-div-top-2-wrap'>
            <div className='our-services-we-thrive-div-top-top1-div'>
              <div className='our-services-first-box-investmentplans'>
                <div className='our-services-first-box-investmentplans-wrap'>
                  <h1><FaWarehouse /></h1>
                  <h2>Investment Portfolios</h2>
                  <p style={{fontSize: "14px"}}>Our customized investment portfolios are designed to match your risk tolerance and financial objectives.</p>
                </div>
              </div>
              <div className='our-services-first-box-investmentplans'>
                <div className='our-services-first-box-investmentplans-wrap'>
                  <h1><TiChartLine /></h1>
                  <h2>Retirement Planning</h2>
                  <p style={{fontSize: "14px"}}>Prepare for a secure future with our retirement planning services. We help you build a long-term strategy that helps you fund your retirement comfortably.</p>
                </div>
              </div>
              <div className='our-services-first-box-investmentplans'>
                <div className='our-services-first-box-investmentplans-wrap'>
                  <h1><FaBitcoinSign /></h1>
                  <h2>Cryptocurrency</h2>
                  <p style={{fontSize: "14px"}}>With the growing popularity of digital assets, ZENTRIVEX-TRADE offers secure and transparent cryptocurrency investment opportunities.</p>
                </div>
              </div>
            </div>
             <div className='our-services-we-thrive-div-top-top2-div'>
              <div className='our-services-first-box-investmentplans'>
                <div className='our-services-first-box-investmentplans-wrap'>
                  <h1><FaDollarSign /></h1>
                  <h2>Wealth Management</h2>
                  <p style={{fontSize: "14px"}}>Take a comprehensive approach to managing your wealth with our expert wealth management services.</p>
                </div>
              </div>
              <div className='our-services-first-box-investmentplans'>
                <div className='our-services-first-box-investmentplans-wrap'>
                  <h1><FaHouseChimney /></h1>
                  <h2>Real Estate</h2>
                  <p style={{fontSize: "14px"}}>Diversify your portfolio with our real estate investment services, which provide access to lucrative property investment opportunities.</p>
                </div>
              </div>
              <div className='our-services-first-box-investmentplans'>
                <div className='our-services-first-box-investmentplans-wrap'>
                  <h1><FaGraduationCap /></h1>
                  <h2>Educational Resources</h2>
                  <p style={{fontSize: "14px"}}>We believe informed investors are successful investors, so we offer a range of educational resources to help you make smarter financial decisions.</p>
                </div>
              </div>
             </div>
          </div>
        </div>
      </div>
      <div>
        <InvestmentPlans/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Services