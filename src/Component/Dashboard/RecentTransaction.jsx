import React from "react";
import "../../styles/recenttransaction.css";
import {
  FaArrowDown,
  FaArrowUp,
  FaChartLine,
} from "react-icons/fa";

const transactions = [
  {
    id: 1,
    type: "Deposit",
    amount: "$5,000",
    date: "30 Jul 2026",
    status: "Completed",
    icon: <FaArrowDown />,
  },
  {
    id: 2,
    type: "Withdrawal",
    amount: "$1,200",
    date: "28 Jul 2026",
    status: "Pending",
    icon: <FaArrowUp />,
  },
  {
    id: 3,
    type: "Investment",
    amount: "$3,500",
    date: "25 Jul 2026",
    status: "Completed",
    icon: <FaChartLine />,
  },
  {
    id: 4,
    type: "Deposit",
    amount: "$8,000",
    date: "22 Jul 2026",
    status: "Completed",
    icon: <FaArrowDown />,
  },
];

const RecentTransactions = () => {
  return (
    <section className="transactions">

      <div className="transactions-header">
        <div>
          <h2>Recent Transactions</h2>
          <p>Your latest account activities.</p>
        </div>

        <button>View All</button>
      </div>

      <div className="transactions-table">

        <div className="table-head">
          <span>Transaction</span>
          <span>Amount</span>
          <span>Date</span>
          <span>Status</span>
        </div>

        {transactions.map((item) => (
          <div className="table-row" key={item.id}>

            <div className="transaction-info">
              <div className="transaction-icon">
                {item.icon}
              </div>

              <p>{item.type}</p>
            </div>

            <span>{item.amount}</span>

            <span>{item.date}</span>

            <span
              className={
                item.status === "Completed"
                  ? "status completed"
                  : "status pending"
              }
            >
              {item.status}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
};

export default RecentTransactions;