import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Patient from './Components/User/Patients';
import Appointment from './Components/User/Appointment';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import Register from './Components/User/Register';
import Booking from './Components/User/Booking';



function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path={'/'}element={<Home method='post'/>}></Route>
        <Route path={'/log'}element={<Login method='post'/>}></Route>
        <Route path={'/reg'}element={<Register method='post'/>}></Route>
        <Route path='/pat' element={<Patient method='post'/>}/>
        <Route path="/appointment/:id" element={<Appointment method='get'/>} />
        <Route path="/booking" element={<Booking method='post'/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
