// src/components/SearchBar.js

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search documentation or roadmaps..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
