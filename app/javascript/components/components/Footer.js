import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import upArrow from "../assets/up-arrow.png"

const Footer = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    const goingUp = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (

    <footer>
        { showBtn && (<p className="footerBtn"><img src={upArrow} alt="Return to Top of Page" onClick={goingUp} style={{width: "25px", cursor: "pointer"}}/></p>)}
        <div className="footerText" >
        <NavLink to ="/about">
            <p>Site by: Jereme, Dawit, and Daniel</p>
        </NavLink>
        </div>
    </footer>
    )
}

export default Footer