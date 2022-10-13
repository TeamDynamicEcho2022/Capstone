import React from 'react'
import { NavLink } from "react-router-dom"
import upArrow from "../assets/up-arrow.png"

const Footer = () => {

    const goingUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (

    <footer>
        <p className="footerBtn"><img src={upArrow} alt="Return to Top of Page" onClick={goingUp} style={{width: "25px", cursor: "pointer"}}/></p>
        <div className="footerText" >
        <NavLink to ="/about">
            <p>Site by: Jereme, Dawit, and Daniel</p>
        </NavLink>
        </div>
    </footer>
    )
}

export default Footer