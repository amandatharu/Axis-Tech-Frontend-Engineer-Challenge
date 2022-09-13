import React, { Component } from 'react';
import './Navbar.css'

//Navbar of the Website
class Navbar extends Component{
    render(){
        return(
            <nav>
                {/* Navbar Logo Image */}
                <div className='navbar-logo'>
                    <img src='https://drive.google.com/uc?export=view&id=1yV4hhQ_VIpGviMDT3WxlRWswX4k6XDyG' className='logo-image' alt='logo'/>              
                </div> 
                
                {/* Navbar Logo Text */}
                <h1 className='navbar-logotext'>Together We</h1>
            </nav>
        )
    }
}

export default Navbar