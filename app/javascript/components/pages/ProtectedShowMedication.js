import React from 'react'
import {Card, CardHeader, ListGroup, ListGroupItem, Button} from 'reactstrap'
import  {useParams}  from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const ProtectedShowMedication = ({
    MockMedicationsPass,
    current_user
}) => {

    const { id } = useParams()
    let currentMedications = MockMedicationsPass?.find((medication) => medication?.id === +id)
    console.log(currentMedications)


    return (
        <>
        <Card style={{ width: '18rem' }}
        >
        <CardHeader>
            {currentMedications?.drug_name}'s Information
        </CardHeader>
        <CardHeader>
            <img src={currentMedications?.image}></img>
        </CardHeader>
            <ListGroup flush>
                <ListGroupItem>
                    Drug Name: {currentMedications?.drug_name}
                </ListGroupItem>
                <ListGroupItem>
                    Drug Category: {currentMedications?.drug_cat}
                </ListGroupItem>
                <ListGroupItem>
                    Description: {currentMedications?.description}
                </ListGroupItem>
                <ListGroupItem>
                    Frequency: {currentMedications?.frequency}
                </ListGroupItem>
                <ListGroupItem>
                    Strength: {currentMedications?.strength}
                </ListGroupItem>
                <ListGroupItem>
                    Taken: {currentMedications?.is_taken}
                </ListGroupItem>
                    <div>
                        <NavLink to={`/${current_user?.id}/medicationupdate/${currentMedications?.id}`} >
                            <Button> Edit </Button>
                        </NavLink>
                    <br></br>
                        <NavLink>
                            <Button> Delete </Button>
                        </NavLink>
                    </div>
            </ListGroup>
        </Card>
        </>
    )
}

export default ProtectedShowMedication