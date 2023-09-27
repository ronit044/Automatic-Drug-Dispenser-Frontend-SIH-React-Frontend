// Sample JSON object for medicines
const medicineData = [
    "Paracetamol",
    "Ibuprofen",
    "Aspirin",
    "Antibiotics",
    "Vitamins",
];

// JavaScript for adding and removing medicines
const medicineDropdown = document.getElementById("medicine-dropdown");
const addMedicineButton = document.getElementById("add-medicine");
const medicineList = document.getElementById("medicine-list");

// Populate the dropdown with options from the JSON object
medicineData.forEach((medicine) => {
    const option = document.createElement("option");
    option.value = medicine;
    option.textContent = medicine;
    medicineDropdown.appendChild(option);
});

addMedicineButton.addEventListener("click", () => {
    const selectedMedicine = medicineDropdown.value;

    if (selectedMedicine) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${selectedMedicine} <span class="remove-medicine">❌</span>`;
        medicineList.appendChild(listItem);

        // Clear the selection
        medicineDropdown.value = "";
        
        // Add event listener to remove the medicine
        listItem.querySelector(".remove-medicine").addEventListener("click", () => {
            listItem.remove();
        });
    }
});
