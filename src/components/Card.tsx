import React from 'react';
import './Card.css';

import { Link } from 'react-router-dom';
import TicketHeader from './TicketHeader';
import TicketRating from './TicketRating';

interface CardProps {
  id: string;
  index: number;
  price: number;
  title: string;
  city: string;
}

const Card : React.FC<CardProps>= ({id, index, price, title, city}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`/images/tickets/${index}.png`} alt={`Ticket ${index} image`} />
        <div className="tag"><p className='p4' style={{fontWeight: '450', color: '#0A2156'}}>Ingresso</p></div>
        <button className="heart-button">
          <img src="/heart.svg" alt="Favorite" className="heart-icon" />
        </button>
      </div>
       <div className="card-content">
        <TicketHeader title={title} city={city}/>
        <TicketRating />
      </div>
      <div className="separator"></div>
      <div className="price-tag">
        <p className="p3" style={{padding: '5px', color: '#858FA6'}}>de R$ {(price * 1.69).toFixed(2)} por</p>
        <div className="current-price">
          <p className="p3">R$</p><h2 style={{color: '#4070F4'}}>{price.toFixed(2)}</h2>
        </div>
        <Link
          key={id}
          to={`/ticket/${id}`}
          state={{ from: location.pathname }}
        >
          <button className="action-button">Saber mais
            <img src="/arrow.svg" alt="Arrow" className="arrow-icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;