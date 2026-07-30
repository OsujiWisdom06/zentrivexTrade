import React, { useState } from "react";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";
import "../styles/mywallet.css";

const MyWallet = () => {

  const [showPhrase, setShowPhrase] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  const recoveryPhrase =
    "apple river future zebra rocket mirror turtle banana ocean galaxy coffee winter";


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



        <div className="wallet-container">


          <div className="wallet-header">

            <h2>
              My Wallet
            </h2>

            <p>
              Manage your cryptocurrency wallets and account balances.
            </p>

          </div>




          <div className="wallet-balance-card">

            <h4>
              Total Portfolio Balance
            </h4>

            <h1>
              $18,562.90
            </h1>

            <span>
              Updated just now
            </span>

          </div>





          <div className="wallet-grid">


            <div className="wallet-card">

              <h3>
                Bitcoin (BTC)
              </h3>


              <div className="wallet-item">

                <label>
                  Balance
                </label>

                <div className="wallet-value">
                  0.542 BTC
                </div>

              </div>



              <div className="wallet-item">

                <label>
                  Wallet Address
                </label>

                <div className="wallet-address">
                  bc1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </div>

              </div>


              <button>
                Copy Address
              </button>

            </div>





            <div className="wallet-card">

              <h3>
                Ethereum (ETH)
              </h3>


              <div className="wallet-item">

                <label>
                  Balance
                </label>

                <div className="wallet-value">
                  2.135 ETH
                </div>

              </div>


              <div className="wallet-item">

                <label>
                  Wallet Address
                </label>

                <div className="wallet-address">
                  0x8Axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </div>

              </div>


              <button>
                Copy Address
              </button>


            </div>






            <div className="wallet-card">

              <h3>
                USDT (TRC20)
              </h3>


              <div className="wallet-item">

                <label>
                  Balance
                </label>

                <div className="wallet-value">
                  4,500 USDT
                </div>

              </div>


              <div className="wallet-item">

                <label>
                  Wallet Address
                </label>

                <div className="wallet-address">
                  TLxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </div>

              </div>


              <button>
                Copy Address
              </button>


            </div>


          </div>






          <div className="wallet-security-section">


            <div className="recovery-card">

              <h3>
                Recovery Phrase
              </h3>


              <p className="security-text">

                Your recovery phrase gives complete access to your wallet.
                Never share it with anyone.

              </p>



              <div className="recovery-box">

                {
                  showPhrase
                  ? recoveryPhrase
                  : "•••• •••• •••• •••• •••• •••• •••• •••• •••• •••• •••• ••••"
                }

              </div>




              <button
                className="show-btn"
                onClick={() => setShowPhrase(!showPhrase)}
              >

                {
                  showPhrase
                  ? "Hide Recovery Phrase"
                  : "Show Recovery Phrase"
                }

              </button>


            </div>






            <div className="security-card">

              <h3>
                Wallet Security Tips
              </h3>


              <ul>

                <li>
                  🔒 Never share your recovery phrase.
                </li>

                <li>
                  💻 Always use trusted devices to access your account.
                </li>

                <li>
                  📧 Never click suspicious emails claiming to be Zentrivex Trade.
                </li>

                <li>
                  🛡️ Keep your login credentials private and secure.
                </li>

                <li>
                  📱 Log out after using shared or public computers.
                </li>

              </ul>


            </div>


          </div>


        </div>


      </main>


    </div>
  );
};


export default MyWallet;