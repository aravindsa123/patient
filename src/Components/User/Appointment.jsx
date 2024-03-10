import React, { useEffect, useState } from 'react';
import { AppBar, Button, Card, CardContent, CardMedia, Container, Grid, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.png';
import { Buffer } from 'buffer';

const Appointment = () => {
  const [professional, setProfessional] = useState(null);
  const { id } = useParams();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const navigate = useNavigate();

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  const handleBookAppointment = (id) => {
      navigate(`/booking/${id}`);
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
                height="400"
                image={`data:image/jpeg;base64,${Buffer.from(professional.image1.data).toString('base64')}`}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {professional.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <small>
                    <label>Hospital:</label><b> {professional.hospital}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Specialization:</label><b> {professional.specialization}</b> <br />
                    <label>Qualification:</label><b> {professional.qualification}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Experience:</label><b> {professional.experience}</b> <br />
                    <label>Location:</label><b> {professional.location}</b>  <br />
                    <div style={{ padding: '10px 0' }}>
                    <h1 style={{backgroundColor: '#343a40', color: 'white', margin: '0' }}>Working Hour</h1>
          <label htmlFor="timeSlot">Select Time Slot: </label>
          <select id="timeSlot" onChange={handleTimeSlotChange} value={selectedTimeSlot} style={{ marginBottom: '20px', width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}>
          <option value="select timeslot">Select Timeslot</option>
            <option value="timeSlot">{professional.timeSlot}</option>
          </select>
        </div>
        <button onClick={()=>handleBookAppointment(professional._id)} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
          Book Appointment
        </button>
                  </small>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      </div>
  );
};

export default Appointment;
