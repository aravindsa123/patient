import { Button, TextField, Paper } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [inputs, setInputs] = useState({ "username": '', "password": '' });
  const navigate = useNavigate(); 

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const checkData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3003/ULoginsearch", {
        username: inputs.username,
        password: inputs.password,
      });

      if (response.data.success) {
        alert('Login successful');
        navigate('/pat'); 
      } else {
        alert('Invalid Username and Password. Please try again.');
        console.log(response.data);
      }
    } catch (err) {
      alert('Error occurred during login. Please try again.');
    }
  };

  return (
    <div style={{ 
      background: 'linear-gradient(to bottom, #87CEEB, #2196f3)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '300px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome back! Login</h2>
        <TextField label="Username" name="username" variant="outlined" value={inputs.username} onChange={inputHandler} fullWidth margin="normal" />
        <TextField label="Password" name='password' variant="outlined" type="password" autoComplete='current-password' value={inputs.password} onChange={inputHandler} fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={checkData} fullWidth style={{ marginTop: '20px' }}>Login</Button>
        <p>Don't have an account? <Link to='http://localhost:3001/reg'>Register</Link></p>
      </Paper>
    </div>
  );
};

export default Login;
