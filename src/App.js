import React, {Fragment} from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import './App.css';
import Login from './Components/login';
import Register from './Components/register';
import Admin from './Components/admin';
import Manager from './Components/manager';
import Employee from './Components/employee';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Login/>}>
            <Route exact path='/' element={<Login/>}/>
          </Route>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/admin' element={<Admin/>}/>
          <Route exact path='/manager' element={<Manager/>}/>
          <Route exact path='/employee' element={<Employee/>}/>
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
    </>
  );
}

export default App;
