import { Button, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({open, handleClose, booking, date, setBookingSuccess}) => {
    const {user} = useAuth()
    const initialInfo = {patientName: user?.displayName, email: user?.email, phone: ''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo)
    const {name, time} = booking
    
    

   

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        
        const newInfo = {...bookingInfo}
        newInfo[field] = value;
        console.log(newInfo)
        setBookingInfo(newInfo)

    }  

    const handleBookingSubmit = (e) => {

        // collect data
        const appointment = {
            ...bookingInfo,
            time: time,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        // sent data to the server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                setBookingSuccess(true)
                toast.success("Wow Booking Success", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                handleClose()
            }
        })

        
        e.preventDefault()
    }

    return (
        <>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                <Typography sx={{textAlign: 'center', fontWeight: 500}} id="transition-modal-title" variant="h5" component="h2">
                {name}
                </Typography>
                <form onSubmit={handleBookingSubmit}>
                    
                <TextField
                disabled
                sx={{width: '90%', my: 1}}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
                />

                <TextField
                sx={{width: '90%', my: 1}}
                id="outlined-size-small"
                name="patientName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                size="small"
                />

                <TextField
                sx={{width: '90%', my: 1}}
                id="outlined-size-small"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
                />

                <TextField
                sx={{width: '90%', my: 1}}
                id="outlined-size-small"
                name="phone"
                required
                onBlur={handleOnBlur}
                placeholder='Phone number'
                size="small"
                />

                <TextField
                disabled
                sx={{width: '90%', my: 1}}
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
                />

                <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Box>
            </Fade>
        </Modal>
        <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
    </>
    );
};

export default BookingModal; 