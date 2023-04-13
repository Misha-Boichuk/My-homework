import React from 'react';
import { Link } from 'react-router-dom';
import {
  styled,
  Box,
  Typography,
  TextField,
} from '@mui/material';

const Wrap = styled(Box)(() => ({
  backgroundColor: 'rgb(111,135,255)',
  padding: '20px',
}));

export default function NavBar() {
  return (
    <Wrap className='wrap' >
      <Typography variant='h5' component='h5'>
        <Link to='/tripmydream/home'>HomePage</Link><br />
      <TextField
        type='text'
        placeholder='Search'
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
