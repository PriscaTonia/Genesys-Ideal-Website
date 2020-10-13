import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Nav1 from '../NavigationBars/navBar1'
import Learnable from './learnable'
import image1 from '../Images/landingpage images/LPimg1.jpg'
import image2 from '../Images/landingpage images/LPimg2.jpg'
import image3 from '../Images/landingpage images/LPimg3.jpg'
import './landingpage.css'



class LandingPage extends Component {
 render(){
  return (
    <BrowserRouter>

      <div className="App">
        <Nav1 />
        <Route exact path='/learnable' Component={Learnable} />
         <section className='section sec1'>

           <div className='secinfo'>
              <h3>genesys provides opportunities for young nigerian techies and opportunities to grow and innovate.</h3>
              <p className='Psec1'>We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.</p>
           </div>

           <div className='images'>
              <i class="fa fa-long-arrow-down LPimg11 fa-5x" aria-hidden="true"></i>
              <img src={image1} alt='' className='LPimg1' />
            </div>

        </section> 

        <section className='sectionA sec2'>
          <div className='img'>
            <img src ={image2} alt=''  className='LPimg2' />
          </div>
          
          <div className='sec2infoA'>
            <h3>Learnable</h3>
            <p className='Psec1'>Every year, young Nigerians are launching new careers in the technology industry. Find out how genesys is helping them do it.</p>
            <a href='#' className='LPlink'>Learn more</a>
          </div>
        </section>

        <section className='sectionA sec3'>
         
          <div className='sec2infoA'>
            <h3>Agora</h3>
            <p className='Psec1'>We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work you do.</p>
            <a href='#' className='LPlink'>Learn more</a>
          </div>

          <div className='img'>
            <img src ={image3} alt=''  className='LPimg2' />
          </div>
          
        </section>

      </div>
    </BrowserRouter>
    
  );
 }
}

export default LandingPage;