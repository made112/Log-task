import React, { Component } from 'react';
import './App.css';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Components/HomePage';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
        <Navbar/>
        <switch>

        <Route path = "/register" component = {Register}/>
        <Route path = "/login" component = {Login}/>
        <Route exact path = "/" component = {HomePage}/>


        </switch>
        </Router>
       
        {/* <TodoForm/> */}
        
        {/* <Login/> */}
        
        {/* <Register/> */}
      </div>
    );
  }
}

export default App;
