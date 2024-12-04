import React from "react";
import "../App.css"; // Import your CSS file
import moonhand from "../assets/images/moonhand.png"

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        {/* Left Quote Section */}
        <div className="quote-section">
          <div className="quote-icon">
            <img className="moonhand" src={moonhand} alt="motivational image"/>
          </div>
          <blockquote className="quote-text">
            "The thing about meditation is: You become more and more you."
          </blockquote>
          <cite className="quote-author">~ David Lynch</cite>
        </div>

        {/* Right Newsletter Subscription Section */}
        <div className="subscription-section">
          <h2 className="subscription-title">Let's Stay Connected</h2>
          <p className="subscription-description">
            Subscribe to our newsletter and get updates about upcoming classes and inspiration.
          </p>
          <form className="subscription-form">
          <label htmlFor="name" className="form-label">
           
            </label>
            <input
              type="name"
              id="name"
              className="form-input"
              placeholder="Full name"
              required
            />

            <label htmlFor="email" className="form-label">
            
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />

<label htmlFor="phonenumber" className="form-label">
            
            </label>
            <input
              type="phonenumber"
              id="phonenumber"
              className="form-input"
              placeholder="Phone number "
              required
            />
            <div className="checkbox-container">
              <input type="checkbox" id="subscribe" />
              <label htmlFor="subscribe">
                Yes, subscribe me to your newsletter.
              </label>
            </div>
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
