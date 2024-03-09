import React, { useEffect, useState } from 'react';
import { AppBar, Button, Card, CardContent, CardMedia, Container, Grid, Toolbar, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.png';
import { Buffer } from 'buffer';

const Appointment = () => {
  const [professional, setProfessional] = useState(null);
  const { id } = useParams();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  const handleBookAppointment = () => {
    if (selectedTimeSlot) {
      alert(`Appointment booked successfully for ${selectedTimeSlot}!`);
    } else {
      alert('Please select a time slot.');
    }
  };

  useEffect(() => {
    console.log("id:", id);
    axios.get(`http://localhost:3002/view/${id}`)
      .then(response => {
        setProfessional(response.data);
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

      {professional && (
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)' }}>
              <CardMedia
                component="img"
                alt="Doctor"
                height="200"
                image={`data:image/jpeg;base64,${Buffer.from(professional.image1.data).toString('base64')}`}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {professional.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <small>
                    <label>Hospital:</label><b> {professional.hospital}</b> <br />
                    <label>Specialization:</label><b> {professional.specialization}</b> <br />
                    <label>Location:</label><b> {professional.location}</b> <br />
                    <label>Experience:</label><b> {professional.experience}</b> <br />
                    <label>Qualification:</label><b> {professional.qualification}</b> <br />
                    <div style={{ padding: '10px 0' }}>
          <label htmlFor="timeSlot">Select Time Slot: </label>
          <select id="timeSlot" onChange={handleTimeSlotChange} value={selectedTimeSlot} style={{ marginBottom: '20px', width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}>
            <option value="">{professional.timeSlot}</option>
          </select>
        </div>
                  </small>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', maxWidth: '400px', marginLeft: '700px', marginTop: '-450px' }}>
        <div style={{ backgroundColor: '#343a40', color: 'white', padding: '10px', borderRadius: '8px 8px 0 0' }}>
          <h1 style={{ margin: '0' }}>Working Hours</h1>
        </div>
        <div style={{ padding: '20px 10px' }}>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li style={{ marginBottom: '20px' }}>
              <h3><center>Monday - Sunday</center></h3>
            </li>
          </ul>
        </div>
       
        <button onClick={handleBookAppointment} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;
