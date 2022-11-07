//Main Page

import React from 'react'
import "./App.css"
import { useState,useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Row_post from './Components/Row_post/Row_post';
import Footer from './Components/Footer/footer'
import {originals,actions,music,romance,scienceFiction } from './constants/constants'

//different parameters are called to the main function via props

function App() {

  return (
    <div className='App'>

      <NavBar/>
      <Banner/>

      <Row_post url = {originals} title = "Netflix Originals" />
      <Row_post url = {actions} title = "Action " isSmall /> 
      <Row_post url = {romance} title = "Romance " isSmall /> 
      <Row_post url = {scienceFiction} title = "Science Fiction" isSmall /> 
      <Row_post url = {music} title = "Music" isSmall /> 

      <Footer/>

      //isSmall default true

    </div>

  );
}

export default App;
