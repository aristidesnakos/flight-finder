import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const UserProfile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Get user details when the component mounts
        axios.get('http://localhost:8000/api/auth/users/me/', {
            headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
        }).then(response => {
            setUser(response.data);
        });
    }, []);

    const handleInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Update user details when the form is submitted
        axios.put('http://localhost:8000/api/auth/users/me/', user, {
            headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField name="username" label="Username" value={user.username || ''} onChange={handleInputChange} />
            <TextField name="email" label="Email" value={user.email || ''} onChange={handleInputChange} />
            <Button type="submit">Update</Button>
        </form>
    );
};

export default UserProfile;