import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const buttons = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            className={`pagination-button ${
              currentPage === i ? 'active' : ''
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
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
          1
        </button>
      );

      // Show ellipsis if needed
      if (currentPage > 3) {
        buttons.push(<span key="ellipsis-left">...</span>);
      }

      // Show current page and surrounding pages
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button
            key={i}
            className={`pagination-button ${
              currentPage === i ? 'active' : ''
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      // Show ellipsis if needed
      if (currentPage < totalPages - 2) {
        buttons.push(<span key="ellipsis-right">...</span>);
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
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = Number(event.target.value);
    onPageChange(selectedPage);
  };

  return (
    <div className="pagination-container">
      <select onChange={handleSelectChange} value={currentPage}>
        {Array.from({ length: totalPages }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            Page {index + 1}
          </option>
        ))}
      </select>
      <div className="pagination-buttons">{renderPageButtons()}</div>
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
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