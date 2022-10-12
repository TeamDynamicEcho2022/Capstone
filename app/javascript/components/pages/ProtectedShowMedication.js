import React from 'react'
import {Card, CardHeader, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const ProtectedShowMedication = ({
    medications,
    current_user,
    deleteMedication
}) => {
    const navigate = useNavigate()

    const { id } = useParams()
    let currentMedications = medications?.find((medication) => medication?.id === +id)
    console.log(currentMedications)

    const handleDelete = () => {
        const userAnswer = window.confirm(`Are you sure you want to remove ${currentMedications.drug_name} from your profile?`)
        if (userAnswer) {
            deleteMedication(currentMedications, currentMedications.id)
            navigate('/')
            navigate(0)
        }

    }

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
                    {currentMedications?.is_taken && <>Taken Today: Yes</>}
                    {!currentMedications?.is_taken && <>Taken Today: No</>}
                </ListGroupItem>
                    <div>
                        <NavLink to={`/${current_user?.id}/medicationupdate/${currentMedications?.id}`} >
                            <Button> Edit </Button>
                        </NavLink>
                    <br></br>
                            <Button onClick={handleDelete}> Delete </Button>
                    </div>
            </ListGroup>
        </Card>
        </>
    )
}

export default ProtectedShowMedication