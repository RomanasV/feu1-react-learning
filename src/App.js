import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation/Navigation';
import ShoppingPage from './pages/ShoppingPage';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shopping-list' element={<ShoppingPage />} />
        <Route path='*' element={<h1>404 error. Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
