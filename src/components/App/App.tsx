import React from "react";
import "./App.scss";
import Table from "../Table/Table";
import Button from "../Button/Button";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { useDispatch, useSelector } from "react-redux";
import {
  employeeFormHandler,
  selectEmployee,
} from "../../store/slices/employeeSlice";
import { RootState } from "../../store/store";

// Define the main App component
function App() {
  // Hook to dispatch Redux actions
  const dispatch = useDispatch();

  // Access employee state from the Redux store
  const { employees, openForm } = useSelector(
    (state: RootState) => state.employee
  );

  // Handle row selection in the Table component
  const onTableRowSelect = (index: number) => {
    dispatch(selectEmployee(index)); // Dispatch action to select an employee by index
  };

  // Handle Add Employee button click
  const onAddEmployee = () => {
    dispatch(employeeFormHandler(true)); // Dispatch action to open the employee form
  };

  return (
    <div className="app-container">
      {/* Title and Add Employee button */}
      <div className="title-btn-container">
        <h1 className="app-title">Current Employee</h1>
        <Button className="add-button" onClick={onAddEmployee}>
          Add Employee
        </Button>
      </div>

      {/* Employee Table */}
      <Table data={employees} onRowSelect={onTableRowSelect} />

      {/* If openForm is true open employee form */}
      {openForm && <EmployeeForm />}
    </div>
  );
}

export default App;
