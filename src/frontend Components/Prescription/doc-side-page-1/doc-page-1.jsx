import React from 'react';
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  SubmitButton,
} from './doc-page-1CSS'; // Import styled components

const PatientForm = () => {

  function handleSubmit(event) {
    event.preventDefault();
    
    // Create an object to store the form data
    const formData = {};
  
    // Loop through the form elements and add their values to the object
    for (let i = 0; i < event.target.elements.length; i++) {
      const element = event.target.elements[i];
      if (element.type !== "submit") {
        formData[element.name] = element.value;
      }
    }
  
    // Convert the object to a JSON string
    const formDataJson = JSON.stringify(formData);
  
    // Store the JSON string in local storage
    localStorage.setItem("formData", formDataJson);
  
    // Redirect to another page (e.g., "/PatientForm2")
    window.location.href = "/PatientForm2";
  }
  return (
    <Container>
      <Title>Patients's Details</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="patientName">Patient's Name:</Label>
          <Input type="text" id="patientName" name="patientName" required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="mobileNumber">Patient's Mobile Number:</Label>
          <Input type="tel" id="mobileNumber" name="mobileNumber" required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="patientEmail">Patient's Email:</Label>
          <Input type="email" id="patientEmail" name="patientEmail" required />
        </FormGroup>

        <FormGroup>
          <SubmitButton type="submit" value="Submit and Next" />
        </FormGroup>
      </form>
    </Container>
  );
};

export default PatientForm;
