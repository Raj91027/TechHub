// src/pages/Roadmaps.js

import React from 'react';
import reactLogo from '../assets/logos/react.png';
import javaLogo from '../assets/logos/java.png';
import pythonLogo from '../assets/logos/python.png';
//import './Roadmaps.css'; // Import your custom CSS
import { Card } from 'react-bootstrap'; // Use Bootstrap's Card component

const Roadmaps = () => {
  return (
    <div className="roadmaps-container">
      <h2 className="text-center my-4">Learning Roadmaps</h2>

      <div className="container">
        <div className="row">
          {/* Example Card for Java Roadmap */}
          <div className="col-md-3 mb-3">
            <Card className="roadmap-card">
              <Card.Img variant="top" src={javaLogo} alt="Java Roadmap" />
              <Card.Body>
                <Card.Title>Full Stack Web Developer</Card.Title>
                <Card.Text>
                  A comprehensive guide to mastering Java from beginner to advanced topics.
                </Card.Text>
                <Card.Link href="/roadmaps/java">View Roadmap</Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3 mb-3">
            <Card className="roadmap-card">
              <Card.Img variant="top" src={javaLogo} alt="Java Roadmap" />
              <Card.Body>
                <Card.Title>Java Developer</Card.Title>
                <Card.Text>
                  A comprehensive guide to mastering Java from beginner to advanced topics.
                </Card.Text>
                <Card.Link href="/roadmaps/java">View Roadmap</Card.Link>
              </Card.Body>
            </Card>
          </div>

          {/* Example Card for Python Roadmap */}
          <div className="col-md-3 mb-3">
            <Card className="roadmap-card">
              <Card.Img variant="top" src={pythonLogo} alt="Python Roadmap" />
              <Card.Body>
                <Card.Title>Python Developer</Card.Title>
                <Card.Text>
                  Step-by-step roadmap for learning Python, including data science and web development.
                </Card.Text>
                <Card.Link href="/roadmaps/python">View Roadmap</Card.Link>
              </Card.Body>
            </Card>
          </div>

          {/* Example Card for React Roadmap */}
          <div className="col-md-3 mb-3">
            <Card className="roadmap-card">
              <Card.Img variant="top" src={reactLogo} alt="React Roadmap" />
              <Card.Body>
                <Card.Title>React Developer</Card.Title>
                <Card.Text>
                  A detailed guide to learning React, including hooks and state management.
                </Card.Text>
                <Card.Link href="/roadmaps/react">View Roadmap</Card.Link>
              </Card.Body>
            </Card>
          </div>

          {/* Add more roadmap cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
