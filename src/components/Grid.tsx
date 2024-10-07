import './Grid.css';

import { memo } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import Card from './Card';

// Memoize the Card component to prevent unnecessary re-renders
const MemoizedCard = memo(Card);

const Grid = () => {
  const { tickets } = useSelector(
    (state: RootState) => state.search
  );

  return (
    <div className="grid-container">
      <div className="filter-box">
        <h2>Filtro</h2>
      </div>

      <div className="main-box">
        <div className="cards-container">
          {tickets?.map((ticket, index) => (
              <MemoizedCard
                key={ticket.id}
                index={index + 1}
                price={ticket.price}
                title={ticket.name}
                city={ticket.city}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;