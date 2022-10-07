import React from "react"
import {Nav, NavItem} from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = ({
    current_user,
    logged_in,
    sign_in_route,
    sign_out_route,
    new_user_route
}) => {


    return (
        <>
        <Nav>
            <NavItem>
                <NavLink to ="/">
                Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to ="/about">
                    AboutUs
                </NavLink>
            </NavItem>
             {logged_in && (
                <NavItem>
                    <a href={sign_out_route}>
                    sign_out 
                    </a>
                </NavItem>
             )}
             {logged_in && (
                <NavItem>
                    <NavLink to ={`/${current_user.id}/medications/`}>
                        Your Dashboard
                    </NavLink>  
                </NavItem>
             )}
              {logged_in && (
                <NavItem>
                    <NavLink to ="/">
                        Add Medication
                    </NavLink>
                </NavItem>
              )}
              {!logged_in && (
                <NavItem>
                    <a href={sign_in_route}>
                        Sign In
                    </a>   
                </NavItem>
              )}
              {!logged_in && (
                <NavItem>
                    <a href={new_user_route}>
                        Sign Up
                    </a>   
                </NavItem>
              )}

        </Nav>
        </>
    )
} 
export default Navigation