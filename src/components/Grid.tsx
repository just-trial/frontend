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
          <Card index={1} price={1391.28} title={"Lorem ipsum dolor amet consectetur"} description='GetYourGuide Tours & Tickets GmbH'/>
          <Card index={2} price={1391.28} title={"Lorem ipsum dolor amet consectetur"} description='GetYourGuide Tours & Tickets GmbH'/>
          <Card index={3} price={1391.28} title={"Lorem ipsum dolor amet consectetur"} description='GetYourGuide Tours & Tickets GmbH'/>
          <Card index={4} price={1391.28} title={"Lorem ipsum dolor amet consectetur"} description='GetYourGuide Tours & Tickets GmbH'/>
          <Card index={5} price={1391.28} title={"Lorem ipsum dolor amet consectetur"} description='GetYourGuide Tours & Tickets GmbH'/>
          <Card index={6} price={1391.28} title={"Lorem ipsum dolor amet consectetur"} description='GetYourGuide Tours & Tickets GmbH'/>
        </div>
      </div>
    </div>
  );
};

export default Grid;