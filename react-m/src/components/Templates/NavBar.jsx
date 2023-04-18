import {
  styled,
  Box,
  Typography,
  TextField,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { countryActions } from '../../store/modules/countries';

const Wrap = styled(Box)(() => ({
  padding: '20px',
}));

export default function NavBar() {
  const dispatch = useDispatch();
  const handleChangeSearch = (event) => {
    dispatch(countryActions.filterCountries({ search: event.target.value }));
  };

  return (
    <Wrap className='wrap' >
      <Typography variant='h5' component='h5'>
        <Link to='/tripmydream/'>HomePage</Link><br />
      <TextField
        type='text'
        placeholder='Search'
        onChange={handleChangeSearch}
      />
      </Typography><br />
      <Typography variant='h4' component='h4'>
        <Link to='/tripmydream/quiz'>Quiz</Link><br />
        <Link to='/tripmydream/create'>CreateQuiz</Link><br />
        <Link to='/tripmydream/favorite'>FavoriteQuizzes</Link>
      </Typography>
    </Wrap>
  );
}
