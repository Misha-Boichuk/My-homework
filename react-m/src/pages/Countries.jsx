import { Box, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountryCard from '../components/CountryCard';
import { countryThunks } from '../store/modules/countries';

const ContinentWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));

export default function Countries() {
  const { name } = useParams();
  const { filterCountries } = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setSError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(countryThunks.fetchCountry(name));
      } catch (err) {
        setSError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (loading) return (<>Loading...</>);
  if (error) return (<>Page is Progress...</>);

  return (
    <ContinentWrapper>
      {filterCountries.length && filterCountries.map((country) => (
        <CountryCard
        key={country.id}
        imageSrc={country.imageSrc}
        country={country.country}
        city={country.city}
        description={country.description}
        price={country.price}
        />
      ))}
    </ContinentWrapper>
  );
}
