import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
const contactBg = {
    background: `url(${bg})`,
    marginTop: '175px',
    marginBottom: '50px',
    padding: '50px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(43, 45, 126, 0.8)',
    backgroundBlendMode: 'darken',
    color: '#fff', 
}

const formBg = {
    width: '600px',
    margin: '0 auto'
}

const Contact = () => {
    return (
        <Box style={contactBg}>
            <Container>
                <Typography sx={{textAlign: 'center'}} variant="h6">
                    Testimonial
                </Typography>
                <Typography sx={{fontWeight: 500, my: 1, textAlign: 'center'}} variant="h4">
                    Allways connect with us
                </Typography>
                <Box  style={{margin: '0 auto'}}>
                <form style={formBg} sx={{mr: 'auto'}}>
                    <TextField style={{backgroundColor: 'white', marginTop: '10px', width: '100%'}} type="text" id="filled-basic" label="Name" variant="filled" />
                    <br />
                    <TextField style={{backgroundColor: 'white', marginTop: '10px', width: '100%'}} type="email" id="filled-basic" label="Email" variant="filled" />
                    <br />
                    <TextField
                     style={{backgroundColor: 'white', marginTop: '10px', width: '100%'}}
                        variant="filled"
                        label="Message"
                        id="filled-basic"
                        multiline
                        rows={4}
                        />
                        <br />
                    <Button type="submit" sx={{mt: 3}} variant="contained">Submit</Button>
                </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;