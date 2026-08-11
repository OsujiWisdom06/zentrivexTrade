
import React, { useState } from 'react'
import "../styles/resetpassword.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const BASE_URL = 'https://zentrivex-backend.onrender.com'


const Resetpassword = () => {

  const zentrivexlogo = "/src/assets/zentrivextradelogo.jpeg"
  const nav = useNavigate()

  // Get token from URL
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')


  // Form states
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  // Loading state
  const [isLoading, setIsLoading] = useState(false)


  // Error states
  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  })


  // =====================================================
  // VALIDATION
  // =====================================================

  const validateForm = () => {

    let isValid = true

    const newErrors = {
      newPassword: '',
      confirmPassword: ''
    }


    if (!newPassword) {

      newErrors.newPassword =
        'New password is required'

      isValid = false

    } else if (newPassword.length < 6) {

      newErrors.newPassword =
        'Password must be at least 6 characters'

      isValid = false
    }


    if (!confirmPassword) {

      newErrors.confirmPassword =
        'Please confirm your password'

      isValid = false

    } else if (newPassword !== confirmPassword) {

      newErrors.confirmPassword =
        'Passwords do not match'

      isValid = false
    }


    setErrors(newErrors)

    return isValid
  }


  // =====================================================
  // RESET PASSWORD API
  // =====================================================

  const handleSubmit = async (e) => {

    e.preventDefault()


    // Check if token exists
    if (!token) {

      toast.error(
        'Invalid or missing reset link.'
      )

      return
    }


    // Validate form
    if (!validateForm()) {
      return
    }


    setIsLoading(true)


    try {

      const response = await axios.post(
        `${BASE_URL}/api/auth/reset-password?token=${encodeURIComponent(token)}`,
        {
          password: newPassword,
          confirmPassword: confirmPassword
        }
      )


      // =====================================================
      // SUCCESS
      // =====================================================

      if (response.data.success) {

        toast.success(
          response.data.message ||
          'Password reset successfully!'
        )


        // Redirect to login after successful reset
        setTimeout(() => {
          nav('/login')
        }, 1500)

      }

    } catch (error) {

      console.error(
        'Reset password error:',
        error
      )


      // =====================================================
      // BACKEND ERROR
      // =====================================================

      if (error.response) {

        toast.error(
          error.response.data?.message ||
          'Unable to reset password.'
        )

      } else if (error.request) {

        toast.error(
          'Unable to connect to the server. Please try again.'
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

    <div className='Resetpassword-main'>

      <div className='Resetpassword-main-inner'>


        {/* =====================================================
            TOP SECTION
        ===================================================== */}

        <div className='resetpassword-main-inner-top'>

          <div className='resetpassword-main-inner-top-image-top'>

            <img
              src={zentrivexlogo}
              alt="logo"
            />

          </div>


          <div className='resetpassword-main-inner-top-text-top'>

            <h1>
              Reset Your Password
            </h1>

            <p style={{ color: "gray" }}>
              Enter your new password below
            </p>

          </div>

        </div>


        {/* =====================================================
            FORM
        ===================================================== */}

        <form
          className='resetpassword-main-inner-btm'
          onSubmit={handleSubmit}
        >


          {/* ========== New Password ========== */}

          <div className='password-field'>

            <label>
              New Password
            </label>


            <div className='input-with-icon'>

              <input
                className={`password-input ${
                  errors.newPassword
                    ? 'input-error'
                    : ''
                }`}
                type={
                  showNewPassword
                    ? 'text'
                    : 'password'
                }
                placeholder='Enter new password...'
                value={newPassword}
                onChange={(e) => {

                  setNewPassword(e.target.value)

                  if (errors.newPassword) {

                    setErrors({
                      ...errors,
                      newPassword: ''
                    })

                  }

                }}
              />


              <div
                className='eye-icon'
                onClick={() =>
                  setShowNewPassword(
                    !showNewPassword
                  )
                }
              >

                {showNewPassword ? (

                  <FaEyeSlash
                    className='password-eye'
                  />

                ) : (

                  <FaEye
                    className='password-eye'
                  />

                )}

              </div>

            </div>


            {errors.newPassword && (

              <span className="error-text">
                {errors.newPassword}
              </span>

            )}

          </div>



          {/* ========== Confirm Password ========== */}

          <div className='password-field'>

            <label>
              Confirm New Password
            </label>


            <div className='input-with-icon'>

              <input
                className={`password-input ${
                  errors.confirmPassword
                    ? 'input-error'
                    : ''
                }`}
                type={
                  showConfirmPassword
                    ? 'text'
                    : 'password'
                }
                placeholder='Confirm new password...'
                value={confirmPassword}
                onChange={(e) => {

                  setConfirmPassword(
                    e.target.value
                  )

                  if (errors.confirmPassword) {

                    setErrors({
                      ...errors,
                      confirmPassword: ''
                    })

                  }

                }}
              />


              <div
                className='eye-icon'
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >

                {showConfirmPassword ? (

                  <FaEyeSlash
                    className='password-eye'
                  />

                ) : (

                  <FaEye
                    className='password-eye'
                  />

                )}

              </div>

            </div>


            {errors.confirmPassword && (

              <span className="error-text">
                {errors.confirmPassword}
              </span>

            )}

          </div>



          {/* ========== Button ========== */}

          <div className='reset-password-main-btn'>

            <button
              type="submit"
              className='reset-passwordbutton-main'
              disabled={isLoading}
            >

              {isLoading
                ? 'Resetting...'
                : 'Reset Password'
              }

            </button>

          </div>



          {/* ========== Bottom text ========== */}

          <div className='reset-password-down-text'>

            <p>
              Remember your password?
            </p>

            <p
              style={{
                cursor: "pointer",
                color: "#438617"
              }}
              onClick={() =>
                nav("/login")
              }
            >
              Sign In
            </p>

          </div>

        </form>

      </div>


      {/* =====================================================
          TOAST NOTIFICATIONS
      ===================================================== */}

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


export default Resetpassword

