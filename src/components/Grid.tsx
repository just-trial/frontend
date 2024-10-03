import { useState } from 'react'
import './Grid.css'; // Ensure the CSS file is imported

const Grid = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div className="grid-container">
        <div className="grid-item">
            <h4>Just Travel</h4>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    traveled times {count}
                </button>
            </div>
        </div>
      {/* {Array.from({ length: 12 }).map((_, index) => (
        <div className="grid-item" key={index}>
          Item {index + 1}
        </div>
      ))} */}
    </div>
  );
};

export default Grid;