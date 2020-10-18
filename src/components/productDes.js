import React from 'react'
import Nav2 from './navBar2'
import Subscribe from './subscribe'
import Footer from './footer'
import boy from '../Images/learnable images/Cutout 1.svg'
import photo from '../Images/learnable images/Photo (7).jpg'
import './softwareDev.css'

const ProductDes = () =>{
    return(
        <div className='softwareDev'>
            <Nav2 />
            <section className='soft-Hero'>
                <div className='soft-text'>
                    <h1>The Learnable Product Designer</h1>
                    <p>At Genesys, you'll be exposed to every discipline in our creative process – UX, UI, interaction design, and copywriting. You’ll be part of a dynamic team that's made up of like-minded, talented people. You'll work hard with them to create things that will amaze everyone everywhere.</p>

                    <p>In addition to your team projects, you’ll be lending a hand to the creative team. Participating in brainstorm sessions, building winning pitches, preparing assets, and design scriptures for productions, you'll be in the thick of it all.</p>

                    <p>Oh, and you’ll make amazing friends while you're at it!</p>

                </div>
                <img src={boy} alt=''className='boy2'/>
            </section>
            <section className='quote q2'>
                <q>The greats weren’t great because at birth they could paint. The greats were great because they painted a lot.</q>- Macklemore
            </section>

            <section className='expect-text'>
                <img src={photo} alt=''/>
                <div className='text-content'>
                    <h3>We expect you to…</h3>
                    <p>Play nice with other people.</p>

                    <p>Be an actively engaging person. That means you are present, motivated, and social. </p>
                    <p>Understand how to use the Figma design software</p>

                    <p>Be able to create initial design layouts with confidence and know-how to effectively communicate concepts to everyone on your team.</p>

                    <p>Have a basic understanding of design principles and theories To have creative courage. This is a tough industry, only the brave and sturdy remain.</p>

                    <p>Be prepared to defend your decisions and take constructive criticism.</p>
                    <p>To us, beauty without substance has no value. At Genesys, design thinking and execution are equally important, so we’re constantly on the lookout for not only the how but also the why.</p>
                </div>
            </section>
            <Subscribe />
            <Footer />

        </div>
    )
}

export default ProductDes