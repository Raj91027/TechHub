// src/components/Footer.js

import React from 'react';
// src/components/Footer.js
import './Footer.css'; // Import your custom CSS

import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About TechHub</h5>
            <p>
              TechHub is your ultimate platform to explore technical documentation, learning roadmaps, resources to learn skills and the latest trends in programming.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 mb-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/documentation" className="text-white">Documentation</a></li>
              <li><a href="/roadmaps" className="text-white">Roadmaps</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              <FaEnvelope /> <a href="mailto:contact@techhub.com" className="text-white">contact@techhub.com</a>
            </p>
            <div className="social-icons">
              <a href="https://twitter.com" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="https://linkedin.com" className="text-white me-3"><FaLinkedin size={24} /></a>
              <a href="https://github.com" className="text-white me-3"><FaGithub size={24} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2024 TechHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
