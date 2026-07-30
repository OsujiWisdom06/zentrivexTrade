import React from 'react'
import "../styles/investmentplans.css"
import { MdVerified } from 'react-icons/md'
import { useState } from 'react'

const InvestmentPlans = () => {

  const [selectedPlan, setSelectedPlan] = useState(null);
const [investmentAmount, setInvestmentAmount] = useState("");

const plans = [
  {
    name: "Basic Plan",
    min: 500,
    max: 9999,
    duration: "30 Days",
    returns: "15% Every Week",
    total: "750% + Capital",
  },
  {
    name: "Pro Plan",
    min: 10000,
    max: 49999,
    duration: "30 Days",
    returns: "35% Every Day",
    total: "1050% + Capital",
  },
  {
    name: "Premium Plan",
    min: 50000,
    max: 99999,
    duration: "3 Months",
    returns: "5% Every Day",
    total: "1500% + Capital",
  },
  {
    name: "Retirement Plan",
    min: 100000,
    max: Infinity,
    duration: "30 Days",
    returns: "50% Every Day",
    total: "5000% + Capital",
  },
];

const accountBalance = 0; // Replace with logged-in user's balance

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
    return alert("Please enter an amount.");
  }

  if (amount < selectedPlan.min) {
    return alert(
      `Minimum investment for this plan is $${selectedPlan.min.toLocaleString()}`
    );
  }

  if (
    selectedPlan.max !== Infinity &&
    amount > selectedPlan.max
  ) {
    return alert(
      `Maximum investment for this plan is $${selectedPlan.max.toLocaleString()}`
    );
  }

  if (amount > accountBalance) {
    return alert("Insufficient account balance.");
  }

  alert("Investment submitted successfully!");

  closeModal();
};

  return (
    <div className='investmentplans'>
      {
selectedPlan && (
<div className="investment-modal-overlay">

    <div className="investment-modal">

        <div className="investment-modal-header">

            <h2>{selectedPlan.name}</h2>


        </div>

        <div className="investment-modal-body">

            <div className="investment-info-card">

                <span>Investment Range</span>

                <h3>
                    ${selectedPlan.min.toLocaleString()} -
                    {selectedPlan.max === Infinity
                        ? " Unlimited"
                        : ` $${selectedPlan.max.toLocaleString()}`}
                </h3>

            </div>

            <div className="investment-info-card">

                <span>Duration</span>

                <h3>{selectedPlan.duration}</h3>

            </div>

            <div className="investment-info-card">

                <span>Expected Return</span>

                <h3>{selectedPlan.returns}</h3>

            </div>

            <div className="investment-info-card">

                <span>Total Return</span>

                <h3>{selectedPlan.total}</h3>

            </div>

            <div className="investment-info-card">

                <span>Current Account Balance</span>

                <h3>
                    ${accountBalance.toLocaleString()}
                </h3>

            </div>

            <div className="investment-input-div">

                <label>Investment Amount</label>

                <input
                    type="number"
                    placeholder={`$${selectedPlan.min.toLocaleString()} - ${
                        selectedPlan.max === Infinity
                            ? "Unlimited"
                            : "$" + selectedPlan.max.toLocaleString()
                    }`}
                    value={investmentAmount}
                    onChange={(e) =>
                        setInvestmentAmount(e.target.value)
                    }
                />

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
      <div className='investment-plan-top'>
        <h1>Choose Your Plan</h1>
        <p style={{color: "gray", fontSize: "18px"}}>We maintain full transparency, so you always know where your investments stand.</p>
      </div>
      <div className='investment-plan-btm'>
        <div className='investment-plan-btm-wrap'>
          <div className='investment-card-1'>
            <div className='investment-card-1-wrap'>
               <div className='investment-card-1-top'>
                <h2 style={{color: "#144da6"}}>Basic Plan</h2>
                <p>Return: 15% Every Week</p>
                <h2 style={{color: "#144da6"}}>$500 - $9,999</h2>
               </div>
            <div className='investment-card-1-middle'>
              <p><MdVerified style={{color: "#144da6"}}/>Duration: For 30 Days</p>
              <p><MdVerified style={{color: "#144da6"}}/>Total: 750% + Capital</p>
              <p><MdVerified style={{color: "#144da6"}}/>Min: $500</p>
              <p><MdVerified style={{color: "#144da6"}}/>Max: $9,999</p>
            </div>
            <div className='investment-card-1-btm'>
              <div
  className='investment-select-package-div'
  onClick={() => openPlan(plans[0])}
>
  Select Package
</div>
            </div>
            </div>
          </div>
            <div className='investment-card-1'>
            <div className='investment-card-1-wrap'>
               <div className='investment-card-1-top'>
                <h2 style={{color: "#144da6"}}>Pro Plan</h2>
                <p>Return: 35% Every Day</p>
                <h2 style={{color: "#144da6"}}>$10,000 - $49,999</h2>
               </div>
            <div className='investment-card-1-middle'>
              <p><MdVerified style={{color: "#144da6"}}/>Duration: For 30 Days</p>
              <p><MdVerified style={{color: "#144da6"}}/>Total: 1050% + Capital</p>
              <p><MdVerified style={{color: "#144da6"}}/>Min: $10,000</p>
              <p><MdVerified style={{color: "#144da6"}}/>Max: $49,999</p>
            </div>
            <div className='investment-card-1-btm'>
              <div
  className='investment-select-package-div'
  onClick={() => openPlan(plans[1])}
>
  Select Package
</div>
            </div>
            </div>
          </div>
            <div className='investment-card-1'>
            <div className='investment-card-1-wrap'>
               <div className='investment-card-1-top'>
                <h2 style={{color: "#144da6"}}>Premium Plan</h2>
                <p>Return: 5% Every Day</p>
                <h2 style={{color: "#144da6"}}>$50,000 - $99,999</h2>
               </div>
            <div className='investment-card-1-middle'>
              <p><MdVerified style={{color: "#144da6"}}/>Duration: For 3 Months</p>
              <p><MdVerified style={{color: "#144da6"}}/>Total: 1500% + Capital</p>
              <p><MdVerified style={{color: "#144da6"}}/>Min: $50,000</p>
              <p><MdVerified style={{color: "#144da6"}}/>Max: $99,999</p>
            </div>
            <div className='investment-card-1-btm'>
              <div
  className='investment-select-package-div'
  onClick={() => openPlan(plans[2])}
>
  Select Package
</div>
            </div>
            </div>
          </div>
              <div className='investment-card-1'>
            <div className='investment-card-1-wrap'>
               <div className='investment-card-1-top'>
                <h2 style={{color: "#144da6"}}>Retirement Plan</h2>
                <p>Return: 50% Every Day</p>
                <h2 style={{color: "#144da6"}}>$100,000</h2>
               </div>
            <div className='investment-card-1-middle'>
              <p><MdVerified style={{color: "#144da6"}}/>Duration: For 30 Days</p>
              <p><MdVerified style={{color: "#144da6"}}/>Total: 5000% + Capital</p>
              <p><MdVerified style={{color: "#144da6"}}/>Min: $100,000</p>
              <p><MdVerified style={{color: "#144da6"}}/>Max: Unlimited</p>
            </div>
            <div className='investment-card-1-btm'>
             <div
  className='investment-select-package-div'
  onClick={() => openPlan(plans[3])}
>
  Select Package
</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestmentPlans