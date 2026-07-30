import React, { useState } from "react";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";
import "../styles/dashboardinvestmentplans.css";

const  DasboardInvestmentPlans = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


  const plans = [
    {
      name: "Basic Plan",
      amount: "$500 - $9,999",
      profit: "15% Every Week",
      duration: "30 Days",
    },
    {
      name: "Pro Plan",
      amount: "$10,000 - $49,999",
      profit: "35% Every Day",
      duration: "30 Days",
    },
    {
      name: "Premium Plan",
      amount: "$50,000 - $99,999",
      profit: "5% Every Day",
      duration: "3 Months",
    },
    {
      name: "Retirement Plan",
      amount: "$100,000+",
      profit: "50% Every Day",
      duration: "30 Days",
    },
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



        <div className="investment-container">


          <div className="investment-header">

            <h2>
              Investment Plans
            </h2>

            <p>
              Choose a plan that matches your investment goals.
            </p>

          </div>



          <div className="plans-grid">


            {plans.map((plan, index) => (

              <div
                className="plan-card"
                key={index}
              >


                <h3>
                  {plan.name}
                </h3>


                <div className="plan-details">

                  <p>
                    Investment Range
                  </p>

                  <h4>
                    {plan.amount}
                  </h4>


                  <p>
                    Expected Return
                  </p>

                  <h4>
                    {plan.profit}
                  </h4>


                  <p>
                    Duration
                  </p>

                  <h4>
                    {plan.duration}
                  </h4>

                </div>


                <button className="invest-btn">
                  Invest Now
                </button>


              </div>

            ))}


          </div>


        </div>


      </main>


    </div>
  );
};


export default DasboardInvestmentPlans;