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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna etiam. Lacinia quis vel eros donec ac odio tempor. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.
        </p>
     </>
        )}
        {logged_in && (
     <>
        <h2>Welcome back {current_user.first_name}</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna etiam. Lacinia quis vel eros donec ac odio tempor. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.
        </p>
     </>
        )}
    </>
    )
}

export default Home