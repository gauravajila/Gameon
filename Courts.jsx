// src/pages/Courts.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/courts.css";

// Dummy courts data (replace later with API)
const mockCourts = [
  {
    id: 1,
    name: "Smash Arena Badminton Court",
    address: "123 MG Road, Bangalore",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Shuttle Kings Indoor Stadium",
    address: "45 Indiranagar, Bangalore",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Ace Sports Complex",
    address: "Koramangala, Bangalore",
    rating: 4.8,
  },
];

function Courts() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const area = params.get("area") || "your area";

  return (
    <div className="courts-page">
      <h2 className="courts-title">Badminton courts in {area}</h2>

      <div className="courts-grid">
        {mockCourts.map((court) => (
          <div key={court.id} className="court-card">
            <h3>{court.name}</h3>
            <p className="address">{court.address}</p>
            <p className="rating">⭐ {court.rating}</p>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courts;
