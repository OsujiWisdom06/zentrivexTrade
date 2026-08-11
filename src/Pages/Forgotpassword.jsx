
import React, { useState } from 'react'
import "../styles/forgotpassword.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BASE_URL = 'https://zentrivex-backend.onrender.com'

const Forgotpassword = () => {
  const zentrivexlogo = "/src/assets/zentrivextradelogo.jpeg"
  const nav = useNavigate()

  // Form state
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  // Loading state
  const [isLoading, setIsLoading] = useState(false)


  // =====================================================
  // VALIDATION
  // =====================================================

  const validateForm = () => {

    if (!email.trim()) {
      setError('Email is required')
      return false
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return false
    }

    setError('')
    return true
  }


  // =====================================================
  // FORGOT PASSWORD API
  // =====================================================

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {

      const response = await axios.post(
        `${BASE_URL}/api/auth/forgot-password`,
        {
          email: email.trim().toLowerCase()
        }
      )


      // =====================================================
      // SUCCESS
      // =====================================================

      if (response.data.success) {

        console.log(
          'Forgot password response:',
          response.data
        )

        toast.success(
          response.data.message ||
          'Reset link has been sent to your email!'
        )

        // Optional:
        // nav('/check-email')

      }


    } catch (error) {

      console.error(
        'Forgot password error:',
        error
      )


      // =====================================================
      // BACKEND ERROR
      // =====================================================

      if (error.response) {

        toast.error(
          error.response.data?.message ||
          'Unable to send reset link.'
        )

      } else if (error.request) {

        toast.error(
          'Oops! Network error. Please try again.'
        )

      } else {

        toast.error(
          'Something went wrong. Please try again.'
        )

      }

    } finally {

      setIsLoading(false)

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

            <h1
              style={{
                color: "white",
                fontSize: "30px"
              }}
            >
              Forgot Password?
            </h1>

            <p
              style={{
                color: "gray",
                fontSize: "14px"
              }}
            >
              Enter your email and we'll send you a link to reset your password
            </p>

          </div>

        </div>


        <form
          className='Forgotpassword-div-main-top2'
          onSubmit={handleSubmit}
        >

          <div className='forgotpassword-main-form'>

            <div className='forgotpassword-main-form-wrap'>

              <p>Email</p>

              <input
                className={`forgot-password-main-input ${
                  error ? 'input-error' : ''
                }`}
                type="email"
                placeholder='example@gmail.com'
                value={email}
                onChange={(e) => {

                  setEmail(e.target.value)

                  if (error) {
                    setError('')
                  }

                }}
              />

              {error && (
                <span className="error-text">
                  {error}
                </span>
              )}

            </div>

          </div>


          <div className='forgotpassword-main-btn'>

            <button
              type="submit"
              className='forgotpassword-main-btn-wrap'
              disabled={isLoading}
            >
              {isLoading
                ? 'Sending...'
                : 'Send Reset Link'
              }
            </button>

          </div>

        </form>


        <div className='Forgotpassword-div-main-top3'>

          <div className='Forgotpassword-div-main-top3-btm-1'>

            <p style={{ color: "white" }}>
              Remember your password?
            </p>

            <p
              onClick={() => nav("/login")}
              style={{
                color: "#438617",
                cursor: "pointer"
              }}
            >
              Sign In
            </p>

          </div>


          <div className='Forgotpassword-div-main-top3-btm-2'>

            <p style={{ color: "white" }}>
              Don't have an account?
            </p>

            <p
              onClick={() => nav("/register")}
              style={{
                color: "#438617",
                cursor: "pointer"
              }}
            >
              Sign Up
            </p>

          </div>

        </div>

      </div>


      {/* Toast Notifications */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />

    </div>
  )
}

export default Forgotpassword
