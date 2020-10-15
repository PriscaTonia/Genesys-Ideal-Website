import React from 'react'
import Nav2 from '../NavigationBars/navBar2'
import arrow from '../Images/learnable images/Skip to Next Section.svg'
import video from '../Images/learnable images/Video.png'
import boy from '../Images/learnable images/Cutout 1.svg'
import photo1 from '../Images/learnable images/Photo (4).jpg'
import photo from '../Images/learnable images/Photo (3).jpg'
import photo2 from '../Images/learnable images/Photo (5).jpg'
import play from '../Images/learnable images/Play.jpg'
import explore1 from '../Images/learnable images/Explore option.svg'
import explore2 from '../Images/learnable images/Explore option (1).svg'
import './learnable.css'



const Learnable = () => {
    return(
        <div className='learnable'>

            <Nav2 />
            <div className='notification'>
                <section className='notify-content'>
                    <h4>coming soon: learnable '20</h4>
                    <p>We've started taking in applications for the next batch of learnable interns. Applications are on till the 21st of Febuary</p>
                </section>
                <section className='notify-content click'>
                    <p>Click link to download...</p>
                    <h4><a href='#'>Learnable ‘20 Brochure</a></h4>
                </section>
            </div>

            <div className='Hero'>
                <section className='Hero-text'>
                    <h1>Everything is Learnable</h1>
                    <p>Learnable is the perfect product development internship program brought to you by Genesys.</p>
                </section>
                <div className='media-sec'>
                    <section className='Hero-media'>
                        <img src={arrow} alt='' className='arrow'/>
                        <div className='images'>
                            <div className='explore'>
                                <img src={explore1} alt='' className='exp1'/>
                                <img src={explore2} alt='' className='exp2'/>
                            </div>
                            <div className='video-cont'>
                                <img src={video} alt='' className='video'/>
                            </div>
                        </div>

                    </section>
                    <section className='statistics'>
                        <div className='stat'>
                            <span className='numbers'>305</span>
                            <p>Young Software Developers Trained</p>
                        </div>
                        <div className='stat'>
                            <span className='numbers'>2100</span>
                            <p>Tech Enthusiasts</p>
                        </div>
                        <div className='stat'>
                            <span className='numbers'>8</span>
                            <p>StartUps Incubated</p>
                        </div>
                        <div className='stat'>
                            <span className='numbers'>250</span>
                            <p>Small Businesses supported</p>
                        </div>
                    </section>
                </div>
            </div>
            <section className='learn-reuse'>
                <div className='learn-content'>
                    <h3>We Make People Great</h3>
                    <p>As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry.</p>
                    <p> We primarily educate and groom software developers and designers, preparing them for the industry. </p>
                </div>
                <div className='learn-img'>
                    <img src={boy} alt='' className='boy' />
                </div>
            </section>

            <section className='learn-reuse secA'>
                <div className='learn-img'>
                    <img src={photo} alt='' className='img' />
                </div>
                <div className='learn-content'>
                    <h3>An Unusual Learning Experience</h3>
                    <p>At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.</p>
                    <p> Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn. </p>
                </div>
                
            </section>

            <section className='learn-reuse multi'>
                
                <div className='learn-content'>
                    <span>FOR DEVELOPERS</span>
                    <h3>Learn to Build Software the Right Way</h3>
                    <p>We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way.</p>
                    <p>We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive.</p>
                    <a href='#'>learn more</a>
                </div>
                <div className='colored-divs'>
                    <div className='one box'>Program with JavaScript</div>
                    <div className='two box'>Version Control with Git</div>
                    <div className='three box'>Web Development with React</div>
                    <div className='four box'>Building APIs with NodeJS</div>
                    <div className='five box'>Managing Data with MongoDB</div>
                    <div className='six box'>Deploying with Heroku</div>

                </div>
                
            </section>
            <section className='learn-reuse multi2'>
                
                <div className='colored-divs'>
                    <div className='one box'>Design User Interfaces</div>
                    <div className='TWO box'>Craft User Experiences</div>
                    <div className='three box'>Apply Design Thinking</div>
                    <div className='FOUR box'>Build Information Architecture</div>
                    <div className='FIVE box'>Copy write for Projects</div>
                    <div className='SIX box'>Brand Products</div>

                </div>

                <div className='learn-content'>
                    <span>FOR DESIGNERS</span>
                    <h3>Design Different</h3>
                    <p>We love to make things work perfectly. That’s why our design learning path exposes you to the science of user-oriented design.</p>
                    <p>Design is at the heart of everything we do at Genesys. Right from the start of the program, you’ll get your hands dirty as you get practically involved in the world’s most modern design concepts. At Genesys, we’re building designers who put the users first.</p>
                    <a href='#'>learn more</a>
                </div>
                
            </section>

            <section className='learn-reuse'>
                <div className='learn-content'>
                    <h3>Who is Eligible?</h3>
                    <p>To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.</p>

                    <p> To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency. </p>

                </div>
                <div className='learn-img'>
                    <img src={photo1} alt='' className='img' />
                </div>
            </section>

            <section className='learn-reuse'>
                <div className='learn-img'>
                    <div>
                        <img src={photo2} alt='' className='img' />
                        <img src={play} alt='' className='play-btn' />
                    </div>
                </div>
                <div className='learn-content'>
                    <h3>Who is Eligible?</h3>
                    <p>To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.</p>

                    <p> To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency. </p>

                </div>
                
            </section>
            
        </div>
    )
}

export default Learnable;