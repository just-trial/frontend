import React from 'react';
import './Card.css';

interface CardProps {
  index: number;
}

const Card : React.FC<CardProps>= ({index}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`/images/tickets/${index}.png`} alt={`Ticket ${index} image`} />
        <div className="tag"><p className='p4' style={{fontWeight: '450', color: '#0A2156'}}>Ingresso</p></div>
        <button className="heart-button">
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.3823 5.711C13.0713 4.905 14.2633 4 16.0783 4C19.2533 4 21.3823 6.98 21.3823 9.755C21.3823 15.556 14.1603 20 12.3823 20C10.6043 20 3.38232 15.556 3.38232 9.755C3.38232 6.98 5.51132 4 8.68632 4C10.5013 4 11.6933 4.905 12.3823 5.711Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
      </div>
       <div className="card-content">
        <h3 className="card-title">Lorem ipsum dolor amet consectetur</h3>
        <p className="p3 location"><img src="location.svg" alt="Location Icon" />GetYourGuide Tours & Tickets GmbH</p>
        <div className="rating">
          <span className="rating-label">6.3</span>
          <p className="p3 rating-description" style={{padding: '5px', color: '#0A2156'}}>Excelente</p><p className="p3" style={{padding: '5px', color: '#9EA5B8'}}>(433 reviews)</p>
        </div>
        {/* <div className="divider"></div>
        <div className="price-tag">
          <p className="p3">R$ 2.351,28 por</p>
          <div className="current-price">
            <span className="medium">R$</span>
            <h2>1.391,28</h2>
          </div>
        </div>
        <button className="action-button">Saber mais <span className="arrow">→</span></button> */}
      </div>
    </div>
  );
};

export default Card;