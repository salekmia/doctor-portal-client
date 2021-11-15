import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: '175px',
    marginBottom: '50px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(43, 45, 126, 0.8)',
    backgroundBlendMode: 'darken',
    color: '#fff', 
}

const AppointmentBanner = () => {
    return (
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={doctor} 
                    style={{maxWidth: '400px', marginTop: '-120px'}}
                    alt="Doctor" />
                </Grid>
                <Grid item xs={12} md={6} sx={{display: 'flex', alignItems: 'center', textAlign: 'left'}}>
                    <Box>
                        <Typography sx={{textTransform: 'uppercase', fontWeight: 600}} variant="h6">
                            Appoinment
                        </Typography>
                        <Typography sx={{my: 2}} variant="h3">
                            Make an appoinment today
                        </Typography>
                        <Typography variant="body">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quod molestiae obcaecati voluptatem ipsa. Consectetur placeat eaque debitis laudantium dolorum! Molestiae reprehenderit corrupti laudantium ullam praesentium tempora consequatur, nostrum sint.
                        </Typography>
                        <Button sx={{my: 2}} variant="contained">Learn more</Button>
                        </Box>
                </Grid>
            </Grid>
            </Box>
    );
};

export default AppointmentBanner;