import React from "react";
import "./Table.scss";
import { Employee } from "../../store/slices/employeeSlice";

interface Props {
  data: Employee[];
  onRowSelect: (index: number) => void;
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
              onClick={() => onRowSelect(index)}
              className={employee.profileColour.toLowerCase()}
            >
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
