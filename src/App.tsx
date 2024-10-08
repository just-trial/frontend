import './App.css'

import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header'
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <SearchPage />
      </div>
    </Provider>
  )
}

export default App
