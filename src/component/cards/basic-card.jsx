import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardPage(props) {

  return (
    <Card >
      <CardActionArea>
        <CardMedia
          className='h-60'
          component="img"
          height="140"
          image={props.item?.img}
          alt={props.item?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item?.title} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}