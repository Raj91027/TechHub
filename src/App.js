// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Roadmaps from './pages/Roadmaps';
import About from './pages/About';
import Resources from './pages/Resources';
import Footer from './components/Footer'; // Import Footer
import './App.css';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar">
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">Tech Hub</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className ="nav-link" to="/documentation">Documentation</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/roadmaps">Roadmap</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/resources">Resources</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      <Home />
        {/* Wrap Route components inside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/resources" element={<Resources/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
