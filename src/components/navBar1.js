
import React, {Component} from 'react'
import genesysLogo from '../Images/landingpage images/Genesys Logo.svg'
import './nav1.css'

class Nav1 extends Component {
    state={

        className: 'links'
      }
    
    handleClick = () =>{
        this.setState({
          className:'show'
        });
        let className = this.state.className
        if(className=== 'show'){
            this.setState({
                className: 'links'
            })
        } 
        
      }

    
    render(){
        
        return(
            <nav className='main-nav'>
                    <img src={genesysLogo} alt='Genesys Logo' className='logo' />


                    <button className='hamburger' onClick={this.handleClick}>
                        <i className='fa fa-bars'></i>
                    </button>

                    <ul className= {this.state.className}>
                        <li><a href='/learnable' className='current'>LEARNABLE</a></li>
                        <li><a href='/'>AGORA</a></li>
                        <li><a href='/'>STARTZONE</a></li>
                        <li><a href='/'>ABOUT</a></li>
                        <li><a href='/'>CONTACT</a></li>
                    </ul>


                    <div className='nav-text'>
                        <span className='txt1'>build a product with</span>
                        <button>DEVSTUDIO</button>
                    </div>

            </nav>
        );
    }
}

export default Nav1;