import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap"
import daniel from '../assets/dev1daniel.jpg'
import dawit from '../assets/dev2dawit.jpg'
import jereme from '../assets/lorem.jpg'

const AboutUs = () => {
    return (
    <>
    <h1>About Us</h1>

        <Card
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src={daniel}
        ></img>
        <CardBody>
            <CardTitle tag="h5">
            Daniel
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            Tech Lead
            </CardSubtitle>
            <CardText>
            Daniel Clement is a full-stack web developer with a strong passion for problem solving. Some of his interests include creating music, visiting the lovely city of Asheville, NC on occasion, and playing board games.
            </CardText>
        </CardBody>
        </Card>

        <Card
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src={dawit}
        ></img>
        <CardBody>
            <CardTitle tag="h5">
            Dawit
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            Product and Project Manager
            </CardSubtitle>
            <CardText>
            Pokem ipsum dolor sit amet Pokemon Heroes Magneton consectetur adipisicing elit Nidorino Mime Jr Miltank. Gold Swift Karrablast Pokemon Oshawott Onix Zekrom. Leech Seed Regigigas Samurott Hypno Elite Four Burnt Berry Herdier. Hoenn Golett Alomomola Storm Badge Tyranitar Dodrio Leech Seed. Pokemon Lunatone Eevee Cleffa Rotom Poliwag Delibird.
            </CardText>
        </CardBody>
        </Card>

        <Card
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src={jereme}
        ></img>
        <CardBody>
            <CardTitle tag="h5">
            Jereme
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            Design Lead
            </CardSubtitle>
            <CardText>
            Pika-pi Zapdos Piplup Poison Sting Fraxure Buizel Emolga. Charmander Corsola Slowbro Sunkern Potion Magneton Mienfoo. Volcano Badge Phanpy Hitmonchan Bubble Ambipom Solosis Celadon City. Fire Red Vanillite Seadra bicycle Foongus Piplup Koffing. Ivysaur Charmeleon Staryu Tynamo Cacnea Suicune Growl.
            </CardText>
        </CardBody>
        </Card>

    </>
    )
}

export default AboutUs