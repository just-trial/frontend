import React from 'react';
import './TicketRating.css';

const TicketRating : React.FC= () => {
  return (
    <div className="rating">
      <span className="rating-label">6.3</span>
      <p className="p3 rating-description" style={{padding: '5px', color: '#0A2156'}}>Excelente</p><p className="p3" style={{padding: '5px', color: '#9EA5B8'}}>(433 reviews)</p>
    </div>
  );
};

export default TicketRating;