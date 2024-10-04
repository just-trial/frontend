import './Grid.css';

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="filter-box"></div>
      <div className="main-box">
        <div className="cards-container">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>
          <div className="card">Card 5</div>
          <div className="card">Card 6</div>
        </div>
      </div>
    </div>
  );
};

export default Grid;