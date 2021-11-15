import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import man2 from '../../../images/people-1.png';
import man1 from '../../../images/people-3.png';

const blogBg = {
    backgroundImage: 'linear-gradient(#f12711, #f5af19)',
    color: 'white'
}

const Blog = () => {
    return (
        <Container sx={{py: 4}}>
            <Typography sx={{color: 'info.main', textAlign: 'center'}} variant="h6">
                Testimonial
            </Typography>
            <Typography sx={{fontWeight: 500, my: 1, textAlign: 'center'}} variant="h4">
                From our blog news
            </Typography>

            <Grid container sx={{mt: 5}} spacing={4}>
                
                <Grid style={blogBg} item xs={12} sm={6} md={4}>
                    <Typography sx={{fontSize: '16px'}} variant="h6">
                        Rashed Kabir
                    </Typography> 
                    <Typography variant="caption">
                        24 Aug 2021
                    </Typography>
                    <Typography sx={{my: 4}} variant="h6">
                        Check a doctor at least in a year for your teath.
                    </Typography>
                    <ArrowRightAltIcon sx={{fontSize: '52px', fontWeight: 200}}></ArrowRightAltIcon>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Box sx={{mr: 2}}>
                            <img sx={{borderRadius: '50%'}} width="40px" height="40px" src={man1} alt="" />
                        </Box>
                        <Box>
                            <Typography sx={{fontSize: '16px', color: 'info.main'}} variant="h6">
                                Dr. Caudi
                            </Typography>
                            <Typography variant="caption">
                                23 Appril 2021
                            </Typography>
                        </Box>
                    </Box>
                    <Typography sx={{my: 3}} variant="h6">
                        Two time of brush in a day can keep you healthy.
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}} variant="body1">
                        Europeans cleaned their teeth with rags rolled in salt or soot. Believe it or not, in the early 1700s a French doctor named Pierre Fauchard told people not to brush.
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Box sx={{mr: 2}}>
                            <img sx={{borderRadius: '50%'}} width="40px" height="40px" src={man2} alt="" />
                        </Box>
                        <Box>
                            <Typography sx={{fontSize: '16px', color: 'info.main'}} variant="h6">
                                Dr. John Mitchel
                            </Typography>
                            <Typography variant="caption">
                                23 Appril 2021
                            </Typography>
                        </Box>
                    </Box>
                    <Typography sx={{my: 3}} variant="h6">
                        Two time of brush in a day can keep you healthy.
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}} variant="body1">
                        Europeans cleaned their teeth with rags rolled in salt or soot. Believe it or not, in the early 1700s a French doctor named Pierre Fauchard told people not to brush.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Blog;