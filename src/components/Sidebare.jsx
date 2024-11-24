import React from 'react'
import './Sidebare.css';
function Sidebare() {
  return (
    <div>
        <div class="sidebar">
  {/* <div class="sidebar-header"> */}
    {/* <button class="menu-btn">
      &#9776;
    </button>
    <img src="logo.png" alt="AQS Logo" class="logo" />
  </div> */}
  <div class="profile-section">
    <div class="profile-pic">
      <img src="profile-pic.png" alt="Profile" />
    </div>
    <p class="employee-name">Name of Employee</p>
  </div>
  <nav class="nav-links">
    <a href="#" class="nav-item">
      <span class="nav-icon">📊</span>
      Dashboard
    </a>
    <a href="#" class="nav-item">
      <span class="nav-icon">📄</span>
      Projects
    </a>
    <a href="#" class="nav-item">
      <span class="nav-icon">🔔</span>
      Notifications
    </a>
    <a href="#" class="sign-out">Sign out</a>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <label for="darkMode">Dark mode</label>
    <input type="checkbox" id="darkMode" />
  </nav>
  
</div>

    </div>
  )
}

export default Sidebare