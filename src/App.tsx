import './App.css'

import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header'
import SearchBar from './components/Searchbar'
import SearchPage from './pages/SearchPage';

function App() {


  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <SearchBar/>
        <div className='content'>
          <SearchPage />
        </div>
      </div>
    </Provider>
  )
}

export default App
