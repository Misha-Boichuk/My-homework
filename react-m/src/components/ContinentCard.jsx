import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  imageSrc, continentName, description, country,
}) {
  const [open, setOpenModal] = useState(false);
  const pathToContinent = continentName.split(' ').join('_').toLowerCase();

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
              <Button size='small'>
                <Link
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  to={`/tripmydream/${pathToContinent}`}
                >
                  Search...
                </Link>
              </Button>
              <Button size='small'onClick={() => setOpenModal(true)}>Learn More</Button>
            </CardActions>
        </Card>
        <CreateModal
            open={open}
            handleOnClose={() => setOpenModal(false)}
            imageSrc={imageSrc}
            continentName={continentName}
            description={description}
            country={country}
        />
     </>
  );
}
