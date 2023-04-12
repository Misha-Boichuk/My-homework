import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,

} from '@mui/material';

export default function QuizCard({ quizName, quizDescription, quizImage }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={quizImage}
        alt="quiz image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {quizName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {quizDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Start</Button>
      </CardActions>
    </Card>
  );
}
