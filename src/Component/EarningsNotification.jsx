import React, { useEffect, useState } from "react";
import "../styles/showearningnotification.css"

const notifications = [
  { name: "Sofia", country: "USA", amount: "$35,000" },
  { name: "James", country: "Canada", amount: "$52,000" },
  { name: "Emma", country: "United Kingdom", amount: "$41,500" },
  { name: "Liam", country: "Australia", amount: "$67,800" },
  { name: "Olivia", country: "Germany", amount: "$48,200" },
  { name: "Noah", country: "France", amount: "$73,000" },
  { name: "Ava", country: "Italy", amount: "$39,900" },
  { name: "William", country: "Spain", amount: "$55,600" },
  { name: "Isabella", country: "Sweden", amount: "$62,400" },
  { name: "Benjamin", country: "Netherlands", amount: "$44,800" },
  { name: "Lucas", country: "Switzerland", amount: "$81,000" },
  { name: "Mia", country: "Norway", amount: "$58,700" },
  { name: "Ethan", country: "Ireland", amount: "$46,300" },
  { name: "Charlotte", country: "Denmark", amount: "$90,500" },
  { name: "Henry", country: "Belgium", amount: "$37,600" },
  { name: "Amelia", country: "Finland", amount: "$64,900" },
  { name: "Alexander", country: "Austria", amount: "$78,200" },
  { name: "Harper", country: "New Zealand", amount: "$54,000" },
  { name: "Daniel", country: "Singapore", amount: "$96,400" },
  { name: "Grace", country: "Japan", amount: "$43,700" },
  { name: "Michael", country: "South Korea", amount: "$70,300" },
  { name: "Ella", country: "United Arab Emirates", amount: "$83,100" },
  { name: "David", country: "Brazil", amount: "$59,500" },
  { name: "Chloe", country: "South Africa", amount: "$49,600" },
  { name: "Matthew", country: "Mexico", amount: "$76,800" },
  { name: "Scarlett", country: "Portugal", amount: "$66,200" },
  { name: "Joseph", country: "Poland", amount: "$40,900" },
  { name: "Victoria", country: "Czech Republic", amount: "$88,700" },
  { name: "Samuel", country: "Greece", amount: "$53,400" },
  { name: "Zoe", country: "Luxembourg", amount: "$101,500" },
   { name: "Thomas", country: "USA", amount: "$35,050" },
];

export default function EarningsNotification() {
  const [notification, setNotification] = useState(notifications[0]);
  const [show, setShow] = useState(true);
useEffect(() => {
  let index = 0;

  const cycleNotifications = () => {
    // Show the notification
    setNotification(notifications[index]);
    setShow(true);

    // Keep it visible for 5 seconds
    setTimeout(() => {
      setShow(false);

      // Wait another 5 seconds before showing the next one
      setTimeout(() => {
        index = (index + 1) % notifications.length;
        cycleNotifications();
      }, 5000);
    }, 5000);
  };

  cycleNotifications();

  return () => {};
}, []);

  return (
    <div className={`earnings-popup ${show ? "show" : "hide"}`}>
      <div className="popup-icon">💰</div>

      <div>
        <h3>Successful Withdrawal</h3>
        <p>
          {notification.name} from <strong>{notification.country}</strong> just
          earned <strong>{notification.amount}</strong>.
        </p>
      </div>
    </div>
  );
}