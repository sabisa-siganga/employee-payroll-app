import React from "react";
import "./App.scss";
import Table, { EmployeeData } from "../Table/Table";
import Button from "../Button/Button";
import EmployeeForm from "../EmployeeForm/EmployeeForm";

const employees = [
  {
    employeeNumber: "1235555",
    firstName: "Archibald Eusebius Johnathan",
    lastName: "van der Merw",
    salutation: "Mr",
    profileColor: "Blue",
  },
  {
    employeeNumber: "1235555",
    firstName: "Archibald Eusebius Johnathan",
    lastName: "van der Merw",
    salutation: "Mr",
    profileColor: "Red",
  },
  {
    employeeNumber: "1235555",
    firstName: "Archibald Eusebius Johnathan",
    lastName: "van der Merw",
    salutation: "Mr",
    profileColor: "Green",
  },
];

function App() {
  const onTableRowSelect = (inputData: EmployeeData) => {
    console.log(inputData);
  };

  return (
    <div className="app-container">
      <div className="title-btn-container">
        <h1 className="app-title">Current Employee</h1>
        <Button className="add-button" buttonName="Add Employee" />
      </div>
      <Table data={employees} onRowSelect={onTableRowSelect} />
      <EmployeeForm />
    </div>
  );
}

export default App;
