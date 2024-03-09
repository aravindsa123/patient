import { Paper, TextField } from '@mui/material'
import React from 'react'

function Booking() {
    
  return (
    <div>
       <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}> Register Form</h2>
      <TextField label="Full Name" type="text" name="fullname" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" type="text" name="email" variant="outlined"  fullWidth margin="normal" />
        <TextField label="Age" name='age' variant="outlined" type="number" fullWidth margin="normal" />
        <TextField label="Phone" name='phone' variant="outlined" type="text"  fullWidth margin="normal" />
        </Paper>
    </div>
  )
}

export default Booking
