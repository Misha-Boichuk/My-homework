import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import TripMyDream from './pages/TripMyDream';
import CountryRoutes from './components/CountryRoutes';
import Quiz from './pages/Quiz';
import CreateQuiz from './pages/CreateQuiz';
import FavoriteQuizzes from './pages/FavoriteQuizzes';

export default function App() {
  return (
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
  );
}
