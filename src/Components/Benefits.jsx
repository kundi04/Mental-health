import React from "react";
import { Fade } from "react-awesome-reveal";
import moonIcon from "../assets/images/icon1.png"; 
import lotusIcon from "../assets/images/icon2.png"; 
import stressIcon from "../assets/images/icon3.png";
import focusIcon from "../assets/images/icon4.png";
import "../App.css"; // Import your styles

const MindfulnessBenefits = () => {
  const benefits = [
    {
      icon: moonIcon,
      title: "Helps you sleep better",
      description: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      icon: lotusIcon,
      title: "Decreases anxiety & depression",
      description: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      icon: stressIcon,
      title: "Reduces stress levels",
      description: "I'm a paragraph. Click here to add your own text and edit me.",
    },
    {
      icon: focusIcon,
      title: "Improves attention & concentration",
      description: "I'm a paragraph. Click here to add your own text and edit me.",
    },
  ];

  return (
    <section className="mindfulness-section">
      <h2 className="mindfulness-title">How Being Mindful Changes Our Lives</h2>
      <div className="mindfulness-container">
        {benefits.map((benefit, index) => (
          <Fade key={index} delay={index * 200} triggerOnce>
            <div className="mindfulness-card">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="mindfulness-icon"
              />
              <h3 className="mindfulness-card-title">{benefit.title}</h3>
              <p className="mindfulness-description">{benefit.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default MindfulnessBenefits;
