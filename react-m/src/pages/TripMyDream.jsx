import React, { Component } from 'react';
import { Box, styled } from '@mui/system';
import ContinentCard from '../components/ContinentCard';
import { continents } from '../api';

const ContinentWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
}));

export default class TripMyDream extends Component {
  constructor() {
    super();

    this.state = {
      continentsData: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await continents.fetch();
      this.setState({
        continentsData: data,
      });
      console.log(data);
    } catch (err) {
      console.log(err); 
    }
  }

  render() {
    const { continentsData } = this.state;

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
}
