import { useState } from 'react';

import Grid from '../components/Grid'
import Pagination from '../components/Pagination';

function SearchPage() {
  const [totalItems] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Grid/>
      <Pagination
        totalItems={totalItems}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default SearchPage
