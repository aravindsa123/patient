
import {  AppBar, Button,  Container, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

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

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
    <AppBar position="static" style={{ background: 'linear-gradient(to right, #2196f3, #00bcd4)' }}>
    <Container maxWidth="lg">
   <Toolbar>
     <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
       MEDICARE
     </Typography>
    
     <Link to="http://localhost:3001/" style={{ textDecoration: 'none' }}>
       <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Home</Button>
     </Link>&nbsp;&nbsp;&nbsp;&nbsp;
     <Link to="http://localhost:3001/pat" style={{ textDecoration: 'none' }}>
       <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Our Doctors</Button>
     </Link>
     </Toolbar>
    </Container>
    </AppBar>



    <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#343a40', color: 'white', padding: '10px', borderRadius: '8px 8px 0 0' }}>
        <h1 style={{ margin: '0' }}>Working Hours</h1>
      </div>
      <div style={{ padding: '20px 10px' }}>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ marginBottom: '20px' }}>
            <h3>Sunday</h3>
            <p>4:00 PM - 9:30 PM</p>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <h3>Tuesday</h3>
            <p>4:00 PM - 9:30 PM</p>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <h3>Thursday</h3>
            <p>4:00 PM - 9:30 PM</p>
          </li>
        </ul>
      </div>
      <div style={{ padding: '10px 0' }}>
        <label htmlFor="timeSlot">Select Time Slot: </label>
        <select id="timeSlot" onChange={handleTimeSlotChange} style={{ marginBottom: '20px', width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}>
          <option value="">-- Select a time slot --</option>
          <option value="Sunday 4:00 PM - 9:30 PM">Sunday 4:00 PM - 9:30 PM</option>
          <option value="Tuesday 4:00 PM - 9:30 PM">Tuesday 4:00 PM - 9:30 PM</option>
          <option value="Thursday 4:00 PM - 9:30 PM">Thursday 4:00 PM - 9:30 PM</option>
        </select>
      </div>
      <button onClick={handleBookAppointment} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
        Book Appointment
      </button>
      </div>
    </div>
  );
};

export default Appointment;
