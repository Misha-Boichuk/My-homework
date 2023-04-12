import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { countries as countriesApi } from '../api';

export default function Countries() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setSError] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await countriesApi.fetch(name);
        setCountries(data);
      } catch (err) {
        setSError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (loading) return (<>Loading...</>);
  if (error) return (<>Page is Progres...</>);
  return (
    <>
      {countries.length && countries.map((country) => (<li key={country.id}>{country.country}</li>))}
    </>
  );
}

// import { Box, styled } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { countries as countriesApi } from '../api';
// import CountryCard from '../components/CountryCard';

// const ContainerWrapper = styled(Box)(() => ({
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'space-between',
// }));

// export default function Countries() {
//   const { name } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [error, setSError] = useState(false);
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const { data } = await countriesApi.fetch(name);
//         setCountries(data);
//       } catch (err) {
//         setSError(true);
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [name]);
//   if (loading) return (<>Loading...</>);
//   if (error) return (<>Page is Progres...</>);

//   return (
//     <ContainerWrapper>
//       {countries.length && countries.map((country) => (
//         <CountryCard
//           key={country.id}
//           imageSrc={country.imageSrc}
//           country={country.country}
//           city={country.city}
//           description={country.description}
//           price={country.price}
//         />
//       ))}
//     </ContainerWrapper>
//   );
// }
