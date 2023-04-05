import { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import CreateModal from './Dialogs/CreateModal';

export default class ContinentCard extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      open: true,
    });
  }

  handleCloseModal() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { imageSrc, continentName, description, country } = this.props;
    const { open } = this.state;

    return (
      <>
        <Card sx={{ maxWidth: 345, marginBottom: '25px' }}>
          <CardMedia 
            sx={{ height: 140 }} 
            image={imageSrc} 
            title='green iguana' 
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {continentName}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {description.slice(0, 100)}...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small' onClick={this.handleOpenModal}>Learn More</Button>
          </CardActions>
        </Card>
        <CreateModal
          open={open}
          handleOnClose={this.handleCloseModal}
          imageSrc={imageSrc}
          continentName={continentName}
          description={description}
          country={country}
        />
      </>
    );
  }
}
