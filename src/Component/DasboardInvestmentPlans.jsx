import React, { useState } from "react";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";
import { MdVerified } from "react-icons/md";
import "../styles/dashboardinvestmentplans.css";
import { toast, ToastContainer } from "react-toastify";

const DasboardInvestmentPlans = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState(null);

  const [investmentAmount, setInvestmentAmount] = useState("");

  // Replace later with logged-in user balance
  const accountBalance = 0;


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };


const plans = [
{
  name: "Basic Plan",
  min: 500,
  max: 9999,
  durationDays: "30 Days",
  frequency: "day",
  duration: "30 Days",
  returns: "10% Every Day",
  total: "300% + Capital",
},
{
  name: "Pro Plan",
  recommended: true,
  min: 10000,
  max: 49999,
  durationDays: "30 Days",
  percentage: 35,
  frequency: "day",
  duration: "30 Days",
  returns: "35% Every Day",
  total: "1050% + Capital",
},

  {
    name: "Premium Plan",
    min: 50000,
    max: 99999,
    durationDays: "3 Months",
    percentage: 5,
    frequency: "day",
    duration: "3 Months",
    returns: "5% Every Day",
    total: "1500% + Capital",
  },
  {
    name: "Retirement Plan",
    min: 100000,
    max: Infinity,
    durationDays: "30 Days",
    percentage: 50,
    frequency: "day",
     duration: "30 Days",
    returns: "50% Every Day",
    total: "5000% + Capital",
  },
];



  const openPlan = (plan) => {

    setSelectedPlan(plan);
    setInvestmentAmount("");

  };



  const closeModal = () => {

    setSelectedPlan(null);
    setInvestmentAmount("");

  };


const submitInvestment = () => {

  const amount = Number(investmentAmount);


  if (!amount) {

    toast.error("Please enter an amount.");

    return;

  }



  if (amount < selectedPlan.min) {

    toast.warning(
      `Minimum investment for this plan is $${selectedPlan.min.toLocaleString()}`
    );

    return;

  }



  if (
    selectedPlan.max !== Infinity &&
    amount > selectedPlan.max
  ) {

    toast.warning(
      `Maximum investment for this plan is $${selectedPlan.max.toLocaleString()}`
    );

    return;

  }



  if (amount > accountBalance) {

    toast.error(
      "Insufficient account balance."
    );

    return;

  }



  toast.success(
    "Investment submitted successfully!"
  );


  closeModal();

};
const amount = Number(investmentAmount) || 0;

let investmentReward = 0;

if (selectedPlan && amount > 0) {
  if (selectedPlan.frequency === "day") {
    investmentReward =
      amount *
      (selectedPlan.percentage / 100) *
      selectedPlan.durationDays;
  } else {
    const weeks = Math.floor(selectedPlan.durationDays / 7);
    investmentReward =
      amount *
      (selectedPlan.percentage / 100) *
      weeks;
  }
}

const totalReturns = amount + investmentReward;




  return (

    <div className="dashboard">

        <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  pauseOnHover
/>


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
              Choose Your Plan
            </h2>

            <p>
              We maintain full transparency, so you always know where your investments stand.
            </p>

          </div>





          <div className="plans-grid">


            {
              plans.map((plan,index)=>(


               <div
  className="plan-card"
  key={index}
>
 {plan.recommended && (
  <div className="recommended-badge">
    ⭐ Recommended
  </div>
)}

                  <h3>
                    {plan.name}
                  </h3>



                  <div className="plan-details">


                    <p>
                      <MdVerified />
                      Duration: {plan.duration}
                    </p>



                    <p>
                      <MdVerified />
                      Return: {plan.returns}
                    </p>



                    <p>
                      <MdVerified />
                      Total: {plan.total}
                    </p>



                    <p>
                      <MdVerified />
                      Min: ${plan.min.toLocaleString()}
                    </p>



                    <p>
                      <MdVerified />
                      Max:
                      {
                        plan.max === Infinity
                        ? " Unlimited"
                        : ` $${plan.max.toLocaleString()}`
                      }
                    </p>



                  </div>




                  <button

                    className="invest-btn"

                    onClick={() => openPlan(plan)}

                  >

                    Select Package

                  </button>



                </div>


              ))
            }


          </div>


        </div>







        {
          selectedPlan && (

            <div className="investment-modal-overlay">


              <div className="investment-modal">


                <div className="investment-modal-header">

                  <h2>
                    {selectedPlan.name}
                  </h2>

                </div>





                <div className="investment-modal-body">



                  <div className="investment-info-card">

                    <span>
                      Investment Range
                    </span>

                    <h3>

                      ${selectedPlan.min.toLocaleString()} -

                      {
                        selectedPlan.max === Infinity
                        ? " Unlimited"
                        :
                        ` $${selectedPlan.max.toLocaleString()}`
                      }

                    </h3>

                  </div>




                  <div className="investment-info-card">

                    <span>
                      Duration
                    </span>

                    <h3>
                      {selectedPlan.duration}
                    </h3>

                  </div>





                  <div className="investment-info-card">

                    <span>
                      Expected Return
                    </span>

                    <h3>
                      {selectedPlan.returns}
                    </h3>

                  </div>





                  <div className="investment-info-card">

                    <span>
                      Total Return
                    </span>

                    <h3>
                      {selectedPlan.total}
                    </h3>

                  </div>





                  <div className="investment-info-card">

                    <span>
                      Current Account Balance
                    </span>

                    <h3>
                      ${accountBalance.toLocaleString()}
                    </h3>

                  </div>






                  <div className="investment-input-div">


                    <label>
                      Investment Amount
                    </label>


                    <input

                      type="number"

                      placeholder="Enter investment amount"

                      value={investmentAmount}

                      onChange={(e)=>
                        setInvestmentAmount(e.target.value)
                      }

                    />


                  </div>

                  
                <div className="investment-info-card">
  <span>Investment Reward</span>

  <h3 style={{ color: "#16a34a" }}>
    ${investmentReward.toLocaleString()}
  </h3>
</div>

<div className="investment-info-card">
  <span>Investment Reward</span>

  <h3 style={{ color: "#16a34a" }}>
    ${investmentReward.toLocaleString()}
  </h3>
</div>

<div className="investment-info-card">
  <span>Total Returns (Capital + Profit)</span>

  <h3 style={{ color: "#144da6" }}>
    ${totalReturns.toLocaleString()}
  </h3>
</div>



                </div>



                <div className="investment-modal-footer">


                  <button

                    className="close-modal-btn"

                    onClick={closeModal}

                  >

                    Cancel

                  </button>





                  <button

                    className="submit-btn"

                    onClick={submitInvestment}

                  >

                    Submit Investment

                  </button>



                </div>




              </div>



            </div>


          )
        }





      </main>



    </div>

  );

};


export default DasboardInvestmentPlans;