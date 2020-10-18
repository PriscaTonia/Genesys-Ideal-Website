import React, { Component } from 'react';
import Nav1 from './components/navBar1'
import Nav2 from './components/navBar2'
import Subscribe from './components/subscribe'
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from './components/landingpage'
import Footer from './components/footer'





class App extends Component {
  
 render(){
  return (
    <BrowserRouter>
      <div className='App'>

        <Nav1 />
       
        <LandingPage />
        
        {
          //<Nav2 />
       // this.state.check === false ? < LandingPage /> : <Route path='/learnable' component={Learnable} /> 
       
      }
       
       
        

      </div>
    </BrowserRouter>
   
  );
 }
}

export default App;
