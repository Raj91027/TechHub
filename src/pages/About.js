// src/pages/About.js

import React from 'react';
//import './About.css'; // Import the CSS for styling (optional)
import { FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="text-center my-4">About TechHub</h2>

      <div className="container">
        <section className="about-section mb-5">
          <h3>TechHub Overview</h3>
          <p>
          TechHub is your ultimate platform to explore technical documentation, learning roadmaps, resources to learn skills and the latest trends in programming.
          </p>
          <p>
            Our aim is to provide comprehensive documentation links and, resources links for various technical skills
            such as Java, Python, JavaScript, Django, Flask, Node.js, npm, React, Git, GitHub, and more.
            Additionally, we offer roadmaps to guide users through their learning journey.
          </p>
          <p>
            Our goal is to create a one-stop resource for developers and learners, making it easier
            to find the information they need to succeed in their projects and careers.
          </p>
        </section>

        <section className="about-section mb-5">
          <h3>Our Team</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Raj Kumar Yadav</h5>
                  <p className="card-text">Full Stack Developer - Knowledgeable in Java, Node.js, and Database Management</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Deepak Uraon</h5>
                  <p className="card-text">UI/UX Designer - Expert in UI/UX Design</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Siddharth Kumar</h5>
                  <p className="card-text">Backend Developer - Specialised in Python, Django</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section mb-5">
          <h3>Contact Us</h3>
          <p>If you have any questions or feedback, feel free to reach out!</p>
          <p>
            <FaEnvelope /> <a href="mailto:tech.hub@microsoft.com">tech.hub@microsoft.com</a>
          </p>
          <p>
            <FaTwitter /> <a href="https://twitter.com/tech-hub" target="_blank" rel="noopener noreferrer">@TechHub</a>
          </p>
          <p>
            <FaLinkedin /> <a href="https://linkedin.com/in/yadav-raj10" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
