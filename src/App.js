import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld.js'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import './App.css';


class App extends Component {
  const firebaseConfig = {
  apiKey: "AIzaSyBRjQwOXh_GJMBK5Ljdg9QqXhwVVq4ulMY",
  authDomain: "authentication-50c6a.firebaseapp.com",
  databaseURL: "https://authentication-50c6a.firebaseio.com",
  projectId: "authentication-50c6a",
  storageBucket: "authentication-50c6a.appspot.com",
  messagingSenderId: "823077545395",
  appId: "1:823077545395:web:1f4ca2a2fd5940e8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
render(){

  return (
    <div className="App">
    <HelloWorld name="Jim"/>
    <HelloWorld name="Nancy"/>
    </div>
    }
  );
};

export default App;
