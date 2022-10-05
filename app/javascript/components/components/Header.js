import React from 'react'
import Navigation from "./Navigation"

const Header = (props) => {
    return (
    <>
        <h1>This is the Header</h1>
        <Navigation {...props} />
    </>
    )
}

export default Header