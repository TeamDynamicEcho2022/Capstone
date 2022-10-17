import React from 'react'
import {Card, CardBody, CardHeader, ListGroup, ListGroupItem, Input, Button, CardTitle} from "reactstrap"
import { NavLink } from 'react-router-dom'

const ProtectedShow = ({
    medications,
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
}) => {
  const filteredMedications = medications?.filter(medication => medication.user_id === current_user?.id)
  const notTakenMedications = filteredMedications?.filter(medication => medication.is_taken === false)
  const todaysMedicationInfo = notTakenMedications?.map(medsName => `${medsName.drug_name} ${medsName.strength} `)

    return (
        <div className="dashboard-background">
        <h1> Greetings {current_user?.first_name} {current_user?.last_name} !</h1>
        <h3> Here are today's Medications: </h3>
        <div className="today-container">
        {todaysMedicationInfo.map((med) => {
          return (
            <div style={{textAlign: "center", color: "#004C73"}}>
              <br/>{med}<br/>
            </div>
        )})}
        </div>

        <br></br>
        <h3>Current List of Medications:</h3>
        <div className="med-cards">
        {filteredMedications?.map((displayMyMeds, index)=>{
        return (
              <NavLink to={`/${displayMyMeds.user_id}/medications/${displayMyMeds.id}`}>
                <Card body className="single-med-card hover-med-boxes" key={index}
                    >
                  <CardHeader>
                    {displayMyMeds.drug_name}
                  </CardHeader>
                    <img
                      alt="Card"
                      src={displayMyMeds.image}
                      style={{width:'50%', margin: 'auto', borderRadius: '10px'}}
                    />
                    <CardBody>
                      <CardTitle>
                        Frequency: {displayMyMeds.frequency}
                      </CardTitle>
                      <CardTitle>
                        Strength: {displayMyMeds.strength}
                      </CardTitle>
                      <CardTitle>
                        {displayMyMeds.is_taken && <>Taken Today: Yes</>}
                        {!displayMyMeds.is_taken && <>Taken Today: No</>}
                      </CardTitle>
                    </CardBody>
                </Card>
              </NavLink>
    )
  })}
  </div>
    </div>
    )}








export default ProtectedShow