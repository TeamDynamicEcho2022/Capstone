import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const MedicationNew = ({createMedication}) => {
    const [newMedication, setNewMedication] = useState({
      drug_name: "",
      drug_cat: "",
      description: "",
      strength: "",
      frequency: "",
      image: "",
      is_taken: "false"
    })
    const handleChange = (e) => {
      setNewMedication({...newMedication, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = () => {
      createMedication(newMedication)
    }
    return (
      <>
        <h1>Add a New Medication Below</h1>
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
            <Input t
            ype="text" 
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
            ame="strength" 
            placeholder="Enter Strength" 
            onChange={handleChange} 
            value={newMedication.strength}
            />
          </FormGroup>
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
          <FormGroup>
            <Label for="image"> Upload Image url: </Label>
            <Input 
            type="text" 
            name="image" 
            placeholder="Enter Upload Image URL" 
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
            Submit New Medication Form
          </Button>
        </NavLink>
      </>
    )
  }
  
  
  export default MedicationNew
