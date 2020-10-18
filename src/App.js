import React, { Component } from 'react';
//import {BrowserRouter, Route} from 'react-router-dom'
import Nav1 from './components/navBar1'
import LandingPage from './components/landingpage'




class App extends Component {
 render(){
  return (

    <div>
      <Nav1 />
     < LandingPage />
 
    </div>
  );
 }
}

export default App;
