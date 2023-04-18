import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import NotFound from './pages/NotFound';
import TripMyDream from './pages/TripMyDream';
import CountryRoutes from './components/CountryRoutes';
import Quiz from './pages/Quiz';
import CreateQuiz from './pages/CreateQuiz';
import FavoriteQuizzes from './pages/FavoriteQuizzes';

export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element= {<TripMyDream />} />
            <Route path='*' element= {<NotFound />} />
            <Route path='/tripmydream/*' element={<CountryRoutes />} />
            <Route path='/tripmydream/quiz' element={<Quiz />} />
            <Route path='/tripmydream/create' element={<CreateQuiz />} />
            <Route path='/tripmydream/favorite' element={<FavoriteQuizzes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
