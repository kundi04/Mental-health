import React from "react";
import med1 from "../assets/images/med1.jpg"
import med2 from "../assets/images/med2.jpg"
import med3 from "../assets/images/med3.jpg"
import "../App.css";

const AwarenessSection = () => {
  return (
    <div className="awareness-section">
      {/* Left Text Section */}
      <div className="text-section">
        <h2>Integrating Awareness into Our Lives</h2>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam fuga alias, vero in doloribus sint aliquid recusandae quisquam provident.
        </p>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus praesentium consequatur quam harum, nostrum omnis deleniti magni sapiente modi eius?
        </p>
      </div>

      {/* Right Image Section */}
      <div className="image-section">
        <img
          src= {med3}
          alt="Main Awareness Image"
          className="main-image"
        />
        <img
          src={med2}
          alt="Small Awareness Image 1"
          className="small-image small-image-1"
        />
        <img
          src={med1}
          alt="Small Awareness Image 2"
          className="small-image small-image-2"
        />
      </div>

      <div className="quote-container">
            <div className="quote">
                <p>"Your own Self-Realization is the greatest service you can render the world."</p>
                <p className="author">Sri Ramana Maharshi</p>
            </div>
        </div>
       
    </div>

 



  );
};

export default AwarenessSection;
