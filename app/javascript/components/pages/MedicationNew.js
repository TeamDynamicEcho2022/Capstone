import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const MedicationNew = ({createMedication, current_user}) => {
    const [newMedication, setNewMedication] = useState({
      drug_name: "",
      drug_cat: "",
      description: "",
      strength: "",
      frequency: "",
      image: "",
      is_taken: false,
      user_id: current_user.id
    })
    const handleChange = (e) => {
      setNewMedication({...newMedication, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = () => {
      createMedication(newMedication)
    }
    return (
      <>
        <h1>Add a New Medication</h1>
        <Form>
          <FormGroup>
            <Label for="drug_name"> Drug Name: </Label>
              <Input 
              type="text" 
              name="drug_name" 
              placeholder="Enter Drug Name" 
              onChange={handleChange} 
              value={newMedication.drug_name}
              />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="drug_cat"> Drug Category: </Label>
              <Input
              type="text" 
              name="drug_cat" 
              placeholder="Enter Drug Category" 
              onChange={handleChange} 
              value={newMedication.drug_cat}
              />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="description"> Description: </Label>
              <Input 
              type="text" 
              name="description" 
              placeholder="Enter Description" 
              onChange={handleChange} 
              value={newMedication.description}
              />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="strength"> Strength: </Label>
              <Input 
              type="text" 
              name="strength" 
              placeholder="Enter Strength" 
              onChange={handleChange} 
              value={newMedication.strength}
              />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="frequency"> Frequency: </Label>
              <Input 
              type="text" 
              name="frequency" 
              placeholder="Enter Frequency" 
              onChange={handleChange} 
              value={newMedication.frequency}
              />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="image"> Image URL: </Label>
              <Input 
              type="text" 
              name="image" 
              placeholder="Enter Image URL" 
              onChange={handleChange} 
              value={newMedication.url}
              />
          </FormGroup>
          <br/>
        </Form>
          <NavLink to="/">
              <Button 
              color="primary" 
              onClick={handleSubmit} 
              name="submit">
                Add Medication to Profile
              </Button>
          </NavLink>
      </>
    )
  }
  
  
  export default MedicationNew
