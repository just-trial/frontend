import './App.css'
import Header from './components/Header'
import SearchBar from './components/Searchbar'
import SearchPage from './pages/SearchPage';

function App() {


  return (
    <div className='app'>
      <Header />
      <SearchBar/>
      <div className='content'>
        <SearchPage />
      </div>
    </div>
  )
}

export default App
