import './Pagination.css';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setCurrentPage } from '../redux/searchSlice';


const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  const { totalEntries, totalPages, currentPage } = useSelector(
    (state: RootState) => state.search
  );
  
  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const renderPageButtons = () => {
    const buttons = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            className={`pagination-button ${
              currentPage === i ? 'active' : ''
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i.toString().padStart(2, '0')}
          </button>
        );
      }
    } else {
      // Always show the first page
      buttons.push(
        <button
          key={1}
          className={`pagination-button ${
            currentPage === 1 ? 'active' : ''
          }`}
          onClick={() => handlePageChange(1)}
        >
          01
        </button>
      );

      // Show ellipsis if needed
      if (currentPage > 3) {
        buttons.push(<span className='pagination-elypse' key="ellipsis-left">...</span>);
      }

      // Show current page and surrounding pages
      const startPage = Math.max(2, currentPage >= totalPages - 3 ? totalPages - 4 : currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage <= 4 ? 5 : currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button
            key={i}
            className={`pagination-button ${
              currentPage === i ? 'active' : ''
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i.toString().padStart(2, '0')}
          </button>
        );
      }

      // Show ellipsis if needed
      if (currentPage < totalPages - 2) {
        buttons.push(<span className='pagination-elypse' key="ellipsis-right">...</span>);
      }

      // Always show the last page
      buttons.push(
        <button
          key={totalPages}
          className={`pagination-button ${
            currentPage === totalPages ? 'active' : ''
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages.toString().padStart(2, '0')}
        </button>
      );
    }

    return buttons;
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = Number(event.target.value);
    handlePageChange(selectedPage);
  };

  return (
    <div className="pagination-container">
      <p className='p4' style={{color: '#828292'}}>Resultados: {totalEntries}</p>
      <p className='p4'>Página:</p>
      <select onChange={handleSelectChange} value={currentPage}>
        {Array.from({ length: totalPages }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {renderPageButtons()}
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;