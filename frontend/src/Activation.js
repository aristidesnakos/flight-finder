// frontend/src/Activation.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Activation = () => {
    const { uid, token } = useParams();

    useEffect(() => {
        axios.post('http://localhost:8000/auth/users/activation/', { uid, token })
            .then(response => {
                alert('Your account has been successfully activated');
            })
            .catch(error => {
                alert('There was an error activating your account');
            });
    }, [uid, token]);

    return <h1>Activating...</h1>;
};

export default Activation;