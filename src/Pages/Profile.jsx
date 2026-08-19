import React, { useState } from "react";
import "../styles/profile.css";
import Sidebar from "../Component/Dashboard/Sidebar";
import TopHeader from "../Component/TopHeader";
import { useSelector } from "react-redux";


const Profile = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Get logged-in user from Redux
  const user = useSelector((state) => state.auth.user);


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
                {user?.fullName || "User"}
              </div>

            </div>


            <div className="profile-item">

              <label>Email Address</label>

              <div className="profile-value">
                {user?.email || "No email available"}
              </div>

            </div>


          </div>


        </div>


      </main>


    </div>
  );
};


export default Profile;