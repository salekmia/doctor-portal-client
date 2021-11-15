import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import man1 from '../../../images/people-1.png';
import man2 from '../../../images/people-2.png';
import man3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
        <Box sx={{my: 5, textAlign: 'left'}}>
            <Container>
                <Typography sx={{color: 'info.main'}} variant="h6">
                    Testimonial
                </Typography>
                <Typography sx={{fontWeight: 500, my: 2}} variant="h4">
                    What's our patients says
                </Typography>
                <Grid container sx={{mt: 3}} spacing={4}>
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{mb: 3, color: 'text.secondary'}} variant="body1">
                        Look at this example of a long, rambling testimonial… “I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Box sx={{mr: 2}}>
                                <img sx={{borderRadius: '50%'}} width="40px" height="40px" src={man1} alt="" />
                            </Box>
                            <Box>
                                <Typography sx={{fontSize: '16px', color: 'info.main'}} variant="h6">
                                    Winson Herry
                                </Typography>
                                <Typography variant="caption">
                                    California
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{mb: 3, color: 'text.secondary'}} variant="body1">
                        Look at this example of a long, rambling testimonial… “I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Box sx={{mr: 2}}>
                                <img sx={{borderRadius: '50%'}} width="40px" height="40px" src={man2} alt="" />
                            </Box>
                            <Box>
                                <Typography sx={{fontSize: '16px', color: 'info.main'}} variant="h6">
                                    Winson Herry
                                </Typography>
                                <Typography variant="caption">
                                    California
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography sx={{mb: 3, color: 'text.secondary'}} variant="body1">
                        Look at this example of a long, rambling testimonial… “I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Box sx={{mr: 2}}>
                                <img sx={{borderRadius: '50%'}} width="40px" height="40px" src={man3} alt="" />
                            </Box>
                            <Box>
                                <Typography sx={{fontSize: '16px', color: 'info.main'}} variant="h6">
                                    Winson Herry
                                </Typography>
                                <Typography variant="caption">
                                    California
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;