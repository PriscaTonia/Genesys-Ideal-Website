import React from 'react'
import genesysLogo from '../Images/landingpage images/Genesys Logo.svg'
import './nav1.css'

const Nav1 = () => {
    return(
        <nav className='main-nav'>

                <img src={genesysLogo} alt='Genesys Logo' className='logo' />

                <ul className='links'>
                    <li><a href='/learnable'>LEARNABLE</a></li>
                    <li><a href='/'>AGORA</a></li>
                    <li><a href='/'>STARTZONE</a></li>
                    <li><a href='/'>ABOUT</a></li>
                    <li><a href='/'>CONTACT</a></li>
                </ul>

                <div className='nav-text'>
                    <span className='txt1'>build a product with</span>
                    <button>DEVSTUDIO</button>
                </div>

        </nav>
    )
}

export default Nav1;