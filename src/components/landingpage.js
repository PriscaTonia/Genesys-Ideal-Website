import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Nav1 from '../NavigationBars/navBar1'
import Subscribe from './subscribe';
import Learnable from './learnable'
import image1 from '../Images/landingpage images/LPimg1.jpg'
import image2 from '../Images/landingpage images/LPimg2.jpg'
import image3 from '../Images/landingpage images/LPimg3.jpg'
import image4 from '../Images/landingpage images/LPimg4.jpg'
import image5 from '../Images/landingpage images/img2.jpg'
import image6 from '../Images/landingpage images/img3.jpg'
import image7 from '../Images/landingpage images/img4.jpg'
import image8 from '../Images/landingpage images/Photo.jpg'
import './landingpage.css'



class LandingPage extends Component {
 render(){
  return (
    <BrowserRouter>

      <div className="App">
        <Nav1 />
        <Route exact path='/learnable' Component={Learnable} />

        <section className='sec-one'>
          <div className='content1'>
            <div className='sec1-text'>

              <h3 className='sec-heading'>genesys provides opportunities for young nigerian techies and opportunities to grow and innovate.</h3>
              <p className='sec-para'>We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.</p>
            
            </div>
            <div className='sec1-images'>
              <i class="fa fa-long-arrow-down LPimg11 fa-5x" aria-hidden="true"></i>
              <img src={image1} alt='' className='LPimg1' />
              
            </div>
          </div>
        </section>

        <section className='sec-two sec'>
          <div className='contents'>
            <div className='sec-images'>
              <img src ={image2} alt=''  className='LPimg2' />
            </div>
            <div className='sec-text'>
              <h3 className='sec-heads'>Learnable</h3>
              <div className='sec-text-content'>
                <p className='sec-para'>Every year, young Nigerians are launching new careers in the technology industry. Find out how genesys is helping them do it.</p>
                <a href='#' className='LPlink'>Learn more</a>
              </div>
            </div>

          </div>
        </section>

        <section className='sec-three sec'>
          <div className='contents'>
            
            <div className='sec-text'>
              <h3 className='sec-heads'>agora</h3>
              <div className='sec-text-content'>
                <p className='sec-para'>We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work you do.</p>
                <a href='#' className='LPlink'>Learn more</a>
              </div>
            </div>
            <div className='sec-images'>
              <img src ={image3} alt=''  className='LPimg2' />
            </div>

          </div>
        </section>
        <section className='sec-four sec'>
          <div className='contents'>
          <div className='sec-images'>
              <img src ={image4} alt=''  className='LPimg2' />
            </div>
            <div className='sec-text'>
              <h3 className='sec-heads'>StartZone</h3>
              <div className='sec-text-content'>
                <p className='sec-para'>The business environment is harsh for early-stage businesses. We can help you rise above it all.</p>
                <a href='#' className='LPlink'>here's how</a>
              </div>
            </div>
       

          </div>
        </section>

        <section className='sec-five '>
          <div className='contents'>
      
            <div className='sec5-images'>
                <img src ={image5} alt=''  className='LPimg3' />
                <h3 className='sec-heads head'>Genesys <br /> Ignite</h3>
                <div className='label'><img src ={image6} alt=''  className='LPimg3' /> <a href=''>Codeville</a></div>
                <div className='label'><img src ={image7} alt=''  className='LPimg3' /><a href=''>pink summer of code</a></div>
            </div>

            <div className='sec-text text5'>              
                <h3 className='sec-heads'>other things we do</h3>        
            </div>
            </div> 
        </section>

        <section className='sec-six sec'>
          <div className='contents'>
          <div className='sec-images'>
              <img src ={image8} alt=''  className='LPimg2' />
            </div>
            <div className='sec-text '>
              <h3 className='sec-heads sec6'>The best team in the world</h3>
              <div className='sec-text-content ' >
                <p className='sec-para sec6'>We work with the most amaizing people our industry has to offer. They are really passionate about making a difference.</p>
                <a href='#' className='LPlink'>see team</a>
              </div>
            </div>
       

          </div>
        </section>
       
        <Subscribe />
      </div>
    </BrowserRouter>
    
  );
 }
}

export default LandingPage;