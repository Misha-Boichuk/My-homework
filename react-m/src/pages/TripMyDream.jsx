import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import ContinentCard from '../components/ContinentCard';
import { continentsThunks } from '../store/modules/continents';

const ContinentWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));

export default function TripMyDream() {
  const { continents } = useSelector((state) => state.continentsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        await dispatch(continentsThunks.fetchContinents());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
        <ContinentWrapper>
            {continents.map((continent) => (
                <ContinentCard
                    key={continent.key}
                    continentName={continent.continentName}
                    imageSrc={continent.image}
                    description={continent.description}
                    country={continent.countries}
                />
            ))}
        </ContinentWrapper>
  );
}
