import React, { useState } from 'react'
import "../styles/forgotpassword.css"
import { useNavigate } from 'react-router-dom'

const Forgotpassword = () => {
  const zentrivexlogo = "/src/assets/zentrivextradelogo.jpeg"
  const nav = useNavigate()

  // Form state
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  // Validation function
  const validateForm = () => {
    if (!email.trim()) {
      setError('Email is required')
      return false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return false
    }

    setError('')
    return true
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Form is valid — call your forgot password API here
      console.log('Forgot Password email:', email)

      // Temporary action (remove when connecting API)
      alert('Reset link has been sent to your email!')
      // nav('/check-email')  // optional
    }
  }

  return (
    <div className='Forgotpassword-div-main'>
      <div className='Forgotpassword-div-main-wrap'>
        <div className='Forgotpassword-div-main-top1'>
          <div className='Forgotpassword-div-main-top1-logo-div'>
            <img src={zentrivexlogo} alt="" />
          </div>
          <div className='Forgotpassword-div-main-top1-text-div'>
            <h1 style={{ color: "white", fontSize: "30px" }}>Forgot Password?</h1>
            <p style={{ color: "gray", fontSize: "14px" }}>
              Enter your email and we'll send you a link to reset your password
            </p>
          </div>
        </div>

        <form className='Forgotpassword-div-main-top2' onSubmit={handleSubmit}>
          <div className='forgotpassword-main-form'>
            <div className='forgotpassword-main-form-wrap'>
              <p>Email</p>
              <input
                className={`forgot-password-main-input ${error ? 'input-error' : ''}`}
                type="email"
                placeholder='example@gmail.com'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
              />
              {error && <span className="error-text">{error}</span>}
            </div>
          </div>

          <div className='forgotpassword-main-btn'>
            <button type="submit" className='forgotpassword-main-btn-wrap'>
              Send Reset Link
            </button>
          </div>
        </form>

        <div className='Forgotpassword-div-main-top3'>
          <div className='Forgotpassword-div-main-top3-btm-1'>
            <p style={{ color: "white" }}>Remember your password?</p>
            <p
              onClick={() => nav("/login")}
              style={{ color: "#438617", cursor: "pointer" }}
            >
              Sign In
            </p>
          </div>
          <div className='Forgotpassword-div-main-top3-btm-2'>
            <p style={{ color: "white" }}>Don't have an account?</p>
            <p
              onClick={() => nav("/register")}
              style={{ color: "#438617", cursor: "pointer" }}
            >
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword