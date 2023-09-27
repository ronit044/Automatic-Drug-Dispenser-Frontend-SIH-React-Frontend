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
        window.location.href="/PatientForm2";
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
