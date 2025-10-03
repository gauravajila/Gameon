// src/pages/CourtDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/courtdetails.css';

function CourtDetails() {
  const { id } = useParams();
  const slots = ['6AM - 7AM', '7AM - 8AM', '5PM - 6PM', '6PM - 7PM'];

  const handleBook = (slot) => {
    alert(`You must login to book slot: ${slot} for court ${id}`);
  };

  return (
    <div className="court-details">
      <h2>Court ID: {id}</h2>
      <p>Select a slot to book:</p>
      <ul>
        {slots.map(slot => (
          <li key={slot}>
            <button onClick={() => handleBook(slot)}>{slot}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourtDetails;
