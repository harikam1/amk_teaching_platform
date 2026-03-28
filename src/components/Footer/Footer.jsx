import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h3>AMK Solutions</h3>
          <p>
            Personalized educational and therapeutic support for children with
            learning difficulties, ADHD, Autism, and emotional challenges.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p><FaEnvelope /> meenakumariadusumilli@gmail.com</p>
          <p><FaPhoneAlt /> +91 8885092000</p>
          <p><FaMapMarkerAlt /> India</p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 AMK Solutions. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;