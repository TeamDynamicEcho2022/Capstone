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
      user_id: current_user?.id
    })
    const handleChange = (e) => {
      setNewMedication({...newMedication, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = () => {
      createMedication(newMedication)
    }
    return (
      <>
       <div className="Body">
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
          <FormGroup>
            <Label for="frequency"> Frequency: </Label>
            <Input
              id="exampleSelect"
              name="frequency"
              type="select"
              onChange={handleChange} 
              value={newMedication.frequency}
            >
                <option>
                </option>
                <option>
                  Every Day
                </option>
                <option>
                  Every Other Day/ Twice a Day
                </option>
                <option>
                  Every 4 Hours
                </option>
                <option>
                  Every 6 Hours/ Four Times a Day
                </option>
                <option>
                  Every 8 Hours/ Three Times a Day
                </option>
                <option>
                  Once a Week
                </option>
            </Input>
          </FormGroup>
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
        </Form>
          <NavLink to="/">
              <Button 
              color="primary" 
              onClick={handleSubmit} 
              name="submit">
                Add Medication to Profile
              </Button>
          </NavLink>
          </div>  
      </>
    )
  }
  
  
  export default MedicationNew
