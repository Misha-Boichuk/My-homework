import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import CreateModal from './Dialogs/CreateModal';

export default function ContinentCard({
  imageSrc, country, city, description, price,
}) {
  const [open, setOpenModal] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 300, marginBottom: '15px' }}>
        <CardMedia
            sx={{ height: 100 }}
            image={imageSrc}
            title='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
              {country}
            </Typography>
          <Typography gutterBottom variant='h6' component='div'>
              {city}
            </Typography>
          <Typography variant='body2' color='text.secondary'>
              {description.slice(0, 100)}...
            </Typography>
        </CardContent>
          <CardActions style={{ display: 'flex', justifyContent: 'space-between' }} >
            <Typography variant='h5' color='text.secondary'>
              {price}$
            </Typography>
            <Button size='small'>
              Buy
            </Button>
        </CardActions>
      </Card>
      <CreateModal
          open={open}
          handleOnClose={() => setOpenModal(false)}
          imageSrc={imageSrc}
          country={country}
          city={city}
          description={description}
          price={price}
      />
    </>
  );
}
