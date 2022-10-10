import React from 'react'
import {Card, CardHeader, ListGroup, ListGroupItem, Input, Button} from "reactstrap"
import { NavLink } from 'react-router-dom'

const ProtectedShow = ({
    MockMedicationsPass,
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
}) => {

    const myOwnMedications = MockMedicationsPass?.filter(mockMeds => mockMeds.user_id === current_user?.id)
    const todaysMedicationInfo = myOwnMedications?.map(medsName => medsName.drug_name + " " + medsName.strength).join(" ")



    return (
        <>
        <h1> Greetings {current_user?.first_name} {current_user?.last_name} !</h1>
        <h3> Here are today's Medications: {todaysMedicationInfo} </h3>

        <br></br>
        <h3>Current List of Medications:</h3>
        {myOwnMedications?.map((displayMyMeds)=>{
        return (
              <>
              <NavLink to={`/${displayMyMeds.user_id}/medications/${displayMyMeds.id}`}>
                <Card style={{width: '18rem'}}
                    >
                  <CardHeader>
                    {displayMyMeds.drug_name}
                  </CardHeader>
                    <ListGroup flush>
                    <img
                      alt="Card"
                      src={displayMyMeds.image}
                    />
                    <ListGroupItem>
                     Frequency: {displayMyMeds.frequency}
                    </ListGroupItem>
                    <ListGroupItem>
                     Strength: {displayMyMeds.strength}
                    </ListGroupItem>
                    <ListGroupItem>
                    Taken: <Input type="checkbox"/>
                    </ListGroupItem>
                    <ListGroupItem>
                     More Info 
                     <Button>
                        
                     </Button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </NavLink>
              </>
    )
})}
    </>
    )}








export default ProtectedShow