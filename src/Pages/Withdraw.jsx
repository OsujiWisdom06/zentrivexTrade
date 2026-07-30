import React, { useState } from "react";
import "../styles/withdraw.css";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Withdraw = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const [withdrawAmount, setWithdrawAmount] = useState("");

  const [walletAddress, setWalletAddress] = useState("");

  const [withdrawMethod, setWithdrawMethod] = useState("Bitcoin (BTC)");



  const toggleSidebar = () => {

    setIsSidebarOpen(!isSidebarOpen);

  };


  const closeSidebar = () => {

    setIsSidebarOpen(false);

  };





  const requestWithdrawal = () => {


    if(!withdrawAmount){

      toast.error("Please enter withdrawal amount");

      return;

    }



    if(!walletAddress){

      toast.error("Please enter your wallet address");

      return;

    }



    toast.success("Withdrawal request submitted successfully");


  };






  return (
    <div className="dashboard">


      <ToastContainer
        position="top-right"
        autoClose={3000}
      />



      <Sidebar

        isOpen={isSidebarOpen}

        closeSidebar={closeSidebar}

      />



      <main className="dashboard-main">



        <TopHeader

          toggleSidebar={toggleSidebar}

        />




        <div className="withdraw-container">



          <div className="withdraw-header">


            <h2>
              Withdraw Funds
            </h2>


            <p>
              Request a withdrawal from your investment account.
            </p>


          </div>






          <div className="withdraw-card">





            <div className="available-balance">


              <h4>
                Available Balance
              </h4>


              <h2>
                $15,200.00
              </h2>


            </div>







            <div className="withdraw-item">


              <label>
                Withdrawal Amount (USD)
              </label>


              <input

                type="number"

                placeholder="Enter withdrawal amount"

                value={withdrawAmount}

                onChange={(e)=>setWithdrawAmount(e.target.value)}

              />


            </div>








            <div className="withdraw-item">


              <label>
                Withdrawal Method
              </label>



              <select

                value={withdrawMethod}

                onChange={(e)=>setWithdrawMethod(e.target.value)}

              >


                <option>
                  Bitcoin (BTC)
                </option>


                <option>
                  Ethereum (ETH)
                </option>


                <option>
                  USDT (TRC20)
                </option>


              </select>


            </div>









            <div className="withdraw-item">


              <label>
                Wallet Address
              </label>



              <input

                type="text"

                placeholder="Enter your wallet address"

                value={walletAddress}

                onChange={(e)=>setWalletAddress(e.target.value)}

              />


            </div>








            <button

              className="withdraw-btn"

              onClick={requestWithdrawal}

            >

              Request Withdrawal


            </button>





          </div>



        </div>



      </main>



    </div>
  );
};


export default Withdraw;