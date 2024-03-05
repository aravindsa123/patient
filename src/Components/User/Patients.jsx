import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Card, CardActions, CardContent, CardMedia, TextField, Container, Grid, Menu, MenuItem } from '@mui/material'; // Import Menu and MenuItem
import axios from 'axios';
import { Buffer } from 'buffer';
import logo from './logo.png';

const Patients = () => {
  const Navigate = useNavigate();
  const [Professional, setProfessional] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null); // State for anchor element of the menu
  const [selectedDepartment, setSelectedDepartment] = useState(null); // State for selected department

  useEffect(() => {
    axios.get("http://localhost:3002/view")
      .then(response => {
        setProfessional(response.data)
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleBookAppointment = () => {
    Navigate('/appointment');
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (department) => {
    setSelectedDepartment(department); // Set the selected department
    setAnchorEl(null);
  };

  const filteredProfessionals = Professional.filter((value) => {
    if (selectedDepartment) {
      return (
        value.specialization.toLowerCase().includes(selectedDepartment.toLowerCase()) &&
        (value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.location.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    } else {
      return (
        (value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.specialization.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  });

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <AppBar position="static" style={{ background: 'linear-gradient(to right, #2196f3, #00bcd4)' }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
            <img src={logo} alt='logo'/>
            </Typography>
            <Link to="http://localhost:3001/" style={{ textDecoration: 'none' }}>
              <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Home</Button>
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              color="inherit"
              style={{ fontWeight: 'bold', fontSize: '16px', color: 'blue' }} // Apply blue color
              onClick={handleMenuOpen} // Open the dropdown menu on click
            >
              Departments
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            > 
              <MenuItem onClick={() => handleMenuClose("Ayurveda")}>Ayurveda</MenuItem>
              <MenuItem onClick={() => handleMenuClose("Cardiology")}>Cardiology</MenuItem>
              <MenuItem onClick={() => handleMenuClose("Dentist")}>Dentistry</MenuItem>
              <MenuItem onClick={() => handleMenuClose("Dermatology")}>Dermatology</MenuItem>
              <MenuItem onClick={() => handleMenuClose("Physiotherapist")}>Physiotherapy</MenuItem>
              <MenuItem onClick={() => handleMenuClose("Psychologist")}>Psychology</MenuItem>
              <MenuItem onClick={() => handleMenuClose("Pulmonology")}>Pulmonology</MenuItem>
              <MenuItem onClick={() => handleMenuClose("Surgeon")}>Surgeon</MenuItem>
            </Menu>
            <Link to="http://localhost:3001/" style={{ textDecoration: 'none' }}>
              <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Logout</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Typography variant="h2" gutterBottom>We help patients live a healthy, longer life.</Typography>
        <Typography variant="body1" gutterBottom>
          In the pursuit of truth and beauty, one must navigate the challenges presented by life.
          It is in these moments of uncertainty that we discover the true essence of our being and the path we must tread.
          Embrace the journey, for it is through adversity that we find our strength and purpose.
        </Typography>
        <TextField
          id="search"
          label="Search Doctor/Location/Specialization"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          onChange={handleSearch}
        />
        <Grid container spacing={3}>
          {filteredProfessionals.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)' }}>
                <CardMedia
                  component="img"
                  alt="Doctor"
                  height="300"
                  image={`data:image/jpeg;base64,${Buffer.from(value.image1.data).toString('base64')}`}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {value.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <small>
                    <label>Hospital:</label><b> {value.hospital}</b> <br />
                    <label>Specialization:</label><b> {value.specialization} </b><br />
                     <label>Location:</label><b> {value.location}</b> <br />
                    </small>
                  </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                  <Button variant="contained" color="primary" onClick={handleBookAppointment}>Book an Appointment</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Patients;
