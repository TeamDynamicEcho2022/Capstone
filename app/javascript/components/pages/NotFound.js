import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap'
import errorimg from '../images/error_med'

const NotFound = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate("/")
    }

    return(
        <>
        <div className="ErrorColumns">
            <div className="rightColumn">
                <h3 className="errorText">Sorry, we couldn't find what you were looking for. Please click the button below to return Home.</h3>
                    <div className="errorButtonSpace">
                        <Button className="errorButton"
                            onClick={handleSubmit}
                            name="submit"> 
                            Home 
                        </Button>
                    </div>
            </div>
            <div className="leftColumn">
                <img src={errorimg} alt ="404" className="errorImg" /> 
            </div>
        </div>
        </>
    )
}

export default NotFound