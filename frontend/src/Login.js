import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(AuthContext);

  const login = () => {
    axios
      .post("http://localhost:8000/api/auth/token/login/", {
        username,
        password,
      })
      .then((response) => {
        setUser({ username, token: response.data.auth_token });
        localStorage.setItem('token', response.data.auth_token);
      })
      .catch((error) => {
        setError("Invalid username or password");
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