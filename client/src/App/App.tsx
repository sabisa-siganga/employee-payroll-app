import React, { useEffect } from "react";
import "./App.scss";
import Table from "../components/Table/Table";
import Button from "../components/Button/Button";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
import {
  employeeFormHandler,
  resetForm,
  selectEmployee,
} from "../store/slices/employeeSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchEmployees } from "../store/actions/actions";

// Define the main App component
function App() {
  // Hook to dispatch Redux actions
  const dispatch = useAppDispatch();

  // Access employee state from the Redux store
  const { employees, openForm, loading } = useAppSelector(
    (state) => state.employee
  );

  useEffect(() => {
    dispatch(resetForm());
    dispatch(fetchEmployees());
    console.log(employees);
  }, [dispatch]);

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
      {!loading && employees.length > 0 && (
        <Table data={employees} onRowSelect={onTableRowSelect} />
      )}

      {!loading && employees.length === 0 && (
        <div className="text-center pt-8 mb-8">No employees found.</div>
      )}

      {loading && (
        <div className="text-center pt-8 mb-8">Loading employees...</div>
      )}

      {/* If openForm is true open employee form */}
      {openForm && <EmployeeForm />}
    </div>
  );
}

export default App;
