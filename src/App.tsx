import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'
import SearchBar from './components/Searchbar'

function App() {
  return (
    <div className='app'>
      <Header />
      <SearchBar/>
      <Grid/>
    </div>
  )
}

export default App
