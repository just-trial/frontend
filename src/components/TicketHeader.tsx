import './TicketHeader.css';

import React from 'react';

interface TicketHeaderProps {
  title: string;
  city: string;
}

const TicketHeader : React.FC<TicketHeaderProps>= ({title, city}) => {
  return (
    <>
      <h3 className="card-title">{title}</h3>
      <p className="p3 location"><img src="/location.svg" alt="Location Icon" />{city}</p>
    </>
  );
};

export default TicketHeader;