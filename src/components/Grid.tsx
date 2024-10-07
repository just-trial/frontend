import './Grid.css';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import Card from './Card';

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
              <Card
                key={index}
                index={index + 1} // adding 1 for human-readable index
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