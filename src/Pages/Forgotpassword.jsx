import React from 'react'
import "../styles/forgotpassword.css"
import { useNavigate } from 'react-router-dom'

const Forgotpassword = () => {

    const zentrivexlogo = "/src/assets/zentrivextradelogo.jpeg"

    const nav = useNavigate()


  return (
    <div className='Forgotpassword-div-main'>
        <div className='Forgotpassword-div-main-wrap'>
            <div className='ResetpasswordForgotpassword-div-main-top1'>
                <div className='Forgotpassword-div-main-top1-logo-div'>
                    <img src={zentrivexlogo} alt="" />
                </div>
                <div className='Forgotpassword-div-main-top1-text-div'>
                    <h1 style={{color: "white", fontSize: "30px"}}>Forgot Password?</h1>
                    <p style={{color: "gray", fontSize: "14px"}}>Enter your email and we'll send you a link to reset your password</p>
                </div>
            </div>
            <form className='Forgotpassword-div-main-top2'>
                <div className='forgotpassword-main-form'>
                    <div className='forgotpassword-main-form-wrap'>
                        <p>Email</p>
                    <input className='forgot-password-main-input' type="email" placeholder='example@gmail.com'/>
                    </div>
                </div>
                <div className='forgotpassword-main-btn'>
                    <button className='forgotpassword-main-btn-wrap'>Send Reset Link</button>
                </div>
            </form>
            <div className='Forgotpassword-div-main-top3'>
                <div className='Forgotpassword-div-main-top3-btm-1'>
                    <p style={{color: "white"}}>Remember your password?</p>
                    <p onClick={()=>nav("/login")} style={{color: "#438617",  cursor: "pointer"}}>Sign In</p>
                </div>
                <div className='Forgotpassword-div-main-top3-btm-2'>
                    <p style={{color: "white"}}>Don't have an account?</p>
                    <p onClick={()=>nav("/register")} style={{color: "#438617", cursor: "pointer"}}>Sign Up</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgotpassword