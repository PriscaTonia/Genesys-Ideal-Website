import React from 'react'
import './footer.css'
import image from '../Images/landingpage images/image 32.jpg'
import facebook from '../Images/footer images/facebook 1.svg'
import instagram from '../Images/footer images/instagram 1.svg'
import linkedin from '../Images/footer images/linkedin 1.svg'
import twitter from '../Images/footer images/twitter 1.svg'
import vimeo from '../Images/footer images/vimeo 1.svg'
import youtube from '../Images/footer images/youtube-logotype 1.svg'


const Footer = () => {
    return(
        <div className='footer'>
           
                    <div className='footer-content'>
                        <section className='footer-links'>
                            <ul>
                                <li className='F-li'><a href='#' className='F-a'>build software</a></li>
                                <li className='F-li'><a href='#'className='F-a'>design different</a></li>
                                <li className='F-li'><a href='#' className='F-a'>apply your knowledge</a></li>
                                <li className='F-li'><a href='#'className='F-a'>faq</a></li>
                            </ul>
                        </section>
                        <section className='contact-us'>
                            <p>Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria</p>
                            <a href='#' className='F-a'>get in touch</a>
                        </section>
                        <section className='devstudio'>
                            <img src={image} alt='' />
                            <div className='dev-info'>
                                <p>Learnable is proud to be a collaborative effort of all the arms of our product team</p>
                                <a href='#' className='F-a'>head to devstudio</a>
                            </div>
                        </section>
                    </div>
                    <div className='footer-social'>
                        
                            <section className='social'>
                                <a href='#'><img src={twitter} alt='' className='s-img'/></a>
                                <a href='#'><img src={facebook} alt='' className='s-img' /></a>
                                <a href='#'><img src={linkedin} alt='' className='s-img'/></a>
                                <a href='#'><img src={instagram} alt='' className='s-img'/></a>
                                <a href='#'><img src={youtube} alt='' className='s-img'/></a>
                                <a href='#'><img src={vimeo} alt='' className='s-img' /></a>
                            </section>
                            <section className='copyright'>
                                <p className='cpy'> &copy; GENESYS 2020</p>
                                <p className='cpy'>PRIVACY STATEMENT</p>
                            </section>

                    </div>
            
        </div>
    )
}

export default Footer;