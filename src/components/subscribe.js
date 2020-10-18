import React from 'react'
import topArrow from '../Images/Go back to Top.svg'
import './subscribe.css'




const Subscribe = () => {
    return(
        <div className='subscribe'>
                
                <span className='Arrow'><a href='/'><img src={topArrow} alt='' /></a></span>
                <div className='content'>
                    <h3 className='text'>Stay up to date on what we are doing and new learning opportunities</h3>
                    <form>
                        <div className='inputs-mobile'>
                            <textarea type='text' placeholder='Your Email'/>
                            <span className='button'><button>Subscribe</button></span>
                            <label><a href='/' >view privacy policy</a></label>
                        </div>
                        <div className='inputs'>
                            <textarea type='text' placeholder='Your Email'/>
                            <label><a href='/' >view privacy policy</a></label>
                        </div>
                        <span className='button btn'><button>Subscribe</button></span>
                    </form>
                </div>

        </div>
    )
}

export default Subscribe;