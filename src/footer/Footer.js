import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <p>
            <FaEnvelope className="footer-icon" />
            Email: <a href="mailto:blacksofttechnologies@gmail.com">blacksofttechnologies@gmail.com</a>
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" />
            Phone: 
           <span>
    <a href="tel:+919961588563">+91 9961588563</a> | 
    <a href="tel:+919207205255">+91 9207205255</a>
  </span>
          </p>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Black Soft Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
