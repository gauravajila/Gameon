// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (location.trim() !== '') {
      navigate(`/courts?area=${encodeURIComponent(location.trim())}`);
    }
  };

  const handleLocationAccess = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // Dummy location string for now
        const dummyLocation = `Lat ${latitude.toFixed(2)}, Lon ${longitude.toFixed(2)}`;

        setLocation(dummyLocation);

        // Optionally: reload or auto-navigate
        // navigate(`/courts?area=${encodeURIComponent(dummyLocation)}`);
      },
      (error) => {
        alert('Location access denied or unavailable.');
      }
    );
  };

  return (
    <div className="home-page">
      <h1 className="home-title">Book your courts now?</h1>

      <div className="location-card">
        <p className="card-title">Choose the area or locality!</p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter area or locality"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Go</button>
        </div>

        <button className="location-btn" onClick={handleLocationAccess}>
          Grant Location Access
        </button>
      </div>
    </div>
  );
}

export default Home;
