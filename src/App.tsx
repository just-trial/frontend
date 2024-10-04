import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'
import SearchBar from './components/Searchbar'
import { useState } from 'react';
import Pagination from './components/Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='app'>
      <Header />
      <SearchBar/>
      <Grid/>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default App
