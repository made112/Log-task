import React, { Component } from 'react';
import { makeObservable, observable, computed, action, flow } from "mobx"



class authStore  {
    username = 'sdsd'
    password = ''
    emai = ''
 
  constructor(value) {
    makeObservable(this, {
      
        handleChange: action,
        username:observable,
        password:observable,
        emai:observable,
        setEmail: action,
        setPassword:action,
        setUsername:action,
    })

}

       handleChange(e) {
        this.setState({ username: e.target.value });
      }
        setEmail = (email) => {
        this.email = email;
      }
    
        setPassword = (password) => {

        // console.log({password})
        this.password = password;
      }

      // Test(){
      //   console.log('test')

      // }
       setUsername=(username)=> {

        this.username = username;
      }
      
    
        handleSubmit = () => {
            
            // history.push("/home");



        // return Promise.resolve();
        // return fetch(apiRequest, ({ username, password, email }))
    }
  }

const AuthinticateStore = new authStore();
export default AuthinticateStore ;