import React from 'react'
import "../styles/login.css"
import { FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const zentrivexlogo = "/src/assets/zentrivextradelogo.jpeg"

  const nav = useNavigate()


  return (
    <div className='login-main'>
      <div className='login-main-div'>
        <div className='login-main-div-wrap'>
          <div className='login-main-div-top'>
            <div className='login-main-div-top1'>
              <img src={zentrivexlogo} alt="logo" />
            </div>
            <div className='login-main-div-top2'>
              <p>Your Modern Investment Platform</p>
            </div>
          </div>
          <div className='login-main-div-btm'>
            <form className='login-main-form'>
              <div className='login-main-form-div-top'>
                <div className='login-email-div'>
                  <p>Email</p>
                  <input className='login-input-email' type="email" placeholder='Enter your email...'/>
                </div>
                <div className='login-password-div'>
                    <p>Password</p>
                    <div className='input-div'>
                      <div className='login-input-div-main'>
                         <input className='login-input' type="password" placeholder='Enter your password...'/>
                      </div>
                      <div className='login-hide-icon'>
                        <FaEye className='password-eye'/>
                      </div>
                    </div>
                </div>
              </div>
              <div className='login-main-form-div2-btm'>
                <div className='login-main-form-remember-me-div'>
                  <div className='login-remember-me-div'>
                    <input type="checkbox" />
                    <p>Remember this Device</p>
                  </div>
                <div className='login-remember-me-div2'>
                  <p onClick={()=>nav("/forgot-password")} style={{cursor: "pointer"}}>Forgot Password?</p>
                </div>
                </div>
                <div className='login-main-form-sign-in-btn'>
                  <button onClick={()=>nav("/dash-board")} className='login-sign-in-btn'>Sign In</button>
                </div>
              </div>
            </form>
            <div className='login-main-dont-have-an-account-div'>
              <p style={{color: "white"}}>New to ZentrivexTrade?</p>
              <p onClick={()=>nav("/register")} style={{color: "#438617", cursor: "pointer"}}>Create an account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login