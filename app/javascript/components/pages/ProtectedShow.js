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
    const TodaysMedicationInfo = myOwnMedications?.map(MedsName => MedsName.drug_name + " " + MedsName.strength).join(" ")



    return (
        <>
        <h1> Greetings {current_user?.first_name} {current_user?.last_name} !</h1>
        <h3> Here are today's Medications: {TodaysMedicationInfo} </h3>

        <br></br>
        <h3>Current List of Medications:</h3>
        {myOwnMedications?.map((DisplayMyMeds)=>{
        return (
              <>
              <NavLink to={`/${DisplayMyMeds.user_id}/medications/${DisplayMyMeds.id}`}>
                <Card style={{width: '18rem'}}
                    >
                  <CardHeader>
                    {DisplayMyMeds.drug_name}
                  </CardHeader>
                    <ListGroup flush>
                    <img
                      alt="Card"
                      src={DisplayMyMeds.image}
                    />
                    <ListGroupItem>
                     Frequency: {DisplayMyMeds.frequency}
                    </ListGroupItem>
                    <ListGroupItem>
                     Strength: {DisplayMyMeds.strength}
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