import Grid from '../components/Grid'
import Pagination from '../components/Pagination';
import SearchBar from '../components/Searchbar';
import TicketGrid from '../components/TicketGrid';

function SearchPage() {
  return (
    <>
      <SearchBar/>
      <div className='content'>
        <Grid content={<TicketGrid />}/>
        <Pagination/>
      </div>
    </>
  )
}

export default SearchPage
