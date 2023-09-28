import React from 'react';
import styled from 'styled-components';
import "./Dash.css"
import { Link } from "react-router-dom";

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

const Tile = styled.div`
  width: calc(50% - 10px); /* Two tiles in one row with spacing */
  padding: 20px;
  background-color: #f0f0f0; /* Tile background color */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    max-width: 30%;
    height: auto;
    border-radius: 10%; 
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-right:5px;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Tile>
        <img src="https://media.discordapp.net/attachments/1123159642638393397/1156515811595407432/doctor.png?ex=651540c8&is=6513ef48&hm=a22286d1e2537d8d445fe8be1c3725aa159b8b2299f25101d05fd90df1e2b028&" alt="Doctor" />
        <h3>Doctor Name</h3>
        <p>Doctor's Speciality</p>
        <p>Doctor ID</p>
        <button><Link to="/PatientForm1">Generate Prescription</Link></button>
        <button>Update Doctor Details</button>
      </Tile>

      <Tile>
        <img src="https://www.collinsdictionary.com/images/full/patient_589302497_1000.jpg" alt="Patient"  />
       <br/>
       <br/><br/><br/><br/>
        <button>Fetch Patient History</button>
      </Tile>
    </DashboardContainer>
  );
};

export default Dashboard;
