import React, { useState } from 'react'
import "../styles/signup.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SignUp = () => {
  const nav = useNavigate()
  const zentrivexsignuplogo = "/src/assets/zentrivextradelogo.jpeg"

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Password validation rules
  const hasMinLength = password.length >= 6
  const startsWithCapital = /^[A-Z]/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  const isPasswordValid = hasMinLength && startsWithCapital && hasSpecialChar
  const doPasswordsMatch = password === confirmPassword && confirmPassword !== ''

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!fullName.trim()) {
      toast.error('Full Name is required')
      return
    }

    if (!email.trim()) {
      toast.error('Email is required')
      return
    }

    if (!password) {
      toast.error('Password is required')
      return
    }

    if (!isPasswordValid) {
      toast.error('Password does not meet the requirements')
      return
    }

    if (!doPasswordsMatch) {
      toast.error('Passwords do not match')
      return
    }

    // Success
    toast.success('Account created successfully!')
    console.log({ fullName, email, password })

    // Optionally navigate after success
    // setTimeout(() => nav('/login'), 1500)
  }

  return (
    <div className='SignUp'>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className='sign-up-main-div'>
        <div className='sign-up-main-div-top'>
          <div className='sign-up-main-logo-div'>
            <img src={zentrivexsignuplogo} alt="logo" />
          </div>
          <div className='sign-up-main-text-div'>
            <p>Your Modern Investment Platform</p>
          </div>
        </div>

        <div className='sign-up-main-div-btm'>
          <form className='signup-btm-main-form' onSubmit={handleSubmit}>
            <div className='signup-btm-main-form-wrap'>

              {/* Full Name */}
              <div className='signup-name-div'>
                <p>Full Name</p>
                <input
                  className='signup-input-div'
                  type="text"
                  placeholder='Enter your full name...'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className='signup-email-div'>
                <p>Email</p>
                <input
                  className='signup-input-div'
                  type="email"
                  placeholder='Enter your email...'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className='signup-password-div'>
                <div className='signup-password-div-main'>
                  <p>Password</p>
                  <input
                    className='signup-password1-input'
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter your password...'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='signup-password-div-hide-icon'>
                  <div
                    className='signup-password-div-hide-icon-inner'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash className='password-eye' /> : <FaEye className='password-eye' />}
                  </div>
                </div>
              </div>

              {/* Live Password Validation - Disappears when all rules are met */}
              {password.length > 0 && !isPasswordValid && (
                <div className="password-requirements">
                  <p className={hasMinLength ? "valid" : "invalid"}>
                    {hasMinLength ? "✓" : "✗"} At least 6 characters
                  </p>
                  <p className={startsWithCapital ? "valid" : "invalid"}>
                    {startsWithCapital ? "✓" : "✗"} Must start with a capital letter
                  </p>
                  <p className={hasSpecialChar ? "valid" : "invalid"}>
                    {hasSpecialChar ? "✓" : "✗"} Must contain a special character
                  </p>
                </div>
              )}

              {/* Confirm Password */}
              <div className='signup-confirm-password-div'>
                <div className='signup-confirm-input-div'>
                  <p>Confirm Password</p>
                  <input
                    className='signup-confirm-input-main'
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder='Confirm your password....'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className='signup-confirm-hide-icon-div'>
                  <div
                    className='sign-up-confirm-main-hide'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash className='password-eye' /> : <FaEye className='password-eye' />}
                  </div>
                </div>
              </div>

              {/* Password match message */}
              {confirmPassword.length > 0 && (
                <p className={doPasswordsMatch ? "match-valid" : "match-invalid"}>
                  {doPasswordsMatch ? "✓ Passwords match" : "✗ Passwords do not match"}
                </p>
              )}

              <div className='signupmain-btn-div'>
                <button className='sign-up-form-btn' type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </form>

          <div className='sign-up-btm-alreadt-text'>
            <p style={{ color: "white" }}>Already have an Account?</p>
            <p onClick={() => nav("/login")} style={{ color: "#438617", cursor: "pointer" }}>
              Sign In
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp