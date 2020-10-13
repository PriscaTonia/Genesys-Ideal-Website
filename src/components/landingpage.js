import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Nav1 from '../NavigationBars/navBar1'
import Learnable from './learnable'



class LandingPage extends Component {
 render(){
  return (
    <BrowserRouter>

      <div className="App">
        <h1>Hello Everyone, I'm testing this out.</h1>
        <Nav1 />
        <Route path='/components/learnable' Component={Learnable} />
      </div>
    </BrowserRouter>
    
  );
 }
}

export default LandingPage;