import Card from './Card';
import './Grid.css';

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="filter-box">
        <h2>Filtro</h2>
      </div>
      <div className="main-box">
        <div className="cards-container">
          <Card index={1}/>
          <Card index={2}/>
          <Card index={3}/>
          <Card index={4}/>
          <Card index={5}/>
          <Card index={6}/>
        </div>
      </div>
    </div>
  );
};

export default Grid;