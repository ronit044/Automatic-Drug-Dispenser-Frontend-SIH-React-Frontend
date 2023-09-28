import React, { useState } from "react";
import styled from "styled-components";
import jsPDF from "jspdf";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js"

const appSetting = {
  databaseURL:
    "https://project-557f5-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const data = ref(database, "Prescriptions");

const CenteredContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 400px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #fff;
`;

const medicineData = [
  "Paracetamol",
  "Ibuprofen",
  "Aspirin",
  "Antibiotics",
  "Vitamins",
];

function MedicationApp() {
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [prescribedMedicines, setPrescribedMedicines] = useState([]);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleAddMedicine = () => {
    if (selectedMedicine) {
      setPrescribedMedicines([...prescribedMedicines, selectedMedicine]);
      setSelectedMedicine("");
    }
  };

  const handleRemoveMedicine = (index) => {
    const updatedMedicines = [...prescribedMedicines];
    updatedMedicines.splice(index, 1);
    setPrescribedMedicines(updatedMedicines);
  };

  function generatePdf() {
    const doc = new jsPDF();

    const patientDetails = JSON.parse(localStorage.getItem("formData")) || {};
    const { mobileNumber, patientName, patientEmail } = patientDetails;

    doc.setFontSize(16);
    doc.text("Doctor Prescription", 10, 10);

    doc.setFontSize(12);
    doc.text(`Name: ${patientName}`, 10, 20);
    doc.text(`Mobile Number: ${mobileNumber}`, 10, 30);
    doc.text(`Email: ${patientEmail}`, 10, 40);

    doc.setFontSize(14);
    doc.text("Prescribed Medicines:", 10, 60);
    doc.setFontSize(12);

    prescribedMedicines.forEach((medicine, index) => {
      doc.text(`${index + 1}. ${medicine}`, 20, 70 + index * 10);
    });

    const pdfDataUri = doc.output("datauristring");
    setPdfUrl(pdfDataUri);

    const prescriptionData = {
      patientName,
      patientEmail,
      mobileNumber,
      prescribedMedicines,
    };

    push(data, prescriptionData);
  }

  return (
    <CenteredContainer>
      <Container>
        <h1>Medication Needed</h1>
        <div className="medicine-selection">
          <label htmlFor="medicine-dropdown">Select Medicine:</label>
          <Select
            id="medicine-dropdown"
            value={selectedMedicine}
            onChange={(e) => setSelectedMedicine(e.target.value)}
          >
            <option value="" disabled>
              Select Medicine
            </option>
            {medicineData.map((medicine, index) => (
              <option key={index} value={medicine}>
                {medicine}
              </option>
            ))}
          </Select>
          <Button type="button" onClick={handleAddMedicine}>
            Add Medicine
          </Button>
        </div>
        <div className="prescribed-medicine">
          <h2>Prescribed Medicine:</h2>
          <ul id="medicine-list">
            {prescribedMedicines.map((medicine, index) => (
              <li key={index}>
                {medicine}
                <Button
                  className="remove-medicine"
                  onClick={() => handleRemoveMedicine(index)}
                >
                  ❌
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Button type="button" onClick={generatePdf}>
          Generate Prescription PDF
        </Button>
        {pdfUrl && (
          <div>
            <h2>Generated PDF:</h2>
            <iframe
              src={pdfUrl}
              title="Prescription PDF"
              width="100%"
              height="500px"
            />
          </div>
        )}
      </Container>
    </CenteredContainer>
  );
}

export default MedicationApp;