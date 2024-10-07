import './SearchBar.css'; // Import styles for the search bar

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchTickets } from '../redux/searchSlice';
import { RootState, AppDispatch } from '../redux/store';

const SearchBar = () => {
  const [city, setCity] = useState<string>('*');
  const dispatch: AppDispatch = useDispatch();

  const { currentPage } = useSelector(
    (state: RootState) => state.search
  );

  const handleSearch = () => {
    if (city) {
      dispatch(searchTickets({ city, page: currentPage}));
    }
  };

  // Trigger searchTickets when page or city changes
  useEffect(() => {
    handleSearch();
  }, [dispatch, city, currentPage]);

  return (
    <div className="search-bar-container">
      <img className="location-icon" src="/location.svg" alt="Location"></img>
      <input type="text" placeholder="Busque por atração" className="search-input" onChange={(e) => setCity(e.target.value || "*")}/>
      <button className="search-button" onClick={() => handleSearch()}>
          <img src="/search.svg" alt="Search" className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;