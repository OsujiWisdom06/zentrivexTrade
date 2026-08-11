
import React, { useEffect, useState } from 'react'
import "../styles/verifyemail.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BASE_URL = 'https://zentrivex-backend.onrender.com'

const VerifyEmail = () => {

  const zentrivexlogo = "/src/assets/zentrivextradelogo.jpeg"

  const nav = useNavigate()

  // Get token from URL
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')

  // Loading state
  const [isLoading, setIsLoading] = useState(true)

  // Verification state
  const [isVerified, setIsVerified] = useState(false)


  // =====================================================
  // VERIFY EMAIL API
  // =====================================================

  useEffect(() => {

    const verifyEmail = async () => {

      // =====================================================
      // CHECK TOKEN
      // =====================================================

      if (!token) {

        setIsLoading(false)

        toast.error(
          'Invalid or missing verification link.',
          {
            autoClose: 3000,
            onClose: () => {
              nav('/login')
            }
          }
        )

        return
      }


      try {

        // =====================================================
        // GET VERIFY EMAIL ENDPOINT
        // =====================================================

        const response = await axios.get(
          `${BASE_URL}/api/auth/verify-email?token=${token}`
        )


        // =====================================================
        // SUCCESS
        // =====================================================

        if (response.data.success) {

          setIsVerified(true)

          toast.success(
            response.data.message ||
            'Email verified successfully!',
            {
              autoClose: 3000,
              onClose: () => {
                nav('/login')
              }
            }
          )

        } else {

          // =====================================================
          // VERIFICATION FAILED
          // =====================================================

          toast.error(
            response.data.message ||
            'Email verification failed.',
            {
              autoClose: 3000,
              onClose: () => {
                nav('/login')
              }
            }
          )

        }

      } catch (error) {

        console.error(
          'Email verification error:',
          error
        )


        // =====================================================
        // BACKEND ERROR
        // =====================================================

        const errorMessage =
          error.response?.data?.message ||
          'Unable to verify your email.'


        toast.error(
          errorMessage,
          {
            autoClose: 3000,
            onClose: () => {
              nav('/login')
            }
          }
        )

      } finally {

        setIsLoading(false)

      }

    }


    verifyEmail()

  }, [token, nav])


  return (

    <div className='Verifyemail-main'>

      <div className='Verifyemail-main-inner'>


        {/* =====================================================
            TOP SECTION
        ===================================================== */}

        <div className='verifyemail-main-inner-top'>

          <div className='verifyemail-main-inner-top-image-top'>

            <img
              src={zentrivexlogo}
              alt="Zentrivex Trade logo"
            />

          </div>


          <div className='verifyemail-main-inner-top-text-top'>

            <h1>
              Verify Your Email
            </h1>

            <p>
              Confirming your email address...
            </p>

          </div>

        </div>


        {/* =====================================================
            VERIFICATION CONTENT
        ===================================================== */}

        <div className='verifyemail-main-inner-btm'>


          {/* =====================================================
              VERIFYING
          ===================================================== */}

          {isLoading && (

            <div className='verifyemail-status'>

              <div className='verifyemail-loader'></div>

              <h2>
                Verifying your email
              </h2>

              <p>
                Please wait while we verify your email address.
              </p>

            </div>

          )}


          {/* =====================================================
              SUCCESS
          ===================================================== */}

          {!isLoading && isVerified && (

            <div className='verifyemail-status'>

              <div className='verifyemail-success-icon'>
                ✓
              </div>

              <h2>
                Email Verified!
              </h2>

              <p>
                Your email has been successfully verified.
                Redirecting you to login...
              </p>

            </div>

          )}


          {/* =====================================================
              FAILED
          ===================================================== */}

          {!isLoading && !isVerified && (

            <div className='verifyemail-status'>

              <div className='verifyemail-error-icon'>
                !
              </div>

              <h2>
                Verification Failed
              </h2>

              <p>
                This verification link is invalid or has expired.
                Redirecting you to login...
              </p>

            </div>

          )}

        </div>


        {/* =====================================================
            BOTTOM TEXT
        ===================================================== */}

        <div className='Verifyemail-main-bottom'>

          <p>
            Already verified your email?
          </p>

          <p
            style={{
              color: "#438617",
              cursor: "pointer"
            }}
            onClick={() => nav('/login')}
          >
            Sign In
          </p>

        </div>

      </div>


      {/* =====================================================
          TOAST CONTAINER
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

export default VerifyEmail

