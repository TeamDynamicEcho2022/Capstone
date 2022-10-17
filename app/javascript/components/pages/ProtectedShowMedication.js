import React from 'react'
import {Card, CardHeader, CardBody, Button, CardTitle} from 'reactstrap'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import edit from "../assets/edit.png"
import trash from "../assets/trash.png"

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
        <div className="med-show-background med-show-body">
        <Card className="med-show-card"
        >
            <CardHeader>
                <span style={{color: "#619796", fontSize: "24px"}}>{currentMedications?.drug_name}</span>
            </CardHeader>
            <br/>
                <img 
                src={currentMedications?.image}
                style={{width:'50%', margin: 'auto', borderRadius: '10px'}}
                >
                </img>
            <CardBody>
                <br/>
                <CardTitle>
                    Drug Category: {currentMedications?.drug_cat}
                </CardTitle>
                <br/>
                <CardTitle>
                    Description: {currentMedications?.description}
                </CardTitle>
                <br/>
                <CardTitle>
                    Frequency: {currentMedications?.frequency}
                </CardTitle>
                <br/>
                <CardTitle>
                    Strength: {currentMedications?.strength}
                </CardTitle>
                <br/>
                <CardTitle>
                    {currentMedications?.is_taken && <>Taken Today: Yes</>}
                    {!currentMedications?.is_taken && <>Taken Today: No</>}
                </CardTitle>
                <br/>
                <div className="med-show-container">
                    <NavLink to={`/${current_user?.id}/medicationupdate/${currentMedications?.id}`} >
                    <img src={edit} alt="Edit Button" style={{width: "40px", cursor: "pointer"}} />
                    </NavLink>
                <br></br>
                        <img src={trash} alt="Delete Button" onClick={handleDelete} style={{width: "40px", height: "40px", cursor: "pointer"}} />
                </div>
            </CardBody>
        </Card>
        </div>
    )
}

export default ProtectedShowMedication