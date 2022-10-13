import React from 'react'
import Navigation from "./Navigation"


const Header = (props) => {
    return (
    <header>
        <div className="headerNav">
            <Navigation {...props} />
        </div>
    </header>
    )
}

export default Header