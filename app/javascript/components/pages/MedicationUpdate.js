import React, {useState} from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import  {useParams}  from 'react-router-dom'

const MedicationUpdate = ({
    medications,
    editMedication}) => {

    const  {id} = useParams()
    let currentMedication = medications?.find((medication) => medication?.id === +id)
    console.log(currentMedication)

    const [updateMedication, setUpdateMedication] = useState({
      drug_name: currentMedication?.drug_name,
      drug_cat: currentMedication?.drug_cat,
      description: currentMedication?.description,
      strength:currentMedication?.strength,
      frequency: currentMedication?.frequency,
      image: currentMedication?.image,
      is_taken: false
    })

    const handleChange = (e) => {
      setUpdateMedication({...updateMedication, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = () => {
      editMedication(updateMedication, currentMedication.id)
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
                value={updateMedication.drug_name}
                />
          </FormGroup>
          <FormGroup>
            <Label for="drug_cat"> Drug Category: </Label>
                <Input
                type="text" 
                name="drug_cat" 
                placeholder="Enter Drug Category" 
                onChange={handleChange} 
                value={updateMedication.drug_cat}
                />
          </FormGroup>
          <FormGroup>
            <Label for="description"> Description: </Label>
                <Input 
                type="text" 
                name="description" 
                placeholder="Enter Description" 
                onChange={handleChange} 
                value={updateMedication.description}
                />
          </FormGroup>
          <FormGroup>
            <Label for="strength"> Strength: </Label>
                <Input 
                type="text" 
                name="strength" 
                placeholder="Enter Strength" 
                onChange={handleChange} 
                value={updateMedication.strength}
                />
          </FormGroup>
          <FormGroup>
            <Label for="frequency"> Frequency: </Label>
            <Input
              id="exampleSelect"
              name="frequency"
              type="select"
              onChange={handleChange} 
              value={updateMedication.frequency}
            >
                <option>
                  Daily
                </option>
                <option>
                  Every Other Day
                </option>
                <option>
                  Once a Week
                </option>
                <option>
                  Twice a Week
                </option>
                <option>
                  Once a Month
                </option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="image"> Upload Image url: </Label>
                <Input 
                type="text" 
                name="image" 
                placeholder="Enter Upload Image URL" 
                onChange={handleChange} 
                value={updateMedication.image}
                />
          </FormGroup>
        </Form>
            <NavLink to="/">
                <Button 
                color="primary" 
                onClick={handleSubmit} 
                name="submit">
                    Submit Edited Medication
                </Button>
            </NavLink>
      </>
    )
  }
  
  
  export default MedicationUpdate