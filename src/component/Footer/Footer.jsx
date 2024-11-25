import React from 'react'
import "./Footer.css"
import { FaInstagram } from 'react-icons/fa6';
import { CiBasketball } from 'react-icons/ci';
import { FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container" id='footer'>
      <div className="footer">
        <div className="footer-logo">
          <h1 className="footer-letter">L</h1>

          <h2>Lawliet</h2>
        </div>
        <div className="items">
          <div>
            <ul>
              <li>Product</li>
              <li>Overview</li>
              <li>Features</li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Company</li>
              <li>About</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Support</li>
              <li>Help Center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <p>© 2021 Lawliet. All rights reserved</p>
        <div className='social-icons'>
          <FaInstagram/>
          <CiBasketball/>
          <FaTwitter/>
          <FaYoutube/>

        </div>
      </div>
    </div>
  );
}

export default Footer
