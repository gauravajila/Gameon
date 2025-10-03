// src/components/SearchBar.jsx
import React, { useEffect, useState } from 'react';
import '../styles/searchbar.css';

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');
  const [autoDetected, setAutoDetected] = useState(false);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (pos) => {
        setLocation('Indiranagar'); // mock area
        setAutoDetected(true);
      },
      () => { /* fallback */ }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) onSearch(location);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter area"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Search</button>
      {autoDetected && <small>Auto-detected: {location}</small>}
    </form>
  );
}

export default SearchBar;
