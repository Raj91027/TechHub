// src/pages/Home.js

import React from 'react';
import './home.css'; // Create this CSS file for custom styles
import { Card } from 'react-bootstrap'; // Import Card from react-bootstrap
import { FaBook, FaCode, FaTools } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container-fluid home-container">
      {/* Hero Section */}
      <div className="hero rounded">
        <div className="hero-content text-center">
          <h1>Welcome to TechHub</h1>
          <p>Your one-stop resource for all technical skills and roadmaps.</p>
          <a href="/documentation" className="btn btn-primary">Get Started</a>
        </div>
      </div>

      {/* Documentation Section */}
      <section className="documentation-section my-5">
        <h2 className="text-center mb-4">Documentation</h2>
        <div className="container">
          <div className="row">
            {/* Example Card for Java */}
            <div className="col-md-4 mb-4">
              <Card className="doc-card">
                <Card.Body>
                  <Card.Title><FaBook /> Java</Card.Title>
                  <Card.Text>
                    Comprehensive documentation and resources for Java development.
                  </Card.Text>
                  <Card.Link href="https://docs.oracle.com/javase/tutorial/">View Documentation</Card.Link>
                </Card.Body>
              </Card>
            </div>

            {/* Example Card for Python */}
            <div className="col-md-4 mb-4">
              <Card className="doc-card">
                <Card.Body>
                  <Card.Title><FaBook /> Python</Card.Title>
                  <Card.Text>
                    Explore the documentation for Python and its frameworks.
                  </Card.Text>
                  <Card.Link href="https://docs.python.org/3/">View Documentation</Card.Link>
                </Card.Body>
              </Card>
            </div>

            {/* Example Card for React */}
            <div className="col-md-4 mb-4">
              <Card className="doc-card">
                <Card.Body>
                  <Card.Title><FaBook /> React</Card.Title>
                  <Card.Text>
                    Discover React documentation and best practices.
                  </Card.Text>
                  <Card.Link href="https://react.dev/blog/2023/03/16/introducing-react-dev">View Documentation</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks, Languages, and Tools Section */}
      <section className="resources-section my-5">
        <h2 className="text-center mb-4">Resources</h2>
        <div className="container">
          <div className="row">
            {/* Example Card for Django */}
            <div className="col-md-4 mb-4">
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title><FaCode /> Full Stack Web Development</Card.Title>
                  <Card.Text>
                  Get started with HTML, CSS, Javascript, Node.js, React.js and build robust web applications.
                  </Card.Text>
                  <Card.Link href="/documentation/django">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </div>

            {/* Example Card for Node.js */}
            <div className="col-md-4 mb-4">
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title><FaTools /> Java Development</Card.Title>
                  <Card.Text>
                    Resources to learn basic to advance level Java Programming.
                  </Card.Text>
                  <Card.Link href="/documentation/node">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </div>

            {/* Example Card for npm */}
            <div className="col-md-4 mb-4">
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title><FaTools /> Python Development</Card.Title>
                  <Card.Text>
                  Understand python programming concepts and learn advanced python to use in AI and ML.
                  </Card.Text>
                  <Card.Link href="/documentation/npm">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section my-5">
        <h2 className="text-center mb-4">Roadmaps</h2>
        <div className="container">
          <div className="row">
            {/* Example Card for Django */}
            <div className="col-md-4 mb-4">
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title><FaCode /> Full Stack Web Developer</Card.Title>
                  <Card.Text>
                    Roadmap to learn Frontend as well as Backend Web Development.
                  </Card.Text>
                  <Card.Link href="/documentation/django">View Roadmap</Card.Link>
                </Card.Body>
              </Card>
            </div>

            {/* Example Card for Node.js */}
            <div className="col-md-4 mb-4">
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title><FaTools /> Java Developer</Card.Title>
                  <Card.Text>
                  Roadmap to learn Basic to advanced Java Programming.
                  </Card.Text>
                  <Card.Link href="/documentation/node">View Roadmap</Card.Link>
                </Card.Body>
              </Card>
            </div>

            {/* Example Card for npm */}
            <div className="col-md-4 mb-4">
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title><FaTools /> Python Developer</Card.Title>
                  <Card.Text>
                    Roadmap to learn Basic to advanced Python Programming.
                  </Card.Text>
                  <Card.Link href="/documentation/npm">View Roadmap</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
