import { Button, Paper, TextField } from '@mui/material'
// import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [inputs, setInputs] = useState({ "fullname": '', "email": '',"phone":'', "password": '',"age":'' });
  const navigate = useNavigate(); 

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  // const checkData = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:3004/UReg", {
  //       fullname: inputs.fullname,
  //       email: inputs.email,
  //       phone: inputs.phone,
  //       password: inputs.password,
  //       age: inputs.age,
  //     });

  //     if (response.data.success) {
  //       alert('Registered successful');
  //       navigate('/pat'); 
  //     } else {
  //       alert('Invalid Username and Password. Please try again.');
  //       console.log(response.data);
  //     }
  //   } catch (err) {
  //     alert('Error occurred during login. Please try again.');
  //   }
  // };

  const savedata=()=>{
    const formdata=new FormData();
    formdata.append('fullname',inputs.fullname);
    formdata.append('email',inputs.email);
    formdata.append('phone',inputs.phone);
    formdata.append('password',inputs.password);
    formdata.append('age',inputs.age);
    fetch('http://localhost:3002/UReg',
    {
        method:'post',
        body:formdata,
    })
    .then((response)=>response.json())
    .then((data)=>{
        alert("record saved")
        navigate('/pat'); 
    })
    .catch((err)=>{
        console.log("error")
    })
}

  return (
    <div style={{ 
        background: 'linear-gradient(to bottom, #87CEEB, #2196f3)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}> Register Form</h2>
        <TextField label="Full Name" type="text" name="fullname" variant="outlined" value={inputs.fullname} onChange={inputHandler} fullWidth margin="normal" />
        <TextField label="Email" type="text" name="email" variant="outlined" value={inputs.email} onChange={inputHandler} fullWidth margin="normal" />
        <TextField label="Phone" name='phone' variant="outlined" type="text" value={inputs.phone} onChange={inputHandler} fullWidth margin="normal" />
        <TextField label="Password" name='password' variant="outlined" type="password" value={inputs.password} onChange={inputHandler} fullWidth margin="normal" />
        <TextField label="Age" name='age' variant="outlined" type="number" value={inputs.age} onChange={inputHandler} fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={savedata} fullWidth style={{ marginTop: '20px' }}>Register</Button>
        <p><b>Already registered! Please </b><Link to='http://localhost:3001/log'>Login</Link></p>
      </Paper>     
    </div>
  )
}

export default Register
