import React, { Component, useState } from 'react';

import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Alert from './components/Alert'
import Login from './components/Login'
import Signup from './components/Signup'
import NoteState from './context/notes/noteState'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () =>{
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
      setAlert({
        type: type,
        msg: message
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
    return (
      <>
        <NoteState>
          <Router>
            <Navbar />
            <Alert alert={alert}/>
            <div className="container">
              <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path='/' element={<Home showAlert={showAlert}/>} />
                <Route exact path='/login' element={<Login showAlert={showAlert}/>} />
                <Route exact path='/signup' element={<Signup showAlert={showAlert}/>} />
              </Routes>
            </div>
          </Router>
        </NoteState>
      </>
    );
  
}

export default App;
