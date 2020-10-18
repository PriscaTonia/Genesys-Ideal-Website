import React from 'react'
import Nav2 from './navBar2'
import Subscribe from './subscribe'
import Footer from './footer'
import photorec from '../Images/learnable images/Rectangle 42.jpg'
import photo from '../Images/learnable images/Photo (8).jpg'
import './softwareDev.css'



const Apply = () => {
    return(
        <div className='apply'>
            <Nav2 />
            <section className='soft-Hero'>
                <div className='soft-text'>
                    <h1>Apply Your Knowledge</h1>
                    <p>Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.</p>

                </div>
                <img src={photorec} alt=''className='photorec'/>
            </section>

            <section className='expect-text'>
                <img src={photo} alt=''/>
                <div className='text-content'>
                    
                    <div className='apply-content'>
                        <h3>How to get in</h3>
                        <p>We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.</p>
                    </div>
                    <div className='apply-content'>
                        <h3>online application</h3>
                        <p>Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to download our prep curriculum that contains everything you need to prepare for the physical and technical assessment.</p>
                        <a href='/'>apply here</a>
                    </div>
                    <div className='apply-content'>
                        <h3>Phone call interviews</h3>
                        <p>We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, and answer any questions you might have about the program. It’s supposed to be a chat, getting nervous defeats the aim.</p>
                    </div>
                    <div className='apply-content'>
                        <h3>final assessment</h3>
                        <p>At this stage, we’ll get to meet you in person for the first time. You’ll be invited to the hub for a physical assessment that includes a technical assessment, a psychometric test and a face-to-face chat with our team.</p>
                    </div>
                    <div className='apply-content'>
                        <h3>get in</h3>
                        <p>If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey to build that career of your dreams and provide all the help, support and love that we can muster along the way!</p>
                    </div>
                </div>
            </section>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Apply