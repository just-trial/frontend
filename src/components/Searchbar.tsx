import './SearchBar.css'; // Import styles for the search bar

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <img className="location-icon" src="/location.svg" alt="Location"></img>
      <input type="text" placeholder="Busque por atração" className="search-input" />
      <button className="search-button">
          <img src="/search.svg" alt="Search" className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;