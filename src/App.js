import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
          <Navbar/>
          <Routes>
             <Route exact path="/about" element={<About/>}/>
             <Route exact path='/' element={ <Home/>}/>      
          </Routes>
        </Router>
    );
  }
}

export default App;
