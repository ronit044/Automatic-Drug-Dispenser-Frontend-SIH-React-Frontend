import React, { useState } from 'react';
import styled from 'styled-components';
const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Option = styled.div`
  background-color: ${(props) => (props.selected ? '#007bff' : '#ffffff')};
  color: ${(props) => (props.selected ? '#fff' : '#333')};
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const CalculatorContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Header = styled.h1`
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const CalculateButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const IMG = styled.img`
  width:30rem
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
`;

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  return (
    <AppWrapper>
      <OptionsContainer>
        <Option
          selected={selectedOption === 'bmi'}
          onClick={() => handleOptionClick('bmi')}
        >
          BMI Calculator
        </Option>
        <Option
          selected={selectedOption === 'bloodSugar'}
          onClick={() => handleOptionClick('bloodSugar')}
        >
          Blood Sugar Level Chart
        </Option>
        {/* Add more options here */}
      </OptionsContainer>
      <br/>
      {selectedOption === 'bmi' && (
        <CalculatorContainer>
          <Header>BMI Calculator</Header>
          <InputContainer>
            <Label htmlFor="weight">Weight (kg):</Label>
            <Input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="height">Height (cm):</Label>
            <Input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </InputContainer>
          <CalculateButton onClick={calculateBMI}>Calculate BMI</CalculateButton>
          {bmi && <Result>Your BMI: {bmi}</Result>}
        </CalculatorContainer>
      )}
        <br/>
      {selectedOption === 'bloodSugar' && (
        <CalculatorContainer>
          <Header>Blood Sugar Level Chart</Header>
          <IMG className="BloodSugarChart" src='https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/02/703305-A1C-chart-diabetes-1296x1500-body.20210401192742855-1024x943.jpg?w=1155&h=2507'/>
        </CalculatorContainer>
      )}

      {/* Add more components for other options here */}
    </AppWrapper>
  );
}

export default App;
