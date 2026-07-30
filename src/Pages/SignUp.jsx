import React from 'react'
import "../styles/signup.css"
import { FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const nav = useNavigate()

  const zentrivexsignuplogo = "/src/assets/zentrivextradelogo.jpeg"

  return (
    <div className='SignUp'>
      <div className='sign-up-main-div'>
        <div className='sign-up-main-div-top'>
          <div className='sign-up-main-logo-div'>
             <img src={zentrivexsignuplogo} alt="logo" />
          </div>
          <div className='sign-up-main-text-div'><p>Your Modern Investment Platform</p></div>
        </div>
        <div className='sign-up-main-div-btm'>
          <form className='signup-btm-main-form'>
            <div className='signup-btm-main-form-wrap'>
              <div className='signup-name-div'>
              <p>Full Name</p>
              <input className='signup-input-div' type="text" placeholder='Enter your full name...'/>
            </div>
            <div className='signup-email-div'>
              <p>Email</p>
              <input className='signup-input-div' type="text" placeholder='Enter your email...'/>
            </div>
            <div className='signup-password-div'>
              <div className='signup-password-div-main'>
                <p>Password</p>
                <input className='signup-password1-input' type="password" placeholder='Enter your password...'/>
              </div>
              <div className='signup-password-div-hide-icon'>
                <div className='signup-password-div-hide-icon-inner'>
                   <FaEye className='password-eye'/>
                </div>
              </div>
            </div>
            <div className='signup-confirm-password-div'>
              <div className='signup-confirm-input-div'>
                <p>Confirm Password</p>
                <input className='signup-confirm-input-main' type="password" placeholder='Confirm your password....'/>
              </div>
              <div className='signup-confirm-hide-icon-div'>
                <div className='sign-up-confirm-main-hide'>
                   <FaEye className='password-eye'/>
                </div>
              </div>
            </div>
            <div className='signupmain-btn-div'>
              <button className='sign-up-form-btn'>Sign Up</button>
            </div>
            </div>
          </form>
          <div className='sign-up-btm-alreadt-text'>
            <p style={{color: "white"}}>Already have an Account?</p>
            <p onClick={()=>nav("/login")} style={{color: "#438617", cursor: "pointer"}}>Sign In</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp