import React from 'react'
import "../styles/resetpassword.css"
import { FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Resetpassword = () => {

    const zentrivexlogo = "/src/assets/zentrivextradelogo.jpeg"

    const nav = useNavigate()


  return (
    <div className='Resetpassword-main'>
        <div className='Resetpassword-main-inner'>
            <div className='resetpassword-main-inner-top'>
                <div className='resetpassword-main-inner-top-image-top'>
                    <img src={zentrivexlogo} alt="logo" />
                </div>
                 <div className='resetpassword-main-inner-top-text-top'>
                    <h1>Reset Your Password</h1>
                    <p style={{color: "gray"}}>Enter your new password below</p>
                 </div>
            </div>
            <form className='resetpassword-main-inner-btm'>
                <div className='reset-password-new-passwordinput'>
                    <div className='reset-password-new-passwordinput-main-input'>
                        <p>New Password</p>
                        <input className='reset-new-password-input' type="password" placeholder='Enter new password...' />
                    </div>
                    <div className='reset-password-new-passwordinput-main-icon'>
                        <div className='reset-password-new-passwordinput-main-icon-inner-1'>
                            <FaEye className='password-eye'/>
                        </div>
                    </div>
                </div>
                <div className='reset-password-confirm-passwordinput'>
                    <div className='reset-password-confirm-passwordinput-input-main'>
                        <p>Confirm New Password</p>
                        <input className='reset-password-confirm-password-main-main-input' type="password" placeholder='Confirm new password...'/>
                    </div>
                    <div className='reset-password-confirm-passwordinput-hide-icon-main'>
                        <div className='reset-password-confirm-password-hide-icon-main-main'>
                             <FaEye className='password-eye'/>
                        </div>
                    </div>
                </div>
                <div className='reset-password-main-btn'>
                    <button className='reset-passwordbutton-main'>Reset Password</button>
                </div>
                <div className='reset-password-down-text'>
                    <p>Remember your password?</p>
                    <p style={{cursor: "pointer", color: "#438617"}} onClick={()=>nav("/login")}>Sign In</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Resetpassword