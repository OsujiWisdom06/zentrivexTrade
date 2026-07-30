import React, { useState } from "react";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";
import "../styles/mytransaction.css";

const MyTransactions = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };



  const transactions = [
    {
      id:1,
      type:"Deposit",
      amount:"$5,000",
      method:"Bitcoin (BTC)",
      date:"30 July 2026",
      status:"Completed"
    },

    {
      id:2,
      type:"Investment",
      amount:"$2,500",
      method:"Investment Plan",
      date:"28 July 2026",
      status:"Completed"
    },

    {
      id:3,
      type:"Withdrawal",
      amount:"$1,200",
      method:"Bitcoin (BTC)",
      date:"25 July 2026",
      status:"Pending"
    },

    {
      id:4,
      type:"Deposit",
      amount:"$8,000",
      method:"USDT TRC20",
      date:"20 July 2026",
      status:"Completed"
    }

  ];




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



        <div className="transactions-container">



          <div className="transactions-header">

            <h2>
              Transactions
            </h2>

            <p>
              View and manage all your account activities.
            </p>

          </div>





          <div className="transaction-summary">


            <div className="transaction-summary-card">

              <h4>
                Total Deposits
              </h4>

              <h2>
                $13,000
              </h2>

            </div>



            <div className="transaction-summary-card">

              <h4>
                Total Withdrawals
              </h4>

              <h2>
                $1,200
              </h2>

            </div>




            <div className="transaction-summary-card">

              <h4>
                Total Investments
              </h4>

              <h2>
                $2,500
              </h2>

            </div>



          </div>






          <div className="transaction-table-card">



            <div className="table-title">

              <h3>
                Recent Transactions
              </h3>

            </div>





            {
              transactions.length === 0 ? (

                <div className="empty-transactions">

                  <h3>
                    No Transactions Yet
                  </h3>

                  <p>
                    Your transaction history will appear here.
                  </p>

                </div>


              ) : (



              <div className="transaction-table">


                <div className="transaction-table-head">

                  <span>
                    Type
                  </span>

                  <span>
                    Amount
                  </span>

                  <span>
                    Method
                  </span>

                  <span>
                    Date
                  </span>

                  <span>
                    Status
                  </span>

                </div>





                {
                  transactions.map((item)=>(


                    <div
                      className="transaction-row"
                      key={item.id}
                    >


                      <span>
                        {item.type}
                      </span>


                      <span>
                        {item.amount}
                      </span>


                      <span>
                        {item.method}
                      </span>


                      <span>
                        {item.date}
                      </span>



                      <span
                        className={
                          item.status === "Completed"
                          ?
                          "status completed"
                          :
                          "status pending"
                        }
                      >

                        {item.status}

                      </span>



                    </div>


                  ))
                }


              </div>


              )

            }



          </div>





        </div>




      </main>


    </div>

  );
};


export default  MyTransactions;