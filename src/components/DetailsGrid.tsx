import './DetailsGrid.css';

import { useState } from 'react';

import { addTicketToCart } from '../redux/cartSlice'; // Import action
import { AppDispatch, RootState } from '../redux/store';

import MapPreview from './MapPreview';
import TicketRating from './TicketRating';
import { useDispatch, useSelector } from 'react-redux';

interface Ticket {
  id: string;
  name: string;
  city: string;
  price: number;
  description: string;
}


interface DetailsGridProps {
  ticket: Ticket | null;
}

const DetailsGrid: React.FC<DetailsGridProps> = ({ ticket }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedTicketType, setSelectedTicketType] = useState<'adult' | 'children'>('adult');
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // Function to handle clicking on the date picker section
  const handleDatePickerClick = () => {
    const datePicker = document.querySelector('.date-picker') as HTMLInputElement;
    if (datePicker) {
      datePicker.focus();
    }
  };

  // Function to handle clicking on the date picker section
  const handleIngressClick = () => {
    const ingress = document.querySelector('.ingress') as HTMLInputElement;
    if (ingress) {
      ingress.focus();
      ingress.click();
    }
  };
  const cartId = useSelector((state: RootState) => state.cart.cartId) || "2";


  const handleAddToCart = () => {
    if (ticket) {
      dispatch(addTicketToCart({ ticketId: ticket.id, cartId }));
    }
  };

  return (
    <>
      <div className="main-box">
        <TicketRating />
        <h3>Sobre o Ingresso selecionado:</h3>
        <br />
        <p className='p2'>
          {ticket?.description || 'Nenhuma descrição disponível.'}
          <br />
          <br />
          Essa é uma descrição prefixada, uma vez que as descrições no banco de dados estão todas como UUIDs aleatórios como o exemplo acima.
        </p>
        <br />
        <h3>Localização</h3>
        <MapPreview location={ticket?.city || 'Nenhuma localização disponível.'}/>
      </div>
      
      <div className="order-box">
        <div className="order-section" onClick={handleDatePickerClick}>
          <img src="/calendar.svg" alt="Calendar" className="calendar-icon" />
          <div>
            <p className="p22">Data do ingresso</p>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="date-picker"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <img src="/dropdown-arrow.svg" alt="Dropdown" className="dropdown-icon" />
        </div>

        <hr className="separator" />

        <div className="order-section" onClick={handleIngressClick}>
          <img src="/person.svg" alt="Ingress" className="ingress-icon" />
          <div> 
            <p className='p22'>Ingressos</p>
            <select
              className='ingress'
              value={selectedTicketType}
              onChange={(e) => setSelectedTicketType(e.target.value as 'adult' | 'children')}
              >
              <option value="adult">1 ingresso adulto</option>
              <option value="children">1 ingresso infantil</option>
            </select>
            <img src="/dropdown-arrow.svg" alt="Dropdown" className="dropdown-icon" />
          </div>
        </div>

        <hr className="separator" />

        <div className="order-section summary">
          <p className='p4' style={{color: "#9EA5B8"}}>{selectedTicketType === 'adult' ? '1 ingresso para adulto' : '1 ingresso para criança'}</p>
          <p className='p4' style={{color: "#9EA5B8", marginLeft: 'auto'}}> R${ticket?.price.toFixed(2) || '0.00'}</p>
        </div>

        <hr className="separator" />

        <div className="order-section">
          <p className='p22'>Valor total</p>
          <h2 style={{ color: '#4070F4', marginLeft: 'auto' }}>${ticket?.price || '0.00'}</h2>
        </div>

        <button className="buy-button" onClick={handleAddToCart}>Comprar ingresso</button>
      </div>
    </>
  );
};

export default DetailsGrid;