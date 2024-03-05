import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Patient from './Components/User/Patients';
import Appointment from './Components/User/Appointment';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import Register from './Components/User/Register';



function App() {
  return (
    <div>
      
       <BrowserRouter>
      <Routes>
        <Route path={'/'}element={<Home method='post'/>}></Route>
        <Route path={'/log'}element={<Login method='post'/>}></Route>
        <Route path={'/reg'}element={<Register method='post'/>}></Route>
        <Route path='/pat' element={<Patient method='post'/>}/>
        <Route path="/appointment" element={<Appointment method='post'/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
