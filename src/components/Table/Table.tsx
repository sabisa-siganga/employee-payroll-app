import React from "react";
import "./Table.scss";

const Table = () => {
  return (
    <div className="employee-table">
      <table className="table-auto table border-collapse border border-slate-800 px-4 py-4">
        <thead>
          <tr>
            <th className="column-title border-collapse border border-slate-800 text-left px-4">
              Employee #
            </th>
            <th className="column-title  border-collapse border border-slate-800 text-left px-4">
              First Name
            </th>
            <th className="column-title  border-collapse border border-slate-800 text-left px-4">
              Last Name
            </th>
            <th className="column-title border-collapse border border-slate-800 text-left px-4">
              Salutation{" "}
            </th>
            <th className="column-title  border-collapse border border-slate-800 text-left px-4">
              Profile Colour
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-data  border-collapse border border-slate-800 text-left px-4 py-0.5">
              1235555{" "}
            </td>
            <td className="table-data border-collapse border border-slate-800 text-left px-4 py-0.5">
              Archibald Eusebius Johnathan{" "}
            </td>
            <td className="table-data border-collapse border border-slate-800 text-left px-4 py-0.5">
              van der Merw
            </td>
            <td className="table-data border-collapse border border-slate-800 text-left px-4 py-0.5">
              Mr
            </td>
            <td className="table-data border-collapse border border-slate-800 text-left px-4 py-0.5">
              Blue
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
