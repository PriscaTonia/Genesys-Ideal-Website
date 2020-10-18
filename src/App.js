import React, { Component } from 'react';
import Nav1 from './components/navBar1'
import Nav2 from './components/navBar2'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/landingpage'
import SoftwareDev from './components/softwareDev'
import ProductDes from './components/productDes'
import Apply from './components/apply'
import Journal from './components/journal'
import FAQ from './components/faq'

import Learnable from './components/learnable';





class App extends Component {
  
 render(){
  return (

    <BrowserRouter>
      <div className='App'>

      <Nav1 />
       <div> 
         <Switch>
           <Route exact path = '/' ><LandingPage /></Route>
           <Route path='/learnable'><Learnable /></Route>
           <Route path='/softwareDev'><SoftwareDev /></Route>
           <Route path='/productDes'><ProductDes /></Route>
           <Route path='/apply'><Apply /></Route>
           <Route path='/journal'><Journal /></Route>
           <Route path='/faq'><FAQ /></Route>
         </Switch>
       </div>
        
        
        {
      
      }
       
       
        

      </div>
    </BrowserRouter>
   
  );
 }
}

export default App;
