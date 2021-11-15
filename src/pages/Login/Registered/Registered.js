import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
import Navigation from '../../Shared/Navigation/Navigation';
const Registered = () => {
    const [loginData, setLoginData] = useState({})
    const {user, error, signInWithGoogle, registerUser, isLoading} = useAuth()
    const location = useLocation()
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value
        setLoginData(newLoginData)
    }
    console.log(loginData)
    const handleRegister = e => {
        if(loginData.password !== loginData.password2) {
            alert('your password did not match.')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        if(error) {
            toast.warning(error, {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        e.preventDefault()
    }

    // handle google signin
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    
    return (
        <>
        <Navigation></Navigation>
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{display: 'flex', alignItems: 'center'}} item xs={12} md={6}>
                    <Box style={{textAlign: 'center'}}>
                        <Typography variant="h6" sx={{fontWeight: '500'}}>
                        Register
                        </Typography>
                        { !isLoading && <form onSubmit={handleRegister}>
                            <TextField onBlur={handleOnBlur} sx={{my: 1, width: '100%'}} name="name" type="text" id="standard-basic" label="Your Name" variant="standard" />
                            <br />

                            <TextField onBlur={handleOnBlur} sx={{my: 1, width: '100%'}} name="email" type="email" id="standard-basic" label="Your email" variant="standard" />
                            <br />
                            
                            <TextField onBlur={handleOnBlur}  sx={{my: 1, width: '100%'}} name="password" type="password" id="standard-basic" label="Your password" variant="standard" />

                            {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
                            
                            <TextField onBlur={handleOnBlur}  sx={{my: 1, width: '100%'}} name="password2" type="password" id="standard-basic" label="Retype your password" variant="standard" />


                            <Button type="submit" sx={{my: 1, width: '100%'}} variant="contained">Register</Button>
                            <NavLink to="/login">
                                <Button variant="text">Already register? please login here.</Button>
                            </NavLink>
                            <p>--------------------</p>
                            <Button onClick={handleGoogleSignIn} variant="contained">Sign in with google</Button>
                        </form>}
                        {isLoading && <CircularProgress />}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width="100%" src={login} alt="login"></img>
                </Grid>
            </Grid>
            <ToastContainer 
    />
        </Container>
        </>
    );
};

export default Registered;