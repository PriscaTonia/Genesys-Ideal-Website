import React from 'react'
import './nav2.css'

const Nav2 = () => {
    return(
       
            <nav className='sub-nav'>

                <ul className='learnable-links'>
                    <li><a href='/home' className='L-a'>home</a></li>
                    <li><a href='/software-dev' className='L-a'>software developers</a></li>
                    <li><a href='/product-design' className='L-a'>product design</a></li>
                    <li><a href='/apply' className='L-a'>apply</a></li>
                    <li><a href='/journal' className='L-a'>journal</a></li>
                    <li><a href='/faq' className='L-a'>faq</a></li>
                </ul>


            </nav>
        
    )
}

export default Nav2;