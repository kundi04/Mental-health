import React from "react";
import moon from "../assets/images/moon.svg"
import day from "../assets/images/day.svg"
import line from "../assets/images/Line.svg"
import "../App.css";

const MembershipOptions = () => {
  return (
    <div className="membership-container">
      <div className="membership-options">
        <div className="membership">
          <div className="icons">
            <img src= {moon} alt="" />
          </div>
          <h2 className="membership-duration">12 Months</h2>
          <p className="membership-details">Best Value</p>
        </div>
        <img src= {line} alt="" />
        <div className="membership">
          <div className="icons">
          <img src= {day} alt="" />
          </div>
          <h2 className="membership-duration">1 Month</h2>
          <p className="membership-details">Cancel Anytime</p>
        </div>
      </div>
      <button className="view-memberships-btn">View Memberships</button>
    </div>
  );
};

export default MembershipOptions;
