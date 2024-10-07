// src/pages/Documentation.js

import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import javaLogo from '../assets/logos/java.png';
import pythonLogo from '../assets/logos/python.png';
import jsLogo from '../assets/logos/javascript.png';
import djangoLogo from '../assets/logos/django.png';
import flaskLogo from '../assets/logos/flask.png';
import reactLogo from '../assets/logos/react.png';
import npmLogo from '../assets/logos/npm.png';
import nodeLogo from '../assets/logos/node.png';
import gitLogo from '../assets/logos/git.png';

// Documentation data grouped by category
const documentationLinks = {
  languages: [
    { name: 'Java', url: 'https://docs.oracle.com/javase/tutorial/', logo: javaLogo },
    { name: 'Python', url: 'https://docs.python.org/3/', logo: pythonLogo },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logo: jsLogo },
  ],
  frameworks: [
    { name: 'Django', url: 'https://docs.djangoproject.com/en/stable/', logo: djangoLogo },
    { name: 'Flask', url: 'https://flask.palletsprojects.com/', logo: flaskLogo },
    { name: 'React', url: 'https://react.dev/blog/2023/03/16/introducing-react-dev', logo: reactLogo },
  ],
  tools: [
    { name: 'npm', url: 'https://docs.npmjs.com/', logo: npmLogo },
    { name: 'Node.js', url: 'https://nodejs.org/en/docs/', logo: nodeLogo },
    { name: 'Git', url: 'https://git-scm.com/doc', logo: gitLogo },
  ],
};

function Documentation() {
  // Combine all documentation links for search purposes
  const allLinks = [...documentationLinks.languages, ...documentationLinks.frameworks, ...documentationLinks.tools];
  const [filteredLinks, setFilteredLinks] = useState(allLinks);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredLinks(allLinks);
    } else {
      setFilteredLinks(
        allLinks.filter((doc) =>
          doc.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  // Filter the links based on the search query
  const filterByCategory = (category) => {
    return filteredLinks.filter((doc) => documentationLinks[category].some((d) => d.name === doc.name));
  };

  return (
    <div className="documentation-container">
      <h2 className="text-center my-4">Documentation Links</h2>
      
      {/* Search Bar */}
      <div className="container mb-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Languages Section */}
      <div className="container">
        <h3 className="mb-3">Languages</h3>
        <div className="row">
          {filterByCategory('languages').map((doc, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <img src={doc.logo} className="card-img-top" alt={`${doc.name} logo`} style={{height: '150px', objectFit: 'contain'}} />
                <div className="card-body">
                  <h5 className="card-title">{doc.name}</h5>
                  <p className="card-text">Click below to view the official {doc.name} documentation.</p>
                  <a href={doc.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Go to {doc.name} Docs
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks Section */}
      <div className="container">
        <h3 className="mb-3">Frameworks</h3>
        <div className="row">
          {filterByCategory('frameworks').map((doc, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <img src={doc.logo} className="card-img-top" alt={`${doc.name} logo`} style={{height: '150px', objectFit: 'contain'}} />
                <div className="card-body">
                  <h5 className="card-title">{doc.name}</h5>
                  <p className="card-text">Click below to view the official {doc.name} documentation.</p>
                  <a href={doc.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Go to {doc.name} Docs
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="container">
        <h3 className="mb-3">Tools</h3>
        <div className="row">
          {filterByCategory('tools').map((doc, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <img src={doc.logo} className="card-img-top" alt={`${doc.name} logo`} style={{height: '150px', objectFit: 'contain'}} />
                <div className="card-body">
                  <h5 className="card-title">{doc.name}</h5>
                  <p className="card-text">Click below to view the official {doc.name} documentation.</p>
                  <a href={doc.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Go to {doc.name} Docs
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Documentation;
