import React from "react";
import logo from "../assets/images/logo.png"
import "../App.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
        <img src= {logo} alt="Inhale Logo" className="logo-f" />
          <p className="footer-text">© 2024 by ReviveHub.</p>
        </div>

        {/* Menu Section */}
        <div className="footer-menu">
          <h4 className="footer-title">Menu</h4>
          <ul className="footer-list">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#approach" className="footer-link">Our Approach</a></li>
            <li><a href="#classes" className="footer-link">Virtual Classes</a></li>
            <li><a href="#paths" className="footer-link">Meditation Paths</a></li>
            <li><a href="#memberships" className="footer-link">Memberships</a></li>
            <li><a href="#blog" className="footer-link">Blog</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <p>Tel: 123-456-7890</p>
          <p>Email: <a href="mailto:info@mysite.com" className="footer-link">info@mysite.com</a></p>
          <p>500 Terry Francine St<br />San Francisco, CA 94158</p>
        </div>

        {/* Socials Section */}
        <div className="footer-socials">
          <h4 className="footer-title">Socials</h4>
          <ul className="footer-list">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link">Youtube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
