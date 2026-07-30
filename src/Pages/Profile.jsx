import React, { useState } from "react";
import "../styles/profile.css";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";

const Profile = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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