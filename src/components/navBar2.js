import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './nav2.css'

class Nav2 extends Component{
    state={

        className: 'learnable-links'
      }
    
    handleClick = () =>{
        this.setState({
          className:'learnable-show'
        });
        let className = this.state.className
        if(className=== 'learnable-show'){
            this.setState({
                className: 'learnable-links'
            })
        } 
        
      }
    render(){
        return(
       
            <nav className='sub-nav'>

                    <button className='L-hamburger' onClick={this.handleClick}>
                        <i className='fa fa-bars'></i>
                    </button>

                <ul className={this.state.className}>
                    <li><Link to='/learnable' className='L-a'>home</Link></li>
                    <li><Link to='/softwareDev' className='L-a'>software developers</Link></li>
                    <li><Link to='/productDes' className='L-a'>product design</Link></li>
                    <li><Link to='/apply' className='L-a'>apply</Link></li>
                    <li><Link to='/journal' className='L-a'>journal</Link></li>
                    <li><Link to='/faq' className='L-a'>faq</Link></li>
                </ul>


            </nav>
        
    )
    }
}

export default Nav2;