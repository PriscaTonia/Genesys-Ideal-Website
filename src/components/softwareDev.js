import React from 'react'
import Nav2 from '../NavigationBars/navBar2'
import Subscribe from './subscribe'
import Footer from './footer'
import boy from '../Images/learnable images/Cutout 1.svg'
import photo from '../Images/learnable images/Photo (6).jpg'
import './softwareDev.css'

const SoftwareDev = () =>{
    return(
        <div className='softwareDev'>
            <Nav2 />
            <section className='soft-Hero'>
                <div className='soft-text'>
                    <h1>The Learnable Software Developer</h1>
                    <p>Creativity means a lot to us. So we look for people who can think both logistically and artistically, and who know that limits are made to be pushed. We value skill and aptitude, but we honor those who care about working with their team to add the Genesys flavour to every project. </p>

                    <p>As a developer, being part of the team exposes you to a range of diverse, like-minded talented people who are sure to make the experience fun for you. You’ll get a shot at building amazing things, developing yourself, learning on the job, while exchanging healthy jokes and having random hangouts once in a while.</p>

                </div>
                <img src={boy} alt=''className='boy1'/>
            </section>
            <section className='quote'>
                <q>You are someone people can count on. Every day, you come in ready to make great things happen.</q>
            </section>

            <section className='expect-text'>
                <img src={photo} alt=''/>
                <div className='text-content'>
                    <h3>We expect you to…</h3>
                    <p>Play nice with other people.</p>

                    <p>Be an actively engaging person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates.</p>
                    <p>Love to code. You understand the basics of programming and object-oriented design and development.</p>

                    <p>Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.</p>

                    <p>Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to.</p>

                    <p>Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.</p>
                </div>
            </section>
            <Subscribe />
            <Footer />

        </div>
    )
}

export default SoftwareDev