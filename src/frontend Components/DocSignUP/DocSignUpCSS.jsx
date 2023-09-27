// SignupFormStyles.js
import styled from 'styled-components';

export const SignupFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000, #fff);  font-family: 'Arial', sans-serif;
`;

export const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent white background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 600px;
  text-align: center;
`;

export const FormTitle = styled.h2`
  font-family: 'Georgia', serif;
  margin-bottom: 20px;
  color: #333; /* Dark text color */
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const FormColumn = styled.div`
  flex-basis: calc(50% - 5px);
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 6px;
  color: #555; /* Slightly darker text color */
`;

export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SignupButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease; /* Smooth hover effect */
`;

export const FormControl = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

export const InputDescription = styled.div`
  font-size: 12px;
  color: #777; /* Lighter text color for input descriptions */
  margin-top: 4px;
`;

export const Warning = styled.p`
    margin-top: 20px;
    color:red;
`;