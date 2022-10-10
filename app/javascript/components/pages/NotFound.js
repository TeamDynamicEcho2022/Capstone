import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap'
import {errorimg} from '../images/error_med'



const NotFound = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate("/")
    }


    return(
        <>
          <h3>NotFound
          <img src={errorimg} alt ="404" /> Sorry, we couldn't find what you were looking for.</h3>
            <Button
               onClick={handleSubmit}
               name="submit"> 
               Home 
            </Button>
        </>
    )
}

export default NotFound