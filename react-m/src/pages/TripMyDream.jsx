import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import ContinentCard from '../components/ContinentCard';
import { continents } from '../api';

const ContinentWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));

export default function TripMyDream() {
  const [continentsData, setContinents] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await continents.fetch();
        setContinents(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
        <ContinentWrapper>
            {continentsData.map((continent) => (
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
