import React from 'react';
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
    imageSrc, continentName, description, country}) {
  //const { continentName, imageSrc } = props; 
    const [open, setOpenModal] = React.useState(false);

  return (
     <>
          <Card sx={{ maxWidth: 345, marginBottom:'25px',}}>
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