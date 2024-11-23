import React from "react";
import "./Table.scss";
import { Employee } from "../../interfaces/types";

// Define the props interface for the Table component
interface Props {
  data: Employee[];
  onRowSelect: (index: number) => void;
}

// Define the Table component
const Table = (props: Props) => {
  // Destructure props
  const { data, onRowSelect } = props;

  return (
    <div className="employee-table">
      {/* Table structure */}
      <table>
        <thead>
          <tr>
            <th>Employee #</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salutation</th>
            <th>Profile Colour</th>
          </tr>
        </thead>
        <tbody>
          {/* Iterate through employee data to create table rows */}
          {data.map((employee, index) => (
            <tr
              key={`employee-table-row-${index}`}
              onClick={() => onRowSelect(index)}
              className={employee.profileColour.toLowerCase()}
            >
              {/* Display employee data in respective columns */}
              <td>{employee.employeeNumber}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salutation}</td>
              <td>{employee.profileColour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
