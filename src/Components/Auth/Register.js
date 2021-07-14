import React , {useState} from 'react'
import { inject, observer } from 'mobx-react';
import AauthinticateStore from '../../stores/authStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthinticateStore from '../../stores/authStore';
import {useHistory} from "react-router-dom"
// import authinticateStore from '';


function Register(){
    let history = useHistory();
    
    // const[userName,setUsername]= useState('');
    // const[password,setPassword]= useState('');
    // const[email,setEmail]= useState('');
    console.log({history});
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    
      const buttonstyle = {
         margin_top:"40px"
      };
      const styleP = {
        margin_top:"40px"
     };
    const {Test,handleSubmit,setPassword,setEmail,setUsername,username,password,email} = AauthinticateStore;
    
    return (
        
            <div style = {mystyle}className="register">
            <h4>Register Page</h4>
            <form onSubmit = {() => {
                console.log("handle.......S");
                history.push("/")
                handleSubmit()
            }} >

            <input required value = {username} name = "username" onChange = {(e) => setUsername(e.target.value)}   className= "form-control" name = "userName" placeholder = "enter your userName" />
            <input required value  = {email}  name = "email"  onChange  = {(e) => setEmail(e.target.value)}    className= "form-control" name = "email" placeholder = "enter your Email" />
            <input required type = "password" value = {password} name = "password" onChange = {(e) => setPassword(e.target.value)}  className= "form-control" name = "password" placeholder = "enter your password" />
            <button type = "submit" style = {buttonstyle} className = "btn btn-success">register</button>
            {/* <button style = {buttonstyle} className = "btn btn-success" onClick = {()=> Test()}>Test</button> */}
            
            </form>

        </div>
        )
    }

export default observer(Register);
