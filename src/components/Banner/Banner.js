import React, { Component } from "react";
import './Banner.css'

// Main Banner of Website
class Banner extends Component{
    render(){
        return(
            <div className='PageBanner'>
                {/* Banner Image */}
                <div className="banner-picture">
                    <img src="https://drive.google.com/uc?export=view&id=1QG8YgGivXG0csfCrHHCzy86aE5RkWujf" className="img-size"/>
                </div>
                {/* banner Text */}
                <div className="banner-text">
                    <h1 className="banner-heading">We want give them a better tommorow!</h1>
                    <p className="banner-parah">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <button className="banner-button">Get Started</button>
                </div>
            </div>
        )
    }
}

export default Banner