import React from "react";
import "./App.scss";
import Table from "../Table/Table";
import Button from "../Button/Button";

function App() {
  return (
    <div className="app-container">
      <div className="title-btn-container">
        <h1 className="app-title">Current Employee</h1>
        <Button buttonName="Add Employee" />
      </div>
      <Table />
    </div>
  );
}

export default App;
