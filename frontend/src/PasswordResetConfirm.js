// frontend/src/PasswordResetConfirm.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const PasswordResetConfirm = () => {
    const { uid, token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newPassword !== reNewPassword) {
            alert('Passwords do not match');
            return;
        }

        axios.post('http://localhost:8000/auth/users/reset_password_confirm/', { uid, token, new_password: newPassword })
            .then(response => {
                alert('Your password has been successfully reset');
            })
            .catch(error => {
                alert('There was an error resetting your password');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                name="newPassword" 
                label="New Password" 
                type="password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)} 
            />
            <TextField 
                name="reNewPassword" 
                label="Confirm New Password" 
                type="password"
                value={reNewPassword}
                onChange={e => setReNewPassword(e.target.value)} 
            />
            <Button type="submit">Reset Password</Button>
        </form>
    );
};

export default PasswordResetConfirm;