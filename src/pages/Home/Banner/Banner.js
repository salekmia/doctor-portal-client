import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const bgImg = {
    background : `url(${bg})`       
}

const verticleCenter = {
    display: 'flex',
    height: '450px',
    alignItems: 'center'
}

const Banner = () => {
    return (
    <Container style={bgImg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={verticleCenter}  item xs={12} md={5}>
            <Box style={{textAlign: 'left'}}>
            <Typography variant="h3">
                Your New Smile <br />
                Start Here
            </Typography>
            <Typography sx={{my: 3}} variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a explicabo voluptatibus alias distinctio similique. Omnis atque accusamus fugit. Mollitia.
            </Typography>
            <Button variant="contained">GET APPOINTMENT</Button>
            </Box>
        </Grid>
        <Grid style={verticleCenter} sx={{justifyContent: 'center'}} item xs={12} md={7}>
            <img style={{height: '300px', textAlign: 'center', marginX: 'auto'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;