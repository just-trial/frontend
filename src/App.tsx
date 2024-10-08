import './App.css'

import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header'
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Header />
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/ticket/:id" element={<DetailsPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
