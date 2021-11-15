import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import fetured from '../../../images/treatment.png';
const Fetured = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={10} sx={{my: 6}}>
                    <Grid sx={{textAlign: 'left'}} item xs={12} md={5}>
                        <img sx={{}} width="100%" height="auto" src={fetured} alt="" />
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'left', display: 'flex', alignItems: 'center'}} md={7}>
                        <Box>
                        <Typography variant="h3">
                            Exceptional Dental care, on your terms
                        </Typography>
                        <Typography sx={{my: 5}} variant="body1">
                            Diseased, crooked or missing teeth or a misshapen jaw can interfere with your speech; make chewing your food properly difficult and painful; and lead to expensive corrective procedures.

                            Cavities are painful places on your teeth where decay has eaten through the enamel and exposed a tooth's root. Hot or cold food or liquids can send a painful signal that something is wrong.

                            Cavities may not have any symptoms until after significant damage to the tooth. This is why regular visits to your dental professional are so important. Early signs of tooth decay are easier to treat than advanced cases.
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Fetured;