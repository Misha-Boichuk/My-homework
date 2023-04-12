import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import TripMyDream from '../pages/TripMyDream';
import GridTemplate from './Templates/GridTemplate';
import Countries from '../pages/Countries';
import CountryCard from './CountryCard';

export default function CountryRoutes() {
  return (
    <GridTemplate>
      <Routes>
        <Route path='/' element={<TripMyDream />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/:name' element={<Countries />} />
        <Route path='tripmydream/*' element={<CountryCard />} />
      </Routes>
    </GridTemplate>
  );
}
