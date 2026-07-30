import React from "react";
import "../../styles/quickaction.css";
import { useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaWallet,
  FaArrowUp,
  FaChartLine,
} from "react-icons/fa";


const QuickAction = () => {

  const navigate = useNavigate();


  const actions = [
    {
      title: "Deposit Funds",
      icon: <FaMoneyBillWave />,
      color: "#2563eb",
      path: "/deposit",
    },
    {
      title: "Withdraw",
      icon: <FaArrowUp />,
      color: "#ef4444",
      path: "/withdraw",
    },
    {
      title: "My Wallet",
      icon: <FaWallet />,
      color: "#10b981",
      path: "/my-wallet",
    },
    {
      title: "Invest Now",
      icon: <FaChartLine />,
      color: "#f59e0b",
      path: "/my-dashboard/investment-plans",
    },
  ];



  return (
    <section className="quick-actions">


      <div className="quick-actions-header">

        <h2>
          Quick Actions
        </h2>

        <p>
          Access your most used features instantly.
        </p>

      </div>





      <div className="actions-grid">


        {actions.map((action, index) => (

          <div 
            className="action-card" 
            key={index}
          >



            <div
              className="action-icon"
              style={{ background: action.color }}
            >

              {action.icon}

            </div>




            <h3>
              {action.title}
            </h3>





            <button
              onClick={() => navigate(action.path)}
            >

              Open

            </button>




          </div>

        ))}


      </div>



    </section>
  );
};


export default QuickAction;