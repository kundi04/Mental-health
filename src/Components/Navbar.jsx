import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../App.css";

const Navbar = () => {
  // State for modals
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  // State for sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsTrialModalOpen(false); // Close trial modal if open
  };

  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openTrialModal = () => {
    setIsTrialModalOpen(true);
    setIsLoginModalOpen(false); // Close login modal if open
  };

  const closeTrialModal = () => setIsTrialModalOpen(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Inhale Logo" className="logo" />
          <span className="revspan">Revive Hub</span>
        </div>
        <ul className="navbar-links">
          <li>
            <button className="login-btn" onClick={openLoginModal}>
              Log In
            </button>
          </li>
          <li>
            <button className="trial-btn" onClick={openTrialModal}>
              Start Free Trial
            </button>
          </li>
          <li>
            <button className="hamburger" onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-sidebar" onClick={toggleSidebar}>
            ✕
          </button>
          <ul className="sidebar-links">
            <li>
              <Link className="lin" to="/" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link className="lin" to="/our-approach" onClick={toggleSidebar}>
                Our Approach
              </Link>
            </li>
            <li>
              <Link className="lin" to="/virtual-classes" onClick={toggleSidebar}>
                Virtual Classes
              </Link>
            </li>
            <li>
              <Link className="lin" to="/blogs" onClick={toggleSidebar}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <>
          <div className="modal-overlay" onClick={closeLoginModal}></div>
          <div className="modal-content">
            <button className="close-btn" onClick={closeLoginModal}>
              ✕
            </button>
            <h2 className="modal-title">Log In</h2>
            <form className="login-form">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <button type="submit" className="login-form-btn">
                Log In
              </button>
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="link-btn">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </>
      )}

      {/* Trial Modal */}
      {isTrialModalOpen && (
        <>
          <div className="modal-overlay" onClick={closeTrialModal}></div>
          <div className="modal-content">
            <button className="close-btn" onClick={closeTrialModal}>
              ✕
            </button>
            <h2 className="modal-title">Choose the Right Membership</h2>
            <div className="membership-cards">
              {/* Card 1 */}
              <div className="card">
                <h3>Basic Plan</h3>
                <p className="price">$1</p>
                <p>Access to limited features</p>
                <p>Ideal for beginners</p>
                <button className="card-btn">Start Basic</button>
              </div>

              {/* Card 2 */}
              <div className="card">
                <h3>Standard Plan</h3>
                <p className="price">$20</p>
                <p>Access to most features</p>
                <p>Great value for regular users</p>
                <button className="card-btn">Start Standard</button>
              </div>

              {/* Card 3 */}
              <div className="card premium">
                <h3>Premium Plan</h3>
                <p className="price">$50</p>
                <p>Access to all features</p>
                <p>Perfect for professionals</p>
                <button className="card-btn">Start Premium</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
