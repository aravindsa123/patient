import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Container, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import about from './about.png';
import "./Home.css";
import logo from './logo.png';
import icon01 from './icon01.png';
import icon02 from './icon02.png';
import icon03 from './icon03.png';


const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ 
      backgroundImage: 'linear-gradient(to bottom, #cfd9df, #e2ebf0, #e9f1f6, #edf4f7, #f0f4f8)',
      minHeight: '100vh', 
      padding: '20px' 
    }}>
      <AppBar position="static" style={{ background: 'lightblue' }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
              <img src={logo} alt='logo'/>
            </Typography>

            <Link to="http://localhost:3001/reg" style={{ textDecoration: 'none' }}>
              <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Register</Button>
            </Link>&nbsp;&nbsp;
         
            <Link to="http://localhost:3001/pat" style={{ textDecoration: 'none' }}>
              <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Find a Doctor</Button>
            </Link>&nbsp;&nbsp;

            <Button
              color="inherit"
              style={{ fontWeight: 'bold', fontSize: '16px', color: 'blue' }}
              onClick={handleMenuOpen}
            >
              Departments
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Ayurveda</MenuItem>
              <MenuItem onClick={handleMenuClose}>Cardiology</MenuItem>
              <MenuItem onClick={handleMenuClose}>Dentist</MenuItem>
              <MenuItem onClick={handleMenuClose}>Dermatology</MenuItem>
              <MenuItem onClick={handleMenuClose}>Physiotherapist</MenuItem>
              <MenuItem onClick={handleMenuClose}>Psychologist</MenuItem>
              <MenuItem onClick={handleMenuClose}>Pulmonology</MenuItem>
              <MenuItem onClick={handleMenuClose}>Surgeon</MenuItem>
            </Menu>

            <Link to="http://localhost:3001/log" style={{ textDecoration: 'none' }}>
              <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Login</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <div className="hero">
      <Typography variant="h2" gutterBottom><h2 style={{ color: '#333', textAlign: 'left', margin: '20px 0' }}>We help patients live a healthy, longer life.</h2></Typography>
      <Typography variant="body1" gutterBottom><h4 style={{ color: '#666', textAlign: 'left' }}>
        In the pursuit of truth and beauty, one must navigate the challenges presented by life.
        It is in these moments of uncertainty that we discover the true essence of our being and the path we must tread.
        Embrace the journey, for it is through adversity that we find our strength and purpose.</h4>
      </Typography></div> */}
      <div className="hero">
      <div className="hero-left">
        <h1>We help patients live a healthy, longer life.</h1>
        <div>
          
          <p>In the pursuit of truth and beauty, one must navigate the challenges presented by life.</p>
          <p>It is in these moments of uncertainty that we discover the true essence of our being and the path we must tread.
        Embrace the journey, for it is through adversity that we find our strength and purpose.</p>
        </div>
        
      </div>
      <div className="hero-right">
        <img src={about} alt="hero" />
      </div>
    </div>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ color: '#555' }}>Providing the best medical services</h1>
        <p style={{ color: '#777' }}>
          World-class care for everyone. Our health System offers unmatched,
          expert health care.
        </p><br/><br/><br/><br/><br/><br/>
      </div>
      <div>
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <img src={icon01} alt=''/>
    <div style={{ marginLeft: '10px' }}>
      <h2>
        <Link to="http://localhost:3001/pat" style={{ textDecoration: 'none' }}>
          <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Find a Doctor</Button>
        </Link>
      </h2>
      <p><b>
        World-class care for everyone. Our health System offers
        unmatched, expert health care. From the lab to the clinic.
      </b></p>
    </div>
  </div>

  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px' }}>
    <img src={icon02} alt=''/>
    <div style={{ marginLeft: '10px' }}>
      <h2>
        <Link to="http://localhost:3001/pat" style={{ textDecoration: 'none' }}>
          <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Find a Location</Button>
        </Link>
      </h2>
      <p><b>
        World-class care for everyone. Our health System offers
        unmatched, expert health care. From the lab to the clinic.
      </b></p>
    </div>
  </div>

  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px' }}>
    <img src={icon03} alt=''/>
    <div style={{ marginLeft: '10px' }}>
      <h2>
        <Link to="http://localhost:3001/pat" style={{ textDecoration: 'none' }}>
          <Button color="inherit" style={{ fontWeight: 'bold', fontSize: '16px' }}>Book an Appointment</Button>
        </Link>
      </h2>
      <p><b>
        World-class care for everyone. Our health System offers
        unmatched, expert health care. From the lab to the clinic.
      </b></p>
    </div>
  </div>
</div>


      <div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
        </div>
    </div>
  );
};

export default Home;
