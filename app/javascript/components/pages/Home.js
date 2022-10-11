import React from 'react'


const Home = ({logged_in,
    current_user
    }) => {
    return (
    <>
        <h1>Welcome to simPill</h1>
        {!logged_in && (
        <>
           <h2>Giving you the power to control your health</h2>
          <p>
          The medication reminder platform that helps you organize, maintain, and track your medication intake. No more stress of trying to remember if you have taken your prescribed medications, log on, tap a button, and your action is tallied into our system for you to see. So, don't worry about all the times you have lost thinking about the what if's, or did I's, and start living your life with our little companion app, simPill.
         </p>
        </>
        )}
        {logged_in && (
        <>
           <h2>Welcome back {current_user.first_name}</h2>
          <p>
          The medication reminder platform that helps you organize, maintain, and track your medication intake. No more stress of trying to remember if you have taken your prescribed medications, log on, tap a button, and your action is tallied into our system for you to see. So, don't worry about all the times you have lost thinking about the what if's, or did I's, and start living your life with our little companion app, simPill.
          </p>
       </>
        )}
    </>
    )
}

export default Home