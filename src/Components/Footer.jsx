import React from 'react';
import './Footer.css'; // Import your footer styles if you have any
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5>Contact</h5>
            <div className="mb-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Sapphire Retail Head Office<br />
                1.5-Km, Defence Road, Bhobtian Chowk,<br /> Off Raiwind Road, Opposite University of Lahore, Lahore.
            </div>
            <div className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} /> wecare@sapphireonline.pk
            </div>
            <div className="mb-3">
                <FontAwesomeIcon icon={faPhone} /> +92(0)42 111-738-245
            </div>
          </div>
          <div className="col-sm">
            <h5>Customer Care</h5>
            <div className="mb-3">
              <text>Exchange & return</text>
            </div>
            <div className="mb-3">
              <text>Contact Us</text>
            </div>
            <div className="mb-3">
              <text>Track your order</text>
            </div>
          </div>
          <div className="col-sm">
            <h5>Information</h5>
            <div className="mb-3">
              <text>About Us</text>
            </div>
            <div className="mb-3">
              <text>Privacy Policy</text>
            </div>
            <div className="mb-3">
              <text>Payment</text>
            </div>
            <div className="mb-3">
              <text>Blogs</text>
            </div>
          </div>
          <div className="col-sm" > 
            <h5>NEWSLETTER SIGNUP</h5>
            <div className="email-subscription">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/sapphireofficial/"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.instagram.com/sapphirepakistan/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.youtube.com/channel/UCvMjM0BkK7SzlYnPTi5CBUQ"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;