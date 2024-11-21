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

function App() {
  const dispatch = useDispatch();
  const { employees, openForm } = useSelector(
    (state: RootState) => state.employee
  );

  const onTableRowSelect = (index: number) => {
    dispatch(selectEmployee(index));
  };

  const onAddEmployee = () => {
    dispatch(employeeFormHandler(true));
  };

  return (
    <div className="app-container">
      <div className="title-btn-container">
        <h1 className="app-title">Current Employee</h1>
        <Button className="add-button" onClick={onAddEmployee}>
          Add Employee
        </Button>
      </div>
      <Table data={employees} onRowSelect={onTableRowSelect} />
      {openForm && <EmployeeForm />}
    </div>
  );
}

export default App;
