import { AppBar, Button,  Container,  Paper, TextField, Toolbar, Typography} from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import logo from './logo.png';

function Booking() {
  const { id } = useParams();
  const [inputs, setInputs] = useState({ "did":id,"name": '',"age":'',"phone":''});

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const savedata=()=>{
    // console.log("Clicked")
    console.log(inputs)
   axios.post("http://localhost:3002/booking",inputs) 
    .then((response)=>response.json())
    .then((data)=>{
        alert("Record saved")
    })
    .catch((err)=>{
        console.log("error")
    })
}


useEffect(() => {
  console.log("id:", id);
  axios.get(`http://localhost:3002/book/${id}`)
    .then(response => {
      
      console.log(response.data);
    })
    .catch(err => console.log(err));
}, [id]);


  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
    <AppBar position="static" style={{ background: 'linear-gradient(to right, #2196f3, #00bcd4)' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
            <img src={logo} alt='logo' />
          </Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Home</Button>
          </Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/pat" style={{ textDecoration: 'none' }}>
            <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Our Doctors</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>

       <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Please Register</h2>
      <TextField label="Full Name" type="text" name="name" variant="outlined" value={inputs.fullname} onChange={inputHandler} fullWidth margin="normal" />
        <TextField label="Age" name='age' variant="outlined" type="number" value={inputs.age} onChange={inputHandler} fullWidth margin="normal" />
        <TextField label="Phone" name='phone' variant="outlined" type="text" value={inputs.phone} onChange={inputHandler} fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={savedata} fullWidth style={{ marginTop: '20px' }}>Confirm Booking</Button>
        </Paper>
    </div>
  )
}

export default Booking
