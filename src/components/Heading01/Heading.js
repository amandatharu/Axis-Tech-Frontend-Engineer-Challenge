import React, { Component } from "react";
import './Heading.css'

//Main Heading of Website
class Heading extends Component{
    render(){
        return(
            // Heading Image
            <div className="MyHeading">
                <div className="heading-icon">
                    <img src="https://drive.google.com/uc?export=view&id=1XRqrMjHEfITu5NCTGe_Y_P_vBrqdQyw0" className="icon"/>
                </div>
            {/* Heading Text */}
                <div className="heading-text">
                    <h1>Projects</h1>
                </div>
            </div>
        )
    }
}

export default Heading