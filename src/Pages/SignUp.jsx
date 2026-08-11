import React, { useState } from 'react'
import axios from 'axios'
import "../styles/signup.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Backend Base URL
const BASE_URL = 'https://zentrivex-backend.onrender.com'

const SignUp = () => {
  const nav = useNavigate()
  const zentrivexsignuplogo = "/src/assets/zentrivextradelogo.jpeg"

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Loading state
  const [isLoading, setIsLoading] = useState(false)

  // Password validation rules
  const hasMinLength = password.length >= 6
  const startsWithCapital = /^[A-Z]/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  const isPasswordValid =
    hasMinLength &&
    startsWithCapital &&
    hasSpecialChar

  const doPasswordsMatch =
    password === confirmPassword &&
    confirmPassword !== ''

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Prevent multiple submissions
    if (isLoading) return

    // Frontend validation
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

    if (!confirmPassword) {
      toast.error('Please confirm your password')
      return
    }

    if (!doPasswordsMatch) {
      toast.error('Passwords do not match')
      return
    }

    try {
      setIsLoading(true)

      // Axios POST request
      const response = await axios.post(
        `${BASE_URL}/api/auth/signup`,
        {
          fullName: fullName.trim(),
          email: email.trim(),
          password,
          confirmPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const data = response.data

      // Successful signup
      toast.success(
        data.message ||
        'Account created successfully. Please check your email to verify your account.'
      )

      console.log('Signup successful:', data)

      // Clear form after successful signup
      setFullName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')

      // Navigate to login after a short delay
      setTimeout(() => {
        nav('/login')
      }, 3000)

    } catch (error) {
      console.error('Signup request error:', error)

      // Backend error response
      if (error.response) {
        toast.error(
          error.response.data?.message ||
          'Something went wrong. Please try again.'
        )
      } else {
        // Network/server connection error
        toast.error(
          'Oops! Network error. Please try again.'
        )
      }

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
    <div className='SignUp'>
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

          <form
            className='signup-btm-main-form'
            onSubmit={handleSubmit}
          >

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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                    disabled={isLoading}
                  />
                </div>

                <div className='signup-password-div-hide-icon'>
                  <div
                    className='signup-password-div-hide-icon-inner'
                    onClick={() =>
                      !isLoading &&
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword
                      ? <FaEyeSlash className='password-eye' />
                      : <FaEye className='password-eye' />
                    }
                  </div>
                </div>

              </div>

              {/* Password Requirements */}
              {password.length > 0 && !isPasswordValid && (
                <div className="password-requirements">

                  <p className={hasMinLength ? "valid" : "invalid"}>
                    {hasMinLength ? "✓" : "✗"} At least 6 characters
                  </p>

                  <p className={startsWithCapital ? "valid" : "invalid"}>
                    {startsWithCapital
                      ? "✓"
                      : "✗"} Must start with a capital letter
                  </p>

                  <p className={hasSpecialChar ? "valid" : "invalid"}>
                    {hasSpecialChar
                      ? "✓"
                      : "✗"} Must contain a special character
                  </p>

                </div>
              )}

              {/* Confirm Password */}
              <div className='signup-confirm-password-div'>

                <div className='signup-confirm-input-div'>
                  <p>Confirm Password</p>

                  <input
                    className='signup-confirm-input-main'
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder='Confirm your password....'
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    disabled={isLoading}
                  />
                </div>

                <div className='signup-confirm-hide-icon-div'>
                  <div
                    className='sign-up-confirm-main-hide'
                    onClick={() =>
                      !isLoading &&
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword
                      ? <FaEyeSlash className='password-eye' />
                      : <FaEye className='password-eye' />
                    }
                  </div>
                </div>

              </div>

              {/* Password Match Message */}
              {confirmPassword.length > 0 && (
                <p
                  className={
                    doPasswordsMatch
                      ? "match-valid"
                      : "match-invalid"
                  }
                >
                  {doPasswordsMatch
                    ? "✓ Passwords match"
                    : "✗ Passwords do not match"}
                </p>
              )}

              {/* Submit Button */}
              <div className='signupmain-btn-div'>

                <button
                  className='sign-up-form-btn'
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading
                    ? 'Creating Account...'
                    : 'Sign Up'}
                </button>

              </div>

            </div>

          </form>

          <div className='sign-up-btm-alreadt-text'>

            <p style={{ color: "white" }}>
              Already have an Account?
            </p>

            <p
              onClick={() => !isLoading && nav("/login")}
              style={{
                color: "#438617",
                cursor: isLoading ? "default" : "pointer"
              }}
            >
              Sign In
            </p>

          </div>

        </div>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      </div>
    </>
  )
}

export default SignUp

