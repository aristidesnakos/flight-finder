import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from './AuthContext';

const Logout = () => {
  const { setUser } = useContext(AuthContext);
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <Button variant="contained" color="primary" onClick={logout}>
      Logout
    </Button>
  );
};

export default Logout;