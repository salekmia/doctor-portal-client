import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';
const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time, space} = booking
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
        <Grid  item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{p: 5}}>
                <Typography sx={{color: 'info.main', fontWeight: 600}} variant="h5" component="div" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                   {space} Space Avalable
                </Typography>
                <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
            </Paper>          
        </Grid>
        <BookingModal date={date} open={open} handleClose={handleClose} booking={booking} setBookingSuccess={setBookingSuccess}></BookingModal>
        </>
    );
};

export default Booking;