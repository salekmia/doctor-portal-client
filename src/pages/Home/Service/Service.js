import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
const Service = ({service}) => {
    const {name, description, img} = service
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardMedia
            style={{width: 'auto', height: '70px', margin: '0 auto'}}
            component="img"
            image={img}
            alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color= 'text.secondary'>
                {description}
                </Typography>
            </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;