import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation/Navigation';
import ShoppingPage from './pages/ShoppingPage';
import TodoPage from './pages/TodoPage';
import CarsPage from './pages/CarsPage';

function App() {
  return (
    <div className='page-wrapper'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shopping-list' element={<ShoppingPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='*' element={<h1>404 error. Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
