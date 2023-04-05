import { Component } from 'react';
import {
  Dialog,
  DialogActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

export default class CreateModal extends Component {
  render() {
    const {
      open, 
      handleOnClose,
      imageSrc, 
      continentName, 
      description, 
      country,
    } = this.props;

    return (
      <div>
        <Dialog
          open={open}
          onClose={handleOnClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
            <Card sx={{ width: '100%' }}>
              <CardMedia
                sx={{ height: 140 }}
                image={imageSrc}
                title="green iguana"
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {continentName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                  <Typography variant="body2" color="text.main">
                    {country.join(', ')}
                  </Typography>
                </CardContent>
            </Card>
          <DialogActions>
            <Button onClick={handleOnClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
