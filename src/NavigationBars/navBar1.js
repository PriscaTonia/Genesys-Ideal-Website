import React from 'react'
//import { a } from 'react-router-dom'
import genesysLogo from '../Images/landingpage images/Genesys Logo.png'

const Nav1 = () => {
    return(
        <nav>
            <div>
                <img src={genesysLogo} alt='Genesys Logo' />
                <ul>
                    <li><a href='/learnable'>LEARNABLE</a></li>
                    <li><a href='/'>AGORA</a></li>
                    <li><a href='/'>AGORA</a></li>
                    <li><a href='/'>STARTZONE</a></li>
                    <li><a href='/'>ABOUT</a></li>
                    <li><a href='/'>CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav1;