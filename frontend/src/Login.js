import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:8000/api/auth/token/login/", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('token', response.data.auth_token);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
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
      <Button variant="contained" color="primary" onClick={login}>
        Login
      </Button>
    </div>
  );
};

export default Login;