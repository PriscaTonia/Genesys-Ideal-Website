import React, {Component} from 'react'
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
                    <li><a href='/learnable' className='L-a'>home</a></li>
                    <li><a href='/softwareDev' className='L-a'>software developers</a></li>
                    <li><a href='/productDes' className='L-a'>product design</a></li>
                    <li><a href='/apply' className='L-a'>apply</a></li>
                    <li><a href='/journal' className='L-a'>journal</a></li>
                    <li><a href='/faq' className='L-a'>faq</a></li>
                </ul>


            </nav>
        
    )
    }
}

export default Nav2;