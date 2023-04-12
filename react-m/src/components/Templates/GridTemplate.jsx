import React from 'react';
import { Grid, Box, styled } from '@mui/material';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

const HeaderWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(100,235,255)',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const NavBarWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(111,135,255)',
  height: '100vh',
}));

const Body = styled(Box)(() => ({
  backgroundColor: 'white',
  height: '100vh',
  padding: '20px',
  overflow: 'auto',
}));

const FooterWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(100,235,255)',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
}));

export default function GridTemplate({ children }) {
  return (
    <Grid container>
      <Grid item lg={3}>
        <HeaderWrapper />
      </Grid>
      <Grid item lg={9}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </Grid>
      <Grid item lg={3}>
        <NavBarWrapper />
          <NavBar />
        <NavBarWrapper />
      </Grid>
      <Grid item lg={9}>
        <Body>
          {children}
        </Body>
      </Grid>
      <Grid item lg={12}>
        <FooterWrapper />
          <Footer />
        <FooterWrapper />
    </Grid>
  </Grid>
  );
}
