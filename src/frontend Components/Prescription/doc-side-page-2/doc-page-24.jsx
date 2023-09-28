import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components (keep them the same)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top:-4rem;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
`;

const FormContainer = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width:50rem;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const InputField = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  resize: vertical;
`;

const WordCount = styled.span`
  float: right;
  color: #888;
`;

const SaveAndNextButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const DiagnosisForm = () => {
  const [description, setDescription] = useState('');
  const [diagnosed, setDiagnosed] = useState('');

  const handleDescriptionChange = (e) => {
    const descriptionValue = e.target.value;
    setDescription(descriptionValue);
  };

  const handleDiagnosedChange = (e) => {
    const diagnosedValue = e.target.value;
    setDiagnosed(diagnosedValue);
  };

  const handleSaveAndNextClick = () => {
    // You can use 'description' and 'diagnosed' state values for saving or further processing
  };

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
    localStorage.setItem("formData2", formDataJson);
  
    // Redirect to another page (e.g., "/PatientForm2")
    window.location.href = "/PatientForm3";
  }

  return (
    <Container>
      <FormContainer>
        <Title>Diagnosis</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="problem-description">Problem Description by Patient</Label>
            <InputField
              id="problem-description"
              className="input-field"
              rows="8"
              maxLength="2000"
              onChange={handleDescriptionChange}
              value={description}
            ></InputField>
            <WordCount id="problem-description-count">{description.split(/\s+/).filter(Boolean).length} words</WordCount>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="problem-diagnosed">Problem Diagnosed</Label>
            <InputField
              id="problem-diagnosed"
              className="input-field"
              rows="8"
              maxLength="2000"
              onChange={handleDiagnosedChange}
              value={diagnosed}
            ></InputField>
            <WordCount id="problem-diagnosed-count">{diagnosed.split(/\s+/).filter(Boolean).length} words</WordCount>
          </FormGroup>
          <SaveAndNextButton type="submit" id="save-and-next" >
            Save and Next
          </SaveAndNextButton>
        </form>
      </FormContainer>
    </Container>
  );
};

export default DiagnosisForm;
