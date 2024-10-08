import Grid from '../components/Grid'
import Pagination from '../components/Pagination';
import SearchBar from '../components/Searchbar';

function SearchPage() {
  return (
    <>
      <SearchBar/>
      <div className='content'>
        <Grid/>
        <Pagination/>
      </div>
    </>
  )
}

export default SearchPage
