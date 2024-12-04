import React from "react";
import { Fade } from "react-awesome-reveal";
import "../App.css"; // Import the CSS file for styles

// Import your mentor images
import mentor1 from "../assets/images/mentor1.jpg";
import mentor2 from "../assets/images/mentor2.jpg";
import mentor3 from "../assets/images/mentor3.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ian Gardner",
      role: "Meditation Trainer",
      description:
        "lorem ipsum",
      image: mentor1,
    },
    {
      name: "Ophelia Franco",
      role: "MBSR Specialist",
      description:
        "lorem ipsum",
      image: mentor2,
    },
    {
      name: "Zayd Hale",
      role: "Yoga & Meditation",
      description:
        "lorem ipsum",
      image: mentor3,
    },
  ];

  return (
    <section className="team-section">
      <Fade triggerOnce>
        <h2 className="mentors">Meet Our Mentors</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default TeamSection;
