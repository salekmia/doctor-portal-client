import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
const services = [
    {
        name: 'Fluoride', 
        description: 'Fluoride is a form of the chemical element fluorine. It is used as medicine. Fluoride is most commonly used to prevent cavities, and to treat tooth plaque, a mild form of gum disease (gingivitis), and weak and brittle bones (osteoporosis)',
        img: fluoride
    },
    {
        name: 'Cavity', 
        description: "A cavity is a hole in a tooth that develops from tooth decay. Cavities form when acids in the mouth wear down, or erode, a tooth's hard outer layer (enamel). Anyone can get a cavity. Proper brushing, flossing and dental cleanings can prevent cavities (sometimes called dental caries)",
        img: cavity
    },
    {
        name: 'Whitening', 
        description: 'Tooth whitening or tooth bleaching is the process of lightening the color of human teeth. Whitening is often desirable when teeth become yellowed over time for a number of reasons, and can be achieved by changing the intrinsic or extrinsic color of the tooth enamel.',
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ mt: 4 }}>
            <Typography sx={{ color: 'secondary.main', fontWeight: 500 }} variant="h6" component="div">
                Our Services
            </Typography>
            <Typography sx={{ mb: 4, fontWeight: 600 }} variant="h4" component="div">
                Services we provite
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
            {services.map((service, index) => (
                <Service 
                service={service} 
                key={service.name}
                ></Service>
            ))}
        </Grid>
            </Container>
        </Box>
    );
};

export default Services;