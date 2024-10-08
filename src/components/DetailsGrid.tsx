import './DetailsGrid.css';
import MapPreview from './MapPreview';
import TicketRating from './TicketRating';

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
        <h2>Order</h2>
      </div>
    </>
  );
};

export default DetailsGrid;