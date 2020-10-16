import React, { Component } from 'react';
//import {BrowserRouter, Route} from 'react-router-dom'
import Learnable from './components/learnable'
import LandingPage from './components/landingpage'




class App extends Component {
 render(){
  return (

    <div>
      <Learnable />
     {
       // < LandingPage />
     }
      
    </div>
  );
 }
}

export default App;
