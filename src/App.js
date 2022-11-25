import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation/Navigation';
import ShoppingPage from './pages/ShoppingPage';
import TodoPage from './pages/TodoPage';
import CarsPage from './pages/CarsPage';
import CitiesPage from './pages/CitiesPage';
import CounterPage from './pages/CounterPage';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div className='page-wrapper'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shopping-list' element={<ShoppingPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/cars/*' element={<CarsPage />} />
        <Route path='/cars/new/*' element={<h1>New cars</h1>} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/posts/:postId' element={<PostPage />} />
        <Route path='*' element={<h1>404 error. Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
