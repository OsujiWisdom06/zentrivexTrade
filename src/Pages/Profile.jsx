import React from "react";
import "../styles/profile.css"
import Sidebar from "../Component/Dashboard/Sidebar";
import Dashboardheader from "../Component/Dashboard/Dashboardheader";



const Profile = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-main">

        {/* <Dashboardheader /> */}

        <div className="profile-container">

          <h2>My Profile</h2>

          <div className="profile-card">

            <div className="profile-item">
              <label>Full Name</label>
              <div className="profile-value">
                Wisdom Osuji
              </div>
            </div>

            <div className="profile-item">
              <label>Email Address</label>
              <div className="profile-value">
                wisdom@email.com
              </div>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Profile;