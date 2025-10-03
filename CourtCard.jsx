// src/components/CourtCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/courtcard.css';

function CourtCard({ court }) {
  const navigate = useNavigate();

  return (
    <div className="court-card" onClick={() => navigate(`/court/${court.id}`)}>
      <img src={court.image} alt={court.name} />
      <h3>{court.name}</h3>
      <p>{court.address}</p>
    </div>
  );
}

export default CourtCard;
