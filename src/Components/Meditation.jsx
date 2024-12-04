import React from "react";
import "../App.css"; // Import your styles

const FreeMeditationSection = () => {
  return (
    <section className="meditation-section">
      <div className="meditation-container">
        <div className="meditation-content">
          <h2 className="meditation-title">Start for Free</h2>
          <p className="meditation-subtitle">
            Try us out with a first free meditation class
          </p>
          <div className="meditation-divider">~</div>
          <h3 className="meditation-session-title">Loving Kindness</h3>
          <p className="meditation-duration">Duration 20:45</p>
          <p className="meditation-description">
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </div>
        <div className="meditation-video-container">
          <video
            className="meditation-video"
            controls
            poster="https://via.placeholder.com/400"
            >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your actual video URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default FreeMeditationSection;
