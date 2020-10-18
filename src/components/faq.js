import React from 'react'
import Nav2 from './navBar2'
import photo from '../Images/learnable images/Photo (9).jpg'
import Subscribe from './subscribe'
import Footer from './footer'
import './faq.css'


const FAQ = () => {
    return(
        <div className='Faq'>
            <Nav2 />
            <section className='faq-hero'>
                <h1>FAQ</h1>
                <img src={photo} alt=''/>
            </section>
            <section className='faq-lists'>
                <div className='faq-content'>
                        <select>
                            <option >How many people can attend a course?</option>
                        </select>
                        <select>
                            <option>What's the learning experience like?</option>
                        </select>
                        <select>
                            <option>Who are the coaches?</option>
                        </select>
                        <select>
                            <option>How far in advance should we book?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        <select>
                            <option>Can you customize your courses?</option>
                        </select>
                        
                </div>
            </section>
            <Subscribe />
            <Footer />
        </div>
    )
}


export default FAQ