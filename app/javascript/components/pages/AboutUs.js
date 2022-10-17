import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap"
import daniel from '../assets/dev1daniel.jpg'
import dawit from '../assets/dev2dawit.jpg'
import jereme from '../assets/lorem.jpg'
import githubimg from "../assets/github.png"
import linkedinimg from "../assets/linkedin.png"


const AboutUs = () => {
    return (
    <>
    <h1 className='aboutTitle'>About Us</h1>
<div className="aboutUsContainer">
        <Card className="danielCard"
        >
        <div className="imgContainer">
        <img
            className='danielImg'
            alt="Sample"
            src={daniel}
        ></img>
        </div>
        <CardBody className="danielCardBody"y>
            <CardTitle tag="h5" className='cardTitle'>
            Daniel
            </CardTitle>
            <CardSubtitle
            className="mb-2"
            tag="h6"
            >
            Tech Lead
            </CardSubtitle>
            <br></br>
            <CardText className='danielDescription'>
            Daniel Clement is a full-stack web developer with a strong passion for problem solving. Some of his interests include creating music, visiting the lovely city of Asheville, NC on occasion, and playing board games.
            </CardText>
            <CardText style={{textAlign: "center"}}>
            <a href="https://github.com/dnlclmnt">
            <img
            style={{width: "40px"}}
            alt="Github Image"
            src={githubimg}
            />
            </a>
            <a href="https://www.linkedin.com/in/danielclement-/">
            <img
            style={{width: "40px"}}
            alt="LinkedIn Image"
            src={linkedinimg}
            />
            </a>
            </CardText>
        </CardBody>
        </Card>

        <Card className="dawitCard"
        >
            <div className="imgContainer">
        <img
            className='dawitImg'
            alt="Sample"
            src={dawit}
        ></img>
            </div>
        <CardBody className="dawitCardBody">
            <CardTitle tag="h5" className='cardTitle'>
            Dawit
            </CardTitle>
            <CardSubtitle
            
            className="mb-2"
            tag="h6"
            >
            Product/ Project Manager
            <br/>
            </CardSubtitle>
            <br/>
            <CardText className='danielDescription'>
            Dawit is a full-stack web developer who is self-motivated, responsible, team oriented, reliable and hard working. He loves spending time with his family, work on DIY projects and travel.            
            </CardText>
            <CardText style={{textAlign: "center"}}>
            <a href="https://github.com/addisdave">
            <img
            style={{width: "40px"}}
            alt="Github Image"
            src={githubimg}
            />
            </a>
            <a href="https://www.linkedin.com/in/dawit-kel-738ba3151">
            <img
            style={{width: "40px"}}
            alt="LinkedIn Image"
            src={linkedinimg}
            />
            </a>
            </CardText>
        </CardBody>
        </Card>

        <Card className='jeremeCard'
        >
        <div className="imgContainer">
        <img
            className='jeremeImg'
            alt="Sample"
            src={jereme}
        ></img>
        </div>
        <CardBody className="jeremeCardBody">
            <CardTitle tag="h5" className='cardTitle'>
            Jereme
            </CardTitle>
            <CardSubtitle
            className="mb-2"
            tag="h6"
            >
            Design Lead
            </CardSubtitle>
            <br></br>
            <CardText className='danielDescription'>
            Jereme is a full stack developer motivated by his curiosity to explore and learn. He enjoys the quiet, peaceful tunes of nature--and where he can't find that he equally loves listening to instrumental music. 
         </CardText>
         <CardText style={{textAlign: "center"}}>
            <a href="https://github.com/JPD99">
            <img
            style={{width: "40px"}}
            alt="Github Image"
            src={githubimg}
            />
            </a>
            <a href="https://www.linkedin.com/in/jeremedoan/">
            <img
            style={{width: "40px"}}
            alt="LinkedIn Image"
            src={linkedinimg}
            />
            </a>
            </CardText>
        </CardBody>
        </Card>
</div>
    </>
    )
}

export default AboutUs