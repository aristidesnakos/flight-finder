// frontend/src/PasswordReset.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const PasswordReset = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/auth/users/reset_password/', { email })
            .then(response => {
                alert('If an account with this email exists, we have sent an email to reset your password');
            })
            .catch(error => {
                alert('There was an error resetting your password');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                name="email" 
                label="Email" 
                value={email}
                onChange={e => setEmail(e.target.value)} 
            />
            <Button type="submit">Reset Password</Button>
        </form>
    );
};

export default PasswordReset;