import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1, 
        name: 'Teeths Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2, 
        name: 'Cosmetic Destistry',
        time: '09.00 AM - 10.00 AM',
        space: 8
    },
    {
        id: 3, 
        name: 'Teeth Clening',
        time: '10.00 AM - 11.00 AM',
        space: 6
    },
    {
        id: 4, 
        name: 'Pediatic Dental',
        time: '11.00 AM - 12.00 AM',
        space: 9
    },
    {
        id: 5, 
        name: 'Oral surgery',
        time: '04.00 PM - 05.00 PM',
        space: 7
    },
    {
        id: 6, 
        name: 'Cavati Protection',
        time: '05.00 PM - 06.00 PM',
        space: 4
    }
]

const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState()
    return (
        <div>
            <Box sx={{my: 5}}>
                <Typography variant="h4" sx={{color: 'info.main', textAlign: 'center', mb: 4}}>This is Availabel Appointment: {date.toDateString()}</Typography>
                {bookingSuccess &&  <p style={{textAlign: 'center'}}>Booking Successful</p>}
                <Container>
                    <Grid container spacing={5}>
                        {
                            bookings.map(booking => <Booking
                            key= {booking.id} booking={booking} date={date} setBookingSuccess={setBookingSuccess}
                            ></Booking>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default AvailableAppointment;