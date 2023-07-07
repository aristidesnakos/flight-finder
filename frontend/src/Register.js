import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = () => {
    axios
      .post("http://localhost:8000/api/auth/users/", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setError("Registration failed");
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button variant="contained" color="primary" onClick={register}>
        Register
      </Button>
    </div>
  );
};

export default Register;
