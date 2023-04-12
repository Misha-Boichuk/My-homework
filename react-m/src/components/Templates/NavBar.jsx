import React from 'react';
import { Link } from 'react-router-dom';
import { styled, Box, Typography } from '@mui/material';

const Wrap = styled(Box)(() => ({
  backgroundColor: 'rgb(111,135,255)',
  padding: '20px',
}));

export default function NavBar() {
  return (
    <Wrap>
      <Typography variant='h4' component='h4'>
        <Link to='/'>HomePage</Link><br />
        <Link to='/tripmydream/quiz'>Quiz</Link><br />
        <Link to='/tripmydream/create'>CreateQuiz</Link><br />
        <Link to='/tripmydream/favorite'>Favorite</Link>
      </Typography>
    </Wrap>
  );
}
