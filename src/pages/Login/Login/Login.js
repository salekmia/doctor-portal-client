import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState()
    const {user, signInWithGoogle, loginUser} = useAuth()

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value
        setLoginData(newLoginData)
    }
    
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)

        toast.success("Wow so easy!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })

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
                        Login
                        </Typography>
                        <form onSubmit={handleLogin}>
                            <TextField onBlur={handleOnChange} sx={{my: 1, width: '100%'}} name="email" type="email" id="standard-basic" label="Your email" variant="standard" />
                            <br />
                            
                            <TextField onBlur={handleOnChange}  sx={{my: 1, width: '100%'}} name="password" type="password" id="standard-basic" label="Your password" variant="standard" />

                            <Button type="submit" sx={{my: 1, width: '100%'}} variant="contained">Submit</Button>

                            <NavLink to="/registered">
                                <Button variant="text">New user? please register here.</Button>
                            </NavLink>
                            <p>---------------</p>
                            <Button onClick={handleGoogleSignIn} variant="contained">Sign in with google</Button>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width="100%" src={login} alt="login"></img>
                </Grid>
            </Grid>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Container>
        </>
    );
};

export default Login;