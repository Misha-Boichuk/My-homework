import React from 'react';
import { Link } from 'react-router-dom';
import { styled, Box } from '@mui/material';

const Nav = styled(Box)({
  backgroundColor: 'rgb(100,235,255)',
  padding: '20px',
  fontSize: '18px',
  textDecoration: 'none',
  color: 'red',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

export default function Footer() {
  return (
    <Nav>
      <ul>
        <ol><Link to='/gmail.com'>Email</Link></ol>
        <ol><Link to='/facebook.com'>Facebook</Link></ol>
        <ol><Link to='/twitter.com'>Twitter</Link></ol>
        <ol><Link to='/instagram.com'>Instagram</Link></ol>
        <ol><Link to='/youtube.com'>YouTube</Link></ol>
      </ul>
    </Nav>
  );
}
