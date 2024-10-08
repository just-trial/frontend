import './DetailsPage.css';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { useNavigate, useParams, useLocation } from 'react-router-dom';
import TicketHeader from '../components/TicketHeader';
import CoverSection from '../components/CoverSection';

import { request, gql } from 'graphql-request';
import { useEffect, useState } from 'react';

const GRAPHQL_ENDPOINT = 'https://just-travel.fly.dev/graphql';

const GET_TICKET = gql`
  query GetTicket($id: ID!) {
    ticket(id: $id) {
      id
      name
      city
      price
      description
    }
  }
`;

interface Ticket {
  id: string;
  name: string;
  city: string;
  price: number;
  description: string;
}

interface TicketData {
  ticket: Ticket;
}

const DetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  // Initialize ticket state as null
  const [ticket, setTicket] = useState<Ticket | null>(null);

  // Access tickets from Redux store
  const { tickets } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    // Find the ticket based on the id from the URL
    const foundTicket = tickets.find((ticket) => ticket.id === id);

    if (foundTicket) {
      setTicket(foundTicket);
      return; // Exit early if ticket is found
    }

    // Fetch the ticket data if not found in Redux
    const fetchTicket = async () => {
      try {
        const data = await request<TicketData>(GRAPHQL_ENDPOINT, GET_TICKET, { id });
        setTicket(data.ticket);
      } catch (err: any) {
        console.error(err);
      }
    };

    fetchTicket();
  }, [id, tickets]);

  const goBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="details-page content">
      <div className="details-page-header">
        <button onClick={goBack} className="back-button">
          <img src="/back.svg" alt="Back" className="back-icon"></img>
        </button>
        <div>
          <TicketHeader title={ticket?.name || "Desconhecido"} city={ticket?.city || "Desconhecido"}/>
        </div>
      </div>
      <CoverSection />
    </div>
  );
};

export default DetailsPage;
