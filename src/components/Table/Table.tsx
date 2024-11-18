import React from "react";
import "./Table.scss";

export interface EmployeeData {
  employeeNumber: string;
  firstName: string;
  lastName: string;
  salutation: string;
  profileColor: string;
}

interface Props {
  data: EmployeeData[];
  onRowSelect: (data: EmployeeData) => void;
}

const Table = (props: Props) => {
  const { data, onRowSelect } = props;

  return (
    <div className="employee-table">
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
          {data.map((employee, index) => (
            <tr
              key={`employee-table-row-${index}`}
              onClick={() => onRowSelect(employee)}
              className={employee.profileColor.toLowerCase()}
            >
              <td>{employee.employeeNumber}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salutation}</td>
              <td>{employee.profileColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
