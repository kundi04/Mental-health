import React from "react";
import video from "../assets/meditationhall.mp4"
import "../App.css";


const App = () => {
  return (
    <div>
   
      <header className="hero-section">
      <video className = "vid1" src = {video} autoPlay loop muted/>
        <div className="hero-content">
          <h1>Welcome to ReviveHub</h1>
          <p>Your partner in recovery and personal growth, where support meets opportunity.</p>
          <button className="cta-btn">Get 7 Days Free</button>
        </div>
      </header>

     
     
    </div>
  );
};

export default App;
