import React from 'react'


const Home = ({logged_in,
    current_user
    }) => {
    return (
    <div className="homeBackground homeBox">
        <h1 style={{color: "seashell"}}>Welcome to simPill</h1>
        <br/>
        {!logged_in && (
        <div className="fadeAnimation">
            <h2 style={{color: "seashell", textAlign: "center"}}>Giving you the power to control your health</h2>
            <div className='homeTextContainer'>
                <p className = "homeText">
                    The medication reminder platform that helps you organize, maintain, and track your medication intake. No more stress of trying to remember if you have taken your prescribed medications, log on, tap a button, and your action is tallied into our system for you to see. So, don't worry about all the times you have lost thinking about the what if's, or did I's, and start living your life with our little companion app, simPill.
                </p>
            </div>
        </div>
        )}
        {logged_in && (
        <div className="fadeAnimation">
            <h2 style={{color: "seashell", textAlign: "center"}}>Welcome back {current_user.first_name}</h2>
            <div className='homeTextContainer'>
                <p className="homeText">
                    The medication reminder platform that helps you organize, maintain, and track your medication intake. No more stress of trying to remember if you have taken your prescribed medications, log on, tap a button, and your action is tallied into our system for you to see. So, don't worry about all the times you have lost thinking about the what if's, or did I's, and start living your life with our little companion app, simPill.
                </p>
            </div>
        </div>
        )}
    </div>
    )
}

export default Home