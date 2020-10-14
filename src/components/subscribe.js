import React from 'react'
import topArrow from '../Images/Go back to Top.svg'
import './subscribe.css'




const Subscribe = () => {
    return(
        <div className='subscribe'>
                
                <span className='arrow'><a href='/'><img src={topArrow} alt='' /></a></span>
                <div className='content'>
                    <h3 className='text'>stay up to date on what we are doing and new learning opportunities.</h3>
                    <form>
                        <div className='input'>
                            <div className='inputs'>
                                <input type='text' placeholder='Your Email'/>
                                <label><a href='/' >view privacy policy</a></label>
                            </div>
                        </div>
                        <span className='button'><button>Subscribe</button></span>
                    </form>
                </div>

        </div>
    )
}

export default Subscribe;