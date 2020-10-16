import React, { Component } from 'react';
//import {BrowserRouter, Route} from 'react-router-dom'
import Learnable from './components/learnable'
import LandingPage from './components/landingpage'
import ProductDes from './components/productDes'



class App extends Component {
 render(){
  return (

    <div>
      
      <ProductDes />

     {
       // < LandingPage />
       //<Learnable />
     }
      
    </div>
  );
 }
}

export default App;
