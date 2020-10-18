import React from 'react'
import Nav2 from './navBar2'
import photo from '../Images/learnable images/Photo (8).jpg'
import photo3 from '../Images/learnable images/image 23.jpg'
import photo4 from '../Images/learnable images/image 24.jpg'
import photo5 from '../Images/learnable images/image 25.jpg'
import photo6 from '../Images/learnable images/image 26.jpg'
import author from '../Images/learnable images/Rectangle 44.jpg'
import Subscribe from './subscribe'
import Footer from './footer'
import './journal.css'
import './learnable.css'


const Journal = () =>{
    return(
        <div className='journal'>
            <Nav2 />
           
            <div className='journal-main'>
                 
                <section className='journal-hero'>
                    <h1>Journal</h1>
                    <button>CATEGORIES</button>
                </section>
                <section className='Hero-journal'>
                    <img src={photo} alt='' className='photo'/>
                    <div className='journal-snippet'>
                        <a href='/'>inspiration</a>
                        <h3>Learn Design Thinking like a Pro and Build Projects that People will care about</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. Vulputate euismod commodo donec tincidunt et, aliquam. Eget scelerisque netus habitant dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus.</p>
                        <div className='author'>
                            <img src={author} alt=''/>
                            <span>David Mong, Apr 9, 2020</span>
                        </div>
                    </div>
                </section>
                <section className='journal-journal'>
                <div className='journal-content'>
                    <div className='journal-items'>
                        <img src={photo3} alt='' />
                        <div className='item-content'>
                            <a href='#'>inspiration</a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>

                    </div>
                    <div className='journal-items'>
                        <img src={photo4} alt='' />
                        <div className='item-content'>
                            <a href='#'>inspiration</a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>
                        
                    </div>
                    <div className='journal-items'>
                        <img src={photo5} alt='' />
                        <div className='item-content'>
                            <a href='#'>inspiration</a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>
                        
                    </div>
                    <div className='journal-items'>
                        <img src={photo6} alt='' />
                        <div className='item-content'>
                            <a href='#'>inspiration</a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>
                        
                    </div>
                
                
                    <div className='journal-items'>
                        <img src={photo3} alt='' />
                        <div className='item-content'>
                            <a href='#'>inspiration</a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>

                    </div>
                    <div className='journal-items'>
                        <img src={photo4} alt='' />
                        <div className='item-content'>
                            <a href='#'>inspiration</a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>
                        
                    </div>
                    <div className='journal-items'>
                        <img src={photo5} alt='' />
                        <div className='item-content'>
                            <a href='#'>inspiration</a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>
                        
                    </div>
                    <div className='journal-items'>
                        <img src={photo6} alt='' />
                        <div className='item-content'>
                            <a href='#'>inspiration</a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>
                        
                    </div>
                    </div>
                </section>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Journal