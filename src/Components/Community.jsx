import React from "react";
import why from "../assets/images/pexel1.jpg"
import why2 from "../assets/images/pexel2.jpg"
import { Fade } from "react-awesome-reveal";
import "../App.css";

const Community = () => {
  return (
    <Fade direction="side" cascade damping={1.6} triggerOnce>
    <section className="community-section">
      <h2>Why Join the Inhale Community?</h2>
      <p>
        I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
      </p>
      <div className="community-content">
        {/* Left Side: Images */}
        <div className="image-container">
          <img className="main-image" src =  {why}  alt="Meditation example" />
          <img  className="overlay-image"  src= {why2}  alt="Meditation on mobile" />
        </div>

        {/* Right Side: Features */}
        <div className="features-list">
          <p>Wide Range of Video Classes</p>
          <span>~</span>
          <p>Unique & Simple Approach</p>
          <span>~</span>
          <p>Experienced & Professional Teachers</p>
          <span>~</span>
          <p>Available at a Click of a Button</p>
        </div>
      </div>
    </section>
    </Fade>
  );
};

export default Community;
