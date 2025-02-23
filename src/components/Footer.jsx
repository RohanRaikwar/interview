import React from "react";
import "./Footer.css";
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Rating Stars */}
        <div className="footer-rating">
          <span className="star">⭐</span>
          <span className="star">⭐</span>
          <span className="star">⭐</span>
          <span className="star">⭐</span>
          <span className="star">⭐</span>
        </div>

        {/* Center Section - Links */}
        <div className="footer-links">
          <a href="#">AML Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Contact</a>
          <a href="#">Terms Of Service</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
          <a href="#">Provably Fair</a>
          <a href="#">Privacy Statement</a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="footer-social">
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaTiktok /></a>
          <a href="#" className="social-icon"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
