import React from 'react';
import './Card.css';

interface CardProps {
  index: number;
  price: number;
  title: string;
  description: string;
}

const Card : React.FC<CardProps>= ({index, price, title, description}) => {
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
        <h3 className="card-title">{title}</h3>
        <p className="p3 location"><img src="location.svg" alt="Location Icon" />{description}</p>
        <div className="rating">
          <span className="rating-label">6.3</span>
          <p className="p3 rating-description" style={{padding: '5px', color: '#0A2156'}}>Excelente</p><p className="p3" style={{padding: '5px', color: '#9EA5B8'}}>(433 reviews)</p>
        </div>
      </div>
      <div className="separator"></div>
      <div className="price-tag">
        <p className="p3" style={{padding: '5px', color: '#858FA6'}}>de R$ {(price * 1.69).toFixed(2)} por</p>
        <div className="current-price">
          <p className="p3">R$</p><h2 style={{color: '#4070F4'}}>{price.toFixed(2)}</h2>
        </div>
        <button className="action-button">Saber mais
          <img src="/arrow.svg" alt="Arrow" className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Card;