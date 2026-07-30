import React, { useState } from "react";
import "../styles/deposit.css";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";
import { FaCopy } from "react-icons/fa";

const Deposit = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("Bitcoin (BTC)");

  const [depositAmount, setDepositAmount] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [copied, setCopied] = useState(false);

  const [isCopied, setIsCopied] = useState(false);



  const walletAddresses = {

    "Bitcoin (BTC)": "bc1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",

    "Ethereum (ETH)": "0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",

    "USDT (TRC20)": "TXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

  };


  const currentWalletAddress = walletAddresses[paymentMethod];



  const toggleSidebar = () => {

    setIsSidebarOpen(!isSidebarOpen);

  };


  const closeSidebar = () => {

    setIsSidebarOpen(false);

  };




  const copyWalletAddress = async () => {

    try {

      await navigator.clipboard.writeText(currentWalletAddress);


      setCopied(true);

      setIsCopied(true);



      setTimeout(() => {

        setCopied(false);

        setIsCopied(false);


      }, 2000);



    } catch(error){

      console.log("Copy failed", error);

    }

  };




  const continueDeposit = () => {


    if(!depositAmount){

      alert("Please enter deposit amount");

      return;

    }


    setShowConfirmation(true);


  };





  const cancelDeposit = () => {

    setShowConfirmation(false);

    setCopied(false);

    setIsCopied(false);

  };





  return (

    <div className="dashboard">


      <Sidebar

        isOpen={isSidebarOpen}

        closeSidebar={closeSidebar}

      />




      <main className="dashboard-main">


        <TopHeader

          toggleSidebar={toggleSidebar}

        />





        <div className="deposit-container">





        {!showConfirmation ? (



          <>


          <div className="deposit-header">


            <h2>
              Deposit Funds
            </h2>


            <p>
              Fund your investment account securely.
            </p>


          </div>





          <div className="deposit-card">





          <div className="deposit-item">


            <label>
              Deposit Amount (USD)
            </label>


            <input

              type="number"

              placeholder="Enter amount"

              value={depositAmount}

              onChange={(e)=>setDepositAmount(e.target.value)}

            />


          </div>







          <div className="deposit-item">


            <label>
              Payment Method
            </label>



            <select

              value={paymentMethod}

              onChange={(e)=>setPaymentMethod(e.target.value)}

            >


              <option value="Bitcoin (BTC)">
                Bitcoin (BTC)
              </option>



              <option value="Ethereum (ETH)">
                Ethereum (ETH)
              </option>



              <option value="USDT (TRC20)">
                USDT (TRC20)
              </option>


            </select>


          </div>






          <button

            className="deposit-btn"

            onClick={continueDeposit}

          >

            Continue Deposit


          </button>




          </div>


          </>





        ) : (




        <div className="deposit-card confirmation-card">





          <div className="deposit-header">


            <h2>
              Deposit Confirmation
            </h2>


            <p>
              Review your payment details before completing your deposit.
            </p>


          </div>







          <div className="confirmation-box">





          <h3>
            {paymentMethod} Payment
          </h3>



          <p>
            You have requested a payment of:
          </p>



          <h1>
            ${depositAmount}
          </h1>




          <p>
            Please pay exactly this amount using the payment method below.
          </p>







          <div className="payment-details">


            <label>
              Payment Method
            </label>


            <strong>
              {paymentMethod}
            </strong>


          </div>







          <div className="payment-details">


            <label>
              Send Payment To:
            </label>




            <div className="wallet-address">



              <span>
                {currentWalletAddress}
              </span>




              <button

                className={`copy-btn ${isCopied ? "copied-icon" : ""}`}

                onClick={copyWalletAddress}

              >

                <FaCopy />

              </button>



            </div>





            {
              copied && (

                <p className="copied-message copied-text">

                  Wallet address copied!

                </p>

              )
            }




          </div>







          <p className="notice-text">


            After completing your payment, your deposit will be reviewed and credited to your account once the transaction is confirmed.



          </p>







          <button

            className="cancel-btn"

            onClick={cancelDeposit}

          >

            Cancel Deposit


          </button>







          </div>






        </div>





        )}







        </div>





      </main>



    </div>


  );

};



export default Deposit;