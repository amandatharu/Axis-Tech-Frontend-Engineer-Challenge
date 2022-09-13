import React from "react";
import PropTypes from "prop-types";
import './Button.css'

//Main Button Component of the Website
const Button=({thisname, text, onClick})=>{
    return(
        <button className={thisname} onClick={onClick}>{text}</button>
    )
}

//Props Related to Button Component
Button.defaultProps ={
    thisname: PropTypes.string
}

Button.propTypes={
    text: PropTypes.string,
    thisname: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button