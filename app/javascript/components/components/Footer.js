import React from 'react'

const Footer = () => {

    const goingUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (

    <>
        <button onClick={goingUp}>Top</button>
    </>
    )
}

export default Footer