import React from 'react'
import "../styles/footer.css"
import { useNavigate } from 'react-router-dom'
import { FaSquareFacebook, FaSquareInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {

    const footerimage = "/src/assets/zentrivextradelogo.jpeg"

    const nav = useNavigate()

  return (
    <div className='footer-div'>
        <div className='footer-div-wrap'>
            <div className='footer-div-top'>
             <div className='footer-div-inner1'>
                <div className='footer-logo-div'>
                    <img src={footerimage} alt="image" />
                </div>
                <div className='footer-text-div'>
                    <p>Our mission is to provide innovative solutions that empower businesses to succeed.</p>
                </div>
             </div>
            <div className='footer-div-inner2'>
                <h3 style={{cursor: "pointer"}}>Pages</h3>
                <p onClick={()=>nav("/")} style={{cursor: "pointer", fontSize: "14px"}}>Home</p>
                <p onClick={()=>nav("/about-us")} style={{cursor: "pointer", fontSize: "14px"}}>About</p>
                <p onClick={()=>nav("/services")} style={{cursor: "pointer" , fontSize: "14px"}}>Services</p>
            </div>
            <div className='footer-div-inner3'>
                <div className='footer-div-get-started-div'>
                    <h3>Get Started</h3>
                </div>
                <div className='footer-div-signup-div'>
                    <button onClick={()=>nav("/register")} className='footer-div-signup-btn'>Sign Up</button>
                </div>
            </div>
            <div className='footer-div-inner4'>
                <div className='footer-div-inner4-follow-us'>
                    <h3>Follow Us</h3>
                </div>
                <div className='footer-div-inner4-socials'>
                   <FaSquareFacebook className='social-icon-class'/> <FaTwitter className='social-icon-class'/> <FaSquareInstagram className='social-icon-class'/>
                </div>
            </div>
            </div>
            <div className='footer-div-btm'>
                ©2026 ZentrivexTrade. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer