import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router , Switch, Route, Link, Routes } from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import firebase from "firebase/compat/app"
import 'firebase/auth';



import Notfound from './pages/Notfound';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { UserContext } from './Context/UserContext';
import Footer from './Components/Footer';
import Header from './Components/Header';

import firebaseConfig from './Firebase/Config';

//intilaise firebase
 firebase.initializeApp(firebaseConfig)


function App() {

  const [user, setUser]= useState(null)


  return (
    <Router>
    <ToastContainer />
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </UserContext.Provider>
  </Router>
   
  );
}

export default App;
