import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const {token} = useAuth()


    const handleAdminSubmit = (e) => {
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT', 
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0)  {
                alert('Admin make successful')
            } else if(data.matchedCount > 0) {
                alert('Already admin added')
            } else {
                alert('Please register by this email')
            }
            console.log(data)
        })
        e.target.reset()
        e.preventDefault()
    }

    const emailChange = e => {
        const text = e.target.value;
        setEmail(text)
    }
    return (
        <div>
            <h2>This is make admin page.</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField required onBlur={emailChange} sx={{my: 2}} label="Enter Email" variant="standard"></TextField>
                <br />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;