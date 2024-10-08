import './Grid.css';

interface GridProps {
  content: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ content }) => {
  return (
    <div className="grid-container">
      {content}
    </div>
  );
};

export default Grid;