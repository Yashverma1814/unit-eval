import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Create from '../Components/Create';
import EmployeeData from '../Components/EmployeeData';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Signup from '../Components/Signup';


const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/signup' element={<Signup />}/>
            <Route exact path='/create' element={<Create />}/>
            <Route exact path='/empdata' element={<EmployeeData/>}/>
        </Routes>
    </Router>
  )
}

export default Routing
