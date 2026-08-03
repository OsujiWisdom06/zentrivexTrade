import React, { useState } from 'react'
import "../styles/login.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const zentrivexlogo = "/src/assets/zentrivextradelogo.jpeg"
  const nav = useNavigate()

  // Form states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  // Error states
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  // Validation function
  const validateForm = () => {
    let isValid = true
    const newErrors = { email: '', password: '' }

    if (!email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!password) {
      newErrors.password = 'Password is required'
      isValid = false
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Login data:', { email, password, rememberMe })
      nav('/dash-board')
    }
  }

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
            <form className='login-main-form' onSubmit={handleSubmit}>
              
              {/* ========== Email Field ========== */}
              <div className='login-field'>
                <label>Email</label>
                <input
                  className={`login-input-email ${errors.email ? 'input-error' : ''}`}
                  type="email"
                  placeholder='Enter your email...'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors({ ...errors, email: '' })
                  }}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              {/* ========== Password Field ========== */}
              <div className='login-field'>
                <label>Password</label>
                <div className='input-with-icon'>
                  <input
                    className={`login-input ${errors.password ? 'input-error' : ''}`}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your password...'
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      if (errors.password) setErrors({ ...errors, password: '' })
                    }}
                  />
                  <div
                    className='login-hide-icon'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className='password-eye' />
                    ) : (
                      <FaEye className='password-eye' />
                    )}
                  </div>
                </div>
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              {/* ========== Remember Me + Forgot Password ========== */}
              <div className='login-main-form-remember-me-div'>
                <div className='login-remember-me-div'>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <p>Remember this Device</p>
                </div>
                <div className='login-remember-me-div2'>
                  <p
                    onClick={() => nav("/forgot-password")}
                    style={{ cursor: "pointer" }}
                  >
                    Forgot Password?
                  </p>
                </div>
              </div>

              {/* ========== Sign In Button ========== */}
              <div className='login-main-form-sign-in-btn'>
                <button type="submit" className='login-sign-in-btn'>
                  Sign In
                </button>
              </div>
            </form>

            <div className='login-main-dont-have-an-account-div'>
              <p style={{ color: "white" }}>New to ZentrivexTrade?</p>
              <p
                onClick={() => nav("/register")}
                style={{ color: "#438617", cursor: "pointer" }}
              >
                Create an account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login